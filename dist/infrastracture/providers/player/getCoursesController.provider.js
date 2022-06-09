"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.GetCoursesControllerProvider = void 0;
const courseDAO_1 = require("../../repositories/course/courseDAO");
const getCourse_controller_1 = require("../../../application/controllers/player/getCourse.controller");
const getCourse_service_1 = require("../../../domain/services/player/getCourse.service");
class GetCoursesControllerProvider {
    static createController() {
        // @ts-ignore
        const courseRepository = new courseDAO_1.CourseDAO();
        const getCourseService = new getCourse_service_1.GetCourseService(courseRepository);
        return new getCourse_controller_1.GetCourseController(getCourseService);
    }
    static getController() {
        if (!this._getCoursesController) {
            this._getCoursesController = this.createController();
        }
        return this._getCoursesController;
    }
}
exports.GetCoursesControllerProvider = GetCoursesControllerProvider;
