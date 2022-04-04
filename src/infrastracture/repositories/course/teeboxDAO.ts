// @ts-ignore
import {getRepository, In, Repository} from "typeorm";
import {ITeeboxRepo} from "../../../domain/repositories/course/teebox.repository";
import {TeeboxDB} from "../../../domain/modelsDB/course/teebox.modeldb";
import {HoleDB} from "../../../domain/modelsDB/course/hole.modeldb";
import {DeleteCourseControllerProvider} from "../../providers/course/deleteCourseController.provider";


export class TeeboxDAO implements ITeeboxRepo {
    repo = getRepository(TeeboxDB, "db");

    //@ts-ignore
    addTeebox = (teebox: TeeboxDB): void => {
        this.repo.save(teebox).then(r => r);
    };

    private _getTeeboxes = function (hole: string): TeeboxDB[] {

        // @ts-ignore
        const holeId = this.repo.find({
            select: ['id'],
            where: { hole: hole },
        });

        return holeId;
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