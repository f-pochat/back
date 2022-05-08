import {Player} from "../../../domain/models/player.model";
import {ABMPlayerControllerProvider} from "../../providers/player/abmPlayerController.provider";

export const addPlayer = async ({input}: any, req: Request): Promise<Player> => {
    const {email, fullname, password}: { email: string, fullname: string, password: string } = input;
    // @ts-ignore
    const token: string = <string>req.headers['authorization'];
    //const username: string = verifyAdmin(token.substring(7));
    return await ABMPlayerControllerProvider.getController().addPlayer(email, fullname, password);
}