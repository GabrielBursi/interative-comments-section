import { styled, css } from "styled-components";
import { darken } from 'polished'

type ButtonProps = {
	variant?: 'danger' | 'normal',
}

export const UserInfo = styled.div`
	display: flex;
	justify-content: space-between;
	align-items: center;
`

export const UserContainer = styled.div`
	${({ theme }) => css`
		display: flex;
		align-items: center;
		gap: ${theme.spacings.xxsmall};
		flex: 1;
	`}
`

export const Avatar = styled.div`
	${({ theme }) => css`
		width: 40px;
		height: 40px;
		border-radius: 50%;
		overflow: hidden;
		background-color: ${theme.colors.mainBg};
	`}
`;

export const AvatarImage = styled.img`
	width: 100%;
	height: 100%;
	object-fit: cover;
`;

export const UserName = styled.span`
	${({ theme }) => css`
		color: ${theme.colors.secondaryText};
		font-size: ${theme.font.sizes.large};
		font-weight: ${theme.font.bold};
		display: flex;
		align-items: center;
		gap: ${theme.spacings.xxsmall};
	`}
`

export const IsOwnText = styled.span`
	${({ theme }) => css`
		color: ${theme.colors.white};
		font-size: ${theme.font.sizes.xsmall};
		font-weight: ${theme.font.bold};
		background-color: ${theme.colors.primary};
		border-radius: ${theme.border.radius.small};
		padding: 2px 6px;
		text-transform: uppercase;
	`}
`

export const CreatedAtText = styled.span`
	${({ theme }) => css`
		color: ${theme.colors.primaryText};
		font-size: ${theme.font.sizes.medium};
		font-weight: ${theme.font.bold};
		margin-left: ${theme.spacings.small};
	`}
`

export const ActionsContainer = styled.div`
	${({ theme }) => css`
		display: flex;
		align-items: center;
		gap: ${theme.spacings.xsmall};
	`}
`

export const ButtonAction = styled.button<ButtonProps>`
	${({ theme, variant='normal' }) => css`
		display: flex;
		align-items: center;
		gap: ${theme.spacings.xxsmall};
		background-color: transparent;
		outline: none;
		cursor: pointer;
		font-size: ${theme.font.sizes.medium};
		font-weight: ${theme.font.bold};
		border: none;
		padding: ${theme.spacings.xxsmall};
		color: ${variant === 'danger' ? theme.colors.red : theme.colors.primary};
		transition: .4s;

		&:hover {
			color: ${darken(0.1, variant === 'danger' ? theme.colors.red : theme.colors.primary)};
		}

		&:active {
			transform: scale(0.95);
		}
	`}
`
