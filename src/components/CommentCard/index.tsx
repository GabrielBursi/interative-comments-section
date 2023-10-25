import React from 'react'

import { CommentCardProps } from './types'
import * as S from './styles'

import { ScoreControl } from '..'
import { UserInfo } from '../UserInfo'

export const CommentCard = ({ isOwn = false, mentionedUser, content, createdAt, score, user }: CommentCardProps) => {
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
