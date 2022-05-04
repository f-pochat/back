import {Column, Entity, PrimaryColumn} from "typeorm";

@Entity()
export class PlayerDB{
    @PrimaryColumn()
    id: string;

    @Column()
    email: string;

    @Column()
    isActive: boolean;

    @Column()
    fullname: string;

    @Column()
    password: string;

    @Column({nullable:true, type: 'real'})
    handicap: string;

    @Column({nullable: true})
    photo: string;


    constructor(id: string, email: string, isActive: boolean, fullname: string, password: string, handicap: string, photo: string) {
        this.id = id;
        this.email = email;
        this.isActive = isActive;
        this.fullname = fullname;
        this.password = password;
        this.handicap = handicap;
        this.photo = photo;
    }
}