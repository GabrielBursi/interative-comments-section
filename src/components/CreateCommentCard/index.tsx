import { ChangeEvent, useEffect, useRef, useState } from 'react';

import { CreateCommentCardProps } from './types'
import * as S from './styles'

import DefaultAvatar from '../../../public/images/avatars/default.png'

export const CreateCommentCard = ({ avatar = DefaultAvatar.src, mentionedUser }: CreateCommentCardProps) => {

	const [commentValue, setCommentValue] = useState(mentionedUser ? `@${mentionedUser}` : '');
	const commentRef = useRef<HTMLTextAreaElement | null>(null)

	const handleChange = (ev: ChangeEvent<HTMLTextAreaElement>) => {
		const value = ev.target.value
		if (mentionedUser) {
			const words = value.split(' ');

			if (words.length > 1 && words[0] !== '') {
				setCommentValue(value);
			}

		} else {
			setCommentValue(value);
		}
	}

	const handleFocus = () => {
		if (commentRef.current) {
			const words = commentValue.split(' ');
			const firstWordLength = words[0].length + 1;
			commentRef.current.selectionStart = firstWordLength;
			commentRef.current.selectionEnd = firstWordLength;
			commentRef.current.focus();
		}
	};

	useEffect(() => {
		if (mentionedUser)
			handleFocus()
		// eslint-disable-next-line react-hooks/exhaustive-deps
	}, [mentionedUser, commentRef.current]);

	return (
		<S.CreateCommentCard>
			<S.Avatar>
				<S.AvatarImage src={avatar} alt="Avatar do usuário" />
			</S.Avatar>
			<S.TextArea
				ref={commentRef}
				placeholder='Adicione um comentário...'
				value={commentValue}
				onChange={handleChange}
			/>
			<S.BtnSend>
				{mentionedUser ? 'responder' : 'enviar'}
			</S.BtnSend>
		</S.CreateCommentCard>
	)
}
