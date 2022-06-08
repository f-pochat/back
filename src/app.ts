import {router} from "./infrastracture/router/route";

const cors = require('cors');
import express,{Request,Response, Application} from 'express';
import {connect} from "./infrastracture/db/database";
import {playerRouter} from "./infrastracture/router/player/route";

const app: Application= express();
app.use(cors())
app.use(router)
app.use(playerRouter);

const startServer = (): void => {

    const PORT = app.get('port')
    app.listen(8080);
    connect();
};

startServer();