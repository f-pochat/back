import {adminRouter} from "./infrastracture/router/admin/route";
const cors = require('cors');
import express,{Request,Response, Application} from 'express';
import {connect} from "./infrastracture/db/database";
import {courseRouter} from "./infrastracture/router/course/route";

const app: Application= express();
app.use(cors())
app.use(adminRouter);
app.use(courseRouter);

const startServer = (): void => {

    const PORT = app.get('port')
    app.listen(4000);
    connect();
};

startServer();