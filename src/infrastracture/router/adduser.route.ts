import {Admin} from "../../domain/models/admin.model";
import {AddAdminControllerProvider} from "../providers/addAdminController.provider";

export const addUser = async ({input}:any): Promise<Admin> => {
    console.log(input);
    const {user, password, role} = input;
    return await AddAdminControllerProvider.getController().addAdmin(user,password,role);
}