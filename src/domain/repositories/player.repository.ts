import {PlayerDB} from "../modelsDB/player.modeldb";
import {Player} from "../models/player.model";

export interface IPlayerRepo{
    addPlayer(player: PlayerDB): void;

    getByEmail(email: String): Promise<Player>;
}