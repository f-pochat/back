
import express,{Request,Response, Application} from 'express';
import {connect} from "./infrastracture/db/database";
import {router} from "./infrastracture/router/route";

const app: Application= express();

app.use(router);

const startServer = (): void => {

    const PORT = app.get('port')
    app.listen(4000);
    connect();
};

startServer();