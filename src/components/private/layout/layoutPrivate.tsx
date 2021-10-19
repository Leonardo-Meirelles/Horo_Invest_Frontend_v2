import { RouteComponentProps } from '@reach/router'
import styled from 'styled-components'
import { Footer } from './footer/footer'
import { Header } from './header/header'

interface LayoutPrivateProps extends RouteComponentProps {
    children: React.ReactNode;
}

export function LayoutPrivate({ children }: LayoutPrivateProps) {
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
    display: flex;
    justify-content: center;
    flex: 1;
`