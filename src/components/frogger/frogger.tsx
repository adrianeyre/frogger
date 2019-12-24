import React from 'react';
import { get } from 'lodash';

import Player from '../../classes/player';
import Sprite from '../../classes/sprite';
import ISprite from '../../classes/interfaces/sprite';
import IFroggerProps from './interfaces/frogger-props';
import IFroggerState from './interfaces/frogger-state';
import GameStatusTop from '../game-status-top/game-status-top';
import GameStatusBottom from '../game-status-bottom/game-status-bottom';
import DrawSprite from '../draw-sprite/draw-sprite';
import InfoBoard from '../info-board/info-board';
import DirectionEnum from '../../classes/interfaces/direction-enum';
import ImageEnum from '../../classes/interfaces/image-enum';
import PlayerResultEnum from '../../classes/interfaces/player-result-enum';

import './styles/frogger.scss';

export default class Frogger extends React.Component<IFroggerProps, IFroggerState> {
	private DEFAULT_TIME: number = this.props.initialTime || 99999;
	private DEFAULT_TIMER_INTERVAL: number = 10;
	private container: any;
	private iteration: number = 1;

	constructor(props: IFroggerProps) {
		super(props);

		this.state = {
			playAreaWidth: 0,
			playAreaHeight: 0,
			player: new Player(this.props),
			isGameInPlay: false,
			isAlive: true,
			time: 0,
		}

		this.handleKeyDown = this.handleKeyDown.bind(this);
	}

	public async componentDidMount() {
		window.addEventListener('resize', this.updatePlayerArea);
		window.addEventListener('keydown', this.handleKeyDown);
		await this.resetTimer();
	}

	public async componentWillUnmount() {
		await this.stopTimer();
		window.removeEventListener('resize', this.updatePlayerArea);
		window.removeEventListener('keydown', this.handleKeyDown);
	}

	public render() {
		return <div className="frogger-play-container" ref={(d) => { this.container = d }}>
			<GameStatusTop score={ this.state.player.score } hiScore={ 10000 } />

			{ !this.state.isGameInPlay && <InfoBoard gameOver={ this.state.player.lives < 1 } startGame={ this.startGame } score={ this.state.player.score } /> }

			{ this.state.isGameInPlay && <div>
				{ this.state.sprites?.map((sprite: ISprite) => <DrawSprite key={ sprite.key } sprite={ sprite } />) }

				<DrawSprite sprite={ this.state.player } />
			</div> }

			<GameStatusBottom lives={ this.state.player.lives } timer={ this.state.time } />
		</div>
	}

	private startGame = async () => {
		await this.setupPlayer();
		await this.setupSprites();
		await this.resetTimer();
		await this.startTimer();
		await this.setState(() => ({ isGameInPlay: true }));
	}

	private updatePlayerArea = () => this.setState(() => ({ playAreaWidth: this.container && get(this, 'container.offsetWidth', 200), playAreaHeight: this.container && get(this, 'container.offsetHeight', 100), }))

	private handleKeyDown = async (event: any) => {
		if (!this.state.isGameInPlay) return;
		let player = this.state.player;
		let direction = null

		switch (event.code) {
			case 'ArrowUp':
				direction = DirectionEnum.UP; break;
			case 'ArrowDown':
				direction = DirectionEnum.DOWN; break;
			case 'ArrowLeft':
				direction = DirectionEnum.LEFT; break;
			case 'ArrowRight':
				direction = DirectionEnum.RIGHT; break;
		}

		if (direction !== null) {
			const moveResult = player.move(direction);

			switch (true) {
				case (moveResult === PlayerResultEnum.DEAD):
					this.looseLife(); break;
				case (moveResult >= PlayerResultEnum.HOME1 && moveResult <= PlayerResultEnum.HOME5):
					this.playerHome(moveResult); break;
			}
		}

		await this.setState(() => ({ player }));
	}

	private playerHome = async (homePosition: number) => {
		const sprites = this.state.sprites;
		const homeSprite = sprites?.find((sprite: ISprite) => sprite.key === `player-home-${ homePosition }`);

		if (homeSprite && !homeSprite.visable) {
			homeSprite.visable = true;
			await this.setState(() => ({ sprites }));

			return this.state.player.resetPlayerToStart();
		}

		if (homeSprite && homeSprite.visable) {
			this.looseLife();
		}
	}

	private looseLife = async () => {
		const player = this.state.player;

		const isAlive = player.looseLife();
		player.resetPlayerToStart();

		if (!isAlive) {
			this.stopTimer();
			this.resetTimer();
		}
	
		await this.setState(() => ({ player, isAlive, isGameInPlay: isAlive }));
	}

	private setupPlayer = async (): Promise<void> => {
		const player = new Player(this.props);

		await this.setState(() => ({ player }));
	}

	private resetTimer = async (): Promise<void> => this.setState(() => ({ time: this.DEFAULT_TIME }));

	private startTimer = async (): Promise<void> => {
		const timer = setInterval(this.myTimer, this.DEFAULT_TIMER_INTERVAL);

		await this.setState(() => ({ timer }));
	}

	private stopTimer = async (): Promise<void> => {
		clearInterval(this.state.timer);

		await this.setState(() => ({ timer: undefined }));
	}

	private myTimer = () => {
		this.setState(prev => ({ time: prev.time - 1 }))
		this.iteration ++;

		if (this.iteration > 80) this.iteration = 1;

		this.state.sprites?.filter((sprite: ISprite) => sprite.speed && this.iteration % sprite.speed === 0).map((sprite: ISprite) => sprite.move());
	}

	private setupSprites = async () => {
		const sprites = [
			new Sprite({ key: 'car1-1', visable: true, x: 1, y: 12, direction: DirectionEnum.LEFT, image: ImageEnum.CAR1, speed: 50 }),
			new Sprite({ key: 'car1-2', visable: true, x: 6, y: 12, direction: DirectionEnum.LEFT, image: ImageEnum.CAR1, speed: 50 }),
			new Sprite({ key: 'car1-3', visable: true, x: 10, y: 12, direction: DirectionEnum.LEFT, image: ImageEnum.CAR1, speed: 50 }),

			new Sprite({ key: 'car2-1', visable: true, x: 2, y: 11, direction: DirectionEnum.RIGHT, image: ImageEnum.CAR2, speed: 40 }),
			new Sprite({ key: 'car2-2', visable: true, x: 7, y: 11, direction: DirectionEnum.RIGHT, image: ImageEnum.CAR2, speed: 40 }),
			new Sprite({ key: 'car2-3', visable: true, x: 13, y: 11, direction: DirectionEnum.RIGHT, image: ImageEnum.CAR2, speed: 40 }),

			new Sprite({ key: 'car3-1', visable: true, x: 3, y: 10, direction: DirectionEnum.LEFT, image: ImageEnum.CAR3, speed: 30 }),
			new Sprite({ key: 'car3-2', visable: true, x: 8, y: 10, direction: DirectionEnum.LEFT, image: ImageEnum.CAR3, speed: 30 }),
			new Sprite({ key: 'car3-3', visable: true, x: 14, y: 10, direction: DirectionEnum.LEFT, image: ImageEnum.CAR3, speed: 30 }),

			new Sprite({ key: 'car4', visable: true, x: 10, y: 9, direction: DirectionEnum.RIGHT, image: ImageEnum.CAR4, speed: 20 }),

			new Sprite({ key: 'lorry-front-1', visable: true, x: 8, y: 8, direction: DirectionEnum.LEFT, image: ImageEnum.LORRY_FRONT, speed: 45 }),
			new Sprite({ key: 'lorry-back-1', visable: true, x: 9, y: 8, direction: DirectionEnum.LEFT, image: ImageEnum.LORRY_BACK, speed: 45 }),
			new Sprite({ key: 'lorry-front-2', visable: true, x: 13, y: 8, direction: DirectionEnum.LEFT, image: ImageEnum.LORRY_FRONT, speed: 45 }),
			new Sprite({ key: 'lorry-back-2', visable: true, x: 14, y: 8, direction: DirectionEnum.LEFT, image: ImageEnum.LORRY_BACK, speed: 45 }),

			new Sprite({ key: 'turtle1-1', visable: true, x: 1, y: 6, direction: DirectionEnum.LEFT, image: ImageEnum.TURTLE1, speed: 20 }),
			new Sprite({ key: 'turtle1-2', visable: true, x: 2, y: 6, direction: DirectionEnum.LEFT, image: ImageEnum.TURTLE1, speed: 20 }),

			new Sprite({ key: 'turtle1-3', visable: true, x: 5, y: 6, direction: DirectionEnum.LEFT, image: ImageEnum.TURTLE1, speed: 20 }),
			new Sprite({ key: 'turtle1-4', visable: true, x: 6, y: 6, direction: DirectionEnum.LEFT, image: ImageEnum.TURTLE1, speed: 20 }),
			new Sprite({ key: 'turtle1-5', visable: true, x: 7, y: 6, direction: DirectionEnum.LEFT, image: ImageEnum.TURTLE1, speed: 20 }),

			new Sprite({ key: 'turtle1-6', visable: true, x: 10, y: 6, direction: DirectionEnum.LEFT, image: ImageEnum.TURTLE1, speed: 20 }),
			new Sprite({ key: 'turtle1-7', visable: true, x: 11, y: 6, direction: DirectionEnum.LEFT, image: ImageEnum.TURTLE1, speed: 20 }),
			new Sprite({ key: 'turtle1-8', visable: true, x: 12, y: 6, direction: DirectionEnum.LEFT, image: ImageEnum.TURTLE1, speed: 20 }),

			new Sprite({ key: 'log1-1', visable: true, x: 2, y: 5, direction: DirectionEnum.RIGHT, image: ImageEnum.LOG_LEFT, speed: 80 }),
			new Sprite({ key: 'log1-2', visable: true, x: 3, y: 5, direction: DirectionEnum.RIGHT, image: ImageEnum.LOG_CENTRE, speed: 80 }),
			new Sprite({ key: 'log1-3', visable: true, x: 4, y: 5, direction: DirectionEnum.RIGHT, image: ImageEnum.LOG_RIGHT, speed: 80 }),

			new Sprite({ key: 'log1-4', visable: true, x: 8, y: 5, direction: DirectionEnum.RIGHT, image: ImageEnum.LOG_LEFT, speed: 80 }),
			new Sprite({ key: 'log1-5', visable: true, x: 9, y: 5, direction: DirectionEnum.RIGHT, image: ImageEnum.LOG_CENTRE, speed: 80 }),
			new Sprite({ key: 'log1-6', visable: true, x: 10, y: 5, direction: DirectionEnum.RIGHT, image: ImageEnum.LOG_RIGHT, speed: 80 }),

			new Sprite({ key: 'log1-7', visable: true, x: 13, y: 5, direction: DirectionEnum.RIGHT, image: ImageEnum.LOG_LEFT, speed: 80 }),
			new Sprite({ key: 'log1-8', visable: true, x: 14, y: 5, direction: DirectionEnum.RIGHT, image: ImageEnum.LOG_RIGHT, speed: 80 }),

			new Sprite({ key: 'log2-1', visable: true, x: 3, y: 4, direction: DirectionEnum.RIGHT, image: ImageEnum.LOG_LEFT, speed: 30 }),
			new Sprite({ key: 'log2-2', visable: true, x: 4, y: 4, direction: DirectionEnum.RIGHT, image: ImageEnum.LOG_CENTRE, speed: 30 }),
			new Sprite({ key: 'log2-3', visable: true, x: 5, y: 4, direction: DirectionEnum.RIGHT, image: ImageEnum.LOG_CENTRE, speed: 30 }),
			new Sprite({ key: 'log2-4', visable: true, x: 6, y: 4, direction: DirectionEnum.RIGHT, image: ImageEnum.LOG_CENTRE, speed: 30 }),
			new Sprite({ key: 'log2-5', visable: true, x: 7, y: 4, direction: DirectionEnum.RIGHT, image: ImageEnum.LOG_CENTRE, speed: 30 }),
			new Sprite({ key: 'log2-6', visable: true, x: 8, y: 4, direction: DirectionEnum.RIGHT, image: ImageEnum.LOG_RIGHT, speed: 30 }),

			new Sprite({ key: 'log2-7', visable: true, x: 11, y: 4, direction: DirectionEnum.RIGHT, image: ImageEnum.LOG_LEFT, speed: 30 }),
			new Sprite({ key: 'log2-8', visable: true, x: 12, y: 4, direction: DirectionEnum.RIGHT, image: ImageEnum.LOG_CENTRE, speed: 30 }),
			new Sprite({ key: 'log2-9', visable: true, x: 13, y: 4, direction: DirectionEnum.RIGHT, image: ImageEnum.LOG_CENTRE, speed: 30 }),
			new Sprite({ key: 'log2-10', visable: true, x: 14, y: 4, direction: DirectionEnum.RIGHT, image: ImageEnum.LOG_CENTRE, speed: 30 }),
			new Sprite({ key: 'log2-11', visable: true, x: 1, y: 4, direction: DirectionEnum.RIGHT, image: ImageEnum.LOG_RIGHT, speed: 30 }),

			new Sprite({ key: 'turtle2-1', visable: true, x: 3, y: 3, direction: DirectionEnum.LEFT, image: ImageEnum.TURTLE1, speed: 30 }),
			new Sprite({ key: 'turtle2-2', visable: true, x: 4, y: 3, direction: DirectionEnum.LEFT, image: ImageEnum.TURTLE1, speed: 30 }),

			new Sprite({ key: 'turtle2-3', visable: true, x: 7, y: 3, direction: DirectionEnum.LEFT, image: ImageEnum.TURTLE1, speed: 30 }),
			new Sprite({ key: 'turtle2-4', visable: true, x: 8, y: 3, direction: DirectionEnum.LEFT, image: ImageEnum.TURTLE1, speed: 30 }),

			new Sprite({ key: 'turtle2-5', visable: true, x: 11, y: 3, direction: DirectionEnum.LEFT, image: ImageEnum.TURTLE1, speed: 30 }),
			new Sprite({ key: 'turtle2-6', visable: true, x: 12, y: 3, direction: DirectionEnum.LEFT, image: ImageEnum.TURTLE1, speed: 30 }),

			new Sprite({ key: 'log3-1', visable: true, x: 2, y: 2, direction: DirectionEnum.RIGHT, image: ImageEnum.LOG_LEFT, speed: 30 }),
			new Sprite({ key: 'log3-2', visable: true, x: 3, y: 2, direction: DirectionEnum.RIGHT, image: ImageEnum.LOG_CENTRE, speed: 30 }),
			new Sprite({ key: 'log3-3', visable: true, x: 4, y: 2, direction: DirectionEnum.RIGHT, image: ImageEnum.LOG_CENTRE, speed: 30 }),
			new Sprite({ key: 'log3-4', visable: true, x: 5, y: 2, direction: DirectionEnum.RIGHT, image: ImageEnum.LOG_RIGHT, speed: 30 }),

			new Sprite({ key: 'log3-5', visable: true, x: 8, y: 2, direction: DirectionEnum.RIGHT, image: ImageEnum.LOG_LEFT, speed: 30 }),
			new Sprite({ key: 'log3-6', visable: true, x: 9, y: 2, direction: DirectionEnum.RIGHT, image: ImageEnum.LOG_CENTRE, speed: 30 }),
			new Sprite({ key: 'log3-7', visable: true, x: 10, y: 2, direction: DirectionEnum.RIGHT, image: ImageEnum.LOG_CENTRE, speed: 30 }),
			new Sprite({ key: 'log3-8', visable: true, x: 11, y: 2, direction: DirectionEnum.RIGHT, image: ImageEnum.LOG_RIGHT, speed: 30 }),

			new Sprite({ key: 'log3-9', visable: true, x: 13, y: 2, direction: DirectionEnum.RIGHT, image: ImageEnum.LOG_LEFT, speed: 30 }),
			new Sprite({ key: 'log3-10', visable: true, x: 14, y: 2, direction: DirectionEnum.RIGHT, image: ImageEnum.LOG_RIGHT, speed: 30 }),

			new Sprite({ key: 'player-home-5', visable: false, x: 2, y: 1, image: ImageEnum.PLAYER_HOME, xOffset: -30 }),
			new Sprite({ key: 'player-home-6', visable: false, x: 5, y: 1, image: ImageEnum.PLAYER_HOME, xOffset: -30 }),
			new Sprite({ key: 'player-home-7', visable: false, x: 8, y: 1, image: ImageEnum.PLAYER_HOME, xOffset: -30 }),
			new Sprite({ key: 'player-home-8', visable: false, x: 11, y: 1, image: ImageEnum.PLAYER_HOME, xOffset: -30 }),
			new Sprite({ key: 'player-home-9', visable: false, x: 14, y: 1, image: ImageEnum.PLAYER_HOME, xOffset: -30 }),
		]

		await this.setState(() => ({ sprites }));
	}
}
