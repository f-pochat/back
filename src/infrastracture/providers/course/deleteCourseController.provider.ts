import {AddAdminController} from "../../../application/controllers/admin/addadmin.controller";
import {ICourseRepo} from "../../../domain/repositories/course/course.repository";
import {AddCourseService} from "../../../domain/services/course/addCourse.service";
import {CourseDAO} from "../../repositories/course/courseDAO";
import {AddCourseController} from "../../../application/controllers/course/addcourse.controller";
import {IIdRepo} from "../../../domain/repositories/id.repository";
import IdGenerator from "../../services/idGenerator";
import {IHoleRepo} from "../../../domain/repositories/course/hole.repository";
import {ITeeboxRepo} from "../../../domain/repositories/course/teebox.repository";
import {HoleDAO} from "../../repositories/course/holeDAO";
import {TeeboxDAO} from "../../repositories/course/teeboxDAO";
import {DeleteCourseController} from "../../../application/controllers/course/deletecourse.controller";
import {DeleteCourseService} from "../../../domain/services/course/deleteCourse.service";

export class DeleteCourseControllerProvider{

    private static deleteCourseController: DeleteCourseController;

    static createController(): DeleteCourseController{

        //@ts-ignore
        const courseRepository: ICourseRepo = new CourseDAO();
        // @ts-ignore
        const holeRepository: IHoleRepo = new HoleDAO();
        // @ts-ignore
        const teeboxRepository: ITeeboxRepo = new TeeboxDAO();

        const deleteCourseService: DeleteCourseService = new DeleteCourseService(courseRepository, holeRepository, teeboxRepository);
        return new DeleteCourseController(deleteCourseService);
    }

    static getController(): DeleteCourseController{
        if(!this.deleteCourseController){
            this.deleteCourseController = this.createController();
        }
        return this.deleteCourseController;
    }
}