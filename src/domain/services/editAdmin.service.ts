import {Admin} from "../models/admin.model";
import {IAdminRepo} from "../repositories/admin.repository";
import {IPasswordHasherRepo} from "../repositories/passwordhasher.respository";

export class EditAdminService{
    private adminRepo: IAdminRepo;
    private passwordHasher: IPasswordHasherRepo;


    constructor(adminRepo: IAdminRepo, passwordHasher: IPasswordHasherRepo) {
        this.adminRepo = adminRepo;
        this.passwordHasher = passwordHasher;
    }

    edit = async(user: string, password: string): Promise<void> => {
        if (password.length < 7) throw Error("Password should contain more than 7 characters");

        const hashedPassword = this.passwordHasher.hash(password);
        return this.adminRepo.editAdmin(user,hashedPassword);
    }
}