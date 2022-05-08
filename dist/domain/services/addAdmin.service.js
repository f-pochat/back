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
const admin_model_1 = require("../models/admin.model");
class AddAdminService {
    constructor(adminRepo, passwordHasher) {
        this.register = (user, password, role) => __awaiter(this, void 0, void 0, function* () {
            if (password.length < 7)
                throw Error("Password should contain more than 7 characters");
            if (user.length < 1)
                throw Error("Username not valid!");
            const admin = yield this.adminRepo.getByUsername(user);
            if (admin)
                throw Error("User already exists!");
            const hashedPassword = this.passwordHasher.hash(password);
            const newAdmin = new admin_model_1.Admin(user, hashedPassword, role);
            this.adminRepo.addAdmin(newAdmin);
            return newAdmin;
        });
        this.adminRepo = adminRepo;
        this.passwordHasher = passwordHasher;
    }
}
exports.AddAdminService = AddAdminService;
