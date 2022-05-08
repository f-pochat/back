import {IPlayerRepo} from "../../repositories/player.repository";
import {IPasswordHasherRepo} from "../../repositories/passwordhasher.respository";
import {IIdRepo} from "../../repositories/id.repository";
import {Player} from "../../models/player.model";
import {PlayerDB} from "../../modelsDB/player.modeldb";

export class LoginPlayerService {
    private playerRepo: IPlayerRepo;
    private passwordHasher: IPasswordHasherRepo;


    constructor(playerRepo: IPlayerRepo, passwordHasher: IPasswordHasherRepo) {
        this.playerRepo = playerRepo;
        this.passwordHasher = passwordHasher;
    }

    login = async(email:string, password: string):Promise<Player> => {

        const player: Player = await this.playerRepo.getByEmail(email);
        if (!player) throw Error("Email doesn't exists!");

        if(!this.passwordHasher.compare(player.password,password)) throw Error("Password incorrect!");
        // @ts-ignore
        return player;
    }
}