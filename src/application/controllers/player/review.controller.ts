import {ReviewService} from "../../../domain/services/player/review.service";
import {Review} from "../../../domain/models/review.model";
import {ReviewDB} from "../../../domain/modelsDB/course/review.modeldb";

export class ReviewController{
    private _reviewService: ReviewService;

    constructor(reviewService: ReviewService) {
        this._reviewService = reviewService;
    }

    async addReview(rating: number, description: string, courseId: string,userId: string): Promise<void>{
        if (description.length < 1) throw new Error("No holes inputed");
        if (rating < 1 || rating > 5) throw new Error('Rating not valid');
        await this._reviewService.addReview(rating, description,courseId,userId);
    }

    async getReviewsByCourse(id: string): Promise<Review[]>{
        return this._reviewService.getReviewsByCourse(id);
    }
}