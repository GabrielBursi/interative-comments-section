import { screen } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import { render } from '../../utils'
import { ScoreControl } from '.'

const score = 10

describe('<ScoreControl/>', () => {
    it('should render', () => {
        render(<ScoreControl score={score}/>)

		expect(screen.getByText(score)).toBeInTheDocument()
		expect(screen.getAllByRole('button')).toHaveLength(2)
    })

	it('Increment and decrement score', async () => {
		render(<ScoreControl score={score}/>)

		userEvent.setup()

		const scoreElement = screen.getByText(score)
		const botaoIncrementar = screen.getByRole('button', { name: /Incrementar Pontuação/i });
		const botaoDecrementar = screen.getByRole('button', { name: /Decrementar Pontuação/i });

		await userEvent.click(botaoIncrementar)
		expect(scoreElement).toHaveTextContent(`${score + 1}`)
		await userEvent.click(botaoDecrementar)
		expect(scoreElement).toHaveTextContent(`${score - 1}`)
	})
})
