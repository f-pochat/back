import {AddAdminController} from "../../../application/controllers/admin/addadmin.controller";
import {IAdminRepo} from "../../../domain/repositories/admin.repository";
import {IPasswordHasherRepo} from "../../../domain/repositories/passwordhasher.respository";
import {AddAdminService} from "../../../domain/services/admin/addAdmin.service";
import {AdminDAO} from "../../repositories/adminDAO";
import {PasswordHasherImpl} from "../../services/passwordHasherImpl.service";
import {LoginAdminController} from "../../../application/controllers/admin/loginadmin.controller";
import {LoginAdminService} from "../../../domain/services/admin/loginAdmin.service";
import {ITokenProv} from "../../../domain/repositories/token.repository";
import {TokenProv} from "../../services/TokenProv";

export class LoginAdminControllerProvider{

    private static loginAdminController: LoginAdminController;

    static createController(): LoginAdminController{
        const adminRepository: IAdminRepo = new AdminDAO();
        // @ts-ignore
        const passwordHasher: IPasswordHasherRepo = new PasswordHasherImpl();
        const tokenProv: ITokenProv = new TokenProv();

        const loginAdminService: LoginAdminService = new LoginAdminService(adminRepository, passwordHasher, tokenProv);
        return new LoginAdminController(loginAdminService);
    }

    static getController(): LoginAdminController{
        if(!this.loginAdminController){
            this.loginAdminController = this.createController();
        }
        return this.loginAdminController;
    }
}