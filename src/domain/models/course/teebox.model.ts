import {Entity, PrimaryColumn, Column} from "typeorm";
import {Hole} from "./hole.model";
import {Loc} from "./location.model";


export class Teebox {

    id: string;

    name: string;

    color: string;

    locationTeeBox: Loc;

    par: number;

    scoringIndex: number;

    hole: string;


    constructor(id: string, name: string, color: string, locationTeeBox: Loc, par: number, scoringIndex: number, hole: string) {
        this.id = id;
        this.name = name;
        this.color = color;
        this.locationTeeBox = locationTeeBox;
        this.par = par;
        this.scoringIndex = scoringIndex;
        this.hole = hole;
    }
}
