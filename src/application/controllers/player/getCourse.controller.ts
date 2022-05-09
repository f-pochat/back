import {LoginPlayerService} from "../../../domain/services/player/loginPlayer.service";
import {Player} from "../../../domain/models/player.model";
import {GetCourseService} from "../../../domain/services/player/getCourse.service";

export class GetCourseController{
    private _getCourseService: GetCourseService;

    constructor(getCourseService: GetCourseService) {
        this._getCourseService = getCourseService;
    }

    async getAllCoursesDemo(): Promise<any[]>{
        return await this._getCourseService.getAllCoursesDemo();
    }
}