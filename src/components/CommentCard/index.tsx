'use client'

import * as S from './styles'
import { CommentCardProps } from './types'

import { ScoreControl, UserInfo } from '..'

export const CommentCard = ({ isOwn = false, mentionedUser, content, createdAt, score, user, id }: CommentCardProps) => {
	return (
		<S.CommentCard>
			<ScoreControl score={score} />
			<S.Content>
				<UserInfo user={user} createdAt={createdAt} isOwn={isOwn} />
				<S.Text>
					{mentionedUser &&
						<S.MentionedUser>
							@{mentionedUser}
						</S.MentionedUser>
					}
					{' '}{content}
				</S.Text>
			</S.Content>
		</S.CommentCard>
	)
}
