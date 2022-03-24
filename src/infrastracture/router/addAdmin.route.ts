import {Admin} from "../../domain/models/admin.model";
import {AddAdminControllerProvider} from "../providers/addAdminController.provider";
import {verifyAdmin, verifyToken} from "./verifyToken";

export const addAdmin = async ({input}:any,req:Request): Promise<Admin> => {
    const {user, password, role} = input;
    //@ts-ignore
    const token: string = <string>req.headers['authorization'];
    const username: string = verifyAdmin(token.substring(7));
    return await AddAdminControllerProvider.getController().addAdmin(user,password,role);
}