import { ApolloServer } from "@apollo/server";
import typeDefs from "./schema.js";
import resolvers from "./resolvers.js";
import { startStandaloneServer } from "@apollo/server/standalone";

const server = new ApolloServer({
	typeDefs,
	resolvers,
});

const port: number = parseInt(process.env.APP_PORT ?? "4000", 10);

const { url } = await startStandaloneServer(server, {
	listen: { port },
});

console.log(`🚀 Server ready at: ${url}`);
