const express = require("express");
const path = require("path");
const { makeExecutablesSchema } = require("@graphql-tools/schema");
const { loadFilesSync } = require("@graphql-tools/load-files");
const { ApolloServer } = require("apollo-server-express");
const { Console } = require("console");
const loadedTypes = loadFilesSync("**/*", { extensions: ["graphql"] });
const loadedResolvers = loadFilesSync(
  path.join(__dirname, "**/*.resolvers.js")
);

async function startApolloServer() {
  //Required logic for integrating with Express
  const app = express();

  const schema = makeExecutablesSchema({
    typeDefs: loadedTypes,
    resolvers: loadedResolvers,
  });

  //This Apollo server object contains all the middleware and
  // logic to handle incoming graphical requests.
  const server = new ApolloServer({
    schema,
  });

  //Ensure we wait for our apollo server to start
  await server.start();
  //Connect apollo middleware with express server
  server.applyMiddleware({ app, path: "/graphql " });
  // app express 서버를 connect하고, incoming request를 처리할 graphql path!
  app.listen(4000, () => {
    console.log("Running a GraphQL API server...");
  });
}

startApolloServer();
