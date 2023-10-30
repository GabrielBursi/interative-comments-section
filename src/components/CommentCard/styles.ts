import { styled, css } from "styled-components";
import media from "styled-media-query";

type TextProps = {
	$showFullText?: boolean
}

export const CommentCard = styled.div`
    ${({ theme }) => css`
		background-color: ${theme.colors.white};
		padding: ${theme.spacings.small};
		max-height: 300px;
		border-radius: ${theme.border.radius.small};
		display: flex;
		gap: ${theme.spacings.xsmall};

		${media.lessThan('medium')`
			padding: ${theme.spacings.xsmall};
			gap: ${theme.spacings.xxsmall};
			height: auto;
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

export const Text = styled.p<TextProps>`
	${({ theme, $showFullText=false }) => css`
		color: ${theme.colors.primaryText};
		font-size: ${theme.font.sizes.medium};
		overflow: hidden;
		text-overflow: ellipsis;
		display: -webkit-box;
		-webkit-line-clamp: ${$showFullText ? 0 : 5};
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
