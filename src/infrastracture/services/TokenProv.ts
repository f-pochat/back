import jwt from 'jsonwebtoken';
import {ITokenProv} from "../../domain/repositories/token.repository";

export class TokenProv implements ITokenProv{
    login(user: string, role: string): string {
        return jwt.sign({_user: user, _role:role},'golftrack')
    }
}