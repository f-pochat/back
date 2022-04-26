import {IPlayerRepo} from "../../repositories/player.repository";
import {IPasswordHasherRepo} from "../../repositories/passwordhasher.respository";
import {Player} from "../../models/player.model";
import {PlayerDB} from "../../modelsDB/player.modeldb";

export class DeletePlayerService{
    private playerRepo: IPlayerRepo;

    constructor(playerRepo: IPlayerRepo) {
        this.playerRepo = playerRepo;
    }

    delete = async(email: string) : Promise<void> => {
        await this.playerRepo.deletePlayer(email);
    }
}