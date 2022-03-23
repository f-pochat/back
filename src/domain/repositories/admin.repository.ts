import {Admin} from "../models/admin.model";

export interface IAdminRepo{

    addAdmin(admin: Admin):void;
    loginAdmin(admin: Admin):void;

    getByUsername(username: String): Promise<Admin>;
}