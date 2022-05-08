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
exports.AdminDAO = void 0;
const typeorm_1 = require("typeorm");
const admin_modeldb_1 = require("../../domain/modelsDB/admin.modeldb");
class AdminDAO {
    constructor() {
        this.repo = (0, typeorm_1.getRepository)(admin_modeldb_1.AdminDB, "db");
    }
    addAdmin(admin) {
        this.repo.save(admin).then(r => r);
    }
    getByUsername(username) {
        return __awaiter(this, void 0, void 0, function* () {
            // @ts-ignore
            return yield this.repo.findOne(
            // @ts-ignore
            { where: { user: username }
            });
        });
    }
    editAdmin(user, newPassword) {
        this.repo.update(user, { password: newPassword }).then(r => r);
    }
}
exports.AdminDAO = AdminDAO;
