import {ICourseRepo} from "../../repositories/course/course.repository";
import {IIdRepo} from "../../repositories/id.repository";
import {IHoleRepo} from "../../repositories/course/hole.repository";
import {ITeeboxRepo} from "../../repositories/course/teebox.repository";
import {Hole} from "../../models/course/hole.model";
import {Course} from "../../models/course/course.model";
import {CourseDB} from "../../modelsDB/course/course.modeldb";
import {HoleDB} from "../../modelsDB/course/hole.modeldb";
import {TeeboxDB} from "../../modelsDB/course/teebox.modeldb";
import {Loc} from "../../models/course/location.model";

export class GetCoursesService{
    private courseRepo: ICourseRepo;


    constructor(courseRepo: ICourseRepo) {
        this.courseRepo = courseRepo;
    }

    getCourses = async ():Promise<CourseDB[]> => {

        return await this.courseRepo.getCourses()
    }
}