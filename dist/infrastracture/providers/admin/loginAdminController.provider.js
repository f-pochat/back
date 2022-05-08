"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.LoginAdminControllerProvider = void 0;
const adminDAO_1 = require("../../repositories/adminDAO");
const passwordHasherImpl_service_1 = require("../../services/passwordHasherImpl.service");
const loginadmin_controller_1 = require("../../../application/controllers/admin/loginadmin.controller");
const loginAdmin_service_1 = require("../../../domain/services/admin/loginAdmin.service");
const TokenProv_1 = require("../../services/TokenProv");
class LoginAdminControllerProvider {
    static createController() {
        const adminRepository = new adminDAO_1.AdminDAO();
        // @ts-ignore
        const passwordHasher = new passwordHasherImpl_service_1.PasswordHasherImpl();
        const tokenProv = new TokenProv_1.TokenProv();
        const loginAdminService = new loginAdmin_service_1.LoginAdminService(adminRepository, passwordHasher, tokenProv);
        return new loginadmin_controller_1.LoginAdminController(loginAdminService);
    }
    static getController() {
        if (!this.loginAdminController) {
            this.loginAdminController = this.createController();
        }
        return this.loginAdminController;
    }
}
exports.LoginAdminControllerProvider = LoginAdminControllerProvider;
