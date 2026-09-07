import { render, screen } from '@testing-library/react';
import { describe, expect, it } from 'vitest';

import GameStatusTop from '../game-status-top';
import IGameStatusTopProps from '../interfaces/game-status-top-props';

describe('Game Status Top', () => {
	const defaultProps: IGameStatusTopProps = {
		score: 1000,
		hiScore: 9999,
	};

	it('Should render correctly', () => {
		const { container } = render(<GameStatusTop {...defaultProps} />);

		expect(container.firstChild).toMatchSnapshot();
	});

	it('Should show the score and the hi-score', () => {
		render(<GameStatusTop {...defaultProps} />);

		expect(screen.getByText('1000')).toBeInTheDocument();
		expect(screen.getByText('9999')).toBeInTheDocument();
	});
});
