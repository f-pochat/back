import {Admin} from "../../domain/models/admin.model";
import {LoginAdminControllerProvider} from "../providers/loginAdminController.provider";

export const loginAdmin = async ({input}:any): Promise<Admin> => {
    const {user, password} = input;
    return await LoginAdminControllerProvider.getController().loginAdmin(user,password);
}