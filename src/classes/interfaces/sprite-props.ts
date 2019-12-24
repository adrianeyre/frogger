import DirectionEnum from './direction-enum';

export default interface ISpriteProps {
	key: string;
	x: number;
	y: number;
	direction: DirectionEnum;
	image: string;
	speed: number;
}
