import {GetCoursesControllerProvider} from "../../providers/course/getCourseController.provider";
import {ABMPlayerControllerProvider} from "../../providers/player/abmPlayerController.provider";
import {Player} from "../../../domain/models/player.model";
import {verifyTokenPlayer} from "./verifyTokenPlayer";

export const getCourse = async ({id}: any, req: Request): Promise<Player> => {
    // @ts-ignore
    //const token: string = <string>req.headers['authorization'];
    //const username: string = verifyTokenPlayer(token.substring(7));
    return await ABMPlayerControllerProvider.getController().getPlayer(id);
};