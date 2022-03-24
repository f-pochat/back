import {Admin} from "../../domain/models/admin.model";
import {LoginAdminService} from "../../domain/services/loginAdmin.service";


export class LoginAdminController {

    private loginAdminService: LoginAdminService;


    constructor(loginAdminService: LoginAdminService) {
        this.loginAdminService = loginAdminService;
    }

    async loginAdmin(user: string, password: string): Promise<any>{
        return await this.loginAdminService.login(user,password);
    }
}