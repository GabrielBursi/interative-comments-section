import React from 'react'

import { FaTrash, FaPencil } from 'react-icons/fa6'

import { UserInfoProps } from './types'
import * as S from './styles'
import { theme } from '../../styles'
import AvatarDefault from '../../../public/images/avatars/default.png'

export const UserInfo = ({ createdAt, user, isOwn }: UserInfoProps) => {
    return (
        <S.UserInfo>
			<S.UserContainer>
				<S.Avatar>
					<S.AvatarImage src={user.avatar ?? AvatarDefault.src} alt={`Avatar do usuário: ${user.username}`}/>
				</S.Avatar>
				<S.UserName>
					{user.username}
					{isOwn && <S.IsOwnText>você</S.IsOwnText>}
				</S.UserName>
				<S.CreatedAtText>
					{createdAt}
				</S.CreatedAtText>
			</S.UserContainer>
            <S.ActionsContainer>
				<S.ButtonAction variant='danger'>
					<FaTrash size={15}/>
					Excluir
				</S.ButtonAction>
				<S.ButtonAction>
					<FaPencil size={15} color={theme.colors.primary}/>
					Editar
				</S.ButtonAction>
			</S.ActionsContainer>
        </S.UserInfo>
    )
}
