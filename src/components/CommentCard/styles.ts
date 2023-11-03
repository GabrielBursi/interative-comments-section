import { styled, css } from "styled-components";
import media from "styled-media-query";
import { darken } from "polished"

export const CommentCard = styled.div`
    ${({ theme }) => css`
		background-color: ${theme.colors.white};
		padding: ${theme.spacings.small};
		border-radius: ${theme.border.radius.small};
		display: flex;
		gap: ${theme.spacings.xsmall};

		${media.lessThan('medium')`
			padding: ${theme.spacings.xsmall};
			gap: ${theme.spacings.xxsmall};
			flex-direction: column;
		`}
    `}
`

export const Content = styled.div`
	${({ theme }) => css`
		display: flex;
		flex-direction: column;
		gap: ${theme.spacings.xxsmall};
		width: 100%;
	`}
`

export const Text = styled.p`
	${({ theme }) => css`
		color: ${theme.colors.primaryText};
		font-size: ${theme.font.sizes.medium};
		overflow: hidden;
		text-overflow: ellipsis;
		display: -webkit-box;
		-webkit-line-clamp: 0;
		-webkit-box-orient: vertical;

		${media.lessThan('medium')`
			font-size: ${theme.font.sizes.small};
		`}
	`}
`

export const MentionedUser = styled.span`
	${({ theme }) => css`
		color: ${theme.colors.primary};
		font-size: ${theme.font.sizes.medium};
		font-weight: ${theme.font.bold};

		${media.lessThan('medium')`
			font-size: ${theme.font.sizes.small};
		`}
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

export const FooterCard = styled.div`
	${({ theme }) => css`
		display: flex;
		justify-content: space-between;
		align-items: center;

		${media.lessThan('medium')`
			flex-direction: column-reverse;
			justify-content: center;
			align-items: start;
			gap: ${theme.spacings.xxsmall};
		`}
	`}
`

export const RepliesText = styled.span`
	${({ theme }) => css`
		display: flex;
		align-items: center;
		color: ${theme.colors.primary};
		font-size: ${theme.font.sizes.small};
		font-weight: ${theme.font.bold};
		cursor: pointer;
	`}
`

export const BtnContainer = styled.div`
	${({ theme }) => css`
		display: flex;
		align-items: center;
		gap: ${theme.spacings.xxsmall};

		${media.lessThan('medium')`
			width: 100%;
		`}
	`}
`

export const BtnEditAction = styled.button`
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
		width: fit-content;

		&:focus {
			border: 2px solid ${darken(0.1, theme.colors.primary)};
		}

		&:hover {
			background-color: ${darken(0.1, theme.colors.primary)};
		}

		&:active {
			transform: scale(0.95);
		}

		${media.lessThan('medium')`
			font-size: ${theme.font.sizes.small};
			width: 100%;
		`}
	`}
`

export const TextArea = styled.textarea`
	${({ theme }) => css`
		padding: ${theme.spacings.xxsmall} ${theme.spacings.xsmall};
		border-radius: ${theme.border.radius.small};
		outline: none;
		font-size: ${theme.font.sizes.medium};
		border: 2px solid ${theme.colors.mainBg};
		resize: none;
		transition: .2s;
		color: ${theme.colors.secondaryText};
		font-family: ${theme.font.family};
		height: 150px;

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

		${media.lessThan('medium')`
			padding: ${theme.spacings.xxsmall} ${theme.spacings.xxsmall};
			font-size: ${theme.font.sizes.small};
		`}
	`}
`
