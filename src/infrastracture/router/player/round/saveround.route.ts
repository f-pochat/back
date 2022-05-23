import {RoundControllerProvider} from "../../../providers/player/roundController.provider";

export const saveRound = async ({input}: any, req: Request): Promise<any> => {
    const {playerId, courseId, playedHoles}: { playerId: string, courseId: string, playedHoles: any[]} = input;

    //const token: string = <string>req.headers['authorization'];
    //const username: string = verifyAdmin(token.substring(7));
    return await RoundControllerProvider.getController().saveRound(playerId,courseId, playedHoles);
}