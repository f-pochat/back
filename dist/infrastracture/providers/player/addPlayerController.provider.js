"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.AddPlayerControllerProvider = void 0;
const passwordHasherImpl_service_1 = require("../../services/passwordHasherImpl.service");
const playerDAO_1 = require("../../repositories/playerDAO");
const addPlayer_controller_1 = require("../../../application/controllers/player/addPlayer.controller");
const addPlayer_service_1 = require("../../../domain/services/player/addPlayer.service");
class AddPlayerControllerProvider {
    static createController() {
        const playerRepository = new playerDAO_1.PlayerDAO();
        const passwordHasher = new passwordHasherImpl_service_1.PasswordHasherImpl();
        const addPlayerService = new addPlayer_service_1.AddPlayerService(playerRepository, passwordHasher);
        return new addPlayer_controller_1.AddPlayerController(addPlayerService);
    }
    static getController() {
        if (!this.addPlayerController) {
            this.addPlayerController = this.createController();
        }
        return this.addPlayerController;
    }
}
exports.AddPlayerControllerProvider = AddPlayerControllerProvider;
