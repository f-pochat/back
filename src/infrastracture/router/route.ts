import express, {Router, Response, Request} from "express";
import {graphqlHTTP} from "express-graphql";
import {buildSchema} from "graphql";
import {Admin} from "../../domain/models/admin.model";
import {AddAdminController} from "../../application/controllers/addadmin.controller";

const router = express.Router();

const schema = buildSchema(`
    type Query{
        text: String
    }

    type Admin{
        user: String!
        password: String!
        role: String!
    }

    input AdminInput{
        adminName:String!
        adminPassword: String!
        adminRole: String!
    }

    type Mutation{
        addUser(admin: AdminInput) : Admin
    }
`)

const root = {
    addUser,
}

// define the home page route
router.get('/',  graphqlHTTP({
    schema:schema,
    rootValue: root,
    graphiql: false,
}));


module.exports = router;

