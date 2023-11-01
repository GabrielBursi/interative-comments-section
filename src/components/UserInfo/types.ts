import { CommentCardProps } from "../CommentCard/types";

export type UserInfoProps = {
	onEdit: () => void;
} & Pick<CommentCardProps, 'isOwn' | 'user' | 'createdAt' | 'id'>
