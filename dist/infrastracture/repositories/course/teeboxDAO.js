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
exports.TeeboxDAO = void 0;
// @ts-ignore
const typeorm_1 = require("typeorm");
const teebox_modeldb_1 = require("../../../domain/modelsDB/course/teebox.modeldb");
class TeeboxDAO {
    constructor() {
        this.repo = (0, typeorm_1.getRepository)(teebox_modeldb_1.TeeboxDB, "db");
        //@ts-ignore
        this.addTeebox = (teebox) => {
            this.repo.save(teebox).then(r => r);
        };
        this._getTeeboxes = function (hole) {
            // @ts-ignore
            const holeId = this.repo.find({
                select: ['id'],
                where: { hole: hole },
            });
            return holeId;
        };
    }
    deleteTeeboxes(holes) {
        return __awaiter(this, void 0, void 0, function* () {
            const teeboxes = yield this.repo.find({
                // @ts-ignore
                where: {
                    hole: (0, typeorm_1.In)(holes)
                }
            });
            teeboxes.map(t => this.repo.update(t.id, { isActive: false }));
        });
    }
}
exports.TeeboxDAO = TeeboxDAO;
