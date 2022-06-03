import {IAdminRepo} from "../../domain/repositories/admin.repository";
import {getRepository} from "typeorm";
import {AdminDB} from "../../domain/modelsDB/admin.modeldb";
import {IPlayerRepo} from "../../domain/repositories/player.repository";
import {PlayerDB} from "../../domain/modelsDB/player.modeldb";
import {Player} from "../../domain/models/player.model";

export class PlayerDAO implements IPlayerRepo {
    repo = getRepository(PlayerDB, "db");

    addPlayer(player: PlayerDB): void {
        this.repo.save(player).then(r => r);
    }


    async getByEmail(email: String): Promise<Player> {
        // @ts-ignore
        return await this.repo.findOne(
            // @ts-ignore
            { where:{
                    email: email,
                    isActive: true,
                }
            }
        );
    }

    deletePlayer(id: string): void {
        // @ts-ignore
        this.repo.update(
            {
                id: id,
            },
            {
                isActive: false,
            }
        ).then(r => r);
    }

    editPlayer(id: string, player: PlayerDB): void {
        this.repo.update(id, player).then(r => r);
    }

    async getPlayer(id: String): Promise<PlayerDB> {
        console.log('r');

        return await this.repo.findOne(
            // @ts-ignore
            { where:{
                    id: id,
                    isActive: true,
                }
            }
        );
    }
}