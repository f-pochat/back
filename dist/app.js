"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const route_1 = require("./infrastracture/router/route");
const cors = require('cors');
const express_1 = __importDefault(require("express"));
const database_1 = require("./infrastracture/db/database");
const route_2 = require("./infrastracture/router/player/route");
const app = (0, express_1.default)();
app.use(cors());
app.use(route_1.router);
app.use(route_2.playerRouter);
const startServer = () => {
    const PORT = app.get('port');
    app.listen(8080);
    (0, database_1.connect)();
};
startServer();
