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
exports.LoginAdminService = void 0;
class LoginAdminService {
    constructor(adminRepo, passwordHasher) {
        this.login = (user, password) => __awaiter(this, void 0, void 0, function* () {
            if (password.length < 1)
                throw Error("Password not valid!");
            if (user.length < 1)
                throw Error("Username not valid!");
            const admin = yield this.adminRepo.getByUsername(user);
            if (!admin)
                throw Error("User not found!");
            if (!this.passwordHasher.compare(admin.password, password))
                throw Error("Password incorrect!");
            return admin;
        });
        this.adminRepo = adminRepo;
        this.passwordHasher = passwordHasher;
    }
}
exports.LoginAdminService = LoginAdminService;
