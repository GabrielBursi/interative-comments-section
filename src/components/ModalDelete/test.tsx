import { screen } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import { render } from '../../utils'
import { ModalDelete } from '.'

describe('<ModalDelete/>', () => {
	it('should render', () => {
		render(<ModalDelete isOpen onClose={() => ''} onConfirm={() => ''} />)

		const overlay = screen.getByTestId('overlay')

		expect(overlay.getAttribute('aria-hidden')).toBe('false')
		expect(overlay).toHaveStyle('opacity: 1')
		expect(overlay).toHaveStyle('display: flex')

		expect(screen.getByRole('heading', { name: /excluir comentário/i })).toBeInTheDocument()
		expect(screen.getByText('Tem certeza de que deseja excluir esse comentário?', { exact: false })).toBeInTheDocument()
		expect(screen.getAllByRole('button')).toHaveLength(2)
	})

	it('should close modal with button', async () => {
		render(<ModalDelete isOpen onClose={() => ''} onConfirm={() => ''} />)

		userEvent.setup()

		const overlay = screen.getByTestId('overlay')

		expect(overlay.getAttribute('aria-hidden')).toBe('false')
		expect(overlay).toHaveStyle('opacity: 1')
		expect(overlay).toHaveStyle('display: flex')

		const btnClose = screen.getByTestId('icon-container');

		await userEvent.click(btnClose)

		expect(overlay.getAttribute('aria-hidden')).toBe('true')
		expect(overlay).toHaveStyle('opacity: 0')
		expect(overlay).toHaveStyle('display: none')
	})

	it('should close modal with overlay click', async () => {
		render(<ModalDelete isOpen onClose={() => ''} onConfirm={() => ''} />)

		userEvent.setup()

		const overlay = screen.getByTestId('overlay')

		expect(overlay.getAttribute('aria-hidden')).toBe('false')
		expect(overlay).toHaveStyle('opacity: 1')
		expect(overlay).toHaveStyle('display: flex')

		await userEvent.click(overlay)

		expect(overlay.getAttribute('aria-hidden')).toBe('true')
		expect(overlay).toHaveStyle('opacity: 0')
		expect(overlay).toHaveStyle('display: none')
		
	})
})
