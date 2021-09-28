import { RouteComponentProps, Router } from '@reach/router'
import { LayoutPortal } from '../../components/portal/layout/layout'
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
                    <Stocks exact path='/stocks' />
                    <Currency exact path='/currency' />
                    <Cripto exact path='/cripto' />
                    <About exact path='/about' />
                </Router>
            </LayoutPortal>
            
            <LoginModal />
            
        </>
    )
}