import { render, screen } from '@testing-library/react';
import { describe, expect, it } from 'vitest';

import GameStatusBottom from '../game-status-bottom';
import IGameStatusBottomProps from '../interfaces/game-status-bottom-props';

describe('Game Status Bottom', () => {
	const defaultProps: IGameStatusBottomProps = {
		lives: 3,
		level: 1,
		timer: 60,
	};

	it('Should render correctly', () => {
		const { container } = render(<GameStatusBottom {...defaultProps} />);

		expect(container.firstChild).toMatchSnapshot();
	});

	it('Should draw one life icon per remaining life', () => {
		render(<GameStatusBottom {...defaultProps} />);

		expect(screen.getAllByAltText('lives')).toHaveLength(3);
	});

	it('Should draw no life icons on the last life', () => {
		render(<GameStatusBottom {...defaultProps} lives={0} />);

		expect(screen.queryAllByAltText('lives')).toHaveLength(0);
	});
});
