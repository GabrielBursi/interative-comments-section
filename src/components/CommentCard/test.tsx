import { screen } from '@testing-library/react'
import { render } from '../../utils'
import { CommentCard } from '.'

describe('<CommentCard/>', () => {
    it('should render', () => {
        render(<CommentCard/>)

        expect(screen.getByRole('heading', { name: /CommentCard/i })).toBeInTheDocument()
    })
})
