export class Player{
    id: string;
    email: string;
    fullname: string;
    password: string;
    handicap: number;
    photo: string;


    constructor(id: string, email: string, fullname: string, password: string, handicap: number, photo: string) {
        this.id = id;
        this.email = email;
        this.fullname = fullname;
        this.password = password;
        this.handicap = handicap;
        this.photo = photo;
    }
}