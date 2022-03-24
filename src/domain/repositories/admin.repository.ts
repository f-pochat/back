import {Admin} from "../models/admin.model";

export interface IAdminRepo{

    addAdmin(admin: Admin):void;

    editAdmin(user: string, newPassword: string): void;

    getByUsername(username: String): Promise<Admin>;
}