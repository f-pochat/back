import {CourseDB} from "../../modelsDB/course/course.modeldb";
import {Course} from "../../models/course/course.model";


export interface ICourseRepo {
    addCourse(course: CourseDB): Course;
    deleteCourse(id: string): void;
}