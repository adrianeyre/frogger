import React from 'react';
import IGameStatusTopProps from './interfaces/game-status-top-props';

import './styles/game-status-top.scss';

export default class GameStatusTop extends React.Component<IGameStatusTopProps, {}> {

	public render() {
		return <div className="game-status-top">
			<div className="game-status-left">1-UP <span className="variable-text">{ this.props.score }</span></div>
			<div className="game-status-right">HI-SCORE <span className="variable-text">{ this.props.hiScore }</span></div>
		</div>
	}
}
