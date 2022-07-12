import {Player} from "../../../domain/models/player.model";
import {ABMPlayerControllerProvider} from "../../providers/player/abmPlayerController.provider";
import {LoginPlayerControllerProvider} from "../../providers/player/loginPlayerController.provider";
import {LoginPlayerService} from "../../../domain/services/player/loginPlayer.service";

export const idpLogin = async ({input}: any, req: Request): Promise<any> => {
    const {service, email , fullName}: { service: string, email: string, fullName: string } = input;

    //const token: string = <string>req.headers['authorization'];
    //const username: string = verifyAdmin(token.substring(7));
    const payload = await LoginPlayerControllerProvider.getController().idpLogin(service, email, fullName);
    return {
        token: payload.token,
        id: payload.id,
    };
}