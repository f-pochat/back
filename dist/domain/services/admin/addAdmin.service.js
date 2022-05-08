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
exports.AddAdminService = void 0;
const admin_modeldb_1 = require("../../modelsDB/admin.modeldb");
class AddAdminService {
    constructor(adminRepo, passwordHasher) {
        this.register = (admin) => __awaiter(this, void 0, void 0, function* () {
            if (admin.password.length < 7)
                throw Error("Password should contain more than 7 characters");
            if (admin.user.length < 1)
                throw Error("Username not valid!");
            const duplicateAdmin = yield this.adminRepo.getByUsername(admin.user);
            if (duplicateAdmin)
                throw Error("User already exists!");
            const hashedPassword = this.passwordHasher.hash(admin.password);
            const newAdmin = new admin_modeldb_1.AdminDB(admin.user, hashedPassword, admin.role);
            this.adminRepo.addAdmin(newAdmin);
            return newAdmin;
        });
        this.adminRepo = adminRepo;
        this.passwordHasher = passwordHasher;
    }
}
exports.AddAdminService = AddAdminService;
