import DirectionEnum from '../enums/direction-enum';
import PlayerResultEnum from '../enums/player-result-enum';
import SpriteTypeEnum from '../enums/sprite-type-enum';
import ImageEnum from '../enums/image-enum';

export default interface ISprite {
	key: string;
	visable: boolean;
	x: number;
	y: number;
	xOffset: boolean;
	zIndex: number
	direction: DirectionEnum | undefined;
	image: ImageEnum;
	speed: number | undefined;
	type: SpriteTypeEnum;
	move(playerX: number, playerY: number): PlayerResultEnum;
	checkClash(playerX: number, playerY: number): PlayerResultEnum;
}
