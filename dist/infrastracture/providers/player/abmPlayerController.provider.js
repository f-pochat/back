"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.ABMPlayerControllerProvider = void 0;
const idGenerator_1 = __importDefault(require("../../services/idGenerator"));
const playerDAO_1 = require("../../repositories/playerDAO");
const passwordHasherImpl_service_1 = require("../../services/passwordHasherImpl.service");
const abmPlayer_controller_1 = require("../../../application/controllers/player/abmPlayer.controller");
const abmPlayer_service_1 = require("../../../domain/services/player/abmPlayer.service");
class ABMPlayerControllerProvider {
    static createController() {
        const idRepo = new idGenerator_1.default();
        const playerRepository = new playerDAO_1.PlayerDAO();
        const passwordHasher = new passwordHasherImpl_service_1.PasswordHasherImpl();
        const abmPlayerService = new abmPlayer_service_1.ABMPlayerService(idRepo, playerRepository, passwordHasher);
        return new abmPlayer_controller_1.ABMPlayerController(abmPlayerService);
    }
    static getController() {
        if (!this._abmPlayerController) {
            this._abmPlayerController = this.createController();
        }
        return this._abmPlayerController;
    }
}
exports.ABMPlayerControllerProvider = ABMPlayerControllerProvider;
