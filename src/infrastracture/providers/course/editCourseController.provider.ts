import {ICourseRepo} from "../../../domain/repositories/course/course.repository";
import {CourseDAO} from "../../repositories/course/courseDAO";
import {IHoleRepo} from "../../../domain/repositories/course/hole.repository";
import {HoleDAO} from "../../repositories/course/holeDAO";
import {IIdRepo} from "../../../domain/repositories/id.repository";
import IdGenerator from "../../services/idGenerator";
import {EditCourseController} from "../../../application/controllers/course/editCourse.controller";
import {EditCourseService} from "../../../domain/services/course/editCourse.service";

export class EditCourseControllerProvider{

    private static editCourseController: EditCourseController;

    static createController(): EditCourseController{

        //@ts-ignore
        const courseRepository: ICourseRepo = new CourseDAO();
        // @ts-ignore
        const holeRepository: IHoleRepo = new HoleDAO();
        const idRepository: IIdRepo = new IdGenerator();

        const editCourseService: EditCourseService = new EditCourseService(courseRepository, idRepository, holeRepository);
        return new EditCourseController(editCourseService);
    }

    static getController(): EditCourseController{
        if(!this.editCourseController){
            this.editCourseController = this.createController();
        }
        return this.editCourseController;
    }
}