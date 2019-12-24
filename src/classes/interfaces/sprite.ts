import DirectionEnum from './direction-enum';
import ImageEnum from './image-enum';

export default interface ISprite {
	key: string;
	x: number;
	y: number;
	xOffset: number;
	yOffset: number;
	zIndex: number
	height: number;
	width: number;
	direction: DirectionEnum;
	image: ImageEnum;
	speed: number;
}
