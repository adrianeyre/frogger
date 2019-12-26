import IPlayer from './player';
import ISprite from './sprite';
import PlayerResultEnum from '../enums/player-result-enum';

export default interface IGame {
	player: IPlayer;
	sprites?: ISprite[];
	time: number;
	timer: any;
	iteration: number;
	isGameInPlay: boolean;
	handleInput(playerResult: PlayerResultEnum): void;
	handleTimer(): void;
}
