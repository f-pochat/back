import {AddAdminController} from "../../../application/controllers/admin/addadmin.controller";
import {ICourseRepo} from "../../../domain/repositories/course/course.repository";
import {AddCourseService} from "../../../domain/services/course/addCourse.service";
import {CourseDAO} from "../../repositories/course/courseDAO";
import {GetcoursesController} from "../../../application/controllers/course/getcourses.controller";
import {GetCoursesService} from "../../../domain/services/course/getCourses.service";

export class GetCoursesControllerProvider{

    private static getCoursesController: GetcoursesController;

    static createController(): GetcoursesController{

        //@ts-ignore
        const courseRepository: ICourseRepo = new CourseDAO();

        const getCourseService: GetCoursesService = new GetCoursesService(courseRepository);
        return new GetcoursesController(getCourseService);
    }

    static getController(): GetcoursesController{
        if(!this.getCoursesController){
            this.getCoursesController = this.createController();
        }
        return this.getCoursesController;
    }
}