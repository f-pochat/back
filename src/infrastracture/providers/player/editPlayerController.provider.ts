import {AddAdminController} from "../../../application/controllers/admin/addadmin.controller";
import {IAdminRepo} from "../../../domain/repositories/admin.repository";
import {IPasswordHasherRepo} from "../../../domain/repositories/passwordhasher.respository";
import {AddAdminService} from "../../../domain/services/admin/addAdmin.service";
import {AdminDAO} from "../../repositories/adminDAO";
import {PasswordHasherImpl} from "../../services/passwordHasherImpl.service";
import {PlayerDAO} from "../../repositories/playerDAO";
import {IPlayerRepo} from "../../../domain/repositories/player.repository";
import {AddPlayerController} from "../../../application/controllers/player/addPlayer.controller";
import {AddPlayerService} from "../../../domain/services/player/addPlayer.service";
import {EditPlayerController} from "../../../application/controllers/player/editPlayer.controller";
import {EditPlayerService} from "../../../domain/services/player/editPlayer.service";

export class EditPlayerControllerProvider{

    private static editPlayerController: EditPlayerController;

    static createController(): EditPlayerController{
        const playerRepository: IPlayerRepo = new PlayerDAO();
        const passwordHasher: IPasswordHasherRepo = new PasswordHasherImpl();

        const editPlayerService: EditPlayerService = new EditPlayerService(playerRepository, passwordHasher);
        return new EditPlayerController(editPlayerService);
    }

    static getController(): EditPlayerController{
        if(!this.editPlayerController){
            this.editPlayerController = this.createController();
        }
        return this.editPlayerController;
    }
}