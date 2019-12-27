import ISpriteProps from './interfaces/sprite-props';
import ISprite from './interfaces/sprite';
import DirectionEnum from './enums/direction-enum';
import PlayerResultEnum from './enums/player-result-enum';
import SpriteTypeEnum from './enums/sprite-type-enum';
import ImageEnum from './enums/image-enum';

import car1 from '../images/car1.png';
import car2 from '../images/car2.png';
import car3 from '../images/car3.png';
import car4 from '../images/car4.png';
import lorryFront from '../images/lorry-front.png';
import lorryBack from '../images/lorry-back.png';
import turtle1 from '../images/turtle1.png';
import logLeft from '../images/log-left.png';
import logCentre from '../images/log-centre.png';
import logRight from '../images/log-right.png';
import playerHome from '../images/player-home.png';

export default class Sprite implements ISprite {
	public key: string;
	public visable: boolean;
	public x: number;
	public y: number;
	public xOffset: boolean;
	public zIndex: number;
	public direction: DirectionEnum | undefined;
	public image: ImageEnum;
	public speed: number | undefined;
	public type: SpriteTypeEnum;

	readonly X_OFFSET: boolean = false;
	readonly Z_INDEX: number = 5000;
	readonly playerImages = {
		car1,
		car2,
		car3,
		car4,
		lorryFront,
		lorryBack,
		turtle1,
		logLeft,
		logCentre,
		logRight,
		playerHome,
	}

	constructor(config: ISpriteProps) {
		this.key = config.key;
		this.visable = config.visable;
		this.x = config.x;
		this.y = config.y;
		this.xOffset = config.xOffset ? config.xOffset : this.X_OFFSET;
		this.zIndex = this.Z_INDEX;
		this.direction = config.direction ? config.direction : undefined;
		this.image = this.playerImages[config.image];
		this.speed = config.speed;
		this.type = config.type;
	}

	public move = (playerX: number, playerY: number): PlayerResultEnum => {
		let result = PlayerResultEnum.NO_MOVE;
		
		if (this.type === SpriteTypeEnum.RAFT) {
			result = this.checkClash(playerX, playerY);
		}	

		switch (this.direction) {
			case DirectionEnum.LEFT: this.x --; break;
			case DirectionEnum.RIGHT: this.x ++; break;
		}

		if (this.x < 0) this.x = 14;
		if (this.x > 14) this.x = 1;

		if (this.type !== SpriteTypeEnum.RAFT) {
			result = this.checkClash(playerX, playerY);
		}

		return result;
	}

	public checkClash = (playerX: number, playerY: number): PlayerResultEnum => {
		
		if (this.x === playerX && this.y === playerY) {
			if (this.type === SpriteTypeEnum.VEHICLE) return PlayerResultEnum.DEAD;
			if (this.type === SpriteTypeEnum.RAFT && this.direction === DirectionEnum.LEFT) return PlayerResultEnum.ARROW_LEFT;
			if (this.type === SpriteTypeEnum.RAFT && this.direction === DirectionEnum.RIGHT) return PlayerResultEnum.ARROW_RIGHT;
		}

		return PlayerResultEnum.SAFE
	}
}
