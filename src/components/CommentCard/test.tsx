import { screen } from '@testing-library/react'
import userEvent from '@testing-library/user-event';
import { formatDistanceToNow } from 'date-fns';
import { render } from '../../utils'
import { CommentCard } from '.'
import { CommentCardProps } from './types'

const createdAt = '2023-10-25T09:15:00Z';

const props: CommentCardProps = {
	content: 'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Libero cum cumque architecto sequi, autem accusamus?Lorem ipsum, dolor sit amet consectetur adipisicing elit. Laborum dolor reprehenderit nesciunt eos libero repellat consectetur illum temporibus mollitia sapiente.Lorem ipsum dolor sit amet consectetur, adipisicing elit. Libero cum cumque architecto sequi, autem accusamus?Lorem ipsum, dolor sit amet consectetur adipisicing elit.',
	createdAt,
	score: 10,
	user: {
		username: 'blondehot'
	},
	id: 1,
	isOwn: true,
	mentionedUser: 'blondehot',
	quantityOfReplies: 2
}

const formattedDate = formatDistanceToNow(new Date(createdAt), { addSuffix: true });

describe('<CommentCard/>', () => {
    it('should render correctly with all props', () => {
        render(<CommentCard {...props}/>)

		expect(screen.getByText(`${props.mentionedUser}`)).toBeInTheDocument()
		expect(screen.getByText(`${props.content}`)).toBeInTheDocument()
		expect(screen.getByText(`${props.user.username}`)).toBeInTheDocument()

		expect(screen.getByText(`${props.score}`)).toBeInTheDocument()
		expect(screen.getByText(`${props.quantityOfReplies} respostas`)).toBeInTheDocument()

		expect(screen.getByRole('button', { name: /excluir/i })).toBeInTheDocument()
		expect(screen.getByRole('button', { name: /editar/i })).toBeInTheDocument()

		expect(screen.getByText(formattedDate)).toBeInTheDocument()
    })

	it('should open textarea on edit', async () => {
		render(<CommentCard {...props} />)

		userEvent.setup()
		const btnEdit = screen.getByRole('button', { name: /editar/i })

		expect(screen.queryByRole('textbox')).not.toBeInTheDocument()
		expect(screen.queryByRole('button', { name: /cancelar/i })).not.toBeInTheDocument()
		expect(screen.queryAllByRole('button', { name: /editar/i, })).toHaveLength(1)

		await userEvent.click(btnEdit)

		expect(btnEdit).toBeDisabled()
		expect(screen.queryByRole('textbox')).toBeInTheDocument()
		expect(screen.queryByRole('textbox')).toHaveFocus()
		expect(screen.queryAllByRole('button', { name: /editar/i, })).toHaveLength(2)
		expect(screen.queryByRole('button', { name: /cancelar/i })).toBeInTheDocument()
	})

	it('should close and cancel textarea on edit', async () => {
		render(<CommentCard {...props} />)

		userEvent.setup()
		await userEvent.click(screen.getByRole('button', { name: /editar/i }))
		await userEvent.click(screen.getByRole('button', { name: /cancelar/i }))

		expect(screen.queryByRole('textbox')).not.toBeInTheDocument()
		expect(screen.getByRole('button', { name: /editar/i })).not.toBeDisabled()
	})

	it('should edit textarea on edit', async () => {
		render(<CommentCard {...props} />)

		userEvent.setup()
		await userEvent.click(screen.getByRole('button', { name: /editar/i }))
		const textarea = screen.getByRole('textbox')
		await userEvent.type(textarea, 'texto editado')

		const allButtonsEdit = screen.queryAllByRole('button', { name: /editar/i, })

		await userEvent.click(allButtonsEdit[1])

		expect(screen.getByText('texto editado', { exact: false })).toBeInTheDocument()
	})
})
