import {Entity, PrimaryColumn, Column} from "typeorm";

@Entity()
export class Admin{

    @PrimaryColumn()
    user: string;

    @Column()
    password: string;

    @Column()
    role: string;


    constructor(user: string, password: string, role: string) {
        this.user = user;
        this.password = password;
        this.role = role;
    }
}