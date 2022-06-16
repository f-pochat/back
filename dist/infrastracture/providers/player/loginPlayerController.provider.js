"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.LoginPlayerControllerProvider = void 0;
const playerDAO_1 = require("../../repositories/playerDAO");
const passwordHasherImpl_service_1 = require("../../services/passwordHasherImpl.service");
const loginPlayer_controller_1 = require("../../../application/controllers/player/loginPlayer.controller");
const loginPlayer_service_1 = require("../../../domain/services/player/loginPlayer.service");
const TokenProv_1 = require("../../services/TokenProv");
class LoginPlayerControllerProvider {
    static createController() {
        const playerRepository = new playerDAO_1.PlayerDAO();
        const passwordHasher = new passwordHasherImpl_service_1.PasswordHasherImpl();
        const tokenProv = new TokenProv_1.TokenProv();
        const loginPlayerService = new loginPlayer_service_1.LoginPlayerService(playerRepository, passwordHasher, tokenProv);
        return new loginPlayer_controller_1.LoginPlayerController(loginPlayerService);
    }
    static getController() {
        if (!this._loginPlayerController) {
            this._loginPlayerController = this.createController();
        }
        return this._loginPlayerController;
    }
}
exports.LoginPlayerControllerProvider = LoginPlayerControllerProvider;
