import { render, screen } from '@testing-library/react';
import { describe, expect, it } from 'vitest';

import Frogger from '../frogger';
import IFroggerProps from '../interfaces/frogger-props';

describe('Frogger', () => {
	const defaultProps: IFroggerProps = {};

	it('Should render correctly', () => {
		const { container } = render(<Frogger {...defaultProps} />);

		expect(container.firstChild).toMatchSnapshot();
	});

	it('Should open on the info board rather than in play', () => {
		render(<Frogger {...defaultProps} />);

		expect(screen.getByRole('button', { name: 'Play Game' })).toBeInTheDocument();
	});
});
