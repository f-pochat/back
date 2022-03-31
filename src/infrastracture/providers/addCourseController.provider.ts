import {AddAdminController} from "../../application/controllers/addadmin.controller";
import {ICourseRepo} from "../../domain/repositories/course/course.repository";
import {AddCourseService} from "../../domain/services/addCourse.service";
import {CourseDAO} from "../repositories/courseDAO";
import {AddCourseController} from "../../application/controllers/addcourse.controller";
import {IIdRepo} from "../../domain/repositories/id.repository";
import IdGenerator from "../services/idGenerator";
import {IHoleRepo} from "../../domain/repositories/course/hole.repository";
import {ITeeboxRepo} from "../../domain/repositories/course/teebox.repository";
import {HoleDAO} from "../repositories/holeDAO";
import {TeeboxDAO} from "../repositories/teeboxDAO";

export class AddCourseControllerProvider{

    private static addCourseController: AddCourseController;

    static createController(): AddCourseController{

        //@ts-ignore
        const courseRepository: ICourseRepo = new CourseDAO();
        // @ts-ignore
        const holeRepository: IHoleRepo = new HoleDAO();
        // @ts-ignore
        const teeboxRepository: ITeeboxRepo = new TeeboxDAO();
        const idRepository: IIdRepo = new IdGenerator();

        const addCourseService: AddCourseService = new AddCourseService(courseRepository, idRepository, holeRepository, teeboxRepository);
        return new AddCourseController(addCourseService);
    }

    static getController(): AddCourseController{
        if(!this.addCourseController){
            this.addCourseController = this.createController();
        }
        return this.addCourseController;
    }
}