import {Database} from "./infrastracture/db/database";
import express,{Request,Response, Application} from 'express';

const app: Application= express();

app.listen(4000);
app.get('/',(req: Request,res:Response) => {
    res.send;
})
const db: Database = new Database();
db.connect();