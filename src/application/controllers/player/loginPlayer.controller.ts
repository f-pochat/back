import {ABMPlayerService} from "../../../domain/services/player/abmPlayer.service";
import {Player} from "../../../domain/models/player.model";
import {LoginPlayerService} from "../../../domain/services/player/loginPlayer.service";

export class LoginPlayerController{
    private _loginPlayerService: LoginPlayerService;

    constructor(loginPlayerService: LoginPlayerService) {
        this._loginPlayerService = loginPlayerService;
    }

    async loginPlayer(email: string, password: string): Promise<Player>{
        console.log("e" + email + "p" + password)
        if (password.length < 8) throw new Error("Password must be more than 7 characters!");

        if (!/^[a-zA-Z0-9.!#$%&’+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)$/.test(email)){
            throw Error('Invalid email');
        }

        return await this._loginPlayerService.login(email,password);
    }
}