import { Replie, User } from ".";

export type Comment = {
	id: number;
	isOwn: boolean;
	content: string;
	createdAt: string;
	score: number;
	user: User;
	replies: Replie[];
};
