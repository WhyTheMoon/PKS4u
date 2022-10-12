/**
 * @type {import('@types/aws-lambda').APIGatewayProxyHandler}
 */

const { ApolloServer, gql } = require("apollo-server-lambda");

const typeDefs = gql`
	type Query {
		hello: String
	}
`;

const resolvers = {
	Query: {
		hello: () => "Hello MF!",
	},
};

const server = new ApolloServer({
	typeDefs,
	resolvers,
	context: ({ event, context }) => ({
		headers: event.headers,
		functionName: context.functionName,
		event,
		context,
	}),
});

exports.handler = server.createHandler({
	cors: {
		origin: "*",
		credentials: true,
	},
});