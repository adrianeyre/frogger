import IFroggerProps from '../components/frogger/interfaces/frogger-props';

import IPlayer from './interfaces/player';

import playerUp from '../images/player-up.png';

export default class Player implements IPlayer {
	public key: string;
	public x: number;
	public y: number;
	public height: number;
	public width: number;
	public direction: number;
	public score: number;
	public lives: number;
	public image: string;
	public isAlive: boolean;

	readonly INITIAL_PLAYER_LIVES: number = 5;
	readonly INITIAL_PLAYER_X: number = 7;
	readonly INITIAL_PLAYER_Y: number = 13;
	readonly PLAYER_HEIGHT: number = 40;
	readonly PLAYER_WIDTH: number = 40;

	constructor(config: IFroggerProps) {
		this.key = 'player';
		this.x = config.initialPlayerX || this.INITIAL_PLAYER_X;
		this.y = config.initialPlayerY || this.INITIAL_PLAYER_Y;
		this.height = config.playerHeight || this.PLAYER_HEIGHT;
		this.width = config.playerWidth || this.PLAYER_WIDTH;
		this.direction = 0;
		this.score = 0;
		this.lives = config.initialPlayerLives || this.INITIAL_PLAYER_LIVES;
		this.image = playerUp;
		this.isAlive = true;
	}

	public moveUp = (): number => this.y --;
	public moveDown = (): number => this.y ++;
	public moveLeft = (): number => this.x --;
	public moveRight = (): number => this.x ++;
	public isValidSpace = (x: number, y: number): boolean => x >= 1 && x <= 14 && y >= 1 && y <= 13;
}