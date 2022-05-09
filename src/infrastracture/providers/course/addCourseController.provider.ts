import {ICourseRepo} from "../../../domain/repositories/course/course.repository";
import {AddCourseService} from "../../../domain/services/course/addCourse.service";
import {CourseDAO} from "../../repositories/course/courseDAO";
import {AddCourseController} from "../../../application/controllers/course/addcourse.controller";
import {IIdRepo} from "../../../domain/repositories/id.repository";
import IdGenerator from "../../services/idGenerator";
import {IHoleRepo} from "../../../domain/repositories/course/hole.repository";
import {HoleDAO} from "../../repositories/course/holeDAO";

export class AddCourseControllerProvider{

    private static addCourseController: AddCourseController;

    static createController(): AddCourseController{

        //@ts-ignore
        const courseRepository: ICourseRepo = new CourseDAO();
        // @ts-ignore
        const holeRepository: IHoleRepo = new HoleDAO();
        const idRepository: IIdRepo = new IdGenerator();

        const addCourseService: AddCourseService = new AddCourseService(courseRepository, idRepository, holeRepository);
        return new AddCourseController(addCourseService);
    }

    static getController(): AddCourseController{
        if(!this.addCourseController){
            this.addCourseController = this.createController();
        }
        return this.addCourseController;
    }
}