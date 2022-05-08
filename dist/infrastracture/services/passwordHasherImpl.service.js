"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.PasswordHasherImpl = void 0;
const passwordHash = require('password-hash');
class PasswordHasherImpl {
    hash(password) {
        return passwordHash.generate(password);
    }
    compare(hashedPassword, password) {
        return passwordHash.verify(password, hashedPassword);
    }
}
exports.PasswordHasherImpl = PasswordHasherImpl;
