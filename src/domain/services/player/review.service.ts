import {IRoundRepo} from "../../repositories/round.repository";
import {IReviewRepo} from "../../repositories/review.repository";
import {IIdRepo} from "../../repositories/id.repository";
import {Review} from "../../models/review.model";
import {ReviewDB} from "../../modelsDB/course/review.modeldb";

export class ReviewService {

    private reviewRepo: IReviewRepo;
    private idRepo: IIdRepo;

    constructor(reviewRepo: IReviewRepo, idRepo: IIdRepo) {
        this.idRepo = idRepo;
        this.reviewRepo = reviewRepo;
    }

    addReview = async (rating: number, description: string, courseId: string, userId: string): Promise<void> => {
        const id = this.idRepo.generateId();
        await this.reviewRepo.addReview(id, rating, description, courseId, userId);
    }

    getReviewsByCourse = async (id: string): Promise<ReviewDB[]> => {
        const reviews: ReviewDB[] = await this.reviewRepo.getReviewsByCourse(id);
        const res: Review[] = [];
        reviews.map(r => {
            res.push(new Review(r.id,r.ratingNumber,r.ratingText, r.courseId, r.userId));
        });
        console.log(res);
        return res;
    }
}