export interface IPasswordHasherRepo {
    hash(password: string) : string;
    compare(hashedPassword: string, password: string) : boolean;
}