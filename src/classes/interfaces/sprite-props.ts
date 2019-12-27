import DirectionEnum from '../enums/direction-enum';
import SpriteTypeEnum from '../enums/sprite-type-enum';

export default interface ISpriteProps {
	key: string;
	visable: boolean;
	x: number;
	y: number;
	xOffset?: boolean;
	direction?: DirectionEnum;
	image: string;
	speed?: number;
	type: SpriteTypeEnum;
}
