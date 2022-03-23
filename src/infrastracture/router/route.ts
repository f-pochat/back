import express, {Router, Response, Request} from "express";
import {graphqlHTTP} from "express-graphql";
import {buildSchema} from "graphql";
import {addUser} from "./adduser.route";
import {Admin} from "../../domain/models/admin.model";
import {AddAdminController} from "../../application/controllers/addadmin.controller";
import {AddAdminControllerProvider} from "../providers/addAdminController.provider";
import exp from "constants";

const router = express.Router();

const schema = buildSchema(`
    type Query{
        text: String
    }
    
    type Mutation{
        addUser(input: AdminInput) : Admin
    }

    type Admin{
        user: String!
        password: String!
        role: String!
    }

    input AdminInput{
        user:String!
        password: String!
        role: String!
    }
`)

const root = {
    // @ts-ignore
    addUser,
}

router.use('/',  graphqlHTTP({
    schema:schema,
    rootValue: root,
    graphiql: false,
}));

export {router}
