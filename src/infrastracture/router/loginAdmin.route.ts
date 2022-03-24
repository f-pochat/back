import {Admin} from "../../domain/models/admin.model";
import {LoginAdminControllerProvider} from "../providers/loginAdminController.provider";

export const loginAdmin = async ({input}:any): Promise<any> => {
    const {user, password} = input;
    const {token,role} = await LoginAdminControllerProvider.getController().loginAdmin(user,password);
    return {
        token: token,
        role:role
    }
}