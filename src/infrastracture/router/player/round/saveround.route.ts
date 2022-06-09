import {RoundControllerProvider} from "../../../providers/player/roundController.provider";
import {verifyTokenPlayer} from "../verifyTokenPlayer";

export const saveRound = async ({input}: any, req: Request): Promise<any> => {
    const {playerId, courseId, playedHoles}: { playerId: string, courseId: string, playedHoles: any[]} = input;

    // @ts-ignore
    const token: string = <string>req.headers['authorization'];
    const username: string = verifyTokenPlayer(token.substring(7));
    return await RoundControllerProvider.getController().saveRound(playerId,courseId, playedHoles);
}