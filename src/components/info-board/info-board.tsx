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

		<div className="info-board-instructions">
			<ul>
			    <li>Users must own a Smol Frogz NFT to play.</li>
				<li>You control your Smol Frogz NFT, by guiding it with the arrow keys.</li>
				<li>You must guide your Smol Frogz NFT to each of the empty slots up top in order to advance to the next stage.</li>
				<li>You start at the bottom of the screen beneath five lanes of obstacles.</li>
				<li>You must reach the sidewalk in the middle of the screen without getting hit.</li>
				<li>Don't fall in the water along the way. Ride the turtles and logs to the top.</li>
				<li>Beware of diving turtles. If your Smol Frogz NFT is on them when they dive, he loses a life.</li>
				<li>Avoid Fud & catch rpepe tokens for bonus points, and bring a lady frogz home tp score additional bonus points.</li>
				<li>Connect To Continue.</li>
			</ul>
		</div>

		<div className="button-area">
			<button type="button" onClick={ props.startGame }>Play Game</button>
		</div>
	</div>
}

export default InfoBoard;
