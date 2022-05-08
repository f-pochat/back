"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class IdGenerator {
    generateId() {
        return require('crypto').randomBytes(10).toString('hex');
    }
}
exports.default = IdGenerator;
