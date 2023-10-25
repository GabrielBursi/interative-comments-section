import { screen } from '@testing-library/react'
import { render } from '../../utils'
import { CreateCommentCard } from '.'

describe('<CreateCommentCard/>', () => {
    it('should render', () => {
        render(<CreateCommentCard/>)

        expect(screen.getByRole('heading', { name: /CreateCommentCard/i })).toBeInTheDocument()
    })
})
