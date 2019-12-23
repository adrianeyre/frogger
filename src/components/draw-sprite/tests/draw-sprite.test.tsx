import React from 'react';
import { shallow } from 'enzyme';

import DrawSprite from '../draw-sprite';
import IDrawSpriteProps from '../interfaces/draw-sprite-props';
import Player from '../../../classes/player';

describe('Draw Sprite', () => {
	it('Should render correctly', () => {
		const defaultProps: IDrawSpriteProps = {
			sprite: new Player({}),
			image: 'image',
		};

		const drawFish = shallow(<DrawSprite {...defaultProps} />);
		expect(drawFish).toMatchSnapshot();
	});
});