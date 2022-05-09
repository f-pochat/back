import {ICourseRepo} from "../../../domain/repositories/course/course.repository";
import {CourseDAO} from "../../repositories/course/courseDAO";
import {GetcoursesController} from "../../../application/controllers/course/getcourses.controller";
import {GetCoursesService} from "../../../domain/services/course/getCourses.service";
import {IHoleRepo} from "../../../domain/repositories/course/hole.repository";
import {HoleDAO} from "../../repositories/course/holeDAO";

export class GetCoursesControllerProvider{

    private static getCoursesController: GetcoursesController;

    static createController(): GetcoursesController{

        //@ts-ignore
        const courseRepository: ICourseRepo = new CourseDAO();
        // @ts-ignore
        const holeRepository: IHoleRepo = new HoleDAO();

        const getCourseService: GetCoursesService = new GetCoursesService(courseRepository, holeRepository);
        return new GetcoursesController(getCourseService);
    }

    static getController(): GetcoursesController{
        if(!this.getCoursesController){
            this.getCoursesController = this.createController();
        }
        return this.getCoursesController;
    }
}