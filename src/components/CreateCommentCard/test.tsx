import { screen } from '@testing-library/react'
import { render } from '../../utils'
import { CreateCommentCard } from '.'

describe('<CreateCommentCard/>', () => {
    it('should render', () => {
        render(<CreateCommentCard/>)

		expect(screen.getByAltText(/Avatar do usuário/i)).toBeInTheDocument()
		expect(screen.getByPlaceholderText(/Adicione um comentário\.../i)).toBeInTheDocument()
		expect(screen.getByRole('button', { name: /enviar/i })).toBeInTheDocument()
    })
})
