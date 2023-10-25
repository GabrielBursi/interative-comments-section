import { screen } from '@testing-library/react'
import { render } from '../../utils'
import { ScoreControl } from '.'

describe('<ScoreControl/>', () => {
    it('should render', () => {
        render(<ScoreControl/>)

        expect(screen.getByRole('heading', { name: /ScoreControl/i })).toBeInTheDocument()
    })
})
