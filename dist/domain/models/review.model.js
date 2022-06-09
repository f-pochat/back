"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Review = void 0;
class Review {
    constructor(id, ratingNumber, ratingText, userId, courseId) {
        this.id = id;
        this.ratingNumber = ratingNumber;
        this.ratingText = ratingText;
        this.userId = userId;
        this.courseId = courseId;
    }
}
exports.Review = Review;
