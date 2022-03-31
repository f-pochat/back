// @ts-ignore
import {getRepository} from "typeorm";
import {ITeeboxRepo} from "../../domain/repositories/course/teebox.repository";
import {TeeboxDB} from "../../domain/modelsDB/course/teebox.model";


export class TeeboxDAO implements ITeeboxRepo {
    repo = getRepository(TeeboxDB, "db");

    //@ts-ignore
    addTeebox = (teebox: TeeboxDB): void => {
        this.repo.save(teebox).then(r => r);
    };
}