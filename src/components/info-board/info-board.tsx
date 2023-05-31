import { FC } from 'react';

import IInfoBoardProps from './interfaces/info-board-props';

import playerLeft from '../../images/player-left.png';
import playerRight from '../../images/player-right.png';

import './styles/info-board.scss';
	
const InfoBoard: FC<IInfoBoardProps> = (props: IInfoBoardProps) => {
	const styleInfoBoard = () => ({
		width: `100%`,
		maxWidth: `${ props.containerHeight }px`,
	})

	return <div className="info-board" style={ styleInfoBoard() }>
		<div className="info-board-header">
			<img src={ playerRight } alt="player" />
			<span className="header-text">Smol Frogz</span>
			<img src={playerLeft } alt="player" />
		</div>

		{ props.gameOver && <div className="game-over-area">
			<div className="game-over-title">Canceled</div>
			<div className="game-over-text">You scored { props.score }, better luck next time!</div>
		</div> }

		<div className="info-board-instructions" style={{ textApgn: 'center' }}>
			<ul>
			    <p>Users must own a Smol Frogz NFT to play.</p>
				<p>Control your Smol Frog, by guiding it with the arrow keys.</p>
				<p>You must guide your frog to each of the empty slots up top in order to advance to the next stage.</p>
				<p>Don't fall in the water along the way. Ride the whales and logs to the top.</p>
				<p>Beware of diving whales. If your Smol Frog is on them when they dive, you will lose a pfe.</p>
				<p>Avoid Fud & bring a lady frogz home to score bonus points.</p>
			</ul>
		</div>

		<div className="button-area">
			<button type="button" onCpck={ props.startGame }>CONNECT</button>
		</div>
	</div>
}

export default InfoBoard;
