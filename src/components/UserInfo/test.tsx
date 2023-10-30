import { screen } from '@testing-library/react'
import { formatDistanceToNow } from 'date-fns';
import { render } from '../../utils'
import { UserInfo } from '.'
import { User } from '@/types'
import DefaultAvatar from '../../../public/images/avatars/default.png'

const user: User = {
	username: 'blondehot',
	avatar: DefaultAvatar.src
}

const createAt = '2023-10-25T09:15:00Z';
const formattedDate = formatDistanceToNow(new Date(createAt), { addSuffix: true });

describe('<UserInfo/>', () => {
    it('should render', () => {
		render(<UserInfo createdAt={createAt} user={{...user}} isOwn/>)

		expect(screen.getByRole('img')).toBeInTheDocument()
		expect(screen.getByText(`${user.username}`)).toBeInTheDocument()
		expect(screen.getByText(/você/i)).toBeInTheDocument()
		expect(screen.getByText(formattedDate)).toBeInTheDocument()
		expect(screen.getByRole('button', { name: /Excluir/i })).toBeInTheDocument()
		expect(screen.getByRole('button', { name: /Editar/i })).toBeInTheDocument()

		expect(screen.queryByRole('button', { name: /Responder/i })).not.toBeInTheDocument()
    })

	it('should render without isOwn prop', () => {
		render(<UserInfo createdAt={createAt} user={{...user}} isOwn={false}/>)

		expect(screen.getByRole('img')).toBeInTheDocument()
		expect(screen.getByText(`${user.username}`)).toBeInTheDocument()
		expect(screen.getByText(formattedDate)).toBeInTheDocument()
		expect(screen.getByRole('button', { name: /Responder/i })).toBeInTheDocument()

		expect(screen.queryByRole('button', { name: /Excluir/i })).not.toBeInTheDocument()
		expect(screen.queryByRole('button', { name: /Editar/i })).not.toBeInTheDocument()
		expect(screen.queryByText(/você/i)).not.toBeInTheDocument()
    })
})
