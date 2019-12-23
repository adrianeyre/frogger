import React from 'react';
import { get } from 'lodash';

import Player from '../../classes/player';
import IFroggerProps from './interfaces/frogger-props';
import IFroggerState from './interfaces/frogger-state';
import GameStatusTop from '../game-status-top/game-status-top';
import GameStatusBottom from '../game-status-bottom/game-status-bottom';
import DrawSprite from '../draw-sprite/draw-sprite';
import DirectionEnum from '../../classes/interfaces/direction-enum';

import './styles/frogger.scss';

export default class Frogger extends React.Component<IFroggerProps, IFroggerState> {
	private container: any;

	constructor(props: IFroggerProps) {
		super(props);

		this.state = {
			playAreaWidth: 0,
			playAreaHeight: 0,
			player: new Player(this.props),
		}

		this.handleKeyDown = this.handleKeyDown.bind(this);
	}

	public async componentDidMount() {
		window.addEventListener('resize', this.updatePlayerArea);
		window.addEventListener('keydown', this.handleKeyDown);
	}

	public componentWillUnmount() {
		window.removeEventListener('resize', this.updatePlayerArea);
		window.removeEventListener('keydown', this.handleKeyDown);
	}

	public render() {
		return <div className="frogger-play-container" ref={(d) => { this.container = d }}>
			<GameStatusTop score={ this.state.player.score } hiScore={ 10000 } />

			<DrawSprite sprite={ this.state.player } image={ this.state.player.image } />

			<GameStatusBottom lives={ this.state.player.lives } time={ 99999 } />
		</div>
	}

	private updatePlayerArea = () => this.setState(() => ({ playAreaWidth: this.container && get(this, 'container.offsetWidth', 200), playAreaHeight: this.container && get(this, 'container.offsetHeight', 100), }))

	private handleKeyDown = async (event: any) => {
		let player = this.state.player;

		switch (event.code) {
			case 'ArrowUp':
				if (player.isValidSpace(player.x, player.y - 1)) player.move(DirectionEnum.UP);
				break;
			case 'ArrowDown':
				if (player.isValidSpace(player.x, player.y + 1)) player.move(DirectionEnum.DOWN);
				break;
			case 'ArrowLeft':
				if (player.isValidSpace(player.x - 1, player.y)) player.move(DirectionEnum.LEFT);
				break;
			case 'ArrowRight':
				if (player.isValidSpace(player.x + 1, player.y)) player.move(DirectionEnum.RIGHT);
				break;
			default: 
				break;
		}

		await this.setState(() => ({ player }));
	}
}
