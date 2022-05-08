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
exports.AddPlayerService = void 0;
const player_modeldb_1 = require("../../modelsDB/player.modeldb");
class AddPlayerService {
    constructor(playerRepo, passwordHasher) {
        this.register = (player) => __awaiter(this, void 0, void 0, function* () {
            const duplicatePlayerEmail = yield this.playerRepo.getByEmail(player.email);
            if (duplicatePlayerEmail)
                throw Error("Email already exists!");
            const hashedPassword = this.passwordHasher.hash(player.password);
            const newPlayer = new player_modeldb_1.PlayerDB(player.email, player.username, hashedPassword);
            this.playerRepo.addPlayer(newPlayer);
            return newPlayer;
        });
        this.playerRepo = playerRepo;
        this.passwordHasher = passwordHasher;
    }
}
exports.AddPlayerService = AddPlayerService;
