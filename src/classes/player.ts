import IFroggerProps from '../components/frogger/interfaces/frogger-props';

import IPlayer from './interfaces/player';
import DirectionEnum from './interfaces/direction-enum';

import playerUp from '../images/player-up.png';
import playerDown from '../images/player-down.png';
import playerLeft from '../images/player-left.png';
import playerRight from '../images/player-right.png';

export default class Player implements IPlayer {
	public key: string;
	public x: number;
	public y: number;
	public height: number;
	public width: number;
	public direction: DirectionEnum;
	public score: number;
	public lives: number;
	public image: string;
	public isAlive: boolean;

	readonly INITIAL_PLAYER_LIVES: number = 5;
	readonly INITIAL_PLAYER_X: number = 7;
	readonly INITIAL_PLAYER_Y: number = 13;
	readonly PLAYER_HEIGHT: number = 40;
	readonly PLAYER_WIDTH: number = 40;
	readonly playerImages: string[] = [
		playerUp,
		playerDown,
		playerLeft,
		playerRight,
	]

	constructor(config: IFroggerProps) {
		this.key = 'player';
		this.x = config.initialPlayerX || this.INITIAL_PLAYER_X;
		this.y = config.initialPlayerY || this.INITIAL_PLAYER_Y;
		this.height = config.playerHeight || this.PLAYER_HEIGHT;
		this.width = config.playerWidth || this.PLAYER_WIDTH;
		this.direction = DirectionEnum.UP;
		this.score = 0;
		this.lives = config.initialPlayerLives || this.INITIAL_PLAYER_LIVES;
		this.image = this.playerImages[this.direction];
		this.isAlive = true;
	}

	public move = (direction: DirectionEnum): void => {
		this.direction = direction
		this.setImage();

		switch (direction) {
			case DirectionEnum.UP: this.y--; break;
			case DirectionEnum.DOWN: this.y++; break;
			case DirectionEnum.LEFT: this.x--; break;
			case DirectionEnum.RIGHT: this.x++; break;
		}
	}

	public isValidSpace = (x: number, y: number): boolean => x >= 1 && x <= 14 && y >= 1 && y <= 13;

	private setImage = (): string => this.image = this.playerImages[this.direction];
}