"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.verifyAdmin = exports.verifyToken = void 0;
const jsonwebtoken_1 = __importDefault(require("jsonwebtoken"));
const verifyToken = (token) => {
    if (!token)
        throw Error("Access denied");
    try {
        const payload = jsonwebtoken_1.default.verify(token, 'golftrack');
        const user = payload._user;
        const role = payload._role;
        //@ts-ignore
        return user;
    }
    catch (e) {
        throw Error('Invalid Token');
    }
};
exports.verifyToken = verifyToken;
const verifyAdmin = (token) => {
    if (!token)
        throw Error("Access denied");
    try {
        const payload = jsonwebtoken_1.default.verify(token, 'golftrack');
        const user = payload._user;
        const role = payload._role;
        //@ts-ignore
        if (role !== "Admin")
            throw Error('Access denied');
        return user;
    }
    catch (e) {
        throw Error('Invalid Token');
    }
};
exports.verifyAdmin = verifyAdmin;
