"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.ReviewControllerProvider = void 0;
const review_controller_1 = require("../../../application/controllers/player/review.controller");
const review_service_1 = require("../../../domain/services/player/review.service");
const idGenerator_1 = __importDefault(require("../../services/idGenerator"));
const reviewDAO_1 = require("../../repositories/reviewDAO");
class ReviewControllerProvider {
    static createController() {
        const reviewRepository = new reviewDAO_1.ReviewDAO();
        const idRepo = new idGenerator_1.default();
        const reviewService = new review_service_1.ReviewService(reviewRepository, idRepo);
        return new review_controller_1.ReviewController(reviewService);
    }
    static getController() {
        if (!this._reviewController) {
            this._reviewController = this.createController();
        }
        return this._reviewController;
    }
}
exports.ReviewControllerProvider = ReviewControllerProvider;
