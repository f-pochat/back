import {ICourseRepo} from "../../repositories/course/course.repository";
import {CourseDB} from "../../modelsDB/course/course.modeldb";
import {HoleDB} from "../../modelsDB/course/hole.modeldb";
import {IHoleRepo} from "../../repositories/course/hole.repository";

export class GetCoursesService{
    private courseRepo: ICourseRepo;
    private holeRepo: IHoleRepo;


    constructor(courseRepo: ICourseRepo, holeRepo: IHoleRepo) {
        this.courseRepo = courseRepo;
        this.holeRepo = holeRepo;
    }

    getCourses = async ():Promise<CourseDB[]> => {
        return await this.courseRepo.getCourses()
    }

    getCourse = async(id: string):Promise<any> => {
        const course: CourseDB = await this.courseRepo.getCourse(id);
        const holes: HoleDB[] = await this.holeRepo.getHoles(id);
        const holesList: any[] = [];
        holes.map(hole => {
            holesList.push({
                id: hole.id,
                num: hole.num,
                par: hole.par,
                scoringIndex: hole.scoringIndex,
                locationTeebox: {lat: hole.locationTeeboxLat, long: hole.locationTeeboxLong},
                locationMiddleOfGreen: {lat:hole.locationGreenLat, long: hole.locationGreenLong},
            })
        })
        return {
            id: course.id,
            name: course.name,
            creator: course.name,
            description: course.description,
            location: {lat: course.locationLat, long: course.locationLong},
            holes: holesList,
        };
    }
}