import {Entity, PrimaryColumn, Column} from "typeorm";

@Entity()
export class CourseDB{

    @PrimaryColumn()
    id: string;

    @Column()
    name: string;

    @Column()
    creator: string

    @Column()
    description: string;

    @Column()
    locationLat: string;

    @Column()
    locationLong: string;


    constructor(id: string, name: string, creator: string, description: string, locationLat: string, locationLong: string) {
        this.id = id;
        this.name = name;
        this.creator = creator;
        this.description = description;
        this.locationLat = locationLat;
        this.locationLong = locationLong;
    }
}