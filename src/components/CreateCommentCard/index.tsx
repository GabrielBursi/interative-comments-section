import React from 'react'

import { CreateCommentCardProps } from './types'
import * as S from './styles'

import DefaultAvatar from '../../../public/images/avatars/default.png'

export const CreateCommentCard = ({ avatar=DefaultAvatar.src }: CreateCommentCardProps) => {
    return (
        <S.CreateCommentCard>
			<S.Avatar>
				<S.AvatarImage src={avatar} alt="Avatar do usuário" />
			</S.Avatar>
			<S.TextArea placeholder='Adicione um comentário...'/>
			<S.BtnSend>
				Enviar
			</S.BtnSend>
        </S.CreateCommentCard>
    )
}
