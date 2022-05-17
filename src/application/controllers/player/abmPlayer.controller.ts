
import {Player} from "../../../domain/models/player.model";
import {ABMPlayerService} from "../../../domain/services/player/abmPlayer.service";

export class ABMPlayerController {
    private _abmPlayerService: ABMPlayerService;

    constructor(abmPlayerService: ABMPlayerService) {
        this._abmPlayerService = abmPlayerService;
    }

    async addPlayer(email: string, username: string, password: string): Promise<Player>{
        if (username.length < 1) throw new Error("User not valid!");
        if (password.length < 8) throw new Error("Password must be more than 7 characters!");

        if (!/^[a-zA-Z0-9.!#$%&’+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)$/.test(email)){
            throw Error('Invalid email');
        }

        return await this._abmPlayerService.register(email,username,password);
    }

    async deletePlayer(id: string): Promise<void>{
        return this._abmPlayerService.delete(id);
    }

    async editPlayer(id: string, email: string, username: string, password: string, handicap: number, photo: string): Promise<void> {
        if (!/^[a-zA-Z0-9.!#$%&’+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)$/.test(email)){
            throw Error('Invalid email');
        }
        if (username.length < 1) throw new Error("User not valid!");
        if (password.length < 8) throw new Error("Password must be more than 7 characters!");

        await this._abmPlayerService.edit(id, new Player(id, email, username, password, handicap, photo));
    }
}