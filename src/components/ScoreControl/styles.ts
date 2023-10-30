import { styled, css } from "styled-components";
import media from "styled-media-query";

export const ScoreControl = styled.div`
    ${({ theme }) => css`
		border-radius: ${theme.border.radius.small};
		padding: ${theme.spacings.xxsmall};
		height: fit-content;
		background-color: ${theme.colors.mainBg};
		display: flex;
		flex-direction: column;
		justify-content: space-between;
		align-items: center;
		gap: ${theme.spacings.xsmall};

		${media.lessThan('medium')`
			gap: ${theme.spacings.xxsmall};
			width: 100%;
			flex-direction: row;
		`}
    `}
`

export const ButtonScore = styled.button`
	display: flex;
	justify-content: center;
	align-items: center;
	cursor: pointer;
	outline: none;
	background-color: transparent;
	border: none;
`

export const ScoreNumber = styled.span`
	${({ theme }) => css`
		font-size: ${theme.font.sizes.large};
		color: ${theme.colors.primary};
		font-weight: ${theme.font.bold};

		${media.lessThan('medium')`
			font-size: ${theme.font.sizes.medium};
		`}
	`}
`
