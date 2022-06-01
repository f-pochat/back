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
exports.CourseDAO = void 0;
// @ts-ignore
const typeorm_1 = require("typeorm");
const course_modeldb_1 = require("../../../domain/modelsDB/course/course.modeldb");
const deleteCourseController_provider_1 = require("../../providers/course/deleteCourseController.provider");
class CourseDAO {
    constructor() {
        this.repo = (0, typeorm_1.getRepository)(course_modeldb_1.CourseDB, "db");
        //@ts-ignore
        this.addCourse = (course) => {
            this.repo.save(course).then(r => r);
        };
        this.deleteCourse = (id) => {
            // @ts-ignore
            this.repo.update(id, { isActive: false }).then(r => r);
            deleteCourseController_provider_1.DeleteCourseControllerProvider.getController().deleteHoles(id).then(r => r);
        };
    }
    //@ts-ignore
    editCourse(id, course) {
        this.repo.update(id, course).then(r => r);
    }
    getCourses() {
        return __awaiter(this, void 0, void 0, function* () {
            return yield this.repo.find({
                where: {
                    isActive: true,
                }
            });
        });
    }
    getCourse(id) {
        return __awaiter(this, void 0, void 0, function* () {
            // @ts-ignore
            return this.repo.findOne({
                where: {
                    id: id,
                    isActive: true,
                }
            });
        });
    }
    getAllCoursesDemo() {
        return __awaiter(this, void 0, void 0, function* () {
            return yield this.repo.find({
                select: {
                    id: true,
                    name: true,
                    locationLat: true,
                    locationLong: true,
                },
                where: {
                    isActive: true,
                },
            });
        });
    }
}
exports.CourseDAO = CourseDAO;
