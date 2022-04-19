import {Column, Entity, PrimaryColumn} from "typeorm";

@Entity()
export class PlayerDB{
    @PrimaryColumn()
    email: string;

    @Column()
    username: string;

    @Column()
    password: string;


    constructor(email: string, username: string, password: string) {
        this.email = email;
        this.username = username;
        this.password = password;
    }
}