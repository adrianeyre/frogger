import IGame from '../../../classes/interfaces/game';

export default interface IFroggerState {
	game: IGame;
	playAreaWidth: number;
	playAreaHeight: number;
	timer?: any;
}
