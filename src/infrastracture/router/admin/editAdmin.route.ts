import {EditAdminControllerProvider} from "../../providers/admin/editAdminController.provider";
import {verifyToken} from "../verifyToken";

export const editAdmin = async ({input}:any,req: Request): Promise<void> => {
    const {user,password}:{user:string,password: string} = input;
    // @ts-ignore
    const token: string = <string>req.headers['authorization'];
    const username: string = verifyToken(token.substring(7));
    return await EditAdminControllerProvider.getController().editAdmin(username,password);
}