'use client'

import { ChangeEvent, useEffect, useRef, useState } from 'react'
import { MdOutlineKeyboardArrowDown } from 'react-icons/md'

import * as S from './styles'
import { CommentCardProps } from './types'

import { ScoreControl, UserInfo } from '..'

export const CommentCard = ({ isOwn = false, mentionedUser, content, createdAt, score, user, id, quantityOfReplies = 0 }: CommentCardProps) => {

	const [contentText, setContentText] = useState(mentionedUser ? `@${mentionedUser} ${content}` : content);
	const [editText, setEditText] = useState(contentText);
	const [showInput, setShowInput] = useState(false);

	const commentRef = useRef<HTMLTextAreaElement | null>(null)

	const contentWithoutFirstWord = contentText.slice(contentText.indexOf(' ') + 1);

	const handleChange = (ev: ChangeEvent<HTMLTextAreaElement>) => {
		const value = ev.target.value
		if (mentionedUser) {
			const words = value.split(' ');

			if (words.length > 1 && words[0] !== '') {
				setEditText(value);
			}

		} else {
			setEditText(value);
		}
	}

	const confirmEdit = () => {
		setContentText(editText)
		setShowInput(false)
	}

	const cancelEdit = () => {
		setEditText(contentText)
		setShowInput(false)
	}

	const handleFocus = () => {
		if (commentRef.current) {
			const textLength = contentText.length;

			commentRef.current.selectionStart = textLength;
			commentRef.current.selectionEnd = textLength;
			commentRef.current.focus();
		}
	};

	useEffect(() => {
		if (showInput)
			handleFocus()
		// eslint-disable-next-line react-hooks/exhaustive-deps
	}, [showInput, commentRef.current]);

	return (
		<S.CommentCard>
			<ScoreControl score={score} />
			<S.Content>
				<UserInfo
					user={user}
					createdAt={createdAt}
					isOwn={isOwn}
					id={id}
					onEdit={() => setShowInput(true)}
				/>
				{showInput ?
					<S.TextArea
						ref={commentRef}
						placeholder='Adicione um comentário...'
						value={editText}
						onChange={handleChange}
					/>
					:
					<S.Text>
						{mentionedUser &&
							<S.MentionedUser>
								@{mentionedUser}{' '}
							</S.MentionedUser>
						}
						{mentionedUser ? contentWithoutFirstWord : contentText}
					</S.Text>
				}
				<S.FooterCard>
					{!!quantityOfReplies &&
						<S.RepliesText>
							{quantityOfReplies} respostas
							<MdOutlineKeyboardArrowDown size={20} />
						</S.RepliesText>
					}
					{showInput &&
						<S.BtnContainer>
							<S.BtnEditAction onClick={cancelEdit}>
								cancelar
							</S.BtnEditAction>
							<S.BtnEditAction onClick={confirmEdit}>
								editar
							</S.BtnEditAction>
						</S.BtnContainer>
					}
				</S.FooterCard>
			</S.Content>
		</S.CommentCard>
	)
}
