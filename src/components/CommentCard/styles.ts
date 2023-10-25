import { styled, css } from "styled-components";

export const CommentCard = styled.div`
    ${({ theme }) => css`
		background-color: ${theme.colors.white};
		padding: ${theme.spacings.small};
		height: 200px;
		border-radius: ${theme.border.radius.small};
		display: flex;
		gap: ${theme.spacings.xsmall};
    `}
`

export const Content = styled.div`
	${({ theme }) => css`
		display: flex;
		flex-direction: column;
		gap: ${theme.spacings.xxsmall};
	`}
`

export const Text = styled.p`
	${({ theme }) => css`
		color: ${theme.colors.primaryText};
		font-size: ${theme.font.sizes.medium};
		overflow: hidden;
		text-overflow: ellipsis;
		display: -webkit-box;
		-webkit-line-clamp: 5; /* Número de linhas que você deseja exibir antes do corte */
		-webkit-box-orient: vertical;
	`}
`

export const MentionedUser = styled.span`
	${({ theme }) => css`
		color: ${theme.colors.primary};
		font-size: ${theme.font.sizes.medium};
		font-weight: ${theme.font.bold};
	`}
`

export const SeeMore = styled.span`
	${({ theme }) => css`
		color: ${theme.colors.primary};
		font-size: ${theme.font.sizes.small};
		font-weight: ${theme.font.bold};
		cursor: pointer;

		&:hover {
			text-decoration: underline;
		}
	`}
`
