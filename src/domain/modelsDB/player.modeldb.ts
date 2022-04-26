import {Column, Entity, PrimaryColumn} from "typeorm";

@Entity()
export class PlayerDB{
    @PrimaryColumn()
    email: string;

    @Column()
    isActive: boolean;

    @Column()
    fullname: string;

    @Column()
    password: string;


    constructor(email: string, isActive:boolean, fullname: string, password: string) {
        this.email = email;
        this.isActive = isActive;
        this.fullname = fullname;
        this.password = password;
    }
}