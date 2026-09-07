import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { describe, expect, it, vi } from 'vitest';

import InfoBoard from '../info-board';
import IInfoBoardProps from '../interfaces/info-board-props';

describe('Info Board', () => {
	const defaultProps: IInfoBoardProps = {
		gameOver: true,
		score: 1000,
		containerHeight: 1000,
		startGame: vi.fn(),
	};

	it('Should render correctly', () => {
		const { container } = render(<InfoBoard {...defaultProps} />);

		expect(container.firstChild).toMatchSnapshot();
	});

	it('Should show the game over message with the score', () => {
		render(<InfoBoard {...defaultProps} />);

		expect(screen.getByText('Game Over')).toBeInTheDocument();
		expect(screen.getByText(/You scored 1000/)).toBeInTheDocument();
	});

	it('Should not show the game over message before the last life is lost', () => {
		render(<InfoBoard {...defaultProps} gameOver={false} />);

		expect(screen.queryByText('Game Over')).not.toBeInTheDocument();
	});

	it('Should start the game when the button is pressed', async () => {
		const startGame = vi.fn();
		render(<InfoBoard {...defaultProps} startGame={startGame} />);

		await userEvent.click(screen.getByRole('button', { name: 'Play Game' }));

		expect(startGame).toHaveBeenCalledTimes(1);
	});
});
