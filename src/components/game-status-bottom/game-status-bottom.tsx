import React from 'react';
import { range } from 'lodash';

import IGameStatusBottomProps from './interfaces/game-status-bottom-props';

import lives from '../../images/lives.png';

import './styles/game-status-bottom.scss';

export default class GameStatusBottom extends React.Component<IGameStatusBottomProps, {}> {

	public render() {
		return <div className="game-status-bottom">
			<div className="game-status-left">LIVES { range(this.props.lives).map((livesIndex: number) => <img className="player-lives" key={ `lives-image-${ livesIndex }` } src={ lives } alt="lives" />) }</div>
			<div className="game-status-right">TIMER <span className="score-text">{ this.props.timer }</span></div>
		</div>
	}
}
