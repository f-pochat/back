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
const playerRouter = express_1.default.Router();
exports.playerRouter = playerRouter;
const schema = (0, graphql_1.buildSchema)(`
    type Query{
        get: String
    }
    
    type Mutation{
        addPlayer(input: AddPlayerInput) : Player
    }
    
    type Token{
        token: String!
        role: String!
    }

    type Player{
        email: String!
        username: String!
        password: String!
    }

    input AddPlayerInput{
        email:String!
        username:String!
        password: String!
    }
    
`);
const root = {
    // @ts-ignore
    addPlayer: addplayer_route_1.addPlayer,
};
playerRouter.use('/player', (0, express_graphql_1.graphqlHTTP)({
    schema: schema,
    rootValue: root,
    graphiql: true,
}));
