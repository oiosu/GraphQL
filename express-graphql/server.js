const { ApolloServer } = require("@apollo/server");
const cors = require("cors");
const { json } = require("body-parser");
const { expressMiddleware } = require("@apollo/server/express4");
const { makeExecutableSchema } = require("@graphql-tools/schema");

async function startApolloServer() {
  //Required logic for integrating with Express
  const app = express();
  const schema = makeExecutableSchema({
    typeDefs: loadedTypes,
    resolvers: loadedResolvers,
  });

  //This Apollo server object contains all the middleware and
  //logic to handle incoming graphical requests.
  const server = new ApolloServer({
    schema,
  });

  //Ensure we wait for our apollo server to start
  await server.start();
  //Connect apollo middleware with express server
  app.use(
    "/graphql",
    cors(),
    json(),
    expressMiddleware(server, {
      context: async ({ req }) => ({ token: req.headers.token }),
    })
  );

  app.listen(4000, () => {
    console.log("Running a GraphQL API server...");
  });
}
