import {createConnection} from "typeorm";
import {HoleDB} from "../../domain/modelsDB/course/hole.modeldb";
import {CourseDB} from "../../domain/modelsDB/course/course.modeldb";
import {AdminDB} from "../../domain/modelsDB/admin.modeldb";
import {PlayerDB} from "../../domain/modelsDB/player.modeldb";
import {ReviewDB} from "../../domain/modelsDB/course/review.modeldb";
const mongoose = require("mongoose");
const ck = require('ckey');

const runDbConnection = async (): Promise<void> => {
    const connection = createConnection({
        // host=golftrack.postgres.database.azure.com port=5432 dbname={your_database} user=fedepoch password={your_password} sslmode=require
        name: "db",
        type:"postgres",
        host:"golftrack.postgres.database.azure.com",
        port: 5432,
        username: "fedepoch",
        password: ck.POSTGRES_PASSWORD,
        database: "postgres",
        ssl:true,
        synchronize: true,
        entities: [
            AdminDB,
            CourseDB,
            HoleDB,
            PlayerDB,
            ReviewDB
        ],
    })

    mongoose.connect(`mongodb+srv://golftrackmdb:${ck.MONGODB_PASSWORD}@cluster0.v6ntn.mongodb.net/?retryWrites=true&w=majority`,
        {
            useNewUrlParser: true,
            useUnifiedTopology: true
        }
    );

    const db = mongoose.connection;
    db.on("error", console.error.bind(console, "connection error: "));
    db.once("open", () => {
        console.log("MongoDB connected successfully");
    });

};

export const connect = (): void => {
    runDbConnection().then(()=> {
        console.log('Everything OK!')
    })
}