import { styled, css } from "styled-components";

export const ScoreControl = styled.div`
    ${({ theme }) => css`
		border-radius: ${theme.border.radius.small};
		padding: ${theme.spacings.xxsmall};
		height: 85%;
		background-color: ${theme.colors.mainBg};
		display: flex;
		flex-direction: column;
		justify-content: space-between;
		align-items: center;
		max-width: 60px;
    `}
`

export const IconContainer = styled.div`
	display: flex;
	justify-content: center;
	align-items: center;
	cursor: pointer;
`

export const ScoreNumber = styled.span`
	${({ theme }) => css`
		font-size: ${theme.font.sizes.large};
		color: ${theme.colors.primary};
		font-weight: ${theme.font.bold};
	`}
`
