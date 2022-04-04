import {AddCourseService} from "../../../domain/services/course/addCourse.service";
import {Course} from "../../../domain/models/course/course.model";
import {Hole} from "../../../domain/models/course/hole.model";
import {Loc} from "../../../domain/models/course/location.model";


export class AddCourseController {

    private addCourseService: AddCourseService;


    constructor(addCourseService: AddCourseService) {
        this.addCourseService = addCourseService;
    }

    async addCourse(name: string, creator: string, description: string, location: Loc, holes: Hole[]): Promise<Course>{
        return await this.addCourseService.addCourse(name,creator,description,location,holes);
    }
}