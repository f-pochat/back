
import {AddCourseControllerProvider} from "../../providers/course/addCourseController.provider";
import {Course} from "../../../domain/models/course/course.model";
import {Hole} from "../../../domain/models/course/hole.model";
import {Loc} from "../../../domain/models/course/location.model";
import {GetCoursesControllerProvider} from "../../providers/course/getCourseController.provider";
import {CourseDB} from "../../../domain/modelsDB/course/course.modeldb";

export const getCourses = async (args: any, req: Request): Promise<CourseDB[]> => {

    /*const token: string = <string>req.headers['authorization'];
    const username: string = verifyAdmin(token.substring(7));*/
    return await GetCoursesControllerProvider.getController().getCourse();
}