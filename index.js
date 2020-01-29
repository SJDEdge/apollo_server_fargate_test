const { ApolloServer, gql } = require('apollo-server')
const fetch = require('node-fetch')

const typeDefs = gql`
  type Weather {
    userId: Int,
    id: Int,
    title: String,
    completed: Boolean 
  }

  type Query {
    weatherForecast: Weather!
  }
`

const resolvers = {
    Query: {
        weatherForecast: async () => {
            const response = await fetch('https://jsonplaceholder.typicode.com/todos/1')
            const data = await response.json()
            console.log("DATA :", data)
            return data
        }
}
}

const server = new ApolloServer({
    typeDefs,
    resolvers,
})

// The `listen` method launches a web server.
server.listen(3000).then(({ url }) => {
    console.log(`🚀  Server ready at ${url}`)
})