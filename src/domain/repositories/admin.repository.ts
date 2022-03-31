import {Admin} from "../modelsDB/admin.modeldb";

export interface IAdminRepo{

    addAdmin(admin: Admin):void;

    editAdmin(user: string, newPassword: string): void;

    getByUsername(username: String): Promise<Admin>;
}