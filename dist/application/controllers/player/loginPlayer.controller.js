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
exports.LoginPlayerController = void 0;
class LoginPlayerController {
    constructor(loginPlayerService) {
        this._loginPlayerService = loginPlayerService;
    }
    loginPlayer(email, password) {
        return __awaiter(this, void 0, void 0, function* () {
            if (password.length < 8)
                throw new Error("Password must be more than 7 characters!");
            if (!/^[a-zA-Z0-9.!#$%&’+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)$/.test(email)) {
                throw Error('Invalid email');
            }
            return yield this._loginPlayerService.login(email, password);
        });
    }
}
exports.LoginPlayerController = LoginPlayerController;
