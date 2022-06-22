"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.playerRouter = void 0;
const express_1 = __importDefault(require("express"));
const express_graphql_1 = require("express-graphql");
const graphql_1 = require("graphql");
const addplayer_route_1 = require("./addplayer.route");
const deleteplayer_route_1 = require("./deleteplayer.route");
const editplayer_route_1 = require("./editplayer.route");
const loginplayer_route_1 = require("./loginplayer.route");
const getcourses_route_1 = require("./getcourses.route");
const getCourse_route_1 = require("../course/getCourse.route");
const saveround_route_1 = require("./round/saveround.route");
const addreview_route_1 = require("./review/addreview.route");
const getReviewsByCourse_route_1 = require("./review/getReviewsByCourse.route");
const getRounds_route_1 = require("./round/getRounds.route");
const getplayer_route_1 = require("./getplayer.route");
const playerRouter = express_1.default.Router();
exports.playerRouter = playerRouter;
const schema = (0, graphql_1.buildSchema)(`
    type Query{
        getAllCoursesDemo : [CourseDemo]
        getCourse(id: String!) : Course!
        getPlayerInfo(id: String!) : Player!
        getReviewsByCourse(id: String!) : [Review]
        getRoundsByPlayer(id: String!) : [Round]
        getRoundsByCourse(id: String!) : [Round]
    }
    
    type Mutation{
        addPlayer(input: AddPlayerInput) : Player
        deletePlayer(id: String!) : ID
        editPlayer(input: EditPlayerInput) : Player
        loginPlayer(input: LoginPlayerInput) : Token
        newRound(input: RoundInput) : Round
        addReview(input: ReviewInput) : Review
        addHole(input: PlayedHoleInput) : PlayedHole
    }
    
    type Token{
        token: String
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
    }
    
    type PlayedHole {
        num: Int!
        score: Int!
        putts: Int!
        fairway: String!
    }
    
    type Review {
        id: String!
        ratingNumber: Int!
        ratingText: String!
        courseId: String!
        userId: String!
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
    }
    
    input PlayedHoleInput {
        playerId: String!
        courseId: String!
        num: Int!
        score: Int!
        putts: Int!
        fairway: String!
    }
    
     input ReviewInput{
        ratingNumber: Int!
        ratingText: String!
        courseId: String!
        userId: String!
    }
    
    
`);
const root = {
    // @ts-ignore
    addPlayer: addplayer_route_1.addPlayer,
    deletePlayer: deleteplayer_route_1.deletePlayer,
    editPlayer: editplayer_route_1.editPlayer,
    loginPlayer: loginplayer_route_1.loginPlayer,
    getAllCoursesDemo: getcourses_route_1.getAllCoursesDemo,
    getCourse: getCourse_route_1.getCourse,
    newRound: saveround_route_1.newRound,
    addReview: addreview_route_1.addReview,
    getReviewsByCourse: getReviewsByCourse_route_1.getReviewsByCourse,
    getRoundsByPlayer: getRounds_route_1.getRoundsByPlayer,
    getRoundsByCourse: getRounds_route_1.getRoundsByCourse,
    getPlayerInfo: getplayer_route_1.getPlayerInfo,
    addHole: saveround_route_1.addHole,
};
playerRouter.use('/player', (0, express_graphql_1.graphqlHTTP)({
    schema: schema,
    rootValue: root,
}));
