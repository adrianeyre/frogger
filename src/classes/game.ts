import IGame from './interfaces/game';
import Player from './player';
import IPlayer from './interfaces/player';
import ISprite from './interfaces/sprite';
import ISpriteProps from './interfaces/sprite-props';
import DirectionEnum from './enums/direction-enum';
import PlayerResultEnum from './enums/player-result-enum';
import IFroggerProps from '../components/frogger/interfaces/frogger-props';

import * as spritesData from './data/sprites'
import Sprite from './sprite';

export default class Game implements IGame {
	public player: IPlayer;
	public sprites: ISprite[];
	public level: number;
	public time: number;
	public timer: any;
	public iteration: number;
	public isGameInPlay: boolean;
	public defaultTime: number;

	private LOWEST_TIME: number = 10;

	constructor(config: IFroggerProps) {
		this.player = new Player(config);
		this.sprites = spritesData.default.map((sprite: ISpriteProps) => new Sprite(sprite));
		this.level = 1;
		this.isGameInPlay = false;
		this.defaultTime = config.initialTime || 60;
		this.time = this.defaultTime
		this.iteration = 1;
	}

	public handleInput = (playerResult: PlayerResultEnum): void => {
		switch (playerResult) {
			case PlayerResultEnum.NO_MOVE:
			case PlayerResultEnum.SAFE:
				return;
			case PlayerResultEnum.ARROW_UP:
				this.move(DirectionEnum.UP); break;
			case PlayerResultEnum.ARROW_DOWN:
				this.move(DirectionEnum.DOWN); break;
			case PlayerResultEnum.ARROW_RIGHT:
				this.move(DirectionEnum.RIGHT); break;
			case PlayerResultEnum.ARROW_LEFT:
				this.move(DirectionEnum.LEFT); break;
			case PlayerResultEnum.DEAD:
				this.handleLooseLife(); break;
			case PlayerResultEnum.HOME1:
			case PlayerResultEnum.HOME2:
			case PlayerResultEnum.HOME3:
			case PlayerResultEnum.HOME4:
			case PlayerResultEnum.HOME5:
				this.handlePlayerHome(playerResult); break;
			case PlayerResultEnum.OVER_WATER:
				this.handleOverWater(); break;
			case PlayerResultEnum.LEVEL_COMPLETE:
				this.handleLevelComplete(); break;
		}
	}

	public handleTimer = (): void => {
		const player = {...this.player};
		this.iteration ++;

		if (this.iteration === 100) this.time --;

		if (this.time < 1) return this.handleLooseLife();

		if (this.iteration > 100) this.iteration = 1;

		this.sprites
			?.filter((sprite: ISprite) => sprite.speed && this.iteration % sprite.speed === 0)
			.map((sprite: ISprite) => this.handleInput(sprite.move(player.x, player.y)));

		if (this.player.y < 7) {
			this.handleOverWater();
		}
	}

	private move = (direction: DirectionEnum): void => {
		const result = this.player.move(direction);

		if (result === PlayerResultEnum.SAFE) {
			this.sprites?.filter((sprite: ISprite) => sprite.y === this.player.y).map((sprite: ISprite) => this.handleMoveClash(sprite.checkClash(this.player.x, this.player.y)));
		}

		this.handleInput(result);
	}

	private handleOverWater = (): void => {
		if (this.sprites.filter((sprite: ISprite) => sprite.x === this.player.x && sprite.y === this.player.y).length === 0) {
			this.handleInput(PlayerResultEnum.DEAD);
		}
	}

	private handleMoveClash = (clashResult: PlayerResultEnum): void => {
		if (clashResult > 10) return;

		this.handleInput(clashResult);
	}

	private handlePlayerHome = (homePosition: number): void => {
		const homeSprite = this.sprites?.find((sprite: ISprite) => sprite.key === `player-home-${ homePosition }`);

		if (!homeSprite || (homeSprite && homeSprite.visable)) return this.handleInput(PlayerResultEnum.DEAD);

		homeSprite.visable = true;
		return this.player.resetPlayerToStart();
	}

	private handleLevelComplete = (): void => {
		this.level ++;
		this.defaultTime -= 5;
		if (this.defaultTime < this.LOWEST_TIME) this.defaultTime = this.LOWEST_TIME;
		this.handleResetTimer();
		this.player.resetPlayerToStart();
	}

	private handleLooseLife = (): void => {
		this.handleResetTimer();
		this.player.isAlive = this.player.looseLife();
		this.player.resetPlayerToStart();
		this.isGameInPlay = this.player.isAlive;
	}

	private handleResetTimer = (): number => this.time = this.defaultTime;
}
