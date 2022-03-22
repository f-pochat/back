import {IAdminRepo} from "../../domain/repositories/admin.repository";
import {Admin} from "../../domain/models/admin.model";
import {getRepository} from "typeorm";

export class AdminDAO implements IAdminRepo {
    repo = getRepository(Admin, "db");

    addAdmin(admin: Admin): void {
        this.repo.save(admin).then(r => r);
    }

    loginAdmin(admin: Admin): void {
        //TODO
    }

}