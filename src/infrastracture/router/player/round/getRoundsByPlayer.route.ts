import {Review} from "../../../../domain/models/review.model";
import {ReviewControllerProvider} from "../../../providers/player/reviewController.provider";
import {RoundControllerProvider} from "../../../providers/player/roundController.provider";

export const getRoundsByPlayer = async ({id}: any, req: Request): Promise<any[]> => {
    // @ts-ignore
    //const token: string = <string>req.headers['authorization'];
    //const username: string = verifyAdmin(token.substring(7));
    return await RoundControllerProvider.getController().getRoundsByPlayer(id);
}