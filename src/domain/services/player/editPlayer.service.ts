import {IPlayerRepo} from "../../repositories/player.repository";
import {IPasswordHasherRepo} from "../../repositories/passwordhasher.respository";
import {Player} from "../../models/player.model";
import {PlayerDB} from "../../modelsDB/player.modeldb";
import {IIdRepo} from "../../repositories/id.repository";

export class EditPlayerService{
    private playerRepo: IPlayerRepo;
    private passwordHasher: IPasswordHasherRepo;


    constructor(playerRepo: IPlayerRepo, passwordHasher: IPasswordHasherRepo) {
        this.playerRepo = playerRepo;
        this.passwordHasher = passwordHasher;
    }

    edit = async(id: string, player: Player):Promise<void> => {

        const duplicatePlayerEmail: Player = await this.playerRepo.getByEmail(player.email);
        if (duplicatePlayerEmail) throw Error("Email already exists!");

        const hashedPassword = this.passwordHasher.hash(player.password);

        this.playerRepo.editPlayer(id,new PlayerDB(id,player.email,true,player.fullname, player.fullname, player.handicap.toString(), player.photo));
    }
}