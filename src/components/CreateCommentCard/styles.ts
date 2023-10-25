import { styled, css } from "styled-components";
import { darken } from 'polished';

export const CreateCommentCard = styled.div`
    ${({ theme }) => css`
		background-color: ${theme.colors.white};
		padding: ${theme.spacings.small};
		height: 200px;
		border-radius: ${theme.border.radius.small};
		display: flex;
		justify-content: space-between;
		gap: ${theme.spacings.xsmall};
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

export const TextArea = styled.textarea`
	${({ theme }) => css`
		padding: ${theme.spacings.xxsmall} ${theme.spacings.xsmall};
		border-radius: ${theme.border.radius.small};
		outline: none;
		flex: 1;
		height: 100%;
		font-size: ${theme.font.sizes.medium};
		border: 2px solid ${theme.colors.mainBg};
		resize: none;
		transition: .2s;
		color: ${theme.colors.secondaryText};
		font-family: ${theme.font.family};

		&::placeholder {
			color: ${theme.colors.primaryText};
			font-size: ${theme.font.sizes.small};
			font-weight: ${theme.font.light};
		}

		&:focus {
			border: 2px solid ${theme.colors.primary};
		}

		&::-webkit-scrollbar {
			width: 8px;
		}

		&::-webkit-scrollbar-thumb {
			background-color: ${theme.colors.primary};
			border-radius: ${theme.border.radius.small};
		}

		&::-webkit-scrollbar-track {
			background-color: ${theme.colors.mainBg};
		}
	`}
`

export const BtnSend = styled.button`
	${({ theme }) => css`
		background-color: ${theme.colors.primary};
		padding: ${theme.spacings.xxsmall} ${theme.spacings.xsmall};
		border-radius: ${theme.border.radius.small};
		outline: none;
		border: none;
		text-transform: uppercase;
		color: ${theme.colors.white};
		font-weight: ${theme.font.bold};
		border: 2px solid ${theme.colors.primary};
		transition: .4s;
		height: fit-content;
		font-size: ${theme.font.sizes.medium};
		font-family: ${theme.font.family};

		&:focus {
			border: 2px solid ${darken(0.1, theme.colors.primary)};
		}

		&:hover {
			background-color: ${darken(0.1, theme.colors.primary)};
		}

		&:active {
			transform: scale(0.95);
		}
	`}
`
