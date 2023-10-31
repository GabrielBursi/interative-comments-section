import React from 'react'
import { AiOutlineClose } from 'react-icons/ai'

import { ModalDeleteProps } from './types'
import * as S from './styles'

import { theme } from '../../styles'

export const ModalDelete = ({ isOpen, onClose, onConfirm }: ModalDeleteProps) => {

	const handleOverlayClose = (e: React.MouseEvent<HTMLDivElement, MouseEvent>) => {
		if (e.target === e.currentTarget) {
			onClose();
		}
	}

    return (
		<S.Overlay
			$isOpen={isOpen}
			onClick={(e) => handleOverlayClose(e)}
			aria-hidden={!isOpen}
			data-testid='overlay'
		>
			<S.Modal>
				<S.IconContainer onClick={onClose} data-testid='icon-container'>
					<AiOutlineClose color={theme.colors.primary} size={15}/>
				</S.IconContainer>
				<S.Title>
					Excluir comentário
				</S.Title>
				<S.InfoText>
					Tem certeza de que deseja excluir esse comentário? Isto removerá o comentário e não pode ser desfeito.
				</S.InfoText>
				<S.ButtonContainer>
					<S.Button onClick={onClose}>
						não, cancelar
					</S.Button>
					<S.Button variant='danger' onClick={onConfirm}>
						sim, excluir
					</S.Button>
				</S.ButtonContainer>
			</S.Modal>
        </S.Overlay>
    )
}
