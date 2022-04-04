import {AddAdminController} from "../../../application/controllers/admin/addadmin.controller";
import {IAdminRepo} from "../../../domain/repositories/admin.repository";
import {IPasswordHasherRepo} from "../../../domain/repositories/passwordhasher.respository";
import {AddAdminService} from "../../../domain/services/admin/addAdmin.service";
import {AdminDAO} from "../../repositories/adminDAO";
import {PasswordHasherImpl} from "../../services/passwordHasherImpl.service";

export class AddAdminControllerProvider{

    private static addAdminController: AddAdminController;

    static createController(): AddAdminController{
        const adminRepository: IAdminRepo = new AdminDAO();
        const passwordHasher: IPasswordHasherRepo = new PasswordHasherImpl();

        const addAdminService: AddAdminService = new AddAdminService(adminRepository, passwordHasher);
        return new AddAdminController(addAdminService);
    }

    static getController(): AddAdminController{
        if(!this.addAdminController){
            this.addAdminController = this.createController();
        }
        return this.addAdminController;
    }
}