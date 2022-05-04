import {AddAdminService} from "../../../domain/services/admin/addAdmin.service";
import {Admin} from "../../../domain/models/admin.model";
import {Player} from "../../../domain/models/player.model";
import {AddPlayerService} from "../../../domain/services/player/addPlayer.service";
import {DeletePlayerService} from "../../../domain/services/player/deletePlayer.service";

export class DeletePlayerController {

    private _deletePlayerService: DeletePlayerService;


    constructor(deletePlayerService: DeletePlayerService) {
        this._deletePlayerService = deletePlayerService;
    }

    async deletePlayer(id: string): Promise<void>{
        return this._deletePlayerService.delete(id);
    }
}