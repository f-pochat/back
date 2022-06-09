"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.ABMPlayerController = void 0;
const player_model_1 = require("../../../domain/models/player.model");
class ABMPlayerController {
    constructor(abmPlayerService) {
        this._abmPlayerService = abmPlayerService;
    }
    addPlayer(email, username, password) {
        return __awaiter(this, void 0, void 0, function* () {
            if (username.length < 1)
                throw new Error("User not valid!");
            if (password.length < 8)
                throw new Error("Password must be more than 7 characters!");
            if (!/^[a-zA-Z0-9.!#$%&’+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)$/.test(email)) {
                throw Error('Invalid email');
            }
            return yield this._abmPlayerService.register(email, username, password);
        });
    }
    deletePlayer(id) {
        return __awaiter(this, void 0, void 0, function* () {
            return this._abmPlayerService.delete(id);
        });
    }
    editPlayer(id, email, username, password, handicap, photo) {
        return __awaiter(this, void 0, void 0, function* () {
            if (!/^[a-zA-Z0-9.!#$%&’+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)$/.test(email)) {
                throw Error('Invalid email');
            }
            if (username.length < 1)
                throw new Error("User not valid!");
            if (password.length < 8)
                throw new Error("Password must be more than 7 characters!");
            yield this._abmPlayerService.edit(id, new player_model_1.Player(id, email, username, password, handicap, photo));
        });
    }
    getPlayer(id) {
        return __awaiter(this, void 0, void 0, function* () {
            return this._abmPlayerService.getPlayer(id);
        });
    }
}
exports.ABMPlayerController = ABMPlayerController;
