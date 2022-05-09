import {ICourseRepo} from "../../../domain/repositories/course/course.repository";
import {CourseDAO} from "../../repositories/course/courseDAO";
import {IHoleRepo} from "../../../domain/repositories/course/hole.repository";
import {HoleDAO} from "../../repositories/course/holeDAO";
import {DeleteCourseController} from "../../../application/controllers/course/deletecourse.controller";
import {DeleteCourseService} from "../../../domain/services/course/deleteCourse.service";

export class DeleteCourseControllerProvider{

    private static deleteCourseController: DeleteCourseController;

    static createController(): DeleteCourseController{

        //@ts-ignore
        const courseRepository: ICourseRepo = new CourseDAO();
        // @ts-ignore
        const holeRepository: IHoleRepo = new HoleDAO();

        const deleteCourseService: DeleteCourseService = new DeleteCourseService(courseRepository, holeRepository);
        return new DeleteCourseController(deleteCourseService);
    }

    static getController(): DeleteCourseController{
        if(!this.deleteCourseController){
            this.deleteCourseController = this.createController();
        }
        return this.deleteCourseController;
    }
}