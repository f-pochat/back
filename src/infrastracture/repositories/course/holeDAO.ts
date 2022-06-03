// @ts-ignore
import {getConnection, getRepository} from "typeorm";
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

        // get a connection and create a new query runner
        const connection = getConnection();
        const queryRunner = connection.createQueryRunner();
        await queryRunner.connect();
        await queryRunner.startTransaction();

        try {

            // execute some operations on this transaction:
            holesPr.map(r => {
                holes.push(r.id);
                this.repo.update(r.id,{isActive:false})
            });

            // commit transaction now:
            await queryRunner.commitTransaction();

        } catch (err) {

            // since we have errors let's rollback changes we made
            await queryRunner.rollbackTransaction();

        } finally {

            // you need to release query runner which is manually created:
            await queryRunner.release();
        }
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