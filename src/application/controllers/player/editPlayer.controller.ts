import {AddAdminService} from "../../../domain/services/admin/addAdmin.service";
import {Admin} from "../../../domain/models/admin.model";
import {Player} from "../../../domain/models/player.model";
import {AddPlayerService} from "../../../domain/services/player/addPlayer.service";
import {EditPlayerService} from "../../../domain/services/player/editPlayer.service";

export class EditPlayerController {

    private editPlayerService: EditPlayerService;


    constructor(editPlayerService: EditPlayerService) {
        this.editPlayerService = editPlayerService;
    }

    async editPlayer(id: string, email: string, username: string, password: string, handicap: number, photo: string): Promise<void> {
        if (username.length < 1) throw new Error("User not valid!");
        if (password.length < 8) throw new Error("Password must be more than 7 characters!");

        if (!/^[a-zA-Z0-9.!#$%&’+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)$/.test(email)){
            throw Error('Invalid email');
        }

        this.editPlayerService.edit(id, new Player(id,email,username,password, handicap, photo));
    }
}