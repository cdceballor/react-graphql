// Template literal to define the schema definition
const { gql } = require('apollo-server');

// Define the types that we're gonna use to create types and schemas
const typeDefs = gql`
    # Defining the query
    type Query{
        "Query to get tracks"
        tracksForHome:[Track!]!
    }

    # Define the entities
    "A track is a group of modules to define specific topics"
    type Track{
        id: ID!
        title: String!
        author: Author!
        thumbnail: String
        length: Int
        modulesCount: Int
    }

    "Author definition"
    type Author{
        id: ID!
        name: String!
        photo: String
    }
`

module.exports = typeDefs;