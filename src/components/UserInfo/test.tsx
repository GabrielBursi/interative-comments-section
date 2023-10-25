import { screen } from '@testing-library/react'
import { render } from '../../utils'
import { UserInfo } from '.'

describe('<UserInfo/>', () => {
    it('should render', () => {
        render(<UserInfo/>)

        expect(screen.getByRole('heading', { name: /UserInfo/i })).toBeInTheDocument()
    })
})
