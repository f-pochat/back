import express, {Router, Response, Request} from "express";
import {graphqlHTTP} from "express-graphql";
import {buildSchema} from "graphql";
import {loginAdmin} from "./admin/loginAdmin.route";
import {editAdmin} from "./admin/editAdmin.route";
import {addCourse} from "./course/addCourse.route";
import {addAdmin} from "./admin/addAdmin.route";
import {deleteCourse} from "./course/deleteCourse.route";
import {getCourses} from "./course/getCourses.route";
import {getCourse} from "./course/getCourse.route";
import {editCourse} from "./course/editCourse.route";


const router = express.Router();

const schema = buildSchema(`
    type Query{
        getCourses : [Course]
        getCourse(id: String!) : Course
    }
    
    type Mutation{
        addAdmin(input: AdminInput) : Admin
        loginAdmin(input: LoginAdminInput): Token
        editAdmin(input: EditAdminInput): Admin
        addCourse(input: CourseInput) : Course
        deleteCourse(id: String) : ID
        editCourse(input: EditCourseInput) : Course
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
    
    input EditCourseInput{
        id: String!
        name: String!
        creator: String!
        description: String!
        location: LocationInput!
        holes: [EditHoleInput]!
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
        par: Int!
        scoringIndex: Int!
        distance: Int!
        locationTeebox: LocationInput!
        locationMiddleOfGreen: LocationInput!
    }
    
    input EditHoleInput{
        id: String!
        num: Int!
        par: Int!
        distance: Int!
        scoringIndex: Int!
        locationMiddleOfGreen: LocationInput!
        locationTeebox: LocationInput!
    }
    
    input LocationInput{
        lat: String!
        long: String!
    }
    
`)

const root = {
    // @ts-ignore
    addAdmin,
    loginAdmin,
    editAdmin,
    addCourse,
    deleteCourse,
    getCourses,
    getCourse,
    editCourse,
}

router.use('/admin',  graphqlHTTP({
    schema:schema,
    rootValue: root,
}));

export {router}
