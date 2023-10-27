'use client'

import { FaTrash, FaPencil, FaReply } from 'react-icons/fa6'

import { UserInfoProps } from './types'
import * as S from './styles'
import { theme } from '../../styles'
import AvatarDefault from '../../../public/images/avatars/default.png'

export const UserInfo = ({ createdAt, user, isOwn }: UserInfoProps) => {

	const formatData = (isoDate: string) => {
		const data = new Date(isoDate);
		const agora = new Date();

		const diferenca = agora.getTime() - data.getTime()

		if (diferenca < 60 * 1000) {
			return `${Math.floor(diferenca / 1000)} segundos atrás`;
		} else if (diferenca < 60 * 60 * 1000) {
			return `${Math.floor(diferenca / (60 * 1000))} minutos atrás`;
		} else if (diferenca < 24 * 60 * 60 * 1000) {
			return `${Math.floor(diferenca / (60 * 60 * 1000))} horas atrás`;
		} else if (diferenca < 7 * 24 * 60 * 60 * 1000) {
			return `${Math.floor(diferenca / (24 * 60 * 60 * 1000))} dias atrás`;
		} else {
			return `${Math.floor(diferenca / (7 * 24 * 60 * 60 * 1000))} semanas atrás`;
		}
	};

	return (
		<S.UserInfo>
			<S.UserContainer>
				<S.Avatar>
					<S.AvatarImage src={user.avatar ?? AvatarDefault.src} alt={`Avatar do usuário: ${user.username}`} />
				</S.Avatar>
				<S.UserName>
					{user.username}
					{isOwn && <S.IsOwnText>você</S.IsOwnText>}
				</S.UserName>
				<S.CreatedAtText>
					{formatData(createdAt)}
				</S.CreatedAtText>
			</S.UserContainer>
			<S.ActionsContainer>
				{isOwn ?
					<>
						<S.ButtonAction variant='danger'>
							<FaTrash size={15} />
							Excluir
						</S.ButtonAction>
						<S.ButtonAction>
							<FaPencil size={15} color={theme.colors.primary} />
							Editar
						</S.ButtonAction>
					</>
					:
					<S.ButtonAction>
						<FaReply size={15} color={theme.colors.primary} />
						Responder
					</S.ButtonAction>
				}
			</S.ActionsContainer>
		</S.UserInfo>
	)
}
