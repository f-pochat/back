// @ts-ignore
import {getRepository} from "typeorm";
import {ICourseRepo} from "../../domain/repositories/course/course.repository";
import {CourseDB} from "../../domain/modelsDB/course/course.modeldb";

export class CourseDAO implements ICourseRepo {
    repo = getRepository(CourseDB, "db");

    //@ts-ignore
    addCourse = (course: CourseDB): void => {
        this.repo.save(course).then(r => r);
    };
}