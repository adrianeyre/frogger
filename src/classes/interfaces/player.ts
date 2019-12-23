export default interface IPlayer {
	key: string;
	x: number;
	y: number;
	height: number;
	width: number;
	direction: number;
	score: number;
	lives: number;
	image: string;
	isAlive: boolean;
	moveUp(): number;
	moveDown(): number;
	moveLeft(): number;
	moveRight(): number;
	isValidSpace(x: number, y: number): boolean;
}
