import { styled, css } from "styled-components";
import media from "styled-media-query";
import { darken } from 'polished';

type ModalProps = {
	$isOpen: boolean
}

type ButtonProps = {
	variant?: 'normal' | 'danger'
}

export const Overlay = styled.div<ModalProps>`
    ${({ $isOpen }) => css`
		display: ${$isOpen ? 'flex' : 'none'};
        justify-content: center;
		align-items: center;
        background: rgba(0, 0, 0, 0.5);
        position: fixed;
        top: 0;
        bottom: 0;
        left: 0;
        right: 0;
        height: 100vh;
        overflow: hidden;
        opacity: ${$isOpen ? 1 : 0};
        pointer-events: ${$isOpen ? 'all' : 'none'};
        transition: opacity 0.3s ease-in-out;
    `}
`


export const Modal = styled.div`
	${({ theme }) => css`
        z-index: ${theme.layers.menu};
		background-color: ${theme.colors.white};
		padding: ${theme.spacings.xsmall};
		display: flex;
		flex-direction: column;
		gap: ${theme.spacings.xsmall};
		border-radius: ${theme.border.radius.small};
		margin: 0 ${theme.spacings.xxsmall};
		max-width: 400px;
		position: relative;
		border: 2px solid ${theme.colors.mainBg};
	`}
`

export const Title = styled.h1`
	${({ theme }) => css`
		color: ${theme.colors.secondaryText};
		font-size: ${theme.font.sizes.large};
		font-weight: ${theme.font.bold};

		${media.lessThan('medium')`
			font-size: ${theme.font.sizes.medium};
		`}
	`}
`

export const InfoText = styled.p`
	${({ theme }) => css`
		color: ${theme.colors.primaryText};
		font-size: ${theme.font.sizes.medium};
		font-weight: ${theme.font.bold};

		${media.lessThan('medium')`
			font-size: ${theme.font.sizes.small};
		`}
	`}
`

export const ButtonContainer = styled.div`
	${({ theme }) => css`
		display: flex;
		justify-content: space-between;
		gap: ${theme.spacings.xxsmall};
		width: 100%;

		${media.lessThan('medium')`
			flex-direction: column;
		`}
	`}
`

export const Button = styled.button<ButtonProps>`
	${({ theme, variant = 'normal' }) => css`
		background-color: ${variant === 'danger' ? theme.colors.red : darken(0.2, theme.colors.primaryText)};
		padding: ${theme.spacings.xxsmall} ${theme.spacings.xsmall};
		border-radius: ${theme.border.radius.small};
		outline: none;
		border: none;
		text-transform: uppercase;
		color: ${theme.colors.white};
		font-weight: ${theme.font.bold};
		border: 2px solid ${variant === 'danger' ? theme.colors.red : darken(0.2, theme.colors.primaryText)};
		transition: .4s;
		height: fit-content;
		font-size: ${theme.font.sizes.medium};
		font-family: ${theme.font.family};
		width: 100%;

		&:focus {
			border: 2px solid ${darken(0.1, theme.colors.primary)};
		}

		&:hover {
			background-color: ${variant === 'danger' ? darken(0.1, theme.colors.red) : darken(0.3, theme.colors.primaryText)};
		}

		&:active {
			transform: scale(0.95);
		}

		${media.lessThan('medium')`
			font-size: ${theme.font.sizes.small};
		`}
	`}
`

export const IconContainer = styled.div`
	${({ theme }) => css`
		position: absolute;
		right: 0;
		top: 0;
		padding: ${theme.spacings.xxsmall};
		display: flex;
		align-items: center;
		justify-content: center;
		cursor: pointer;
		width: fit-content;
		height: fit-content;
	`}
`
