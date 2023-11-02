import { screen } from '@testing-library/react'
import { render } from '../../utils'
import { CreateCommentCard } from '.'

const mentionedUser = 'user'

describe('<CreateCommentCard/>', () => {
    it('should render', () => {
        render(<CreateCommentCard/>)

		expect(screen.getByAltText(/Avatar do usuário/i)).toBeInTheDocument()
		expect(screen.getByPlaceholderText(/Adicione um comentário\.../i)).toBeInTheDocument()
		expect(screen.getByRole('button', { name: /enviar/i })).toBeInTheDocument()
    })

	it('should render with a mentioned user', () => {
		render(<CreateCommentCard mentionedUser={mentionedUser}/>)

		const textarea = screen.getByPlaceholderText(/Adicione um comentário.../i);
		expect(textarea).toHaveFocus();
		expect(textarea).toHaveValue(`@${mentionedUser}`);
		
		expect(screen.queryByRole('button', { name: /enviar/i })).not.toBeInTheDocument()
		expect(screen.getByRole('button', { name: /responder/i })).toBeInTheDocument()

		const mentionedUserElement = screen.getByText(`@${mentionedUser}`)
		expect(mentionedUserElement).toBeInTheDocument()
		expect(mentionedUserElement).toHaveStyle(`
			color: #000;
			font-size: 1.6rem;
			font-weight: 400;
		`)

	})
})
