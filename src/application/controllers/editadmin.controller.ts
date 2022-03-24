import {Admin} from "../../domain/models/admin.model";
import {EditAdminService} from "../../domain/services/editAdmin.service";


export class EditAdminController {

    private editAdminService: EditAdminService;


    constructor(editAdminService: EditAdminService) {
        this.editAdminService = editAdminService;
    }

    async editAdmin(user: string, password: string): Promise<any>{
        return await this.editAdminService.edit(user,password);
    }
}