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
exports.EditAdminService = void 0;
class EditAdminService {
    constructor(adminRepo, passwordHasher) {
        this.edit = (user, password) => __awaiter(this, void 0, void 0, function* () {
            if (password.length < 7)
                throw Error("Password should contain more than 7 characters");
            const hashedPassword = this.passwordHasher.hash(password);
            return this.adminRepo.editAdmin(user, hashedPassword);
        });
        this.adminRepo = adminRepo;
        this.passwordHasher = passwordHasher;
    }
}
exports.EditAdminService = EditAdminService;
