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
		expect(textarea).toBeInTheDocument();
		expect(textarea).toHaveFocus();
		expect(textarea).toHaveValue(`@${mentionedUser}`);
		expect(screen.getByAltText(/Avatar do usuário/i)).toBeInTheDocument()
		expect(screen.getByRole('button', { name: /responder/i })).toBeInTheDocument()

		const mentionedUserElement = screen.getByText(`@${mentionedUser}`)
		expect(mentionedUserElement).toBeInTheDocument()
		expect(mentionedUserElement).toHaveStyle(`
			color: #4B7CB9;
			font-size: 1.6rem;
			font-weight: 600;
		`)

	})

	it('should render a mentioned user element', () => {
		render(<CreateCommentCard mentionedUser={mentionedUser} />)

		const mentionedUserElement = screen.getByRole('paragraph', { name: `@${mentionedUser}` })
		expect(mentionedUserElement).toBeInTheDocument()
		expect(mentionedUserElement).toHaveStyle(`
			color: #4B7CB9;
			font-size: 1.6rem;
			font-weight: 600;
		`)

	})
})
