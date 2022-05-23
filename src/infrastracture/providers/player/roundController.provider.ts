import {RoundController} from "../../../application/controllers/player/round.controller";
import {IRoundRepo} from "../../../domain/repositories/round.repository";
import {RoundDAO} from "../../repositories/roundDAO";
import {RoundService} from "../../../domain/services/player/round.service";

export class RoundControllerProvider {
    private static _roundController: RoundController;

    static createController(): RoundController{
        const roundRepository: IRoundRepo = new RoundDAO();

        const roundService: RoundService = new RoundService(roundRepository);
        return new RoundController(roundService);
    }

    static getController(): RoundController{
        if(!this._roundController){
            this._roundController = this.createController();
        }
        return this._roundController;
    }

}