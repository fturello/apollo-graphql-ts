export interface Post {
	userId: string;
	title: string;
	content: string;
}

export interface User {
	id: string;
	name: string;
	email: string;
	posts: Post[];
}

export interface Query {
	users: User[];
	user: User | null;
}

export interface Mutation {
	createPost: Post;
	deletePost: boolean;
	updatePost: boolean;
	createUser: User;
	deleteUser: boolean;
	updateUser: boolean;
}

export interface PostInput {
	title?: string;
	content?: string;
}

export interface UserInput {
	name?: string;
	email?: string;
}

export interface Schema {
	Query: Query;
	Mutation: Mutation;
}
