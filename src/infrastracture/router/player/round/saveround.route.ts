import {RoundControllerProvider} from "../../../providers/player/roundController.provider";
import {verifyTokenPlayer} from "../verifyTokenPlayer";

export const newRound = async ({input}: any, req: Request): Promise<any> => {
    const {playerId, courseId}: { playerId: string, courseId: string} = input;

    // @ts-ignore
    const token: string = <string>req.headers['authorization'];
    const username: string = verifyTokenPlayer(token.substring(7));
    return await RoundControllerProvider.getController().newRound(playerId,courseId);
}

export const addHole = async ({input}: any, req: Request): Promise<any> => {
    const {playerId, courseId, num,score,putts,fairway}: {playerId: string, courseId: string, num: number, score: number, putts: number, fairway: string} = input;

    // @ts-ignore
    const token: string = <string>req.headers['authorization'];
    const username: string = verifyTokenPlayer(token.substring(7));
    return await RoundControllerProvider.getController().addHole(playerId, courseId, num,score,putts,fairway);
}