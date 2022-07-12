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
exports.RoundController = void 0;
class RoundController {
    constructor(roundService) {
        this._roundService = roundService;
    }
    newRound(userId, courseId) {
        return __awaiter(this, void 0, void 0, function* () {
            return yield this._roundService.newRound(userId, courseId);
        });
    }
    addHole(playerId, courseId, num, score, putts, fairway) {
        return __awaiter(this, void 0, void 0, function* () {
            return yield this._roundService.addHole(playerId, courseId, num, score, putts, fairway);
        });
    }
    getRoundsByPlayer(id) {
        return __awaiter(this, void 0, void 0, function* () {
            return yield this._roundService.getRoundsByPlayer(id);
        });
    }
    getRoundsByCourse(id) {
        return __awaiter(this, void 0, void 0, function* () {
            return yield this._roundService.getRoundsByCourse(id);
        });
    }
    saveRound(playerId) {
        return __awaiter(this, void 0, void 0, function* () {
            return this._roundService.saveRound(playerId);
        });
    }
    deleteRound(playerId) {
        return __awaiter(this, void 0, void 0, function* () {
            return this._roundService.deleteRound(playerId);
        });
    }
    getOngoingRound(id) {
        return __awaiter(this, void 0, void 0, function* () {
            return yield this._roundService.getOngoingRound(id);
        });
    }
    getRoundById(id) {
        return __awaiter(this, void 0, void 0, function* () {
            return yield this._roundService.getRoundById(id);
        });
    }
}
exports.RoundController = RoundController;
