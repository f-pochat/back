import {GetCoursesControllerProvider} from "../../providers/course/getCourseController.provider";
import {ABMPlayerControllerProvider} from "../../providers/player/abmPlayerController.provider";
import {Player} from "../../../domain/models/player.model";

export const getCourse = async ({id}: any, res: Response): Promise<Player> => {
    return await ABMPlayerControllerProvider.getController().getPlayer(id);
};