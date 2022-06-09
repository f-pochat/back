import {IPlayerRepo} from "../../repositories/player.repository";
import {IPasswordHasherRepo} from "../../repositories/passwordhasher.respository";
import {IIdRepo} from "../../repositories/id.repository";
import {Player} from "../../models/player.model";
import {PlayerDB} from "../../modelsDB/player.modeldb";
import {ITokenProv} from "../../repositories/token.repository";

export class LoginPlayerService {
    private playerRepo: IPlayerRepo;
    private passwordHasher: IPasswordHasherRepo;
    private tokenProv: ITokenProv;


    constructor(playerRepo: IPlayerRepo, passwordHasher: IPasswordHasherRepo, tokenProvider: ITokenProv) {
        this.playerRepo = playerRepo;
        this.passwordHasher = passwordHasher;
        this.tokenProv = tokenProvider;
    }

    login = async(email:string, password: string):Promise<String> => {

        const player: Player = await this.playerRepo.getByEmail(email);
        if (!player) throw Error("Email doesn't exists!");

        if(!this.passwordHasher.compare(player.password,password)) throw Error("Password incorrect!");
        // @ts-ignore
        return this.tokenProv.loginPlayer(email,player.id);
    }
}