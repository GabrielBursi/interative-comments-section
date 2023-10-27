import { render } from '../../utils'
import { Container } from '.'
import { theme } from '../../styles'

describe('<Container/>', () => {
    it('should render', () => {
        const { container } = render(
            <Container>
                <span>Container</span>
            </Container>
        )

        expect(container.firstChild).toHaveStyleRule(
            'max-width',
            theme.grid.container
        )
    })
})
