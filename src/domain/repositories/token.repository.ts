
export interface ITokenProv{
    login(user: string, role: string): string;
    loginPlayer(user: string, id: string): string;
}