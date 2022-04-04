import {AdminDB} from "../modelsDB/admin.modeldb";
import {Admin} from "../models/admin.model";

export interface IAdminRepo{

    addAdmin(admin: AdminDB):void;

    editAdmin(user: string, newPassword: string): void;

    getByUsername(username: String): Promise<Admin>;
}