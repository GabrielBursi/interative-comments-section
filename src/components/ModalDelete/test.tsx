import { screen } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import { render } from '../../utils'
import { ModalDelete } from '.'

const onConfirm = jest.fn();

describe('<ModalDelete/>', () => {
	it('should render', () => {
		render(<ModalDelete isOpen onClose={() => ''} onConfirm={onConfirm} />)

		const overlay = screen.getByTestId('overlay')

		expect(overlay.getAttribute('aria-hidden')).toBe('false')
		expect(overlay).toHaveStyle('opacity: 1')
		expect(overlay).toHaveStyle('display: flex')

		expect(screen.getByRole('heading', { name: /excluir comentário/i })).toBeInTheDocument()
		expect(screen.getByText('Tem certeza de que deseja excluir esse comentário?', { exact: false })).toBeInTheDocument()
		expect(screen.getAllByRole('button')).toHaveLength(2)
	})

	it('should close modal with button', async () => {
		let isOpen = true
		render(<ModalDelete isOpen={isOpen} onClose={() => isOpen = false} onConfirm={onConfirm} />)

		userEvent.setup()

		const overlay = screen.getByTestId('overlay')

		expect(overlay.getAttribute('aria-hidden')).toBe('false')
		expect(overlay).toHaveStyle('opacity: 1')
		expect(overlay).toHaveStyle('display: flex')

		const btnClose = screen.getByTestId('icon-container');

		await userEvent.click(btnClose)

		expect(onConfirm).not.toHaveBeenCalled();
		expect(overlay.getAttribute('aria-hidden')).toBe('true')
		expect(overlay).toHaveStyle('opacity: 0')
		expect(overlay).toHaveStyle('display: none')

	})

	it('should close modal with overlay click', async () => {
		let isOpen = true
		render(<ModalDelete isOpen={isOpen} onClose={() => isOpen = false} onConfirm={onConfirm} />)

		userEvent.setup()

		const overlay = screen.getByTestId('overlay')

		expect(overlay.getAttribute('aria-hidden')).toBe('false')
		expect(overlay).toHaveStyle('opacity: 1')
		expect(overlay).toHaveStyle('display: flex')

		await userEvent.click(overlay)

		expect(onConfirm).not.toHaveBeenCalled();
		expect(overlay.getAttribute('aria-hidden')).toBe('true')
		expect(overlay).toHaveStyle('opacity: 0')
		expect(overlay).toHaveStyle('display: none')

	})

	it('should close and confirm delete', async () => {
		let isOpen = true
		render(<ModalDelete isOpen={isOpen} onClose={() => isOpen = false} onConfirm={onConfirm} />)

		userEvent.setup()

		const overlay = screen.getByTestId('overlay')

		expect(overlay.getAttribute('aria-hidden')).toBe('false')
		expect(overlay).toHaveStyle('opacity: 1')
		expect(overlay).toHaveStyle('display: flex')

		const btnConfirm = screen.getByRole('button', { name: /sim, excluir/i });
		await userEvent.click(btnConfirm)

		expect(onConfirm).toBeCalled()
		expect(overlay.getAttribute('aria-hidden')).toBe('true')
		expect(overlay).toHaveStyle('opacity: 0')
		expect(overlay).toHaveStyle('display: none')

	})
})

