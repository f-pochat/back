import {Admin} from "../../domain/models/admin.model";
import {AddAdminControllerProvider} from "../providers/addAdminController.provider";

const addUser = async ({input}: any): Promise<Admin> => {
    const {user, password, role} = input;
    return await AddAdminControllerProvider.getController().addAdmin(user,password,role);
}