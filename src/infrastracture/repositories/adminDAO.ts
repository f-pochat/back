import {IAdminRepo} from "../../domain/repositories/admin.repository";
import {Admin} from "../../domain/models/admin.model";
import {getRepository} from "typeorm";

export class AdminDAO implements IAdminRepo {
    repo = getRepository(Admin, "db");

    addAdmin(admin: Admin): void {
        this.repo.save(admin).then(r => r);
    }

    async getByUsername(username: String): Promise<Admin>{
        // @ts-ignore
        return await this.repo.findOne(
            // @ts-ignore
            { where:
                    { user: username}
            }
        );
    }

    loginAdmin(admin: Admin): void {
        //TODO
    }

}