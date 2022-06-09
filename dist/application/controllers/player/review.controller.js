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
exports.ReviewController = void 0;
class ReviewController {
    constructor(reviewService) {
        this._reviewService = reviewService;
    }
    addReview(rating, description, courseId, userId) {
        return __awaiter(this, void 0, void 0, function* () {
            if (description.length < 1)
                throw new Error("No holes inputed");
            if (rating < 1 || rating > 5)
                throw new Error('Rating not valid');
            yield this._reviewService.addReview(rating, description, courseId, userId);
        });
    }
    getReviewsByCourse(id) {
        return __awaiter(this, void 0, void 0, function* () {
            return this._reviewService.getReviewsByCourse(id);
        });
    }
}
exports.ReviewController = ReviewController;
