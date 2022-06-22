"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.TokenProv = void 0;
const jsonwebtoken_1 = __importDefault(require("jsonwebtoken"));
class TokenProv {
    login(user, role) {
        return jsonwebtoken_1.default.sign({ _user: user, _role: role }, 'golftrack');
    }
    loginPlayer(user, id) {
        return jsonwebtoken_1.default.sign({ _user: user, _id: id }, 'golftrack');
    }
}
exports.TokenProv = TokenProv;
