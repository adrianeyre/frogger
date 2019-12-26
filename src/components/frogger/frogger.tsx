import React from 'react';
import { get } from 'lodash';

import Game from '../../classes/game';
import ISprite from '../../classes/interfaces/sprite';
import IFroggerProps from './interfaces/frogger-props';
import IFroggerState from './interfaces/frogger-state';
import GameStatusTop from '../game-status-top/game-status-top';
import GameStatusBottom from '../game-status-bottom/game-status-bottom';
import DrawSprite from '../draw-sprite/draw-sprite';
import InfoBoard from '../info-board/info-board';

import './styles/frogger.scss';

export default class Frogger extends React.Component<IFroggerProps, IFroggerState> {
	private DEFAULT_TIMER_INTERVAL: number = 10;
	private container: any;

	constructor(props: IFroggerProps) {
		super(props);

		this.state = {
			playAreaWidth: 0,
			playAreaHeight: 0,
			game: new Game(this.props),
		}

		this.handleKeyDown = this.handleKeyDown.bind(this);
	}

	public async componentDidMount() {
		window.addEventListener('resize', this.updatePlayerArea);
		window.addEventListener('keydown', this.handleKeyDown);
	}

	public async componentWillUnmount() {
		await this.stopTimer();
		window.removeEventListener('resize', this.updatePlayerArea);
		window.removeEventListener('keydown', this.handleKeyDown);
	}

	public render() {
		return <div className="frogger-play-container" ref={(d) => { this.container = d }}>
			<GameStatusTop score={ this.state.game.player.score } hiScore={ 10000 } />

			{ !this.state.game.isGameInPlay && <InfoBoard gameOver={ this.state.game.player.lives < 1 } startGame={ this.startGame } score={ this.state.game.player.score } /> }

			{ this.state.game.isGameInPlay && <div>
				{ this.state.game.sprites?.map((sprite: ISprite) => <DrawSprite key={ sprite.key } sprite={ sprite } />) }

				<DrawSprite sprite={ this.state.game.player } />
			</div> }

			<GameStatusBottom lives={ this.state.game.player.lives - 1 } level={ this.state.game.level } timer={ this.state.game.time } />
		</div>
	}

	private startGame = async () => {
		const game = new Game(this.props);
		game.isGameInPlay = true;
		await this.startTimer();
		await this.setState(() => ({ game }));
	}

	private updatePlayerArea = () => this.setState(() => ({ playAreaWidth: this.container && get(this, 'container.offsetWidth', 200), playAreaHeight: this.container && get(this, 'container.offsetHeight', 100), }))

	private handleKeyDown = async (event: any) => {
		if (!this.state.game.isGameInPlay) return;

		const game = this.state.game;
		game.handleInput(event.keyCode);

		if (!game.isGameInPlay) this.stopTimer();
		await this.setState(() => ({ game }));
	}

	private startTimer = async (): Promise<void> => {
		const timer = setInterval(this.myTimer, this.DEFAULT_TIMER_INTERVAL);

		await this.setState(() => ({ timer }));
	}

	private stopTimer = async (): Promise<void> => {
		clearInterval(this.state.timer);

		await this.setState(() => ({ timer: undefined }));
	}

	private myTimer = () => {
		const game = this.state.game
		game.handleTimer();

		this.setState(prev => ({ game }));
	}
}
