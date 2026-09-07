import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { describe, expect, it, vi } from 'vitest';

import MobileButtons from '../mobile-buttons';
import IMobileButtonsProps from '../interfaces/mobile-buttons-props';
import PlayerResultEnum from '../../../classes/enums/player-result-enum';

describe('Mobile Buttons', () => {
	const defaultProps: IMobileButtonsProps = {
		handleMobileButton: vi.fn(),
	};

	it('Should render correctly', () => {
		const { container } = render(<MobileButtons {...defaultProps} />);

		expect(container.firstChild).toMatchSnapshot();
	});

	it.each([
		['UP', PlayerResultEnum.ARROW_UP],
		['DOWN', PlayerResultEnum.ARROW_DOWN],
		['LEFT', PlayerResultEnum.ARROW_LEFT],
		['RIGHT', PlayerResultEnum.ARROW_RIGHT],
	])('Should report a %s press as its arrow', async (label, expected) => {
		const handleMobileButton = vi.fn();
		render(<MobileButtons {...defaultProps} handleMobileButton={handleMobileButton} />);

		await userEvent.click(screen.getByRole('button', { name: label }));

		expect(handleMobileButton).toHaveBeenCalledWith(expected);
	});
});
