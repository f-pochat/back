import {Teebox} from "./teebox.model";
import {Loc} from "./location.model";

export class Hole {

    id: string;

    num: number;

    locationMiddleOfFW: Loc;

    locationMiddleOfGreen: Loc;

    course: string;

    teeboxes: Teebox[];

    constructor(id: string, num: number, locationMiddleOfFW: Loc, locationMiddleOfGreen: Loc, course: string, teeboxes: Teebox[]) {
        this.id = id;
        this.num = num;
        this.locationMiddleOfFW = locationMiddleOfFW;
        this.locationMiddleOfGreen = locationMiddleOfGreen;
        this.course = course;
        this.teeboxes = teeboxes;
    }
}