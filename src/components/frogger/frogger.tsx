import React from 'react';
import { get } from 'lodash';

import Player from '../../classes/player';
import IFroggerProps from './interfaces/frogger-props';
import IFroggerState from './interfaces/frogger-state';
import GameStatusTop from '../game-status-top/game-status-top';
import GameStatusBottom from '../game-status-bottom/game-status-bottom';
import DrawSprite from '../draw-sprite/draw-sprite';
import InfoBoard from '../info-board/info-board';
import DirectionEnum from '../../classes/interfaces/direction-enum';

import './styles/frogger.scss';

export default class Frogger extends React.Component<IFroggerProps, IFroggerState> {
	private DEFAULT_TIME: number = this.props.initialTime || 99999;
	private DEFAULT_TIMER_INTERVAL: number = 1000;
	private container: any;

	constructor(props: IFroggerProps) {
		super(props);

		this.state = {
			playAreaWidth: 0,
			playAreaHeight: 0,
			player: new Player(this.props),
			isGameInPlay: false,
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

			{ this.state.isGameInPlay && <DrawSprite sprite={ this.state.player } image={ this.state.player.image } /> }

			<GameStatusBottom lives={ this.state.player.lives } timer={ this.state.time } />
		</div>
	}

	private startGame = async () => {
		await this.resetTimer();
		await this.startTimer();
		await this.setState(() => ({ isGameInPlay: true }));
	}

	private updatePlayerArea = () => this.setState(() => ({ playAreaWidth: this.container && get(this, 'container.offsetWidth', 200), playAreaHeight: this.container && get(this, 'container.offsetHeight', 100), }))

	private handleKeyDown = async (event: any) => {
		let player = this.state.player;

		switch (event.code) {
			case 'ArrowUp':
				if (this.state.isGameInPlay && player.isValidSpace(player.x, player.y - 1)) player.move(DirectionEnum.UP);
				break;
			case 'ArrowDown':
				if (this.state.isGameInPlay && player.isValidSpace(player.x, player.y + 1)) player.move(DirectionEnum.DOWN);
				break;
			case 'ArrowLeft':
				if (this.state.isGameInPlay && player.isValidSpace(player.x - 1, player.y)) player.move(DirectionEnum.LEFT);
				break;
			case 'ArrowRight':
				if (this.state.isGameInPlay && player.isValidSpace(player.x + 1, player.y)) player.move(DirectionEnum.RIGHT);
				break;
			default: 
				break;
		}

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

	private myTimer = () => this.setState(prev => ({ time: prev.time - 1 }));
}
