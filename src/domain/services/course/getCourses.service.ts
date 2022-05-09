import {ICourseRepo} from "../../repositories/course/course.repository";
import {CourseDB} from "../../modelsDB/course/course.modeldb";

export class GetCoursesService{
    private courseRepo: ICourseRepo;


    constructor(courseRepo: ICourseRepo) {
        this.courseRepo = courseRepo;
    }

    getCourses = async ():Promise<CourseDB[]> => {
        return await this.courseRepo.getCourses()
    }

    getCourse = async(id: string):Promise<CourseDB> => {
        return await this.courseRepo.getCourse(id)
    }
}