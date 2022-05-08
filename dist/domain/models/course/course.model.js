"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Course = void 0;
class Course {
    constructor(id, name, creator, description, clubHouseLocation, holesList) {
        this.id = id;
        this.name = name;
        this.creator = creator;
        this.description = description;
        this.clubHouseLocation = clubHouseLocation;
        this.holesList = holesList;
    }
}
exports.Course = Course;
