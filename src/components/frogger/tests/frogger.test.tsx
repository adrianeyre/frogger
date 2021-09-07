import { shallow } from 'enzyme';

import Frogger from '../frogger';
import IFroggerProps from '../interfaces/frogger-props';

describe('Frogger', () => {
	it('Should render correctly', () => {
		const defaultProps: IFroggerProps = {};
		const fishy = shallow(<Frogger {...defaultProps} />);
		expect(fishy).toMatchSnapshot();
	});
});