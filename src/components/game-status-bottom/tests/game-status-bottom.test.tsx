import { shallow } from 'enzyme';

import GameStatusBottom from '../game-status-bottom';
import IGameStatusBottomProps from '../interfaces/game-status-bottom-props';

describe('Game Status Bottom', () => {
	it('Should render correctly', () => {
		const defaultProps: IGameStatusBottomProps = {
			lives: 1000,
			level: 1,
			timer: 1,
		};

		const gameStatus = shallow(<GameStatusBottom {...defaultProps} />);
		expect(gameStatus).toMatchSnapshot();
	});
});