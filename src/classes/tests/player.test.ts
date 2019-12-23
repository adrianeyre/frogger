import DirectionEnum from '../interfaces/direction-enum';

import Player from '../player';

describe('Player', () => {
	it('Should create Player class', () => {
		const player = new Player({});

		expect(player.height).toEqual(40);
		expect(player.width).toEqual(40);
		expect(player.isAlive).toEqual(true);
		expect(player.key).toEqual('player');
		expect(player.image).toEqual('player-up.png');
		expect(player.lives).toEqual(5);
		expect(player.score).toEqual(0);
		expect(player.x).toEqual(7);
		expect(player.y).toEqual(13);
	});

	it('Should move player up one space', () => {
		const player = new Player({});
		player.move(DirectionEnum.UP);

		expect(player.y).toEqual(12);
	});

	it('Should move player down one space', () => {
		const player = new Player({});
		player.move(DirectionEnum.DOWN);

		expect(player.y).toEqual(14);
	});

	it('Should move player right one space', () => {
		const player = new Player({});
		player.move(DirectionEnum.RIGHT);

		expect(player.x).toEqual(8);
	});

	it('Should move player left one space', () => {
		const player = new Player({});
		player.move(DirectionEnum.LEFT);

		expect(player.x).toEqual(6);
	});

	it('Should be a valid space', () => {
		const player = new Player({});

		expect(player.isValidSpace(player.x, player.y)).toEqual(true);
	});

	it('Should be a invalid space', () => {
		const player = new Player({});

		expect(player.isValidSpace(0, 1)).toEqual(false);
		expect(player.isValidSpace(15, 1)).toEqual(false);
		expect(player.isValidSpace(1, 0)).toEqual(false);
		expect(player.isValidSpace(1, 14)).toEqual(false);
	});
});