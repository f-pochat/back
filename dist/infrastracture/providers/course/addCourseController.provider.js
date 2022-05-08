"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.AddCourseControllerProvider = void 0;
const addCourse_service_1 = require("../../../domain/services/course/addCourse.service");
const courseDAO_1 = require("../../repositories/course/courseDAO");
const addcourse_controller_1 = require("../../../application/controllers/course/addcourse.controller");
const idGenerator_1 = __importDefault(require("../../services/idGenerator"));
const holeDAO_1 = require("../../repositories/course/holeDAO");
const teeboxDAO_1 = require("../../repositories/course/teeboxDAO");
class AddCourseControllerProvider {
    static createController() {
        //@ts-ignore
        const courseRepository = new courseDAO_1.CourseDAO();
        // @ts-ignore
        const holeRepository = new holeDAO_1.HoleDAO();
        // @ts-ignore
        const teeboxRepository = new teeboxDAO_1.TeeboxDAO();
        const idRepository = new idGenerator_1.default();
        const addCourseService = new addCourse_service_1.AddCourseService(courseRepository, idRepository, holeRepository, teeboxRepository);
        return new addcourse_controller_1.AddCourseController(addCourseService);
    }
    static getController() {
        if (!this.addCourseController) {
            this.addCourseController = this.createController();
        }
        return this.addCourseController;
    }
}
exports.AddCourseControllerProvider = AddCourseControllerProvider;
