import React from 'react';
import Game from '../../classes/game';
import ISprite from '../../classes/interfaces/sprite';
import IFroggerProps from './interfaces/frogger-props';
import IFroggerState from './interfaces/frogger-state';
import GameStatusTop from '../game-status-top/game-status-top';
import GameStatusBottom from '../game-status-bottom/game-status-bottom';
import DrawSprite from '../draw-sprite/draw-sprite';
import InfoBoard from '../info-board/info-board';
import MobileButtons from '../mobile-buttons/mobile-buttons';

import './styles/frogger.scss';
import PlayerResultEnum from 'classes/enums/player-result-enum';

export default class Frogger extends React.Component<IFroggerProps, IFroggerState> {
	private DEFAULT_TIMER_INTERVAL: number = 10;
	private container: any;

	constructor(props: IFroggerProps) {
		super(props);

		this.state = {
			spriteWidth: 0,
			spriteHeight: 0,
			containerWidth: 800,
			containerHeight: 800,
			game: new Game(this.props),
		}

		this.handleKeyDown = this.handleKeyDown.bind(this);
		this.styleContainer = this.styleContainer.bind(this);
	}

	public async componentDidMount() {
		this.updatePlayerArea();
		window.addEventListener('resize', this.updatePlayerArea);
		window.addEventListener('keydown', this.handleKeyDown);
	}

	public async componentWillUnmount() {
		await this.stopTimer();
		window.removeEventListener('resize', this.updatePlayerArea);
		window.removeEventListener('keydown', this.handleKeyDown);
	}

	public render() {
		return <div className="frogger-play-container" ref={(d) => { this.container = d }} style={ this.styleContainer() }>
			<div style={ this.styleStatusTop() }><GameStatusTop score={ this.state.game.player.score } hiScore={ 10000 } /></div>

			{ !this.state.game.isGameInPlay && <InfoBoard gameOver={ this.state.game.player.lives < 1 } startGame={ this.startGame } score={ this.state.game.player.score } containerHeight={ this.state.containerHeight } /> }

			{ this.state.game.isGameInPlay && <div className="play-area">
				{ this.state.game.sprites?.map((sprite: ISprite) => <DrawSprite key={ sprite.key } sprite={ sprite } height={ this.state.spriteHeight } width={ this.state.spriteWidth } containerWidth={ this.state.containerWidth } />) }

				<DrawSprite sprite={ this.state.game.player } height={ this.state.spriteHeight } width={ this.state.spriteWidth } containerWidth={ this.state.containerWidth } />
			</div> }

			<div style={ this.styleStatusBottom() }><GameStatusBottom lives={ this.state.game.player.lives - 1 } level={ this.state.game.level } timer={ this.state.game.time } /></div>

			{ this.state.game.isGameInPlay && this.state.containerWidth < 600 && <div style={ this.styleGameButtons() }><MobileButtons handleMobileButton={ this.handleMobileButton }/></div> }
		</div>
	}

	private styleContainer = () => ({
		maxWidth: `${ this.state.containerHeight }px`,
	})

	private styleStatusTop = () => ({
		position: 'absolute' as 'absolute',
		width: `100%`,
		maxWidth: `${ this.state.containerHeight }px`,
	})

	private styleStatusBottom = () => ({
		position: 'absolute' as 'absolute',
		width: `100%`,
		maxWidth: `${ this.state.containerHeight }px`,
		top: `${ this.state.containerWidth / 100 * 94.375 }px`,
	})

	private styleGameButtons = () => ({
		position: 'absolute' as 'absolute',
		width: `100%`,
		maxWidth: `${ this.state.containerHeight }px`,
		top: `${ this.state.containerWidth / 100 * 100 }px`,
	})

	private startGame = async (): Promise<void> => {
		const game = new Game(this.props);
		game.isGameInPlay = true;
		await this.startTimer();
		await this.setState(() => ({ game }));
		this.updatePlayerArea();
	}

	private updatePlayerArea = (): void => {
		const containerHeight = this.container && this.container.getBoundingClientRect().height;
		let containerWidth = this.container && this.container.getBoundingClientRect().width;
		if (containerWidth > containerHeight) containerWidth = containerHeight;
		const spriteWidth = containerWidth / 14;
		const spriteHeight = ((containerWidth / 100) * 85 ) / 13;
		this.setState(() => ({ spriteWidth, spriteHeight, containerWidth, containerHeight }))
	}

	private handleInput = async (input: PlayerResultEnum): Promise<void> => {
		const game = this.state.game;
		game.handleInput(input);

		if (!game.isGameInPlay) this.stopTimer();
		await this.setState(() => ({ game }));
	}

	private handleKeyDown = async (event: any): Promise<void> => {
		if (!this.state.game.isGameInPlay) return;

		await this.handleInput(event.keyCode);
	}

	private handleMobileButton = async (direction: PlayerResultEnum): Promise<void> => await this.handleInput(direction);

	private startTimer = async (): Promise<void> => {
		const timer = setInterval(this.myTimer, this.DEFAULT_TIMER_INTERVAL);

		await this.setState(() => ({ timer }));
	}

	private stopTimer = async (): Promise<void> => {
		clearInterval(this.state.timer);

		await this.setState(() => ({ timer: undefined }));
	}

	private myTimer = (): void => {
		const game = this.state.game
		game.handleTimer();

		this.setState(prev => ({ game }));
	}
}
