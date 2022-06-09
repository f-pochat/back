"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.ReviewService = void 0;
const review_model_1 = require("../../models/review.model");
class ReviewService {
    constructor(reviewRepo, idRepo) {
        this.addReview = (rating, description, courseId, userId) => __awaiter(this, void 0, void 0, function* () {
            const id = this.idRepo.generateId();
            yield this.reviewRepo.addReview(id, rating, description, courseId, userId);
        });
        this.getReviewsByCourse = (id) => __awaiter(this, void 0, void 0, function* () {
            const reviews = yield this.reviewRepo.getReviewsByCourse(id);
            const res = [];
            reviews.map(r => {
                res.push(new review_model_1.Review(r.id, r.ratingNumber, r.ratingText, r.courseId, r.userId));
            });
            console.log(res);
            return res;
        });
        this.idRepo = idRepo;
        this.reviewRepo = reviewRepo;
    }
}
exports.ReviewService = ReviewService;
