const {ApolloServer} = require("apollo-server") 
const {typeDefs}  = require("./schema/typeDef")
const {resolvers} = require("./schema/resolver")

const server = new ApolloServer({typeDefs, resolvers})  

server.listen().then(({url}) => {
    console.log(`server is running on port ${url}`)
})

