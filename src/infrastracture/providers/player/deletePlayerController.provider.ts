import {IPlayerRepo} from "../../../domain/repositories/player.repository";
import {PlayerDAO} from "../../repositories/playerDAO";
import {DeletePlayerController} from "../../../application/controllers/player/deletePlayer.controller";
import {DeletePlayerService} from "../../../domain/services/player/deletePlayer.service";

export class DeletePlayerControllerProvider{
    private static _deletePlayerController: DeletePlayerController;

    private static _createController(): DeletePlayerController{
        const playersRepo: IPlayerRepo = new PlayerDAO();
        const deletePlayerService: DeletePlayerService = new DeletePlayerService(playersRepo);
        return new DeletePlayerController(deletePlayerService);
    }

    static getController(): DeletePlayerController{
        if(!this._deletePlayerController){
            this._deletePlayerController = this._createController();
        }
        return this._deletePlayerController;
    }
}