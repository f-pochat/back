import {Entity, PrimaryColumn, Column, ManyToOne} from "typeorm";

@Entity()
export class HoleDB {

    @PrimaryColumn()
    id: string;

    @Column()
    isActive: boolean;

    @Column()
    num: number;

    @Column()
    par: number;

    @Column()
    scoringIndex: number;

    @Column()
    locationTeeboxLat: string;

    @Column()
    locationTeeboxLong: string;

    @Column()
    locationGreenLat: string;

    @Column()
    locationGreenLong: string;

    @Column()
    course: string;


    constructor(id: string, num: number,par:number, scoringIndex: number, locationTeeboxLat: string, locationTeeboxLong: string, locationGreenLat: string, locationGreenLong: string, course: string) {
        this.id = id;
        this.isActive = true;
        this.num = num;
        this.par = par;
        this.scoringIndex = scoringIndex;
        this.locationTeeboxLat = locationTeeboxLat;
        this.locationTeeboxLong = locationTeeboxLong;
        this.locationGreenLat = locationGreenLat;
        this.locationGreenLong = locationGreenLong;
        this.course = course;
    }
}