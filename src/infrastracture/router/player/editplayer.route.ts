import {ABMPlayerControllerProvider} from "../../providers/player/abmPlayerController.provider";
import {verifyTokenPlayer} from "./verifyTokenPlayer";


export const editPlayer = async ({input}: any, req: Request): Promise<void> => {
    const {id, email, fullname, password, handicap, photo}: {id: string, email: string, fullname: string, password: string, handicap: number, photo: string } = input;
    console.log(req);
    // @ts-ignore
    const token: string = <string>req.headers['authorization'];
    console.log(token);
    const username: string = verifyTokenPlayer(token.substring(7));
    return await ABMPlayerControllerProvider.getController().editPlayer(id, email, fullname, password, handicap, photo);
}