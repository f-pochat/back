
export interface ITokenProv{
    login(user: string, role: string): string;
}