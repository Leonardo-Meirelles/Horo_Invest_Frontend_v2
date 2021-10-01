import styled from 'styled-components'
import { Footer } from './footer/footer'
import { Header } from './header/header'

type LayoutPortalProps = {
    children: React.ReactNode;
}

export function LayoutPortal({children}:LayoutPortalProps) {
    return (
        <Container>
            <Header />
            <Main>
                {children}
            </Main>
            <Footer />
        </Container>
    )
}

const Container = styled.div`
    display: flex;
    flex-direction: column;
    height: 100vh;
`

const Main = styled.main`
    flex: 1;
`