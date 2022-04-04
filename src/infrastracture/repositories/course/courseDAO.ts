// @ts-ignore
import {getRepository} from "typeorm";
import {ICourseRepo} from "../../../domain/repositories/course/course.repository";
import {CourseDB} from "../../../domain/modelsDB/course/course.modeldb";
import {AddCourseController} from "../../../application/controllers/course/addcourse.controller";
import {AddCourseControllerProvider} from "../../providers/course/addCourseController.provider";
import {DeleteCourseControllerProvider} from "../../providers/course/deleteCourseController.provider";

export class CourseDAO implements ICourseRepo {
    repo = getRepository(CourseDB, "db");

    //@ts-ignore
    addCourse = (course: CourseDB): void => {
        this.repo.save(course).then(r => r);
    };

    deleteCourse = (id: string): void => {
        // @ts-ignore
        this.repo.update(id,{isActive:false}).then(r => r);

        DeleteCourseControllerProvider.getController().deleteHoles(id).then(r => r);
    }
}