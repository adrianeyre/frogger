import React from 'react';
import { range } from 'lodash';

import IGameStatusBottomProps from './interfaces/game-status-bottom-props';

import playerUp from '../../images/player-up.png';

import './styles/game-status-bottom.scss';

export default class GameStatusBottom extends React.Component<IGameStatusBottomProps, {}> {

	public render() {
		return <div className="game-status-bottom">
			<div className="game-status-left">{ range(this.props.lives).map((fishIndex: number) => <img className="player-lives" key={ `lives-image-${ fishIndex }` } src={ playerUp } alt="lives" />) }</div>
			<div className="game-status-right">HI-SCORE <span className="score-text">{ this.props.time }</span></div>
		</div>
	}
}
