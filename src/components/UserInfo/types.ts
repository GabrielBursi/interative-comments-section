import { CommentCardProps } from "../CommentCard/types";

export type UserInfoProps = Pick<CommentCardProps, 'isOwn' | 'user' | 'createdAt'>
