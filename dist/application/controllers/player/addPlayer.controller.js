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
exports.AddPlayerController = void 0;
const player_model_1 = require("../../../domain/models/player.model");
class AddPlayerController {
    constructor(addPlayerService) {
        this.addPlayerService = addPlayerService;
    }
    addPlayer(email, username, password) {
        return __awaiter(this, void 0, void 0, function* () {
            if (username.length < 1)
                throw new Error("User not valid!");
            if (password.length < 8)
                throw new Error("Password must be more than 7 characters!");
            /*
            TODO Implement email regex verification
             */
            if (email.length < 1)
                throw new Error("Email not valid!");
            return yield this.addPlayerService.register(new player_model_1.Player(email, username, password));
        });
    }
}
exports.AddPlayerController = AddPlayerController;
