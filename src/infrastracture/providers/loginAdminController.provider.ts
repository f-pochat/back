import {AddAdminController} from "../../application/controllers/addadmin.controller";
import {IAdminRepo} from "../../domain/repositories/admin.repository";
import {IPasswordHasherRepo} from "../../domain/repositories/passwordhasher.respository";
import {AddAdminService} from "../../domain/services/addAdmin.service";
import {AdminDAO} from "../repositories/adminDAO";
import {PasswordHasherImpl} from "../services/passwordHasherImpl.service";
import {LoginAdminController} from "../../application/controllers/loginadmin.controller";
import {LoginAdminService} from "../../domain/services/loginAdmin.service";

export class LoginAdminControllerProvider{

    private static loginAdminController: LoginAdminController;

    static createController(): LoginAdminController{
        const adminRepository: IAdminRepo = new AdminDAO();
        // @ts-ignore
        const passwordHasher: IPasswordHasherRepo = new PasswordHasherImpl();

        const loginAdminService: LoginAdminService = new LoginAdminService(adminRepository, passwordHasher);
        return new LoginAdminController(loginAdminService);
    }

    static getController(): LoginAdminController{
        if(!this.loginAdminController){
            this.loginAdminController = this.createController();
        }
        return this.loginAdminController;
    }
}