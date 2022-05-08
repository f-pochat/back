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
exports.HoleDAO = void 0;
// @ts-ignore
const typeorm_1 = require("typeorm");
const hole_modeldb_1 = require("../../../domain/modelsDB/course/hole.modeldb");
const deleteCourseController_provider_1 = require("../../providers/course/deleteCourseController.provider");
class HoleDAO {
    constructor() {
        this.repo = (0, typeorm_1.getRepository)(hole_modeldb_1.HoleDB, "db");
        //@ts-ignore
        this.addHole = (hole) => {
            this.repo.save(hole).then(r => r);
        };
        // @ts-ignore
        this.deleteHoles = (id) => __awaiter(this, void 0, void 0, function* () {
            const holesPr = yield this.repo.find({
                where: {
                    course: id
                }
            });
            const holes = [];
            holesPr.map(r => {
                holes.push(r.id);
                this.repo.update(r.id, { isActive: false });
            });
            yield deleteCourseController_provider_1.DeleteCourseControllerProvider.getController().deleteTeebox(holes);
        });
    }
}
exports.HoleDAO = HoleDAO;
