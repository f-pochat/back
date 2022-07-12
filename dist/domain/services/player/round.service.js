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
        this.newRound = (userId, courseId) => __awaiter(this, void 0, void 0, function* () {
            /*
            //Check by ID
            const player: Player = await this.playerRepo.getByEmail(email);
            if (!player) throw Error("Email doesn't exists!");
            */
            return this.roundRepo.newRound(userId, courseId, new Date(Date.now()));
        });
        this.addHole = (playerId, courseId, num, score, putts, fairway) => __awaiter(this, void 0, void 0, function* () {
            return this.roundRepo.addHole(playerId, courseId, num, score, putts, fairway);
        });
        this.saveRound = (playerId) => __awaiter(this, void 0, void 0, function* () {
            return this.roundRepo.saveRound(playerId);
        });
        this.deleteRound = (playerId) => __awaiter(this, void 0, void 0, function* () {
            return this.roundRepo.deleteRound(playerId);
        });
        this.getRoundsByPlayer = (id) => __awaiter(this, void 0, void 0, function* () {
            const rounds = yield this.roundRepo.getRoundsByPlayer(id);
            const allRoundsByPlayer = [];
            rounds.map(r => {
                allRoundsByPlayer.push(new Round_model_1.Round(r._id, r.userId, r.courseId, r.playedAt, r.playedHoles));
            });
            return allRoundsByPlayer;
        });
        this.getRoundsByCourse = (id) => __awaiter(this, void 0, void 0, function* () {
            const rounds = yield this.roundRepo.getRoundsByCourse(id);
            const allRoundsByCourse = [];
            rounds.map((r) => {
                allRoundsByCourse.push(new Round_model_1.Round(r._id, r.userId, r.courseId, r.playedAt, r.playedHoles));
            });
            return allRoundsByCourse;
        });
        this.getOngoingRound = (id) => __awaiter(this, void 0, void 0, function* () {
            const round = yield this.roundRepo.getOngoingRound(id);
            return new Round_model_1.Round(round._id, round.userId, round.courseId, round.playedAt, round.playedHoles);
        });
        this.getRoundById = (id) => __awaiter(this, void 0, void 0, function* () {
            const round = yield this.roundRepo.getRoundById(id);
            return new Round_model_1.Round(round._id, round.userId, round.courseId, round.playedAt, round.playedHoles);
        });
        this.roundRepo = roundRepo;
    }
}
exports.RoundService = RoundService;
