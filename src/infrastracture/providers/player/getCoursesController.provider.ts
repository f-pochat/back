import {ICourseRepo} from "../../../domain/repositories/course/course.repository";
import {CourseDAO} from "../../repositories/course/courseDAO";
import {GetCourseController} from "../../../application/controllers/player/getCourse.controller";
import {GetCourseService} from "../../../domain/services/player/getCourse.service";

export class GetCoursesControllerProvider{

    private static _getCoursesController: GetCourseController;

    static createController(): GetCourseController{
        // @ts-ignore
        const courseRepository: ICourseRepo = new CourseDAO();

        const getCourseService: GetCourseService = new GetCourseService(courseRepository);
        return new GetCourseController(getCourseService);
    }

    static getController(): GetCourseController{
        if(!this._getCoursesController){
            this._getCoursesController = this.createController();
        }
        return this._getCoursesController;
    }
}