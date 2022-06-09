"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.PlayedHole = exports.Round = void 0;
class Round {
    constructor(id, playerId, courseId, playDate, playedHoles) {
        this.id = id;
        this.playerId = playerId;
        this.courseId = courseId;
        this.playDate = playDate;
        this.playedHoles = playedHoles;
    }
}
exports.Round = Round;
class PlayedHole {
    constructor(num, score, putts, fairway) {
        this.num = num;
        this.score = score;
        this.putts = putts;
        this.fairway = fairway;
    }
}
exports.PlayedHole = PlayedHole;
