import {Admin} from "../models/admin.model";
import {IAdminRepo} from "../repositories/admin.repository";
import {IPasswordHasherRepo} from "../repositories/passwordhasher.respository";

export class LoginAdminService{
    private adminRepo: IAdminRepo;
    private passwordHasher: IPasswordHasherRepo;


    constructor(adminRepo: IAdminRepo, passwordHasher: IPasswordHasherRepo) {
        this.adminRepo = adminRepo;
        this.passwordHasher = passwordHasher;
    }

    login = async(user: string, password: string):Promise<Admin> => {
        if (password.length < 1) throw Error("Password not valid!");
        if (user.length < 1) throw Error("Username not valid!");

        const admin: Admin = await this.adminRepo.getByUsername(user);
        if (!admin) throw Error("User not found!");

        if(!this.passwordHasher.compare(admin.password,password)) throw Error("Password incorrect!");

        return admin;
    }
}