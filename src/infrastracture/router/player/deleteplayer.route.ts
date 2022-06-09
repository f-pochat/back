import {Player} from "../../../domain/models/player.model";
import {ABMPlayerControllerProvider} from "../../providers/player/abmPlayerController.provider";
import {verifyTokenPlayer} from "./verifyTokenPlayer";

export const deletePlayer = async ({id}:{id:string}, req: Request): Promise<void> => {
    // @ts-ignore
    const token: string = <string>req.headers['authorization'];
    const username: string = verifyTokenPlayer(token.substring(7));
    return await ABMPlayerControllerProvider.getController().deletePlayer(id);
}