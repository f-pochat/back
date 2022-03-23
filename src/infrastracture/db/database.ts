import {createConnection} from "typeorm";
import {Admin} from "../../domain/models/admin.model";

const runDbConnection = async (): Promise<void> => {
    const connection = createConnection({
        name: "db",
        type:"postgres",
        host:"localhost",
        port: 5432,
        username: "postgres",
        password: "password",
        database: "golfTrack",
        synchronize: true,
        entities: [
            Admin
        ],
    })
};

export const connect = (): void => {
    runDbConnection().then(()=> {
        console.log('Ok')
    })
}