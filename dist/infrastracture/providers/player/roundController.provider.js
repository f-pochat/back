"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.RoundControllerProvider = void 0;
const round_controller_1 = require("../../../application/controllers/player/round.controller");
const roundDAO_1 = require("../../repositories/roundDAO");
const round_service_1 = require("../../../domain/services/player/round.service");
class RoundControllerProvider {
    static createController() {
        const roundRepository = new roundDAO_1.RoundDAO();
        const roundService = new round_service_1.RoundService(roundRepository);
        return new round_controller_1.RoundController(roundService);
    }
    static getController() {
        if (!this._roundController) {
            this._roundController = this.createController();
        }
        return this._roundController;
    }
}
exports.RoundControllerProvider = RoundControllerProvider;
