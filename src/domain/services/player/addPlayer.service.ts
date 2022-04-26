import {IPlayerRepo} from "../../repositories/player.repository";
import {IPasswordHasherRepo} from "../../repositories/passwordhasher.respository";
import {Player} from "../../models/player.model";
import {PlayerDB} from "../../modelsDB/player.modeldb";

export class AddPlayerService{
    private playerRepo: IPlayerRepo;
    private passwordHasher: IPasswordHasherRepo;


    constructor(playerRepo: IPlayerRepo, passwordHasher: IPasswordHasherRepo) {
        this.playerRepo = playerRepo;
        this.passwordHasher = passwordHasher;
    }

    register = async(player: Player):Promise<Player> => {

        const duplicatePlayerEmail: Player = await this.playerRepo.getByEmail(player.email);
        if (duplicatePlayerEmail) throw Error("Email already exists!");

        const hashedPassword = this.passwordHasher.hash(player.password);

        const newPlayer: PlayerDB = new PlayerDB(player.email,true, player.fullname, hashedPassword);
        this.playerRepo.addPlayer(newPlayer);
        return newPlayer;
    }
}