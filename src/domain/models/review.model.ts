
export class Review{
    id: string;
    ratingNumber: number;
    ratingText: string;
    userId: string;
    courseId: string;


    constructor(id: string, ratingNumber: number, ratingText: string, userId: string, courseId: string) {
        this.id = id;
        this.ratingNumber = ratingNumber;
        this.ratingText = ratingText;
        this.userId = userId;
        this.courseId = courseId;
    }
}
