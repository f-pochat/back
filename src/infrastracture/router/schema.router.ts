const {buildSchema} = require('graphql');

export class Schema {
    schema = buildSchema(`
        type Query{
            text: [String]
        }
`)
}