import {ReviewController} from "../../../application/controllers/player/review.controller";
import {IReviewRepo} from "../../../domain/repositories/review.repository";
import {ReviewService} from "../../../domain/services/player/review.service";
import {IIdRepo} from "../../../domain/repositories/id.repository";
import IdGenerator from "../../services/idGenerator";
import {ReviewDAO} from "../../repositories/reviewDAO";

export class ReviewControllerProvider {
    private static _reviewController: ReviewController;

    static createController(): ReviewController{
        const reviewRepository: IReviewRepo = new ReviewDAO();
        const idRepo: IIdRepo = new IdGenerator();

        const reviewService: ReviewService = new ReviewService(reviewRepository, idRepo);
        return new ReviewController(reviewService);
    }

    static getController(): ReviewController{
        if(!this._reviewController){
            this._reviewController = this.createController();
        }
        return this._reviewController;
    }

}