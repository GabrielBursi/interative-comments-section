import { Comment } from "@/types";

export type CommentCardProps = {
    isOwn?: boolean;
	mentionedUser ?: string
} & Omit<Comment, 'replies'>
