import {IReviewRepo} from "../../domain/repositories/review.repository";
import {Review} from "../../domain/models/review.model";
import {getRepository} from "typeorm";
import {PlayerDB} from "../../domain/modelsDB/player.modeldb";
import {ReviewDB} from "../../domain/modelsDB/course/review.modeldb";

export class ReviewDAO implements IReviewRepo{

    repo = getRepository(ReviewDB, "db");

    async addReview(id: string, rating: number, description: string, courseId: string, userId: string): Promise<void> {
        const review = new ReviewDB(id, rating, description, courseId, userId);
        await this.repo.save(review);
        console.log(review);
    }

    async getReviewsByCourse(id: string): Promise<ReviewDB[]> {
        // @ts-ignore
        return await this.repo.find({
            where:{
                courseId: id,
            }
        });
    }

}