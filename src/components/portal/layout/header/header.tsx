import styled from 'styled-components'
import { NavBar } from './navBar/navBar'


export function Header() {
    return (
        <Container>
            <NavBar />
        </Container>
    )
}

const Container = styled.header`
    background: var(--black);
    padding: 0.5rem 1.5rem;
`

