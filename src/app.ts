import {router} from "./infrastracture/router/route";

const cors = require('cors');
import express,{Request,Response, Application} from 'express';
import {connect} from "./infrastracture/db/database";

const app: Application= express();
app.use(cors())
app.use(router)

const startServer = (): void => {

    const PORT = app.get('port')
    app.listen(4000);
    connect();
};

startServer();