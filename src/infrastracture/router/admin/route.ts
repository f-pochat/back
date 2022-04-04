import express, {Router, Response, Request} from "express";
import {graphqlHTTP} from "express-graphql";
import {buildSchema} from "graphql";
import {addAdmin} from "./addAdmin.route";
import {loginAdmin} from "./loginAdmin.route";
import {editAdmin} from "./editAdmin.route";
import {addCourse} from "../course/addCourse.route";

const adminRouter = express.Router();

const schema = buildSchema(`
    type Query{
        text: String
    }
    
    type Mutation{
        addAdmin(input: AdminInput) : Admin
        loginAdmin(input: LoginAdminInput): Token
        editAdmin(input: EditAdminInput): Admin
    }
    
    type Token{
        token: String!
        role: String!
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
    
    input EditAdminInput{
        user: String!
        password: String!
    }
    
`)

const root = {
    // @ts-ignore
    addAdmin,
    loginAdmin,
    editAdmin,
    addCourse,
}

adminRouter.use('/admin',  graphqlHTTP({
    schema:schema,
    rootValue: root,
    graphiql: true,
}));

export {adminRouter}
