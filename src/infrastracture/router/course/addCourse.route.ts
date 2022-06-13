
import {AddCourseControllerProvider} from "../../providers/course/addCourseController.provider";
import {Course} from "../../../domain/models/course/course.model";
import {Hole} from "../../../domain/models/course/hole.model";
import {Loc} from "../../../domain/models/course/location.model";
import {verifyAdmin} from "../verifyToken";

export const addCourse = async ({input}:any,req:Request): Promise<Course> => {
    const {name, creator, description, location, holes}:{name:string,creator:string, description:string,location:Loc,holes:Hole[]} = input;

    // @ts-ignore
    const token: string = <string>req.headers['authorization'];
    const username: string = verifyAdmin(token.substring(7));
    return await AddCourseControllerProvider.getController().addCourse(name, creator, description, location,holes);
}