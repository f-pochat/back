import express, {Router, Response, Request} from "express";
import {graphqlHTTP} from "express-graphql";
import {buildSchema} from "graphql";
import {addPlayer} from "./addplayer.route";
import {deletePlayer} from "./deleteplayer.route";
const playerRouter = express.Router();

const schema = buildSchema(`
    type Query{
        get: String
    }
    
    type Mutation{
        addPlayer(input: AddPlayerInput) : Player
        deletePlayer(email: String!) : ID
    }
    
    type Token{
        token: String!
        role: String!
    }

    type Player{
        email: String!
        fullname: String!
        password: String!
    }

    input AddPlayerInput{
        email:String!
        fullname:String!
        password: String!
    }
    
`)

const root = {
    // @ts-ignore
    addPlayer,
    deletePlayer,
}

playerRouter.use('/player',  graphqlHTTP({
    schema:schema,
    rootValue: root,
    graphiql: true,
}));

export {playerRouter}
