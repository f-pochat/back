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
exports.DeleteCourseService = void 0;
class DeleteCourseService {
    constructor(courseRepo, holeRepo, teeboxRepo) {
        this.deleteCourse = (id) => __awaiter(this, void 0, void 0, function* () {
            this.courseRepo.deleteCourse(id);
        });
        this.deleteHoles = (id) => __awaiter(this, void 0, void 0, function* () {
            this.holeRepo.deleteHoles(id);
        });
        this.deleteTeeboxes = (holes) => __awaiter(this, void 0, void 0, function* () {
            this.teeboxRepo.deleteTeeboxes(holes);
        });
        this.courseRepo = courseRepo;
        this.holeRepo = holeRepo;
        this.teeboxRepo = teeboxRepo;
    }
}
exports.DeleteCourseService = DeleteCourseService;
