// @ts-ignore
import {getRepository, In, Repository} from "typeorm";
import {ITeeboxRepo} from "../../../domain/repositories/course/teebox.repository";
import {TeeboxDB} from "../../../domain/modelsDB/course/teebox.modeldb";


export class TeeboxDAO implements ITeeboxRepo {
    repo = getRepository(TeeboxDB, "db");

    //@ts-ignore
    addTeebox = (teebox: TeeboxDB): void => {
        this.repo.save(teebox).then(r => r);
    };

    //@ts-ignore
    editTeebox(id: string, newTeebox: TeeboxDB): void {
        this.repo.update(id, newTeebox).then(r => r);
    }

    private _getTeeboxes = function (hole: string): TeeboxDB[] {

        // @ts-ignore
        return this.repo.find({
            select: ['id'],
            where: {hole: hole},
        });
    }


    async deleteTeeboxes(holes: string[]) {

        const teeboxes: TeeboxDB[] = await this.repo.find({
            // @ts-ignore
            where: {
                hole: In(holes)
            }
        })

        teeboxes.map(t => this.repo.update(t.id, {isActive: false}));
    }
}