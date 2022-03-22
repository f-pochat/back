import {createConnection} from "typeorm";
import {Admin} from "../../domain/models/admin.model";

export class Database {

    runDbConnection = async (): Promise<void> => {
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

    connect = (): void => {
        this.runDbConnection().then(()=> {
            console.log('Ok')
        })
    }
}