import {Player} from "../../../domain/models/player.model";
import {AddPlayerControllerProvider} from "../../providers/player/addPlayerController.provider";
import {DeletePlayerControllerProvider} from "../../providers/player/deletePlayerController.provider";

export const deletePlayer = async ({id}:{id:string}, req: Request): Promise<void> => {
    // @ts-ignore
    const token: string = <string>req.headers['authorization'];
    //const username: string = verifyAdmin(token.substring(7));
    return await DeletePlayerControllerProvider.getController().deletePlayer(id);
}