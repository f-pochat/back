"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.AddAdminControllerProvider = void 0;
const addadmin_controller_1 = require("../../../application/controllers/admin/addadmin.controller");
const addAdmin_service_1 = require("../../../domain/services/admin/addAdmin.service");
const adminDAO_1 = require("../../repositories/adminDAO");
const passwordHasherImpl_service_1 = require("../../services/passwordHasherImpl.service");
class AddAdminControllerProvider {
    static createController() {
        const adminRepository = new adminDAO_1.AdminDAO();
        const passwordHasher = new passwordHasherImpl_service_1.PasswordHasherImpl();
        const addAdminService = new addAdmin_service_1.AddAdminService(adminRepository, passwordHasher);
        return new addadmin_controller_1.AddAdminController(addAdminService);
    }
    static getController() {
        if (!this.addAdminController) {
            this.addAdminController = this.createController();
        }
        return this.addAdminController;
    }
}
exports.AddAdminControllerProvider = AddAdminControllerProvider;
