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
exports.AddCourseService = void 0;
const course_modeldb_1 = require("../../modelsDB/course/course.modeldb");
const hole_modeldb_1 = require("../../modelsDB/course/hole.modeldb");
const teebox_modeldb_1 = require("../../modelsDB/course/teebox.modeldb");
class AddCourseService {
    constructor(courseRepo, idRepo, holeRepo, teeboxRepo) {
        this.addCourse = (name, creator, description, location, holes) => __awaiter(this, void 0, void 0, function* () {
            if (name.length < 1)
                throw Error("Name not valid!");
            if (description.length < 1)
                throw Error("Description not valid!");
            // @ts-ignore
            //if (holesList.length !== 9 || holesList.length !== 18) throw Error("Num of holes not valid!")
            const courseId = this.idRepo.generateId();
            holes.map(hole => {
                const holeId = this.idRepo.generateId();
                this.holeRepo.addHole(new hole_modeldb_1.HoleDB(holeId, hole.num, hole.locationMiddleOfFW.lat, hole.locationMiddleOfFW.long, hole.locationMiddleOfGreen.lat, hole.locationMiddleOfGreen.long, courseId));
                hole.teeboxes.map(t => {
                    this.teeboxRepo.addTeebox(new teebox_modeldb_1.TeeboxDB(this.idRepo.generateId(), t.name, t.color, t.locationTeeBox.lat, t.locationTeeBox.long, t.par, t.scoringIndex, holeId));
                });
            });
            return this.courseRepo.addCourse(new course_modeldb_1.CourseDB(courseId, name, creator, description, location.lat, location.long));
        });
        this.courseRepo = courseRepo;
        this.holeRepo = holeRepo;
        this.teeboxRepo = teeboxRepo;
        this.idRepo = idRepo;
    }
}
exports.AddCourseService = AddCourseService;
