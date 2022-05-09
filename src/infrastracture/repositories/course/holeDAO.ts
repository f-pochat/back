// @ts-ignore
import {getRepository} from "typeorm";
import {ICourseRepo} from "../../../domain/repositories/course/course.repository";
import {IHoleRepo} from "../../../domain/repositories/course/hole.repository";
import {HoleDB} from "../../../domain/modelsDB/course/hole.modeldb";
import {Hole} from "../../../domain/models/course/hole.model";
import {DeleteCourseControllerProvider} from "../../providers/course/deleteCourseController.provider";

export class HoleDAO implements IHoleRepo {
    repo = getRepository(HoleDB, "db");

    //@ts-ignore
    addHole = (hole: HoleDB): void => {
        this.repo.save(hole).then(r => r);
    };

    // @ts-ignore
    editHole(id: string, newHole: HoleDB): void {
        this.repo.update(id, newHole).then(r => r);
    }

    // @ts-ignore
    deleteHoles = async (id: string): void => {
        const holesPr: HoleDB[] = await this.repo.find({
            where: {
                course: id
            }
        });

        const holes: string[] = [];
        holesPr.map(r => {
            holes.push(r.id);
            this.repo.update(r.id,{isActive:false})
        });
    }

    getHoles = async(id: string): Promise<HoleDB[]> => {
        return this.repo.find({
            where: {
                isActive: true,
                course: id,
            }
        })
    }
}