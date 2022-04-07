import {AddCourseService} from "../../../domain/services/course/addCourse.service";
import {Course} from "../../../domain/models/course/course.model";
import {Hole} from "../../../domain/models/course/hole.model";
import {Loc} from "../../../domain/models/course/location.model";
import {GetCoursesService} from "../../../domain/services/course/getCourses.service";
import {CourseDB} from "../../../domain/modelsDB/course/course.modeldb";


export class GetcoursesController {

    private getCoursesService: GetCoursesService;


    constructor(getCourseService: GetCoursesService) {
        this.getCoursesService = getCourseService;
    }

    async getCourse(): Promise<CourseDB[]>{
        return await this.getCoursesService.getCourses();
    }
}