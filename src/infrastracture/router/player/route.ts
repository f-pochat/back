import express, {Router, Response, Request} from "express";
import {graphqlHTTP} from "express-graphql";
import {buildSchema} from "graphql";
import {addPlayer} from "./addplayer.route";
import {deletePlayer} from "./deleteplayer.route";
import {editPlayer} from "./editplayer.route";
import {loginPlayer} from "./loginplayer.route";
import {getAllCoursesDemo} from "./getcourses.route";
import {getCourse} from "../course/getCourse.route";
import {saveRound} from "./round/saveround.route";
const playerRouter = express.Router();

const schema = buildSchema(`
    type Query{
        getAllCoursesDemo : [CourseDemo]
        getCourse(id: String!) : Course!
    }
    
    type Mutation{
        addPlayer(input: AddPlayerInput) : Player
        deletePlayer(id: String!) : ID
        editPlayer(input: EditPlayerInput) : Player
        loginPlayer(input: LoginPlayerInput) : UserID
        saveRound(input: RoundInput) : Round
    }
    
    type UserID{
        id: String
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
    
     type Course{
        id: String!
        name: String!
        creator: String!
        description: String!
        location: Location!
        holes: [Hole]!
    }
    
   
    type Hole{
        id: String!
        num: Int!
        par: Int!
        distance: Int!
        scoringIndex: Int!
        locationTeebox: Location!
        locationMiddleOfGreen: Location!
    }
    
    type Location{
        lat: String!
        long: String!
    }
    
    type Round{
        id: String!
        playerId: String!
        courseId: String!
        playDate: String!
        playedHoles: [PlayedHole]
    }
    
    type PlayedHole {
        num: Int!
        score: Int!
        putts: Int!
        fairway: String!
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
    
    input RoundInput{
        playerId: String!
        courseId: String!
        playedHoles: [PlayedHoleInput]
    }
    
    input PlayedHoleInput {
        num: Int!
        score: Int!
        putts: Int!
        fairway: String!
    }
    
`)

const root = {
    // @ts-ignore
    addPlayer,
    deletePlayer,
    editPlayer,
    loginPlayer,
    getAllCoursesDemo,
    getCourse,
    saveRound
}

playerRouter.use('/player',  graphqlHTTP({
    schema:schema,
    rootValue: root,
    graphiql: true,
}));

export {playerRouter}
