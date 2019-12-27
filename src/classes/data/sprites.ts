import DirectionEnum from '../enums/direction-enum';
import ImageEnum from '../enums/image-enum';
import SpriteTypeEnum from '../enums/sprite-type-enum';
import ISpriteProps from '../interfaces/sprite-props';

const sprites: ISpriteProps[] = [
	{
		key: 'car1-1',
		visable: true,
		x: 1,
		y: 12,
		direction: DirectionEnum.LEFT,
		image: ImageEnum.CAR1,
		speed: 50,
		type: SpriteTypeEnum.VEHICLE
	},
	{
		key: 'car1-2',
		visable: true,
		x: 6,
		y: 12,
		direction: DirectionEnum.LEFT,
		image: ImageEnum.CAR1,
		speed: 50,
		type: SpriteTypeEnum.VEHICLE
	},
	{
		key: 'car1-3',
		visable: true,
		x: 10,
		y: 12,
		direction: DirectionEnum.LEFT,
		image: ImageEnum.CAR1,
		speed: 50,
		type: SpriteTypeEnum.VEHICLE
	},
	{
		key: 'car2-1',
		visable: true,
		x: 2,
		y: 11,
		direction: DirectionEnum.RIGHT,
		image: ImageEnum.CAR2,
		speed: 40,
		type: SpriteTypeEnum.VEHICLE
	},
	{
		key: 'car2-2',
		visable: true,
		x: 7,
		y: 11,
		direction: DirectionEnum.RIGHT,
		image: ImageEnum.CAR2,
		speed: 40,
		type: SpriteTypeEnum.VEHICLE
	},
	{
		key: 'car2-3',
		visable: true,
		x: 13,
		y: 11,
		direction: DirectionEnum.RIGHT,
		image: ImageEnum.CAR2,
		speed: 40,
		type: SpriteTypeEnum.VEHICLE
	},
	{
		key: 'car3-1',
		visable: true,
		x: 3,
		y: 10,
		direction: DirectionEnum.LEFT,
		image: ImageEnum.CAR3,
		speed: 30,
		type: SpriteTypeEnum.VEHICLE
	},
	{
		key: 'car3-2',
		visable: true,
		x: 8,
		y: 10,
		direction: DirectionEnum.LEFT,
		image: ImageEnum.CAR3,
		speed: 30,
		type: SpriteTypeEnum.VEHICLE
	},
	{
		key: 'car3-3',
		visable: true,
		x: 14,
		y: 10,
		direction: DirectionEnum.LEFT,
		image: ImageEnum.CAR3,
		speed: 30,
		type: SpriteTypeEnum.VEHICLE
	},
	{
		key: 'car4',
		visable: true,
		x: 10,
		y: 9,
		direction: DirectionEnum.RIGHT,
		image: ImageEnum.CAR4,
		speed: 20,
		type: SpriteTypeEnum.VEHICLE
	},
	{
		key: 'lorry-front-1',
		visable: true,
		x: 8,
		y: 8,
		direction: DirectionEnum.LEFT,
		image: ImageEnum.LORRY_FRONT,
		speed: 45,
		type: SpriteTypeEnum.VEHICLE
	},
	{
		key: 'lorry-back-1',
		visable: true,
		x: 9,
		y: 8,
		direction: DirectionEnum.LEFT,
		image: ImageEnum.LORRY_BACK,
		speed: 45,
		type: SpriteTypeEnum.VEHICLE
	},
	{
		key: 'lorry-front-2',
		visable: true,
		x: 13,
		y: 8,
		direction: DirectionEnum.LEFT,
		image: ImageEnum.LORRY_FRONT,
		speed: 45,
		type: SpriteTypeEnum.VEHICLE
	},
	{
		key: 'lorry-back-2',
		visable: true,
		x: 14,
		y: 8,
		direction: DirectionEnum.LEFT,
		image: ImageEnum.LORRY_BACK,
		speed: 45,
		type: SpriteTypeEnum.VEHICLE
	},
	{
		key: 'turtle1-1',
		visable: true,
		x: 1,
		y: 6,
		direction: DirectionEnum.LEFT,
		image: ImageEnum.TURTLE1,
		speed: 20,
		type: SpriteTypeEnum.RAFT
	},
	{
		key: 'turtle1-2',
		visable: true,
		x: 2,
		y: 6,
		direction: DirectionEnum.LEFT,
		image: ImageEnum.TURTLE1,
		speed: 20,
		type: SpriteTypeEnum.RAFT
	},
	{
		key: 'turtle1-3',
		visable: true,
		x: 5,
		y: 6,
		direction: DirectionEnum.LEFT,
		image: ImageEnum.TURTLE1,
		speed: 20,
		type: SpriteTypeEnum.RAFT
	},
	{
		key: 'turtle1-4',
		visable: true,
		x: 6,
		y: 6,
		direction: DirectionEnum.LEFT,
		image: ImageEnum.TURTLE1,
		speed: 20,
		type: SpriteTypeEnum.RAFT
	},
	{
		key: 'turtle1-5',
		visable: true,
		x: 7,
		y: 6,
		direction: DirectionEnum.LEFT,
		image: ImageEnum.TURTLE1,
		speed: 20,
		type: SpriteTypeEnum.RAFT
	},
	{
		key: 'turtle1-6',
		visable: true,
		x: 10,
		y: 6,
		direction: DirectionEnum.LEFT,
		image: ImageEnum.TURTLE1,
		speed: 20,
		type: SpriteTypeEnum.RAFT
	},
	{
		key: 'turtle1-7',
		visable: true,
		x: 11,
		y: 6,
		direction: DirectionEnum.LEFT,
		image: ImageEnum.TURTLE1,
		speed: 20,
		type: SpriteTypeEnum.RAFT
	},
	{
		key: 'turtle1-8',
		visable: true,
		x: 12,
		y: 6,
		direction: DirectionEnum.LEFT,
		image: ImageEnum.TURTLE1,
		speed: 20,
		type: SpriteTypeEnum.RAFT
	},
	{
		key: 'log1-1',
		visable: true,
		x: 2,
		y: 5,
		direction: DirectionEnum.RIGHT,
		image: ImageEnum.LOG_LEFT,
		speed: 80,
		type: SpriteTypeEnum.RAFT
	},
	{
		key: 'log1-2',
		visable: true,
		x: 3,
		y: 5,
		direction: DirectionEnum.RIGHT,
		image: ImageEnum.LOG_CENTRE,
		speed: 80,
		type: SpriteTypeEnum.RAFT
	},
	{
		key: 'log1-3',
		visable: true,
		x: 4,
		y: 5,
		direction: DirectionEnum.RIGHT,
		image: ImageEnum.LOG_RIGHT,
		speed: 80,
		type: SpriteTypeEnum.RAFT
	},
	{
		key: 'log1-4',
		visable: true,
		x: 8,
		y: 5,
		direction: DirectionEnum.RIGHT,
		image: ImageEnum.LOG_LEFT,
		speed: 80,
		type: SpriteTypeEnum.RAFT
	},
	{
		key: 'log1-5',
		visable: true,
		x: 9,
		y: 5,
		direction: DirectionEnum.RIGHT,
		image: ImageEnum.LOG_CENTRE,
		speed: 80,
		type: SpriteTypeEnum.RAFT
	},
	{
		key: 'log1-6',
		visable: true,
		x: 10,
		y: 5,
		direction: DirectionEnum.RIGHT,
		image: ImageEnum.LOG_RIGHT,
		speed: 80,
		type: SpriteTypeEnum.RAFT
	},
	{
		key: 'log1-7',
		visable: true,
		x: 13,
		y: 5,
		direction: DirectionEnum.RIGHT,
		image: ImageEnum.LOG_LEFT,
		speed: 80,
		type: SpriteTypeEnum.RAFT
	},
	{
		key: 'log1-8',
		visable: true,
		x: 14,
		y: 5,
		direction: DirectionEnum.RIGHT,
		image: ImageEnum.LOG_RIGHT,
		speed: 80,
		type: SpriteTypeEnum.RAFT
	},
	{
		key: 'log2-1',
		visable: true,
		x: 3,
		y: 4,
		direction: DirectionEnum.RIGHT,
		image: ImageEnum.LOG_LEFT,
		speed: 30,
		type: SpriteTypeEnum.RAFT
	},
	{
		key: 'log2-2',
		visable: true,
		x: 4,
		y: 4,
		direction: DirectionEnum.RIGHT,
		image: ImageEnum.LOG_CENTRE,
		speed: 30,
		type: SpriteTypeEnum.RAFT
	},
	{
		key: 'log2-3',
		visable: true,
		x: 5,
		y: 4,
		direction: DirectionEnum.RIGHT,
		image: ImageEnum.LOG_CENTRE,
		speed: 30,
		type: SpriteTypeEnum.RAFT
	},
	{
		key: 'log2-4',
		visable: true,
		x: 6,
		y: 4,
		direction: DirectionEnum.RIGHT,
		image: ImageEnum.LOG_CENTRE,
		speed: 30,
		type: SpriteTypeEnum.RAFT
	},
	{
		key: 'log2-5',
		visable: true,
		x: 7,
		y: 4,
		direction: DirectionEnum.RIGHT,
		image: ImageEnum.LOG_CENTRE,
		speed: 30,
		type: SpriteTypeEnum.RAFT
	},
	{
		key: 'log2-6',
		visable: true,
		x: 8,
		y: 4,
		direction: DirectionEnum.RIGHT,
		image: ImageEnum.LOG_RIGHT,
		speed: 30,
		type: SpriteTypeEnum.RAFT
	},
	{
		key: 'log2-7',
		visable: true,
		x: 11,
		y: 4,
		direction: DirectionEnum.RIGHT,
		image: ImageEnum.LOG_LEFT,
		speed: 30,
		type: SpriteTypeEnum.RAFT
	},
	{
		key: 'log2-8',
		visable: true,
		x: 12,
		y: 4,
		direction: DirectionEnum.RIGHT,
		image: ImageEnum.LOG_CENTRE,
		speed: 30,
		type: SpriteTypeEnum.RAFT
	},
	{
		key: 'log2-9',
		visable: true,
		x: 13,
		y: 4,
		direction: DirectionEnum.RIGHT,
		image: ImageEnum.LOG_CENTRE,
		speed: 30,
		type: SpriteTypeEnum.RAFT
	},
	{
		key: 'log2-10',
		visable: true,
		x: 14,
		y: 4,
		direction: DirectionEnum.RIGHT,
		image: ImageEnum.LOG_CENTRE,
		speed: 30,
		type: SpriteTypeEnum.RAFT
	},
	{
		key: 'log2-11',
		visable: true,
		x: 1,
		y: 4,
		direction: DirectionEnum.RIGHT,
		image: ImageEnum.LOG_RIGHT,
		speed: 30,
		type: SpriteTypeEnum.RAFT
	},
	{
		key: 'turtle2-1',
		visable: true,
		x: 3,
		y: 3,
		direction: DirectionEnum.LEFT,
		image: ImageEnum.TURTLE1,
		speed: 30, type: SpriteTypeEnum.RAFT
	},
	{
		key: 'turtle2-2',
		visable: true,
		x: 4,
		y: 3,
		direction: DirectionEnum.LEFT,
		image: ImageEnum.TURTLE1,
		speed: 30,
		type: SpriteTypeEnum.RAFT
	},
	{
		key: 'turtle2-3',
		visable: true,
		x: 7,
		y: 3,
		direction: DirectionEnum.LEFT,
		image: ImageEnum.TURTLE1,
		speed: 30,
		type: SpriteTypeEnum.RAFT
	},
	{
		key: 'turtle2-4',
		visable: true,
		x: 8,
		y: 3,
		direction: DirectionEnum.LEFT,
		image: ImageEnum.TURTLE1,
		speed: 30,
		type: SpriteTypeEnum.RAFT
	},
	{
		key: 'turtle2-5',
		visable: true,
		x: 11,
		y: 3,
		direction: DirectionEnum.LEFT,
		image: ImageEnum.TURTLE1,
		speed: 30,
		type: SpriteTypeEnum.RAFT
	},
	{
		key: 'turtle2-6',
		visable: true,
		x: 12,
		y: 3,
		direction: DirectionEnum.LEFT,
		image: ImageEnum.TURTLE1,
		speed: 30,
		type: SpriteTypeEnum.RAFT
	},
	{
		key: 'log3-1',
		visable: true,
		x: 2,
		y: 2,
		direction: DirectionEnum.RIGHT,
		image: ImageEnum.LOG_LEFT,
		speed: 30,
		type: SpriteTypeEnum.RAFT
	},
	{
		key: 'log3-2',
		visable: true,
		x: 3,
		y: 2,
		direction: DirectionEnum.RIGHT,
		image: ImageEnum.LOG_CENTRE,
		speed: 30,
		type: SpriteTypeEnum.RAFT
	},
	{
		key: 'log3-3',
		visable: true,
		x: 4,
		y: 2,
		direction: DirectionEnum.RIGHT,
		image: ImageEnum.LOG_CENTRE,
		speed: 30,
		type: SpriteTypeEnum.RAFT
	},
	{
		key: 'log3-4',
		visable: true,
		x: 5,
		y: 2,
		direction: DirectionEnum.RIGHT,
		image: ImageEnum.LOG_RIGHT,
		speed: 30,
		type: SpriteTypeEnum.RAFT
	},
	{
		key: 'log3-5',
		visable: true,
		x: 8,
		y: 2,
		direction: DirectionEnum.RIGHT,
		image: ImageEnum.LOG_LEFT,
		speed: 30,
		type: SpriteTypeEnum.RAFT
	},
	{
		key: 'log3-6',
		visable: true,
		x: 9,
		y: 2,
		direction: DirectionEnum.RIGHT,
		image: ImageEnum.LOG_CENTRE,
		speed: 30,
		type: SpriteTypeEnum.RAFT
	},
	{
		key: 'log3-7',
		visable: true,
		x: 10,
		y: 2,
		direction: DirectionEnum.RIGHT,
		image: ImageEnum.LOG_CENTRE,
		speed: 30,
		type: SpriteTypeEnum.RAFT
	},
	{
		key: 'log3-8',
		visable: true,
		x: 11,
		y: 2,
		direction: DirectionEnum.RIGHT,
		image: ImageEnum.LOG_RIGHT,
		speed: 30,
		type: SpriteTypeEnum.RAFT
	},
	{
		key: 'log3-9',
		visable: true,
		x: 13,
		y: 2,
		direction: DirectionEnum.RIGHT,
		image: ImageEnum.LOG_LEFT,
		speed: 30,
		type: SpriteTypeEnum.RAFT
	},
	{
		key: 'log3-10',
		visable: true,
		x: 14,
		y: 2,
		direction: DirectionEnum.RIGHT,
		image: ImageEnum.LOG_RIGHT,
		speed: 30,
		type: SpriteTypeEnum.RAFT
	},
	{
		key: 'player-home-5',
		visable: false,
		x: 2,
		y: 1,
		image: ImageEnum.PLAYER_HOME,
		xOffset: true,
		type: SpriteTypeEnum.HOME
	},
	{
		key: 'player-home-6',
		visable: false,
		x: 5,
		y: 1,
		image: ImageEnum.PLAYER_HOME,
		xOffset: true,
		type: SpriteTypeEnum.HOME
	},
	{
		key: 'player-home-7',
		visable: false,
		x: 8,
		y: 1,
		image: ImageEnum.PLAYER_HOME,
		xOffset: true,
		type: SpriteTypeEnum.HOME
	},
	{
		key: 'player-home-8',
		visable: false,
		x: 11,
		y: 1,
		image: ImageEnum.PLAYER_HOME,
		xOffset: true,
		type: SpriteTypeEnum.HOME
	},
	{
		key: 'player-home-9',
		visable: false,
		x: 14,
		y: 1,
		image: ImageEnum.PLAYER_HOME,
		xOffset: true,
		type: SpriteTypeEnum.HOME
	}
]

export default sprites
