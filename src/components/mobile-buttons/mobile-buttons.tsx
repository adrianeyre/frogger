import React from 'react';

import IMobileButtonsProps from './interfaces/mobile-buttons-props'
import PlayerResultEnum from '../../classes/enums/player-result-enum';

import './styles/mobile-buttons.scss';

export default class MobileButtons extends React.Component<IMobileButtonsProps, {}> {
	public render() {
		return <div className="mobile-buttons">
			<div className="button-row">
				<button type="button" onClick={ this.props.handleMobileButton.bind(this, PlayerResultEnum.ARROW_UP) }>UP</button>
			</div>
			<div className="button-row">
				<button className="left-button" type="button" onClick={ this.props.handleMobileButton.bind(this, PlayerResultEnum.ARROW_LEFT) }>LEFT</button>
				<button type="button" onClick={ this.props.handleMobileButton.bind(this, PlayerResultEnum.ARROW_RIGHT) }>RIGHT</button>
			</div>
			<div className="button-row">
				<button type="button" onClick={ this.props.handleMobileButton.bind(this, PlayerResultEnum.ARROW_DOWN) }>DOWN</button>
			</div>
		</div>
	}
}
