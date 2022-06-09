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
exports.RoundService = void 0;
const Round_model_1 = require("../../models/Round.model");
class RoundService {
    constructor(roundRepo) {
        this.saveRound = (courseId, userId, playedHoles) => __awaiter(this, void 0, void 0, function* () {
            /*
            //Check by ID
            const player: Player = await this.playerRepo.getByEmail(email);
            if (!player) throw Error("Email doesn't exists!");
            */
            return this.roundRepo.saveRound(courseId, userId, new Date(Date.now()), playedHoles);
        });
        this.getRoundsByPlayer = (id) => __awaiter(this, void 0, void 0, function* () {
            const rounds = yield this.roundRepo.getRoundsByPlayer(id);
            const allRoundsByPlayer = [];
            rounds.map(r => {
                allRoundsByPlayer.push(new Round_model_1.Round(r._id, r.userId, r.courseId, r.playedAt, r.playedHoles));
            });
            return allRoundsByPlayer;
        });
        this.roundRepo = roundRepo;
    }
}
exports.RoundService = RoundService;
