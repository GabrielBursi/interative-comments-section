'use client'

import { FaTrash, FaPencil, FaReply } from 'react-icons/fa6'
import { formatDistanceToNow } from 'date-fns'

import { UserInfoProps } from './types'
import * as S from './styles'
import { theme } from '../../styles'
import AvatarDefault from '../../../public/images/avatars/default.png'

export const UserInfo = ({ createdAt, user, isOwn }: UserInfoProps) => {
	return (
		<S.UserInfo>
			<S.UserData>
				<S.Avatar>
					<S.AvatarImage src={user.avatar ?? AvatarDefault.src} alt={`Avatar do usuário: ${user.username}`} />
				</S.Avatar>
				<S.UserName>
					{user.username}
					{isOwn && <S.IsOwnText>você</S.IsOwnText>}
				</S.UserName>
			</S.UserData>
			<S.InfoAndActionsContainer>
				<S.CreatedAtText>
					{formatDistanceToNow(new Date(createdAt), { addSuffix: true })}
				</S.CreatedAtText>
				<S.ActionsContainer>
					{isOwn ?
						<>
							<S.ButtonAction variant='danger'>
								<FaTrash size={15} />
								<S.ButtonText>Excluir</S.ButtonText>
							</S.ButtonAction>
							<S.ButtonAction>
								<FaPencil size={15} color={theme.colors.primary} />
								<S.ButtonText>Editar</S.ButtonText>
							</S.ButtonAction>
						</>
						:
						<S.ButtonAction>
							<FaReply size={15} color={theme.colors.primary} />
							<S.ButtonText>Responder</S.ButtonText>
						</S.ButtonAction>
					}
				</S.ActionsContainer>
			</S.InfoAndActionsContainer>
		</S.UserInfo>
	)
}
