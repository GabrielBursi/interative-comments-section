'use client'

import { useRef, useState } from "react";
import { AiOutlineMinus, AiOutlinePlus } from "react-icons/ai";
import { lighten } from "polished";

import { ScoreControlProps } from './types'
import * as S from './styles'
import { theme } from '../../styles';

export const ScoreControl = ({ score }: ScoreControlProps) => {

	const [scoreNumber, setScoreNumber] = useState(score);
	const hasClickedIncrement = useRef(false)
	const hasClickedDecrement = useRef(false)

	const incrementScore = () => {
		if (!hasClickedIncrement.current && hasClickedDecrement.current) {
			setScoreNumber(old => old + 2);
			hasClickedIncrement.current = true
			hasClickedDecrement.current = false
		} else if (!hasClickedIncrement.current) {
			setScoreNumber(old => old + 1);
			hasClickedIncrement.current = true
			hasClickedDecrement.current = false
		} else {
			setScoreNumber(score)
			hasClickedIncrement.current = false
		}
	}

	const decrementScore = () => {
		if (!hasClickedDecrement.current && hasClickedIncrement.current && scoreNumber > 0) {
			setScoreNumber(old => old - 2);
			hasClickedDecrement.current = true
			hasClickedIncrement.current = false
		} else if (!hasClickedDecrement.current) {
			setScoreNumber(old => old - 1);
			hasClickedDecrement.current = true
			hasClickedIncrement.current = false
		} else {
			setScoreNumber(score)
			hasClickedDecrement.current = false
		}
	}

	return (
		<S.ScoreControl>
			<S.ButtonScore onClick={incrementScore} aria-label="Incrementar Pontuação">
				<AiOutlinePlus data-testid="icone-incrementar" size={20} color={hasClickedIncrement.current ? theme.colors.green : lighten(0.2, theme.colors.primary)} />
			</S.ButtonScore>
			<S.ScoreNumber>
				{scoreNumber}
			</S.ScoreNumber>
			<S.ButtonScore onClick={decrementScore} disabled={scoreNumber === 0} aria-label="Decrementar Pontuação">
				<AiOutlineMinus data-testid="icone-decrementar" size={20} color={hasClickedDecrement.current ? theme.colors.red : lighten(0.2, theme.colors.primary)} />
			</S.ButtonScore>
		</S.ScoreControl>
	)
}
