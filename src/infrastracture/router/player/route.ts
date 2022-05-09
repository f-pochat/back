import express, {Router, Response, Request} from "express";
import {graphqlHTTP} from "express-graphql";
import {buildSchema} from "graphql";
import {addPlayer} from "./addplayer.route";
import {deletePlayer} from "./deleteplayer.route";
import {editPlayer} from "./editplayer.route";
import {loginPlayer} from "./loginplayer.route";
import {getAllCoursesDemo} from "./getcourses.route";
const playerRouter = express.Router();

const schema = buildSchema(`
    type Query{
        getAllCoursesDemo : [CourseDemo]
    }
    
    type Mutation{
        addPlayer(input: AddPlayerInput) : Player
        deletePlayer(id: String!) : ID
        editPlayer(input: EditPlayerInput) : Player
        loginPlayer(input: LoginPlayerInput) : Token
    }
    
    type Token{
        token: String
    }

    type Player{
        id: String!
        email: String!
        fullname: String!
        password: String!
        handicap: Float
        photo: String
    }
    
    type CourseDemo{
        id: String!
        name: String!
        locationLat: String!
        locationLong: String!
    }

    input AddPlayerInput{
        email:String!
        fullname:String!
        password: String!
    }
    
    input EditPlayerInput{
        id: String!
        email:String!
        fullname:String!
        password: String!
        handicap: Float!
        photo: String!
    }
    
    input LoginPlayerInput{
        email:String!
        password: String!
    }
    
`)

const root = {
    // @ts-ignore
    addPlayer,
    deletePlayer,
    editPlayer,
    loginPlayer,
    getAllCoursesDemo,
}

playerRouter.use('/player',  graphqlHTTP({
    schema:schema,
    rootValue: root,
    graphiql: true,
}));

export {playerRouter}
