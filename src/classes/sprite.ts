import ISpriteProps from './interfaces/sprite-props';
import ISprite from './interfaces/sprite';
import DirectionEnum from './interfaces/direction-enum';
import ImageEnum from './interfaces/image-enum';

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
	public xOffset: number;
	public yOffset: number;
	public zIndex: number;
	public height: number;
	public width: number;
	public direction: DirectionEnum | undefined;
	public image: ImageEnum;
	public speed: number | undefined;

	readonly SPRITE_HEIGHT: number = 55;
	readonly SPRITE_WIDTH: number = 61.5;
	readonly X_OFFSET: number = 0;
	readonly Y_OFFSET: number = 20;
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
		this.yOffset = config.yOffset ? config.yOffset : this.Y_OFFSET;
		this.zIndex = this.Z_INDEX;
		this.height = this.SPRITE_HEIGHT;
		this.width = this.SPRITE_WIDTH;
		this.direction = config.direction ? config.direction : undefined;
		this.image = this.playerImages[config.image];
		this.speed = config.speed
	}

	public move = (): void => {
		switch (this.direction) {
			case DirectionEnum.LEFT: this.x --; break;
			case DirectionEnum.RIGHT: this.x ++; break;
		}

		if (this.x < 0) {
			this.x = 14;
			return;
		}

		if (this.x > 14) this.x = 1;
	}
}