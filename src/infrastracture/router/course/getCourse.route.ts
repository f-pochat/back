import {DeleteCourseControllerProvider} from "../../providers/course/deleteCourseController.provider";
import {CourseDB} from "../../../domain/modelsDB/course/course.modeldb";
import {GetCoursesControllerProvider} from "../../providers/course/getCourseController.provider";

export const getCourse = async ({id}: any, res: Response): Promise<any> => {
    return await GetCoursesControllerProvider.getController().getCourse(id);
};