import {PlayerDB} from "../modelsDB/player.modeldb";
import {Player} from "../models/player.model";

export interface IPlayerRepo{
    addPlayer(player: PlayerDB): void;
    deletePlayer(email: string): void;
    getByEmail(email: String): Promise<Player>;
    editPlayer(id: string, player: PlayerDB): void;
    getPlayer(id: string): Promise<Player>;
}