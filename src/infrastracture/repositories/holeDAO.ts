// @ts-ignore
import {getRepository} from "typeorm";
import {ICourseRepo} from "../../domain/repositories/course/course.repository";
import {IHoleRepo} from "../../domain/repositories/course/hole.repository";
import {HoleDB} from "../../domain/modelsDB/course/hole.modeldb";

export class HoleDAO implements IHoleRepo {
    repo = getRepository(HoleDB, "db");

    //@ts-ignore
    addHole = (hole: HoleDB): void => {
        this.repo.save(hole).then(r => r);
    };
}