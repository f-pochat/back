
import {IIdRepo} from "../../../domain/repositories/id.repository";
import IdGenerator from "../../services/idGenerator";
import {IPlayerRepo} from "../../../domain/repositories/player.repository";
import {PlayerDAO} from "../../repositories/playerDAO";
import {IPasswordHasherRepo} from "../../../domain/repositories/passwordhasher.respository";
import {PasswordHasherImpl} from "../../services/passwordHasherImpl.service";

import {ABMPlayerController} from "../../../application/controllers/player/abmPlayer.controller";
import {ABMPlayerService} from "../../../domain/services/player/abmPlayer.service";

export class ABMPlayerControllerProvider{

    private static _abmPlayerController: ABMPlayerController;

    static createController(): ABMPlayerController{
        const idRepo: IIdRepo = new IdGenerator();
        const playerRepository: IPlayerRepo = new PlayerDAO();
        const passwordHasher: IPasswordHasherRepo = new PasswordHasherImpl();

        const abmPlayerService: ABMPlayerService = new ABMPlayerService(idRepo, playerRepository, passwordHasher);
        return new ABMPlayerController(abmPlayerService);
    }

    static getController(): ABMPlayerController{
        if(!this._abmPlayerController){
            this._abmPlayerController = this.createController();
        }
        return this._abmPlayerController;
    }
}