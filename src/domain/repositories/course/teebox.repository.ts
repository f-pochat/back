import {TeeboxDB} from "../../modelsDB/course/teebox.modeldb";
import {Teebox} from "../../models/course/teebox.model";


export interface ITeeboxRepo {
    addTeebox(teebox: TeeboxDB): Teebox;
    editTeebox(id: string, newTeebox: TeeboxDB): Teebox;
    deleteTeeboxes(holes: string[]) : void;
}