
import {AddCourseControllerProvider} from "../../providers/course/addCourseController.provider";
import {Course} from "../../../domain/models/course/course.model";
import {Hole} from "../../../domain/models/course/hole.model";
import {Loc} from "../../../domain/models/course/location.model";
import {EditCourseControllerProvider} from "../../providers/course/editCourseController.provider";
import {verifyAdmin} from "../verifyToken";

export const editCourse = async ({input}:any,req:Request): Promise<Course> => {
    const {id,name, creator, description, location, holes}:{id:string,name:string,creator:string, description:string,location:Loc,holes:Hole[]} = input;

    // @ts-ignore
    const token: string = <string>req.headers['authorization'];
    const username: string = verifyAdmin(token.substring(7));
    return await EditCourseControllerProvider.getController().editCourse(id,name, creator, description, location,holes);
}