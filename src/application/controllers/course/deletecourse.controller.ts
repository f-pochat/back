import {AddCourseService} from "../../../domain/services/course/addCourse.service";
import {Course} from "../../../domain/models/course/course.model";
import {Hole} from "../../../domain/models/course/hole.model";
import {Loc} from "../../../domain/models/course/location.model";
import {DeleteCourseService} from "../../../domain/services/course/deleteCourse.service";


export class DeleteCourseController {

    private deleteCourseService: DeleteCourseService;


    constructor(deleteCourseService: DeleteCourseService) {
        this.deleteCourseService = deleteCourseService;
    }

    async deleteCourse(id: string): Promise<void>{
        return await this.deleteCourseService.deleteCourse(id);
    }

    async deleteHoles(id: string) : Promise<void>{
        return await this.deleteCourseService.deleteHoles(id);
    }

    async deleteTeebox(holes: string[]) : Promise<void>{
        return await this.deleteCourseService.deleteTeeboxes(holes);
    }
}