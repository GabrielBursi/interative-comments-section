'use client'

import { AiOutlineMinus, AiOutlinePlus } from "react-icons/ai";
import { lighten } from "polished";

import { ScoreControlProps } from './types'
import * as S from './styles'
import { theme } from '../../styles';

export const ScoreControl = ({ score }: ScoreControlProps) => {
    return (
        <S.ScoreControl>
			<S.IconContainer>
				<AiOutlinePlus size={20} color={lighten(0.2, theme.colors.primary)}/>
			</S.IconContainer>
            <S.ScoreNumber>
				{score}
			</S.ScoreNumber>
			<S.IconContainer>
				<AiOutlineMinus size={20} color={lighten(0.2, theme.colors.primary)}/>
			</S.IconContainer>
        </S.ScoreControl>
    )
}
