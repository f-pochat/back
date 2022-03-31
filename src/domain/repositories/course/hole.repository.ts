import {Course} from "../../modelsDB/course/course.modeldb";
import {Hole} from "../../modelsDB/course/hole.modeldb";

export interface IHoleRepo {
    addHole(hole: Hole): Hole;
}