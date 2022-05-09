import {IPlayerRepo} from "../../repositories/player.repository";
import {IPasswordHasherRepo} from "../../repositories/passwordhasher.respository";
import {Player} from "../../models/player.model";
import {ICourseRepo} from "../../repositories/course/course.repository";
import {Loc} from "../../models/course/location.model";

export class GetCourseService {
    private _courseRepo: ICourseRepo;


    constructor(courseRepo: ICourseRepo) {
        this._courseRepo = courseRepo;
    }

    getAllCoursesDemo = async():Promise<any[]> => {
        const courses = await this._courseRepo.getAllCoursesDemo();
        const coursesDemo: any[] = []

        for (const course of courses) {
            coursesDemo.push({
                id:course.id,
                name: course.name,
                locationLat:  course.locationLat,
                locationLong: course.locationLong,
            })
        }
        console.log(coursesDemo);
        return coursesDemo;
    }
}