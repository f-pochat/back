import {AddCourseService} from "../../../domain/services/course/addCourse.service";
import {Loc} from "../../../domain/models/course/location.model";
import {Hole} from "../../../domain/models/course/hole.model";
import {Course} from "../../../domain/models/course/course.model";
import {EditCourseService} from "../../../domain/services/course/editCourse.service";

export class EditCourseController{
    private editCourseService: EditCourseService;


    constructor(editCourseService: EditCourseService) {
        this.editCourseService = editCourseService;
    }

    async editCourse(id: string, name: string, creator: string, description: string, location: Loc, holes: Hole[]): Promise<Course>{
        return await this.editCourseService.editCourse(id, name,creator,description,location,holes);
    }
}