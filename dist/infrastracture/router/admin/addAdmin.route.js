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
exports.addAdmin = void 0;
const addAdminController_provider_1 = require("../../providers/admin/addAdminController.provider");
const verifyToken_1 = require("../verifyToken");
const addAdmin = ({ input }, req) => __awaiter(void 0, void 0, void 0, function* () {
    const { user, password, role } = input;
    //@ts-ignore
    const token = req.headers['authorization'];
    const username = (0, verifyToken_1.verifyAdmin)(token.substring(7));
    return yield addAdminController_provider_1.AddAdminControllerProvider.getController().addAdmin(user, password, role);
});
exports.addAdmin = addAdmin;
