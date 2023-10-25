export type Comment = {
	id: number;
	content: string;
	createdAt: string;
	score: number;
	user: {
		avatar: string;
		username: string;
	};
	replies: Comment[];
};
