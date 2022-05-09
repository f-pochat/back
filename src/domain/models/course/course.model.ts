
import {Hole} from "./hole.model";
import {Loc} from "./location.model";

export class Course{

    id: string;

    name: string;

    creator: string

    description: string;

    clubHouseLocation: Loc;

    holesList: Hole[];


    constructor(id:string,name: string,creator: string, description: string, clubHouseLocation: Loc, holesList: Hole[]) {
        this.id = id;
        this.name = name;
        this.creator = creator;
        this.description = description;
        this.clubHouseLocation = clubHouseLocation;
        this.holesList = holesList;
    }
}