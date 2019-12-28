import PlayerResultEnum from "../../../classes/enums/player-result-enum";

export default interface IMobileButtonsProps {
	handleMobileButton(direction: PlayerResultEnum): void;
}
