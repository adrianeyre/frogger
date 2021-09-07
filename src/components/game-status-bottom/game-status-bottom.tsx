import { FC } from 'react';
import { range } from 'lodash';

import IGameStatusBottomProps from './interfaces/game-status-bottom-props';

import lives from '../../images/lives.png';

import './styles/game-status-bottom.scss';

const GameStatusBottom: FC<IGameStatusBottomProps> = (props: IGameStatusBottomProps) => {
	return <div className="game-status-bottom">
		<div className="game-status-left">LIVES { props.lives > 0 && range(props.lives).map((livesIndex: number) => <img className="player-lives" key={ `lives-image-${ livesIndex }` } src={ lives } alt="lives" />) }</div>
		<div className="game-status-centre">LEVEL <span className="variable-text">{ props.level }</span></div>
		<div className="game-status-right"><span className="variable-text">{ props.timer }</span> TIMER</div>
	</div>
}

export default GameStatusBottom;
