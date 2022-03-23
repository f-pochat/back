import {Admin} from "../../domain/models/admin.model";
import {AddAdminService} from "../../domain/services/addAdmin.service";


export class AddAdminController {

    private addAdminService: AddAdminService;


    constructor(addAdminService: AddAdminService) {
        this.addAdminService = addAdminService;
    }

    async addAdmin(user: string, password: string, role: string): Promise<Admin>{
        return await this.addAdminService.register(user,password,role);
    }
}