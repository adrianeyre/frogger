import IPlayer from '../../../classes/interfaces/player';

export default interface IFroggerState {
	playAreaWidth: number;
	playAreaHeight: number;
	player: IPlayer;
	isGameInPlay: boolean;
	time: number;
	timer?: any
}
