import {Entity, PrimaryColumn, Column} from "typeorm";

@Entity()
export class TeeboxDB {

    @PrimaryColumn()
    id: string;

    @Column()
    isActive: boolean;

    @Column()
    name: string;

    @Column()
    color: string;

    @Column()
    locationLat:string;

    @Column()
    locationLong:string

    @Column()
    par: number;

    @Column()
    scoringIndex: number;

    @Column()
    hole: string;


    constructor(id: string, name: string, color: string, locationLat: string, locationLong: string, par: number, scoringIndex: number, hole: string) {
        this.id = id;
        this.isActive = true;
        this.name = name;
        this.color = color;
        this.locationLat = locationLat;
        this.locationLong = locationLong;
        this.par = par;
        this.scoringIndex = scoringIndex;
        this.hole = hole;
    }
}