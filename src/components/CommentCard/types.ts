import { Comment } from "@/types";

export type CommentCardProps = {
    isOwn?: boolean;
	mentionedUser ?: string;
	quantityOfReplies?: number;
} & Omit<Comment, 'replies'>
