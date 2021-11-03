import { RouteComponentProps, Router } from '@reach/router'
import { LayoutPortal } from '../../components/portal/layout/layoutPortal'
import { LoginModal } from '../../components/portal/loginModal'
import { About } from './about'
import { Home } from './home'

export function Portal(props: RouteComponentProps) {
    return (
        <>
            <LayoutPortal>
                <Router>
                    <Home path='/' />
                    <About  path='/about' />
                </Router>
                <LoginModal />
            </LayoutPortal>

        </>
    )
}