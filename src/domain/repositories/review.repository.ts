import {Review} from "../models/review.model";
import {ReviewDB} from "../modelsDB/course/review.modeldb";

export interface IReviewRepo{
    addReview(id: string,rating: number, description: string, courseId: string, userId: string): Promise<void>;
    getReviewsByCourse(id: string) : Promise<ReviewDB[]>;
}