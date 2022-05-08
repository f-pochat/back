"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.EditAdminControllerProvider = void 0;
const adminDAO_1 = require("../../repositories/adminDAO");
const passwordHasherImpl_service_1 = require("../../services/passwordHasherImpl.service");
const editadmin_controller_1 = require("../../../application/controllers/admin/editadmin.controller");
const editAdmin_service_1 = require("../../../domain/services/admin/editAdmin.service");
class EditAdminControllerProvider {
    static createController() {
        const adminRepository = new adminDAO_1.AdminDAO();
        const passwordHasher = new passwordHasherImpl_service_1.PasswordHasherImpl();
        const editAdminService = new editAdmin_service_1.EditAdminService(adminRepository, passwordHasher);
        return new editadmin_controller_1.EditAdminController(editAdminService);
    }
    static getController() {
        if (!this.editAdminController) {
            this.editAdminController = this.createController();
        }
        return this.editAdminController;
    }
}
exports.EditAdminControllerProvider = EditAdminControllerProvider;
