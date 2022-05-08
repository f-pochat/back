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
exports.PlayerDAO = void 0;
const typeorm_1 = require("typeorm");
const player_modeldb_1 = require("../../domain/modelsDB/player.modeldb");
class PlayerDAO {
    constructor() {
        this.repo = (0, typeorm_1.getRepository)(player_modeldb_1.PlayerDB, "db");
    }
    addPlayer(player) {
        this.repo.save(player).then(r => r);
    }
    getByEmail(email) {
        return __awaiter(this, void 0, void 0, function* () {
            // @ts-ignore
            return yield this.repo.findOne(
            // @ts-ignore
            { where: { email: email }
            });
        });
    }
}
exports.PlayerDAO = PlayerDAO;
