import IFroggerProps from '../components/frogger/interfaces/frogger-props';

import IPlayer from './interfaces/player';
import DirectionEnum from './enums/direction-enum';
import PlayerResultEnum from './enums/player-result-enum';

import playerUp from '../images/player-up.png';
import playerDown from '../images/player-down.png';
import playerLeft from '../images/player-left.png';
import playerRight from '../images/player-right.png';

export default class Player implements IPlayer {
	public key: string;
	public visable: boolean;
	public x: number;
	public y: number;
	public initialPlayerX: number;
	public initialPlayerY: number;
	public xOffset: boolean;
	public zIndex: number
	public direction: DirectionEnum;
	public score: number;
	public lives: number;
	public image: string;
	public lowestPoint: number;
	public isAlive: boolean;
	public frogsHomeCount: number;

	readonly INITIAL_PLAYER_LIVES: number = 5;
	readonly INITIAL_PLAYER_X: number = 7;
	readonly INITIAL_PLAYER_Y: number = 13;
	readonly X_OFFSET: boolean = false;
	readonly PLAYER_ZINDEX: number = 6000;
	readonly SCORE_MOVING_UP: number = 10;
	readonly SCORE_GETTING_HOME: number = 50;
	readonly SCORE_LEVEL_COMPLETE: number = 1000;
	readonly playerImages: string[] = [
		playerUp,
		playerDown,
		playerLeft,
		playerRight,
	]

	constructor(config: IFroggerProps) {
		this.key = 'player';
		this.visable = true;
		this.initialPlayerX = config.initialPlayerX || this.INITIAL_PLAYER_X;
		this.initialPlayerY = config.initialPlayerY || this.INITIAL_PLAYER_Y;
		this.x = this.initialPlayerX;
		this.y = this.initialPlayerY;
		this.lowestPoint = 13;
		this.xOffset = this.X_OFFSET;
		this.zIndex = this.PLAYER_ZINDEX;
		this.direction = DirectionEnum.UP;
		this.score = 0;
		this.lives = config.initialPlayerLives || this.INITIAL_PLAYER_LIVES;
		this.image = this.playerImages[this.direction];
		this.isAlive = true;
		this.frogsHomeCount = 0;
	}

	public move = (direction: DirectionEnum): PlayerResultEnum => {
		let result = PlayerResultEnum.SAFE;
		this.direction = direction
		this.setImage();

		let x = this.x;
		let y = this.y;

		switch (direction) {
			case DirectionEnum.UP: y--; break;
			case DirectionEnum.DOWN: y++; break;
			case DirectionEnum.LEFT: x--; break;
			case DirectionEnum.RIGHT: x++; break;
		}

		if (!this.isValidSpace(x, y)) return PlayerResultEnum.NO_MOVE;
		const isHome = this.isHome(x, y);

		if (isHome) {
			this.score += this.SCORE_GETTING_HOME;
			this.frogsHomeCount ++;

			if (this.frogsHomeCount < 5) return isHome;

			this.score += this.SCORE_LEVEL_COMPLETE;
			return PlayerResultEnum.LEVEL_COMPLETE
		}

		if (this.isInWater(x, y)) result = PlayerResultEnum.OVER_WATER;

		this.x = x;
		this.y = y;

		if (this.y < this.lowestPoint) {
			this.lowestPoint = this.y;
			this.score += this.SCORE_MOVING_UP;
		}

		return result
	}

	public resetPlayerToStart = () => {
		this.x = this.initialPlayerX;
		this.y = this.initialPlayerY;
		this.lowestPoint = 13;
	}

	public looseLife = (): boolean => {
		this.lives --;

		return this.lives > 0;
	}

	private isInWater = (x: number, y: number): boolean => y > 1 && y < 7;

	private isValidSpace = (x: number, y: number): boolean => x >= 1 && x <= 14 && y >= 1 && y <= 13;

	private isHome = (x: number, y: number): number => {
		if (y !== 1) return 0;
		if (x === 1 || x === 2) return 5;
		if (x === 4 || x === 5) return 6;
		if (x === 7 || x === 8) return 7;
		if (x === 10 || x === 11) return 8;
		if (x === 13 || x === 14) return 9;
		return PlayerResultEnum.DEAD;
	}

	private setImage = (): string => this.image = this.playerImages[this.direction];
}
