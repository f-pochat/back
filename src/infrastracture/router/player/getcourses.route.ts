import {GetCoursesControllerProvider} from "../../providers/player/getCoursesController.provider";


export const getAllCoursesDemo = async ( req: Request): Promise<any[]> => {

    //const token: string = <string>req.headers['authorization'];
    //const username: string = verifyAdmin(token.substring(7));
    return await GetCoursesControllerProvider.getController().getAllCoursesDemo();
}