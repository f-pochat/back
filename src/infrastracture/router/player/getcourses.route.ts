import {GetCoursesControllerProvider} from "../../providers/player/getCoursesController.provider";
import {Request} from "express";
import {verifyTokenPlayer} from "./verifyTokenPlayer";


export const getAllCoursesDemo = async (req: Request): Promise<any[]> => {

    /*
    const token: string = <string>req.headers['authorization'];
    verifyTokenPlayer(token.substring(7));*/
    return await GetCoursesControllerProvider.getController().getAllCoursesDemo();
}