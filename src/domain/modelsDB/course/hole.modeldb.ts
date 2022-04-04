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
    locationMidFWLat: string;

    @Column()
    locationMidFWLong: string;

    @Column()
    locationGreenLat: string;

    @Column()
    locationGreenLong: string;

    @Column()
    course: string;


    constructor(id: string, num: number, locationMidFWLat: string, locationMidFWLong: string, locationGreenLat: string, locationGreenLong: string, course: string) {
        this.id = id;
        this.isActive = true;
        this.num = num;
        this.locationMidFWLat = locationMidFWLat;
        this.locationMidFWLong = locationMidFWLong;
        this.locationGreenLat = locationGreenLat;
        this.locationGreenLong = locationGreenLong;
        this.course = course;
    }
}