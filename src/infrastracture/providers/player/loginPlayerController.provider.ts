import {ABMPlayerController} from "../../../application/controllers/player/abmPlayer.controller";
import {IIdRepo} from "../../../domain/repositories/id.repository";
import IdGenerator from "../../services/idGenerator";
import {IPlayerRepo} from "../../../domain/repositories/player.repository";
import {PlayerDAO} from "../../repositories/playerDAO";
import {IPasswordHasherRepo} from "../../../domain/repositories/passwordhasher.respository";
import {PasswordHasherImpl} from "../../services/passwordHasherImpl.service";
import {ABMPlayerService} from "../../../domain/services/player/abmPlayer.service";
import {LoginPlayerController} from "../../../application/controllers/player/loginPlayer.controller";
import {LoginPlayerService} from "../../../domain/services/player/loginPlayer.service";
import {ITokenProv} from "../../../domain/repositories/token.repository";
import {TokenProv} from "../../services/TokenProv";

export class LoginPlayerControllerProvider {
    private static _loginPlayerController: LoginPlayerController;

    static createController(): LoginPlayerController{
        const playerRepository: IPlayerRepo = new PlayerDAO();
        const passwordHasher: IPasswordHasherRepo = new PasswordHasherImpl();
        const tokenProv: ITokenProv = new TokenProv();

        const loginPlayerService: LoginPlayerService = new LoginPlayerService(playerRepository, passwordHasher, tokenProv);
        return new LoginPlayerController(loginPlayerService);
    }

    static getController(): LoginPlayerController{
        if(!this._loginPlayerController){
            this._loginPlayerController = this.createController();
        }
        return this._loginPlayerController;
    }

}