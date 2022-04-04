import {AddCourseControllerProvider} from "../../providers/course/addCourseController.provider";
import {Course} from "../../../domain/models/course/course.model";
import {Hole} from "../../../domain/models/course/hole.model";
import {Loc} from "../../../domain/models/course/location.model";
import {DeleteCourseControllerProvider} from "../../providers/course/deleteCourseController.provider";

export const deleteCourse = async ({id}:any,req:Request): Promise<void> => {
    /*const token: string = <string>req.headers['authorization'];
    const username: string = verifyAdmin(token.substring(7));*/
    return await DeleteCourseControllerProvider.getController().deleteCourse(id);
}