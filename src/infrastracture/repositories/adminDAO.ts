import {IAdminRepo} from "../../domain/repositories/admin.repository";
import {getRepository} from "typeorm";
import {AdminDB} from "../../domain/modelsDB/admin.modeldb";

export class AdminDAO implements IAdminRepo {
    repo = getRepository(AdminDB, "db");

    addAdmin(admin: AdminDB): void {
        this.repo.save(admin).then(r => r);
    }

    async getByUsername(username: String): Promise<AdminDB>{
        // @ts-ignore
        return await this.repo.findOne(
            // @ts-ignore
            { where:
                    { user: username}
            }
        );
    }

    editAdmin(user: string, newPassword: string): void {
        this.repo.update(user,{password:newPassword}).then(r => r);
    }

}