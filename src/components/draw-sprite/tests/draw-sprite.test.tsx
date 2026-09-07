import { render, screen } from '@testing-library/react';
import { describe, expect, it } from 'vitest';

import DrawSprite from '../draw-sprite';
import IDrawSpriteProps from '../interfaces/draw-sprite-props';
import Player from '../../../classes/player';

describe('Draw Sprite', () => {
	const defaultProps: IDrawSpriteProps = {
		sprite: new Player({}),
		height: 10,
		width: 10,
		containerWidth: 100,
	};

	it('Should render correctly', () => {
		const { container } = render(<DrawSprite {...defaultProps} />);

		expect(container.firstChild).toMatchSnapshot();
	});

	it('Should draw the sprite image', () => {
		render(<DrawSprite {...defaultProps} />);

		expect(screen.getByAltText('sprite')).toBeInTheDocument();
	});

	it('Should draw nothing for an invisible sprite', () => {
		const sprite = new Player({});
		sprite.visable = false;

		render(<DrawSprite {...defaultProps} sprite={sprite} />);

		expect(screen.queryByAltText('sprite')).not.toBeInTheDocument();
	});
});
