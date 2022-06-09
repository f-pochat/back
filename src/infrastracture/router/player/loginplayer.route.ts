import {Player} from "../../../domain/models/player.model";
import {ABMPlayerControllerProvider} from "../../providers/player/abmPlayerController.provider";
import {LoginPlayerControllerProvider} from "../../providers/player/loginPlayerController.provider";
import {LoginPlayerService} from "../../../domain/services/player/loginPlayer.service";

export const loginPlayer = async ({input}: any, req: Request): Promise<any> => {
    const {email , password}: { email: string, password: string } = input;

    //const token: string = <string>req.headers['authorization'];
    //const username: string = verifyAdmin(token.substring(7));
    return {
        token: LoginPlayerControllerProvider.getController().loginPlayer(email, password),
    };
}