import DirectionEnum from './direction-enum';

export default interface IPlayer {
	key: string;
	x: number;
	y: number;
	height: number;
	width: number;
	direction: DirectionEnum;
	score: number;
	lives: number;
	image: string;
	isAlive: boolean;
	move(direction: DirectionEnum): void;
	isValidSpace(x: number, y: number): boolean;
}
