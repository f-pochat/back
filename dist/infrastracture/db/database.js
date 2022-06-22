"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.connect = void 0;
const typeorm_1 = require("typeorm");
const hole_modeldb_1 = require("../../domain/modelsDB/course/hole.modeldb");
const course_modeldb_1 = require("../../domain/modelsDB/course/course.modeldb");
const admin_modeldb_1 = require("../../domain/modelsDB/admin.modeldb");
const player_modeldb_1 = require("../../domain/modelsDB/player.modeldb");
const review_modeldb_1 = require("../../domain/modelsDB/course/review.modeldb");
const mongoose = require("mongoose");
const ck = require('ckey');
const runDbConnection = () => __awaiter(void 0, void 0, void 0, function* () {
    const connection = (0, typeorm_1.createConnection)({
        // host=golftrack.postgres.database.azure.com port=5432 dbname={your_database} user=fedepoch password={your_password} sslmode=require
        name: "db",
        type: "postgres",
        host: "golftrack.postgres.database.azure.com",
        port: 5432,
        username: "fedepoch",
        password: process.env.POSTGRES_PASSWORD,
        database: "postgres",
        ssl: true,
        synchronize: true,
        entities: [
            admin_modeldb_1.AdminDB,
            course_modeldb_1.CourseDB,
            hole_modeldb_1.HoleDB,
            player_modeldb_1.PlayerDB,
            review_modeldb_1.ReviewDB
        ],
    });
    mongoose.connect(`mongodb+srv://golftrackmdb:${process.env.MONGODB_PASSWORD}@cluster0.v6ntn.mongodb.net/?retryWrites=true&w=majority`, {
        useNewUrlParser: true,
        useUnifiedTopology: true
    });
    const db = mongoose.connection;
    db.on("error", console.error.bind(console, "connection error: "));
    db.once("open", () => {
        console.log("MongoDB connected successfully");
    });
});
const connect = () => {
    runDbConnection().then(() => {
        console.log('Everything OK!');
    });
};
exports.connect = connect;
