"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.GetCoursesControllerProvider = void 0;
const courseDAO_1 = require("../../repositories/course/courseDAO");
const getcourses_controller_1 = require("../../../application/controllers/course/getcourses.controller");
const getCourses_service_1 = require("../../../domain/services/course/getCourses.service");
class GetCoursesControllerProvider {
    static createController() {
        //@ts-ignore
        const courseRepository = new courseDAO_1.CourseDAO();
        const getCourseService = new getCourses_service_1.GetCoursesService(courseRepository);
        return new getcourses_controller_1.GetcoursesController(getCourseService);
    }
    static getController() {
        if (!this.getCoursesController) {
            this.getCoursesController = this.createController();
        }
        return this.getCoursesController;
    }
}
exports.GetCoursesControllerProvider = GetCoursesControllerProvider;
