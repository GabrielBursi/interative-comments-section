import { Comment } from ".";

export type Replie = Omit<Comment, 'replies'> & {
	replyingTo: string;
}
