import {Column, Entity,  PrimaryColumn} from "typeorm";

@Entity()
export class ReviewDB{
    @PrimaryColumn()
    id: string;

    @Column()
    ratingNumber: number;

    @Column()
    ratingText: string;

    @Column()
    userId: string;

    @Column()
    courseId: string;


    constructor(id: string, ratingNumber: number, ratingText: string,courseId: string, userId: string) {
        this.id = id;
        this.ratingNumber = ratingNumber;
        this.ratingText = ratingText;
        this.userId = userId;
        this.courseId = courseId;
    }
}
