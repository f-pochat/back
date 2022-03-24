import {AddAdminController} from "../../application/controllers/addadmin.controller";
import {IAdminRepo} from "../../domain/repositories/admin.repository";
import {IPasswordHasherRepo} from "../../domain/repositories/passwordhasher.respository";
import {AddAdminService} from "../../domain/services/addAdmin.service";
import {AdminDAO} from "../repositories/adminDAO";
import {PasswordHasherImpl} from "../services/passwordHasherImpl.service";
import {EditAdminController} from "../../application/controllers/editadmin.controller";
import {EditAdminService} from "../../domain/services/editAdmin.service";

export class EditAdminControllerProvider{

    private static editAdminController: EditAdminController;

    static createController(): EditAdminController{
        const adminRepository: IAdminRepo = new AdminDAO();
        const passwordHasher: IPasswordHasherRepo = new PasswordHasherImpl();

        const editAdminService: EditAdminService = new EditAdminService(adminRepository, passwordHasher);
        return new EditAdminController(editAdminService);
    }

    static getController(): EditAdminController{
        if(!this.editAdminController){
            this.editAdminController = this.createController();
        }
        return this.editAdminController;
    }
}