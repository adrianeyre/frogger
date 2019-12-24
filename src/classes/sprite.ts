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

export default class Sprite implements ISprite {
	public key: string;
	public x: number;
	public y: number;
	public height: number;
	public width: number;
	public direction: DirectionEnum;
	public image: ImageEnum;
	public speed: number;

	readonly SPRITE_HEIGHT: number = 61.5;
	readonly SPRITE_WIDTH: number = 61.5;
	readonly playerImages = {
		car1,
		car2,
		car3,
		car4,
		lorryFront,
		lorryBack
	}

	constructor(config: ISpriteProps) {
		this.key = config.key
		this.x = config.x;
		this.y = config.y;
		this.height = this.SPRITE_HEIGHT;
		this.width = this.SPRITE_WIDTH;
		this.direction = config.direction
		this.image = this.playerImages[config.image];
		this.speed = config.speed
	}
}