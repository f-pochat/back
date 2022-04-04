import {createConnection} from "typeorm";
import {TeeboxDB} from "../../domain/modelsDB/course/teebox.modeldb";
import {HoleDB} from "../../domain/modelsDB/course/hole.modeldb";
import {CourseDB} from "../../domain/modelsDB/course/course.modeldb";
import {AdminDB} from "../../domain/modelsDB/admin.modeldb";

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
            TeeboxDB,
        ],
    })
};

export const connect = (): void => {
    runDbConnection().then(()=> {
        console.log('Ok')
    })
}