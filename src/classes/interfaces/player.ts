import DirectionEnum from './direction-enum';
import PlayerResultEnum from './player-result-enum';

export default interface IPlayer {
	key: string;
	visable: boolean;
	x: number;
	y: number;
	initialPlayerX: number;
	initialPlayerY: number;
	xOffset: number;
	yOffset: number;
	zIndex: number
	height: number;
	width: number;
	direction: DirectionEnum;
	score: number;
	lives: number;
	image: string;
	lowestPoint: number;
	isAlive: boolean;
	move(direction: DirectionEnum): PlayerResultEnum;
	resetPlayerToStart(): void;
	looseLife(): boolean;
}
