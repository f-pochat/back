import express, {Router, Response, Request} from "express";
import {graphqlHTTP} from "express-graphql";
import {buildSchema} from "graphql";
import {addAdmin} from "../admin/addAdmin.route";
import {deleteCourse} from "./deleteCourse.route";
import {addCourse} from "./addCourse.route";

const courseRouter = express.Router();

const schema = buildSchema(`
    type Query{
        text: String
    }
    
    type Mutation{
        addCourse(input: CourseInput) : Course
        deleteCourse(id: String) : ID
    }
    
    type Token{
        token: String!
        role: String!
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
    
    input LoginAdminInput{
        user:String!
        password:String!
    }
    
    input EditAdminInput{
        user: String!
        password: String!
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
    
`)

const root = {
    // @ts-ignore
    addCourse,
    deleteCourse
}
courseRouter.use('/course',  graphqlHTTP({
    schema:schema,
    rootValue: root,
    graphiql: true,
}));

export {courseRouter}
