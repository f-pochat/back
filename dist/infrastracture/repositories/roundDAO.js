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
exports.RoundDAO = void 0;
const Round = require('../../domain/modelsDB/round/round.modeldb');
const mongodb_1 = require("mongodb");
const ck = require('ckey');
class RoundDAO {
    saveRound(courseId, userId, playedAt, playedHoles) {
        return __awaiter(this, void 0, void 0, function* () {
            const round = new Round({ courseId: courseId, userId: userId, playedAt: playedAt, playedHoles: playedHoles });
            yield round.save();
        });
    }
    getRoundsByPlayer(id) {
        return __awaiter(this, void 0, void 0, function* () {
            const url = `mongodb+srv://golftrackmdb:${ck.MONGODB_PASSWORD}@cluster0.v6ntn.mongodb.net/?retryWrites=true&w=majority`;
            return new Promise((res, rej) => {
                mongodb_1.MongoClient.connect(url, (err, db) => __awaiter(this, void 0, void 0, function* () {
                    if (err)
                        throw err;
                    yield (db === null || db === void 0 ? void 0 : db.db().collection('rounds').find({ userId: id }).toArray((err, result) => {
                        if (err)
                            throw err;
                        // @ts-ignore
                        return res(result);
                    }));
                    db === null || db === void 0 ? void 0 : db.close();
                }));
            });
        });
    }
}
exports.RoundDAO = RoundDAO;
