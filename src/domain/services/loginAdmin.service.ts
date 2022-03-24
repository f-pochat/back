import {Admin} from "../models/admin.model";
import {IAdminRepo} from "../repositories/admin.repository";
import {IPasswordHasherRepo} from "../repositories/passwordhasher.respository";
import {ITokenProv} from "../repositories/token.repository";

export class LoginAdminService{
    private adminRepo: IAdminRepo;
    private passwordHasher: IPasswordHasherRepo;
    private tokenProvider: ITokenProv;


    constructor(adminRepo: IAdminRepo, passwordHasher: IPasswordHasherRepo, tokenProvider: ITokenProv) {
        this.adminRepo = adminRepo;
        this.passwordHasher = passwordHasher;
        this.tokenProvider = tokenProvider;
    }

    login = async(user: string, password: string):Promise<any> => {
        if (password.length < 1) throw Error("Password not valid!");
        if (user.length < 1) throw Error("Username not valid!");

        const admin: Admin = await this.adminRepo.getByUsername(user);
        if (!admin) throw Error("User not found!");

        if(!this.passwordHasher.compare(admin.password,password)) throw Error("Password incorrect!");

        return {
            token: this.tokenProvider.login(user,admin.role),
            role: admin.role,
        };
    }
}