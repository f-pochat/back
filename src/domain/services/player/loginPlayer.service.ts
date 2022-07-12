import {IPlayerRepo} from "../../repositories/player.repository";
import {IPasswordHasherRepo} from "../../repositories/passwordhasher.respository";
import {IIdRepo} from "../../repositories/id.repository";
import {Player} from "../../models/player.model";
import {PlayerDB} from "../../modelsDB/player.modeldb";
import {ITokenProv} from "../../repositories/token.repository";
import {promises} from "dns";

export class LoginPlayerService {
    private playerRepo: IPlayerRepo;
    private passwordHasher: IPasswordHasherRepo;
    private tokenProv: ITokenProv;
    private idRepo: IIdRepo;


    constructor(idRepo: IIdRepo, playerRepo: IPlayerRepo, passwordHasher: IPasswordHasherRepo, tokenProvider: ITokenProv) {
        this.idRepo = idRepo;
        this.playerRepo = playerRepo;
        this.passwordHasher = passwordHasher;
        this.tokenProv = tokenProvider;
    }

    login = async(email:string, password: string):Promise<any> => {

        const player: Player = await this.playerRepo.getByEmail(email);
        if (!player) throw Error("Email doesn't exists!");

        if(!this.passwordHasher.compare(player.password,password)) throw Error("Password incorrect!");
        if (password === 'google' || password === 'facebook'){
            throw Error('Password incorrect!');
        }
        // @ts-ignore
        return {
            token: this.tokenProv.loginPlayer(email,player.id),
            id: player.id,
        };
    }

    idpLogin = async(service: string, email: string, fullName: string) : Promise<any> => {
        const player: Player = await this.playerRepo.getByEmail(email);
        if (!player){
            const newPlayer: PlayerDB = new PlayerDB(this.idRepo.generateId(),email,true, fullName, service, "0", "");
            this.playerRepo.addPlayer(newPlayer);
        }else if (player.password === 'google' || player.password === 'facebook'){
            throw Error('Cant sign in with an already used email');
        }else{
            return {
                token: this.tokenProv.loginPlayer(email,player.id),
                id: player.id,
            }
        }
    }
}