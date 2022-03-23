import express, {Router, Response, Request} from "express";
import {graphqlHTTP} from "express-graphql";
import {buildSchema} from "graphql";
import {addAdmin} from "./addAdmin.route";
import {Admin} from "../../domain/models/admin.model";
import {AddAdminController} from "../../application/controllers/addadmin.controller";
import {AddAdminControllerProvider} from "../providers/addAdminController.provider";
import exp from "constants";
import {loginAdmin} from "./loginAdmin.route";

const router = express.Router();

const schema = buildSchema(`
    type Query{
        text: String
    }
    
    type Mutation{
        addAdmin(input: AdminInput) : Admin
        loginAdmin(input: LoginAdminInput): Admin
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
    
    input LoginAdminInput{
        user:String!
        password:String!
    }
    
`)

const root = {
    // @ts-ignore
    addAdmin,
    loginAdmin,
}

router.use('/',  graphqlHTTP({
    schema:schema,
    rootValue: root,
    graphiql: false,
}));

export {router}
