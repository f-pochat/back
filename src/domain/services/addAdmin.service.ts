import {Admin} from "../models/admin.model";
import {IAdminRepo} from "../repositories/admin.repository";
import {IPasswordHasherRepo} from "../repositories/passwordhasher.respository";

export class AddAdminService{
    private adminRepo: IAdminRepo;
    private passwordHasher: IPasswordHasherRepo;


    constructor(adminRepo: IAdminRepo, passwordHasher: IPasswordHasherRepo) {
        this.adminRepo = adminRepo;
        this.passwordHasher = passwordHasher;
    }

    register = async(user: string, password: string, role: string):Promise<Admin> => {
        if (password.length < 7) throw Error("Password should contain more than 7 characters");
        if (user.length < 1) throw Error("Username not valid!");

        const admin: Admin = await this.adminRepo.getByUsername(user);
        if (admin) throw Error("User already exists!");

        const hashedPassword = this.passwordHasher.hash(password);

        const newAdmin: Admin = new Admin(user, hashedPassword, role);
        this.adminRepo.addAdmin(newAdmin);
        return newAdmin;
    }
}