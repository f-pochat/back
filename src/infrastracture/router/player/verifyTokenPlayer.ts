import jwt from "jsonwebtoken";

interface Payload{
    _user: string;
    _id: string;
    iat: number;
    exp: number;
}

export const verifyTokenPlayer = (token: string) => {
    if(!token) throw Error("Access denied");
    try{
        const payload = jwt.verify(token, 'golftrack') as Payload;
        const user = payload._user;
        //@ts-ignore
        return payload._id;
    }catch (e) {
        throw Error('Invalid Token');
    }
}