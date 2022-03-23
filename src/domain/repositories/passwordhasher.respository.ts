export interface IPasswordHasherRepo {
    hash(password: string) : string;
}