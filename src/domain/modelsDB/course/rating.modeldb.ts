import {Column, Entity, ManyToOne, PrimaryColumn} from "typeorm";

@Entity()
export class RatingDB{
    @PrimaryColumn()
    id: string;

    @Column()
    ratingNumber: number;

    @Column()
    ratingText: number;

    @Column()
    userId: string;

    @Column()
    courseId: string;


    constructor(id: string, ratingNumber: number, ratingText: number, userId: string, courseId: string) {
        this.id = id;
        this.ratingNumber = ratingNumber;
        this.ratingText = ratingText;
        this.userId = userId;
        this.courseId = courseId;
    }
}
