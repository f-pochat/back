import {LoginAdminControllerProvider} from "../../providers/admin/loginAdminController.provider";

export const loginAdmin = async ({input}:any): Promise<any> => {
    const {user, password}:{user:string, password:string} = input;
    const {token,role} = await LoginAdminControllerProvider.getController().loginAdmin(user,password);
    return {
        token: token,
        role:role
    }
}