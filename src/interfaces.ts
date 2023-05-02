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

export interface PostInput {
	title?: string;
	content?: string;
}

export interface UserInput {
	name?: string;
	email?: string;
}
