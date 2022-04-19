import {Player} from "../../../domain/models/player.model";
import {AddPlayerControllerProvider} from "../../providers/player/addPlayerController.provider";

export const addPlayer = async ({input}: any, req: Request): Promise<Player> => {
    const {email, username, password}: { email: string, username: string, password: string } = input;
    // @ts-ignore
    const token: string = <string>req.headers['authorization'];
    //const username: string = verifyAdmin(token.substring(7));
    return await AddPlayerControllerProvider.getController().addPlayer(email, username, password);
}