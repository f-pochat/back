"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.router = void 0;
const express_1 = __importDefault(require("express"));
const express_graphql_1 = require("express-graphql");
const graphql_1 = require("graphql");
const loginAdmin_route_1 = require("./admin/loginAdmin.route");
const editAdmin_route_1 = require("./admin/editAdmin.route");
const addCourse_route_1 = require("./course/addCourse.route");
const addAdmin_route_1 = require("./admin/addAdmin.route");
const deleteCourse_route_1 = require("./course/deleteCourse.route");
const getCourses_route_1 = require("./course/getCourses.route");
const router = express_1.default.Router();
exports.router = router;
const schema = (0, graphql_1.buildSchema)(`
    type Query{
        getCourses : [Course]
    }
    
    type Mutation{
        addAdmin(input: AdminInput) : Admin
        loginAdmin(input: LoginAdminInput): Token
        editAdmin(input: EditAdminInput): Admin
        addCourse(input: CourseInput) : Course
        deleteCourse(id: String) : ID
        
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
        locationMiddleOfGreen: Location!
        locationMiddleOfFW: Location!
        course: String!
        teeboxes: [Teebox]!
    }
    
    type Teebox{
        id: String!
        name:String!
        color: String!
        par: Int!
        scoringIndex: Int!
        locationTeeBox: Location!
    }
    
    type Location{
        lat: String!
        long: String!
    }
    
    
    
    input CourseInput{
        name: String!
        creator: String!
        description: String!
        location: LocationInput!
        holes: [HoleInput]!
    }
    input HoleInput{
        num: Int!
        locationMiddleOfGreen: LocationInput!
        locationMiddleOfFW: LocationInput!
        teeboxes: [TeeboxInput]!
    }
    
    input TeeboxInput{
        name: String!
        color: String!
        par: Int!
        scoringIndex: Int!
        locationTeeBox: LocationInput!
    }
    
    input LocationInput{
        lat: String!
        long: String!
    }
    
`);
const root = {
    // @ts-ignore
    addAdmin: addAdmin_route_1.addAdmin,
    loginAdmin: loginAdmin_route_1.loginAdmin,
    editAdmin: editAdmin_route_1.editAdmin,
    addCourse: addCourse_route_1.addCourse,
    deleteCourse: deleteCourse_route_1.deleteCourse,
    getCourses: getCourses_route_1.getCourses,
};
router.use('/admin', (0, express_graphql_1.graphqlHTTP)({
    schema: schema,
    rootValue: root,
    graphiql: true,
}));
