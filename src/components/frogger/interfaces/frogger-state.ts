import IPlayer from '../../../classes/interfaces/player';
import ISprites from '../../../classes/interfaces/sprite';

export default interface IFroggerState {
	playAreaWidth: number;
	playAreaHeight: number;
	player: IPlayer;
	isGameInPlay: boolean;
	isAlive: boolean;
	time: number;
	timer?: any;
	sprites?: ISprites[];
}
