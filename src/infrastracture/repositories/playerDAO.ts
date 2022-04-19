import {IAdminRepo} from "../../domain/repositories/admin.repository";
import {getRepository} from "typeorm";
import {AdminDB} from "../../domain/modelsDB/admin.modeldb";
import {IPlayerRepo} from "../../domain/repositories/player.repository";
import {PlayerDB} from "../../domain/modelsDB/player.modeldb";

export class PlayerDAO implements IPlayerRepo {
    repo = getRepository(PlayerDB, "db");

    addPlayer(player: PlayerDB): void {
        this.repo.save(player).then(r => r);
    }

    async getByEmail(email: String): Promise<PlayerDB> {
        // @ts-ignore
        return await this.repo.findOne(
            // @ts-ignore
            { where:
                    { email: email}
            }
        );
    }
}