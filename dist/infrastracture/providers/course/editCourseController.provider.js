"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.EditCourseControllerProvider = void 0;
const courseDAO_1 = require("../../repositories/course/courseDAO");
const holeDAO_1 = require("../../repositories/course/holeDAO");
const idGenerator_1 = __importDefault(require("../../services/idGenerator"));
const editCourse_controller_1 = require("../../../application/controllers/course/editCourse.controller");
const editCourse_service_1 = require("../../../domain/services/course/editCourse.service");
class EditCourseControllerProvider {
    static createController() {
        //@ts-ignore
        const courseRepository = new courseDAO_1.CourseDAO();
        // @ts-ignore
        const holeRepository = new holeDAO_1.HoleDAO();
        const idRepository = new idGenerator_1.default();
        const editCourseService = new editCourse_service_1.EditCourseService(courseRepository, idRepository, holeRepository);
        return new editCourse_controller_1.EditCourseController(editCourseService);
    }
    static getController() {
        if (!this.editCourseController) {
            this.editCourseController = this.createController();
        }
        return this.editCourseController;
    }
}
exports.EditCourseControllerProvider = EditCourseControllerProvider;
