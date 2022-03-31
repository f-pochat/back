import {IIdRepo} from "../../domain/repositories/id.repository";

class IdGenerator implements IIdRepo{
    generateId(): string {
        return require('crypto').randomBytes(10).toString('hex');
    }
}

export default IdGenerator;