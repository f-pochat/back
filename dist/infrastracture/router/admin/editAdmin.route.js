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
exports.editAdmin = void 0;
const editAdminController_provider_1 = require("../../providers/admin/editAdminController.provider");
const verifyToken_1 = require("../verifyToken");
const editAdmin = ({ input }, req) => __awaiter(void 0, void 0, void 0, function* () {
    const { user, password } = input;
    // @ts-ignore
    const token = req.headers['authorization'];
    const username = (0, verifyToken_1.verifyToken)(token.substring(7));
    return yield editAdminController_provider_1.EditAdminControllerProvider.getController().editAdmin(username, password);
});
exports.editAdmin = editAdmin;
