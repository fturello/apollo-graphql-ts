const typeDefs = `#graphql
	type Post {
		userId: ID!
		title: String!
		content: String!
	}

	type User {
		id: ID!
		name: String!
		email: String!
		posts: [Post]
	}

	type Query {
		users: [User!]!
		user(id: ID!): User!
	}

	input PostInput {
		title: String
		content: String
	}

	input UserInput {
		name: String
		email: String
	}

	type Mutation {
		createPost(userId: ID!, title: String!, content: String!): Post!
		deletePost(userId: ID!, title: String!): Boolean!
		updatePost(userId: ID!, title: String!, input: PostInput!): Boolean!
		createUser(id: ID!, name: String!, email: String!): User!
		deleteUser(id: ID!): Boolean!
		updateUser(id: ID!, input: UserInput!): Boolean!
	}
`;

export default typeDefs;
