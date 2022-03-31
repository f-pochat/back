import {Course} from "../../modelsDB/course/course.modeldb";
import {Hole} from "../../modelsDB/course/hole.modeldb";
import {Teebox} from "../../modelsDB/course/teebox.model";

export interface ITeeboxRepo {
    addTeebox(teebox: Teebox): Teebox;
}