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
const teebox_modeldb_1 = require("../../domain/modelsDB/course/teebox.modeldb");
const hole_modeldb_1 = require("../../domain/modelsDB/course/hole.modeldb");
const course_modeldb_1 = require("../../domain/modelsDB/course/course.modeldb");
const admin_modeldb_1 = require("../../domain/modelsDB/admin.modeldb");
const player_modeldb_1 = require("../../domain/modelsDB/player.modeldb");
const runDbConnection = () => __awaiter(void 0, void 0, void 0, function* () {
    const connection = (0, typeorm_1.createConnection)({
        name: "db",
        type: "postgres",
        host: "localhost",
        port: 5432,
        username: "postgres",
        password: "password",
        database: "golfTrack",
        synchronize: true,
        entities: [
            admin_modeldb_1.AdminDB,
            course_modeldb_1.CourseDB,
            hole_modeldb_1.HoleDB,
            teebox_modeldb_1.TeeboxDB,
            player_modeldb_1.PlayerDB,
        ],
    });
});
const connect = () => {
    runDbConnection().then(() => {
        console.log('Ok');
    });
};
exports.connect = connect;
