import {AddAdminService} from "../../../domain/services/admin/addAdmin.service";
import {Admin} from "../../../domain/models/admin.model";
import {Player} from "../../../domain/models/player.model";
import {AddPlayerService} from "../../../domain/services/player/addPlayer.service";

export class AddPlayerController {

    private addPlayerService: AddPlayerService;


    constructor(addPlayerService: AddPlayerService) {
        this.addPlayerService = addPlayerService;
    }

    async addPlayer(email: string, username: string, password: string): Promise<Player>{
        if (username.length < 1) throw new Error("User not valid!");
        if (password.length < 8) throw new Error("Password must be more than 7 characters!");
        /*
        TODO Implement email regex verification
         */
        if (email.length < 1) throw new Error("Email not valid!");

        return await this.addPlayerService.register(new Player(email,username,password));
    }
}