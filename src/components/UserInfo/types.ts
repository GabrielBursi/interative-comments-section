import { CommentCardProps } from "../CommentCard/types";

export type UserInfoProps = {
	onEdit: () => void;
	isEditing?: boolean;
} & Pick<CommentCardProps, 'isOwn' | 'user' | 'createdAt' | 'id'>
