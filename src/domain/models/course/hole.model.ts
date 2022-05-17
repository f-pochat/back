
import {Loc} from "./location.model";

export class Hole {

    id: string;

    num: number;

    par: number;

    scoringIndex: number;

    distance: number;

    locationTeebox: Loc;

    locationMiddleOfGreen: Loc;

    course: string;


    constructor(id: string, num: number, par: number, scoringIndex: number,distance: number, locationTeebox: Loc, locationMiddleOfGreen: Loc, course: string) {
        this.id = id;
        this.num = num;
        this.par = par;
        this.scoringIndex = scoringIndex;
        this.distance = distance;
        this.locationTeebox = locationTeebox;
        this.locationMiddleOfGreen = locationMiddleOfGreen;
        this.course = course;
    }
}