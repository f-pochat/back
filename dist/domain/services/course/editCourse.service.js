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
exports.EditCourseService = void 0;
const course_modeldb_1 = require("../../modelsDB/course/course.modeldb");
const hole_modeldb_1 = require("../../modelsDB/course/hole.modeldb");
class EditCourseService {
    constructor(courseRepo, idRepo, holeRepo) {
        this.editCourse = (id, name, creator, description, location, holes) => __awaiter(this, void 0, void 0, function* () {
            if (name.length < 1)
                throw Error("Name not valid!");
            if (description.length < 1)
                throw Error("Description not valid!");
            // @ts-ignore
            //if (holes.length !== 9 || holes.length !== 18) throw Error("Num of holes not valid!")
            holes.map(hole => {
                this.holeRepo.editHole(hole.id, new hole_modeldb_1.HoleDB(hole.id, hole.num, hole.par, hole.scoringIndex, hole.distance, hole.locationTeebox.lat, hole.locationTeebox.long, hole.locationMiddleOfGreen.lat, hole.locationMiddleOfGreen.long, id));
            });
            return this.courseRepo.editCourse(id, new course_modeldb_1.CourseDB(id, name, creator, description, location.lat, location.long));
        });
        this.courseRepo = courseRepo;
        this.holeRepo = holeRepo;
        this.idRepo = idRepo;
    }
}
exports.EditCourseService = EditCourseService;
