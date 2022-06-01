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
exports.GetCoursesService = void 0;
class GetCoursesService {
    constructor(courseRepo, holeRepo) {
        this.getCourses = () => __awaiter(this, void 0, void 0, function* () {
            return yield this.courseRepo.getCourses();
        });
        this.getCourse = (id) => __awaiter(this, void 0, void 0, function* () {
            const course = yield this.courseRepo.getCourse(id);
            const holes = yield this.holeRepo.getHoles(id);
            const holesList = [];
            holes.map(hole => {
                holesList.push({
                    id: hole.id,
                    num: hole.num,
                    par: hole.par,
                    scoringIndex: hole.scoringIndex,
                    distance: hole.distance,
                    locationTeebox: { lat: hole.locationTeeboxLat, long: hole.locationTeeboxLong },
                    locationMiddleOfGreen: { lat: hole.locationGreenLat, long: hole.locationGreenLong },
                });
            });
            return {
                id: course.id,
                name: course.name,
                creator: course.name,
                description: course.description,
                location: { lat: course.locationLat, long: course.locationLong },
                holes: holesList,
            };
        });
        this.courseRepo = courseRepo;
        this.holeRepo = holeRepo;
    }
}
exports.GetCoursesService = GetCoursesService;
