import { RouteComponentProps, Router } from '@reach/router'
import { Layout } from '../../components/portal/layout/layout'
import { About } from './about'
import { Cripto } from './cripto'
import { Currency } from './currency'
import { Home } from './home'
import { Stocks } from './stocks'

export function Portal(props: RouteComponentProps) {
    return (
        <Layout>
            <Router>
                <Home path='/'/>
                <Stocks exact path='/stocks' />
                <Currency exact path='/currency' />
                <Cripto exact path='/cripto' />
                <About exact path='/about' />
            </Router>
        </Layout>
    )
}