export class Player{
    email: string;
    fullname: string;
    password: string;


    constructor(email: string, fullname: string, password: string) {
        this.email = email;
        this.fullname = fullname;
        this.password = password;
    }
}