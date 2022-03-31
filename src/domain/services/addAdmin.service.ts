import {AdminDB} from "../modelsDB/admin.modeldb";
import {IAdminRepo} from "../repositories/admin.repository";
import {IPasswordHasherRepo} from "../repositories/passwordhasher.respository";
import {Admin} from "../models/admin.model";

export class AddAdminService{
    private adminRepo: IAdminRepo;
    private passwordHasher: IPasswordHasherRepo;


    constructor(adminRepo: IAdminRepo, passwordHasher: IPasswordHasherRepo) {
        this.adminRepo = adminRepo;
        this.passwordHasher = passwordHasher;
    }

    register = async(admin: Admin):Promise<Admin> => {
        if (admin.password.length < 7) throw Error("Password should contain more than 7 characters");
        if (admin.user.length < 1) throw Error("Username not valid!");

        const duplicateAdmin: Admin = await this.adminRepo.getByUsername(admin.user);
        if (duplicateAdmin) throw Error("User already exists!");

        const hashedPassword = this.passwordHasher.hash(admin.password);

        const newAdmin: Admin = new AdminDB(admin.user, hashedPassword, admin.role);
        this.adminRepo.addAdmin(newAdmin);
        return newAdmin;
    }
}