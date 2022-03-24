import jwt from "jsonwebtoken";
import {Request} from "express";

interface Payload{
    _user: string;
    _role: string;
    iat: number;
    exp: number;
}

export const verifyToken = (token: string) => {
    if(!token) throw Error("Access denied");
    try{
        const payload = jwt.verify(token, 'golftrack') as Payload;
        const user = payload._user;
        const role = payload._role;
        //@ts-ignore
        return user;
    }catch (e) {
        throw Error('Invalid Token');
    }
}

export const verifyAdmin = (token: string) => {
    if(!token) throw Error("Access denied");
    try{
        const payload = jwt.verify(token, 'golftrack') as Payload;
        const user = payload._user;
        const role = payload._role;
        //@ts-ignore
        if(role !== "Admin") throw Error('Access denied')
        return user;
    }catch (e) {
        throw Error('Invalid Token');
    }
}