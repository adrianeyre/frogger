import { FC } from 'react';
import IGameStatusTopProps from './interfaces/game-status-top-props';

import './styles/game-status-top.scss';

const GameStatusTop: FC<IGameStatusTopProps> = (props: IGameStatusTopProps) => {
	return <div className="game-status-top">
		<div className="game-status-left">1-UP <span className="variable-text">{ props.score }</span></div>
		<div className="game-status-right">HI-SCORE <span className="variable-text">{ props.hiScore }</span></div>
	</div>
}

export default GameStatusTop;
