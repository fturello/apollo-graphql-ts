import { ApolloServer } from "@apollo/server";
import typeDefs from "./schema.js";
import resolvers from "./resolvers.js";
import { startStandaloneServer } from "@apollo/server/standalone";

const server = new ApolloServer({
	typeDefs,
	resolvers,
});

const port = parseInt(process.env.APP_PORT, 10) || 4000;

const { url } = await startStandaloneServer(server, {
	listen: { port },
});

console.log(`🚀 Server ready at: ${url}`);
