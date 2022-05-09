import {createConnection} from "typeorm";
import {HoleDB} from "../../domain/modelsDB/course/hole.modeldb";
import {CourseDB} from "../../domain/modelsDB/course/course.modeldb";
import {AdminDB} from "../../domain/modelsDB/admin.modeldb";
import {PlayerDB} from "../../domain/modelsDB/player.modeldb";

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
            AdminDB,
            CourseDB,
            HoleDB,
            PlayerDB,
        ],
    })
};

export const connect = (): void => {
    runDbConnection().then(()=> {
        console.log('Ok')
    })
}