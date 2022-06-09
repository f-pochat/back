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
exports.ReviewDAO = void 0;
const typeorm_1 = require("typeorm");
const review_modeldb_1 = require("../../domain/modelsDB/course/review.modeldb");
class ReviewDAO {
    constructor() {
        this.repo = (0, typeorm_1.getRepository)(review_modeldb_1.ReviewDB, "db");
    }
    addReview(id, rating, description, courseId, userId) {
        return __awaiter(this, void 0, void 0, function* () {
            const review = new review_modeldb_1.ReviewDB(id, rating, description, courseId, userId);
            yield this.repo.save(review);
            console.log(review);
        });
    }
    getReviewsByCourse(id) {
        return __awaiter(this, void 0, void 0, function* () {
            // @ts-ignore
            return yield this.repo.find({
                where: {
                    courseId: id,
                }
            });
        });
    }
}
exports.ReviewDAO = ReviewDAO;
