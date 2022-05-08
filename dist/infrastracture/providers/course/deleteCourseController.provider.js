"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.DeleteCourseControllerProvider = void 0;
const courseDAO_1 = require("../../repositories/course/courseDAO");
const holeDAO_1 = require("../../repositories/course/holeDAO");
const teeboxDAO_1 = require("../../repositories/course/teeboxDAO");
const deletecourse_controller_1 = require("../../../application/controllers/course/deletecourse.controller");
const deleteCourse_service_1 = require("../../../domain/services/course/deleteCourse.service");
class DeleteCourseControllerProvider {
    static createController() {
        //@ts-ignore
        const courseRepository = new courseDAO_1.CourseDAO();
        // @ts-ignore
        const holeRepository = new holeDAO_1.HoleDAO();
        // @ts-ignore
        const teeboxRepository = new teeboxDAO_1.TeeboxDAO();
        const deleteCourseService = new deleteCourse_service_1.DeleteCourseService(courseRepository, holeRepository, teeboxRepository);
        return new deletecourse_controller_1.DeleteCourseController(deleteCourseService);
    }
    static getController() {
        if (!this.deleteCourseController) {
            this.deleteCourseController = this.createController();
        }
        return this.deleteCourseController;
    }
}
exports.DeleteCourseControllerProvider = DeleteCourseControllerProvider;
