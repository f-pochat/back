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
const Round_model_1 = require("../../domain/models/Round.model");
const typeorm_1 = require("typeorm");
const course_modeldb_1 = require("../../domain/modelsDB/course/course.modeldb");
const ck = require('ckey');
class RoundDAO {
    constructor() {
        this.repo = (0, typeorm_1.getRepository)(course_modeldb_1.CourseDB, "db");
    }
    newRound(userId, courseId, playedAt) {
        return __awaiter(this, void 0, void 0, function* () {
            const round = new Round({ userId: userId, courseId: courseId, playedAt: playedAt, playedHoles: [] });
            yield round.save();
        });
    }
    addHole(playerId, courseId, num, score, putts, fairway) {
        return __awaiter(this, void 0, void 0, function* () {
            const url = `mongodb+srv://golftrackmdb:${ck.MONGODB_PASSWORD}@cluster0.v6ntn.mongodb.net/?retryWrites=true&w=majority`;
            const numOfHoles = yield this.repo.count({ where: { id: courseId } });
            const db = yield mongodb_1.MongoClient.connect(url);
            let round = yield (db === null || db === void 0 ? void 0 : db.db().collection('rounds').findOne({ userId: playerId, onGoing: true }));
            if (round === null)
                throw new Error('Round not found!');
            let holes = round.playedHoles;
            let index = -1;
            holes.forEach((h, i) => {
                if (h.num === num)
                    index = i;
            });
            if (index === -1) {
                yield (db === null || db === void 0 ? void 0 : db.db().collection('rounds').updateOne({ userId: playerId, onGoing: true }, { $push: { playedHoles: new Round_model_1.PlayedHole(num, score, putts, fairway) } }));
            }
            else {
                yield (db === null || db === void 0 ? void 0 : db.db().collection('rounds').updateOne({ userId: playerId, onGoing: true, "playedHoles.num": num }, { $set: { 'playedHoles.$.score': score } }));
                yield (db === null || db === void 0 ? void 0 : db.db().collection('rounds').updateOne({ userId: playerId, onGoing: true, "playedHoles.num": num }, { $set: { 'playedHoles.$.putts': putts } }));
                yield (db === null || db === void 0 ? void 0 : db.db().collection('rounds').updateOne({ userId: playerId, onGoing: true, "playedHoles.num": num }, { $set: { 'playedHoles.$.fairway': fairway } }));
            }
            //await db?.db().collection('rounds').findOne({userId: playerId, onGoing: true})
            //await db?.db().collection('rounds').updateOne({userId: playerId, onGoing: true}, {$push: {playedHoles: new PlayedHole(num, score, putts, fairway)}});
            yield (db === null || db === void 0 ? void 0 : db.close());
        });
    }
    saveRound(playerId) {
        return __awaiter(this, void 0, void 0, function* () {
            const url = `mongodb+srv://golftrackmdb:${ck.MONGODB_PASSWORD}@cluster0.v6ntn.mongodb.net/?retryWrites=true&w=majority`;
            const db = yield mongodb_1.MongoClient.connect(url);
            yield (db === null || db === void 0 ? void 0 : db.db().collection('rounds').updateOne({ userId: playerId, onGoing: true }, { $set: { onGoing: false } }));
        });
    }
    deleteRound(playerId) {
        return __awaiter(this, void 0, void 0, function* () {
            const url = `mongodb+srv://golftrackmdb:${ck.MONGODB_PASSWORD}@cluster0.v6ntn.mongodb.net/?retryWrites=true&w=majority`;
            const db = yield mongodb_1.MongoClient.connect(url);
            yield (db === null || db === void 0 ? void 0 : db.db().collection('rounds').deleteOne({ userId: playerId, onGoing: true }));
        });
    }
    //Get rounds by the id of the player
    getRoundsByPlayer(id) {
        return __awaiter(this, void 0, void 0, function* () {
            const url = `mongodb+srv://golftrackmdb:${ck.MONGODB_PASSWORD}@cluster0.v6ntn.mongodb.net/?retryWrites=true&w=majority`;
            return new Promise((res, rej) => {
                mongodb_1.MongoClient.connect(url, (err, db) => __awaiter(this, void 0, void 0, function* () {
                    if (err)
                        throw err;
                    yield (db === null || db === void 0 ? void 0 : db.db().collection('rounds').find({ userId: id, onGoing: false }).toArray((err, result) => {
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
    getRoundsByCourse(id) {
        return __awaiter(this, void 0, void 0, function* () {
            const url = `mongodb+srv://golftrackmdb:${ck.MONGODB_PASSWORD}@cluster0.v6ntn.mongodb.net/?retryWrites=true&w=majority`;
            return new Promise((res, rej) => {
                mongodb_1.MongoClient.connect(url, (err, db) => __awaiter(this, void 0, void 0, function* () {
                    if (err)
                        throw err;
                    yield (db === null || db === void 0 ? void 0 : db.db().collection('rounds').find({ courseId: id, onGoing: false }).toArray((err, result) => {
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
    getOngoingRound(id) {
        return __awaiter(this, void 0, void 0, function* () {
            const url = `mongodb+srv://golftrackmdb:${ck.MONGODB_PASSWORD}@cluster0.v6ntn.mongodb.net/?retryWrites=true&w=majority`;
            const db = yield mongodb_1.MongoClient.connect(url);
            const round = yield (db === null || db === void 0 ? void 0 : db.db().collection('rounds').findOne({ userId: id, onGoing: true }));
            return round;
        });
    }
    getRoundById(id) {
        return __awaiter(this, void 0, void 0, function* () {
            console.log(id);
            const ObjectId = require('mongodb').ObjectId;
            const url = `mongodb+srv://golftrackmdb:${ck.MONGODB_PASSWORD}@cluster0.v6ntn.mongodb.net/?retryWrites=true&w=majority`;
            const db = yield mongodb_1.MongoClient.connect(url);
            const round = yield (db === null || db === void 0 ? void 0 : db.db().collection('rounds').findOne({ _id: new ObjectId(id) }));
            return round;
        });
    }
}
exports.RoundDAO = RoundDAO;
