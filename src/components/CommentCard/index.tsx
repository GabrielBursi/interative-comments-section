'use client'

import { useRef, useState } from 'react'
import { MdOutlineKeyboardArrowDown } from 'react-icons/md'

import * as S from './styles'
import { CommentCardProps } from './types'

import { ScoreControl, UserInfo } from '..'

export const CommentCard = ({ isOwn = false, mentionedUser, content, createdAt, score, user, id, quantityOfReplies = 0 }: CommentCardProps) => {

	const [showFullText, setShowFullText] = useState(content.length < 780);
	const idCommentCard = useRef(id)

	const handleClick = () => {
		console.log(idCommentCard.current)
	}

	return (
		<S.CommentCard onClick={handleClick}>
			<ScoreControl score={score} />
			<S.Content>
				<UserInfo user={user} createdAt={createdAt} isOwn={isOwn} />
				<S.Text $showFullText={showFullText}>
					{mentionedUser &&
						<S.MentionedUser>
							@{mentionedUser}
						</S.MentionedUser>
					}
					{' '}
					{showFullText ? content : `${content.slice(0, 780)}...`}
					{' '}
					{!showFullText && (
						<S.SeeMore onClick={() => setShowFullText(true)}>Ver mais</S.SeeMore>
					)}
				</S.Text>
				{!!quantityOfReplies &&
					<S.RepliesText>
						{quantityOfReplies} respostas
						<MdOutlineKeyboardArrowDown size={20} />
					</S.RepliesText>
				}
			</S.Content>
		</S.CommentCard>
	)
}
