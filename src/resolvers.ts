import { User, Post, PostInput, UserInput } from "./types.js";

// Datas
const users: User[] = [
	{
		id: "1",
		name: "Alice",
		email: "alice@example.com",
		posts: [
			{
				userId: "1",
				title: "My First Post",
				content: "This is the content of my first post.",
			},
			{
				userId: "1",
				title: "My Second Post",
				content: "This is the content of my second post.",
			},
		],
	},
	{
		id: "2",
		name: "Bob",
		email: "bob@example.com",
		posts: [
			{
				userId: "2",
				title: "My First Post",
				content: "This is the content of my first post.",
			},
		],
	},
];

const resolvers = {
	Query: {
		users: (): User[] => users,
		user: (parent: any, args: { id: string }): User | undefined =>
			users.find((user) => user.id === args.id),
	},
	User: {
		posts: (parent: User, args: any, context: any, info: any): Post[] => {
			return parent.posts;
		},
	},
	Mutation: {
		createPost: (
			parent: any,
			{
				userId,
				title,
				content,
			}: { userId: string; title: string; content: string }
		): Post => {
			const user = users.find((user) => user.id === userId);
			if (!user) {
				throw new Error("User not found");
			}
			const newPost: Post = { userId, title, content };
			user.posts.push(newPost);
			return newPost;
		},
		deletePost: (
			parent: any,
			{ userId, title }: { userId: string; title: string }
		): boolean => {
			const user = users.find((user) => user.id === userId);
			if (!user) {
				throw new Error("User not found");
			}
			const index = user.posts.findIndex((post) => post.title === title);
			if (index !== -1) {
				user.posts.splice(index, 1);
				return true;
			} else {
				throw new Error("Post not found");
			}
		},
		updatePost: (
			parent: any,
			{
				userId,
				title,
				input,
			}: { userId: string; title: string; input: PostInput }
		): boolean => {
			const user = users.find((user) => user.id === userId);
			if (!user) {
				throw new Error("User not found");
			}
			const index = user.posts.findIndex((post) => post.title === title);
			if (index !== -1) {
				user.posts[index] = { ...user.posts[index], ...input };
				return true;
			} else {
				throw new Error("Post not found");
			}
		},
		createUser: (
			parent: any,
			{ id, name, email }: { id: string; name: string; email: string }
		): User => {
			const index = users.findIndex((user) => user.id === id);
			if (index !== -1) {
				throw new Error("ID already exists");
			}
			const newUser = { id, name, email, posts: [] };
			users.push(newUser);
			return newUser;
		},
		deleteUser: (parent: any, { id }: { id: string }): boolean => {
			const index = users.findIndex((user) => user.id === id);
			if (index !== -1) {
				users.splice(index, 1);
				return true;
			} else {
				throw new Error("ID does not exist");
			}
		},
		updateUser: (
			parent: any,
			{ id, input }: { id: string; input: UserInput }
		): boolean => {
			const index = users.findIndex((user) => user.id === id);
			if (index !== -1) {
				users[index] = { ...users[index], ...input };
				return true;
			} else {
				throw new Error("ID does not exist");
			}
		},
	},
};

export default resolvers;
