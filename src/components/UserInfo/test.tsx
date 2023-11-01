import { screen } from '@testing-library/react'
import userEvent from '@testing-library/user-event';
import { formatDistanceToNow } from 'date-fns';

import { render } from '../../utils'
import { UserInfo } from '.'
import DefaultAvatar from '../../../public/images/avatars/default.png'
import { UserInfoProps } from './types';

const createdAt = '2023-10-25T09:15:00Z';

const props: UserInfoProps = {
	user: {
		username: 'blondehot',
		avatar: DefaultAvatar.src
	},
	isOwn: false,
	createdAt,
	id: 1,
	onEdit: () => ''
}

const formattedDate = formatDistanceToNow(new Date(createdAt), { addSuffix: true });

describe('<UserInfo/>', () => {
    it('should render normal variant', () => {
		render(<UserInfo {...props}/>)

		expect(screen.getByRole('img')).toBeInTheDocument()
		expect(screen.getByText(`${props.user.username}`)).toBeInTheDocument()
		expect(screen.getByText(formattedDate)).toBeInTheDocument()
		expect(screen.queryByRole('button', { name: /Responder/i })).toBeInTheDocument()
    })

	it('should render isOwn variant', () => {
		render(<UserInfo {...props} isOwn/>)

		expect(screen.queryByRole('button', { name: /Responder/i })).not.toBeInTheDocument()
		expect(screen.getByText(/você/i)).toBeInTheDocument()
		expect(screen.getByRole('button', { name: /Excluir/i })).toBeInTheDocument()
		expect(screen.getByRole('button', { name: /Editar/i })).toBeInTheDocument()
    })

	it('should open and close modal delete', async () => {
		render(<UserInfo {...props} isOwn />)

		userEvent.setup()

		const btnDelete = screen.getByRole('button', { name: /Excluir/i })
		await userEvent.click(btnDelete)

		const overlay = screen.getByTestId('overlay')

		expect(overlay.getAttribute('aria-hidden')).toBe('false')
		expect(overlay).toHaveStyle('opacity: 1')
		expect(overlay).toHaveStyle('display: flex')

		const btnClose = screen.getByRole('button', { name: /não, cancelar/i })

		await userEvent.click(btnClose)

		expect(overlay.getAttribute('aria-hidden')).toBe('true')
		expect(overlay).toHaveStyle('opacity: 0')
		expect(overlay).toHaveStyle('display: none')
	})
	
	it('should confirm modal delete', async () => {
		render(<UserInfo {...props} isOwn />)

		userEvent.setup()
		const overlay = screen.getByTestId('overlay')

		const btnDelete = screen.getByRole('button', { name: /Excluir/i })
		await userEvent.click(btnDelete)

		const btnConfirm = screen.getByRole('button', { name: /sim, excluir/i })

		await userEvent.click(btnConfirm)

		expect(overlay.getAttribute('aria-hidden')).toBe('true')
		expect(overlay).toHaveStyle('opacity: 0')
		expect(overlay).toHaveStyle('display: none')
	})
})
