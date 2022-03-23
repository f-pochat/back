import {IPasswordHasherRepo} from "../../domain/repositories/passwordhasher.respository";
const passwordHash = require('password-hash');

export class PasswordHasherImpl implements IPasswordHasherRepo {
    hash(password: string): string {
        return passwordHash.generate(password);
    }

    compare(hashedPassword: string, password: string): boolean {
        return passwordHash.verify(password,hashedPassword);
    }
}
