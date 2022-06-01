"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Hole = void 0;
class Hole {
    constructor(id, num, par, scoringIndex, distance, locationTeebox, locationMiddleOfGreen, course) {
        this.id = id;
        this.num = num;
        this.par = par;
        this.scoringIndex = scoringIndex;
        this.distance = distance;
        this.locationTeebox = locationTeebox;
        this.locationMiddleOfGreen = locationMiddleOfGreen;
        this.course = course;
    }
}
exports.Hole = Hole;
