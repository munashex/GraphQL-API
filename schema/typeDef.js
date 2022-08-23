const {gql} = require("apollo-server") 

const typeDefs = gql`  
type User { 
id: ID!
name: String!
age: Int!
nationality: Nationality!
}

enum Nationality { 
ZIMBABWE 
RUSSIA 
RWANDA
}

type Query {
users: [User!]!
user(id: ID!): User!
username(name: String!): User!
}

input createUserData {
name: String!
age: Int! 
nationality: Nationality!
}

input updatedUser {
id: ID!
newName: String!
}

type Mutation {
createUser(input: createUserData!): User!
updateUser(input: updatedUser!): User
deleteUser(id: ID!): User
}

`
module.exports = {typeDefs}