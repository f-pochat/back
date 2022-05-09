// @ts-ignore
import {getRepository} from "typeorm";
import {ICourseRepo} from "../../../domain/repositories/course/course.repository";
import {CourseDB} from "../../../domain/modelsDB/course/course.modeldb";
import {DeleteCourseControllerProvider} from "../../providers/course/deleteCourseController.provider";

export class CourseDAO implements ICourseRepo {
    repo = getRepository(CourseDB, "db");

    //@ts-ignore
    addCourse = (course: CourseDB): void => {
        this.repo.save(course).then(r => r);
    };

    //@ts-ignore
    editCourse(id: string, course: CourseDB): void {
        this.repo.update(id, course).then(r => r);
    }

    deleteCourse = (id: string): void => {
        // @ts-ignore
        this.repo.update(id,{isActive:false}).then(r => r);

        DeleteCourseControllerProvider.getController().deleteHoles(id).then(r => r);
    }

    async getCourses(): Promise<CourseDB[]> {
        return await this.repo.find({
            where:{
                isActive:true,
            }
        });
    }

    async getCourse(id: string): Promise<CourseDB> {
        // @ts-ignore
        return this.repo.findOne({
            where:{
                id:id,
                isActive:true,
            }
        });
    }

    async getAllCoursesDemo() : Promise<any[]> {
        return await this.repo.find({
            select:{
              id:true,
              name:true,
              locationLat:true,
              locationLong:true,
            },
            where:{
                isActive:true,
            },
        });
    }
}