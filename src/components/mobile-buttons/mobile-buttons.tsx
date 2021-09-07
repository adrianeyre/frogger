import { FC } from 'react';

import IMobileButtonsProps from './interfaces/mobile-buttons-props'
import PlayerResultEnum from '../../classes/enums/player-result-enum';

import './styles/mobile-buttons.scss';

const MobileButtons: FC<IMobileButtonsProps> = (props: IMobileButtonsProps) => {
	return <div className="mobile-buttons">
		<div className="button-row">
			<button type="button" onClick={ () => props.handleMobileButton(PlayerResultEnum.ARROW_UP) }>UP</button>
		</div>
		<div className="button-row">
			<button className="left-button" type="button" onClick={ () => props.handleMobileButton(PlayerResultEnum.ARROW_LEFT) }>LEFT</button>
			<button type="button" onClick={ () => props.handleMobileButton(PlayerResultEnum.ARROW_RIGHT) }>RIGHT</button>
		</div>
		<div className="button-row">
			<button type="button" onClick={ () => props.handleMobileButton(PlayerResultEnum.ARROW_DOWN) }>DOWN</button>
		</div>
	</div>
}

export default MobileButtons;
