import { RouteComponentProps, Router } from '@reach/router'
import { LayoutPortal } from '../../components/portal/layout/layoutPortal'
import { LoginModal } from '../../components/portal/loginModal'
import { About } from './about'
import { Cripto } from './cripto'
import { Currency } from './currency'
import { Home } from './home'
import { Stocks } from './stocks'

export function Portal(props: RouteComponentProps) {
    return (
        <>
            <LayoutPortal>
                <Router>
                    <Home path='/' />
                    <Stocks  path='/stocks' />
                    <Currency  path='/currency' />
                    <Cripto  path='/cripto' />
                    <About  path='/about' />
                </Router>
                <LoginModal />
            </LayoutPortal>

        </>
    )
}