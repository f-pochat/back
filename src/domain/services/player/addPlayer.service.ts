import {IPlayerRepo} from "../../repositories/player.repository";
import {IPasswordHasherRepo} from "../../repositories/passwordhasher.respository";
import {Player} from "../../models/player.model";
import {PlayerDB} from "../../modelsDB/player.modeldb";
import {IIdRepo} from "../../repositories/id.repository";

export class AddPlayerService{
    private playerRepo: IPlayerRepo;
    private passwordHasher: IPasswordHasherRepo;
    private idRepo: IIdRepo;


    constructor(idRepo: IIdRepo, playerRepo: IPlayerRepo, passwordHasher: IPasswordHasherRepo) {
        this.idRepo = idRepo;
        this.playerRepo = playerRepo;
        this.passwordHasher = passwordHasher;
    }

    register = async(email:string, fullname: string, password: string):Promise<Player> => {

        const duplicatePlayerEmail: Player = await this.playerRepo.getByEmail(email);
        if (duplicatePlayerEmail) throw Error("Email already exists!");

        const hashedPassword = this.passwordHasher.hash(password);

        const newPlayer: PlayerDB = new PlayerDB(this.idRepo.generateId(),email,true, fullname, hashedPassword, "0", "");
        this.playerRepo.addPlayer(newPlayer);
        // @ts-ignore
        return newPlayer;
    }
}