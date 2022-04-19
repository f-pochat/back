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

export class AddPlayerControllerProvider{

    private static addPlayerController: AddPlayerController;

    static createController(): AddPlayerController{
        const playerRepository: IPlayerRepo = new PlayerDAO();
        const passwordHasher: IPasswordHasherRepo = new PasswordHasherImpl();

        const addPlayerService: AddPlayerService = new AddPlayerService(playerRepository, passwordHasher);
        return new AddPlayerController(addPlayerService);
    }

    static getController(): AddPlayerController{
        if(!this.addPlayerController){
            this.addPlayerController = this.createController();
        }
        return this.addPlayerController;
    }
}