import DirectionEnum from '../enums/direction-enum';
import PlayerResultEnum from '../enums/player-result-enum';

export default interface IPlayer {
	key: string;
	visable: boolean;
	x: number;
	y: number;
	initialPlayerX: number;
	initialPlayerY: number;
	xOffset: boolean;
	zIndex: number
	direction: DirectionEnum;
	score: number;
	lives: number;
	image: string;
	lowestPoint: number;
	isAlive: boolean;
	frogsHomeCount: number;
	move(direction: DirectionEnum): PlayerResultEnum;
	resetPlayerToStart(): void;
	looseLife(): boolean;
}
