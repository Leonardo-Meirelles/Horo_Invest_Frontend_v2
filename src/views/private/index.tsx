import { RouteComponentProps, Router } from "@reach/router"
import { LayoutPrivate } from "../../components/private/layout/layoutPrivate"
import { Admin } from "./admin"
import { ShowCrypto } from "./showCrypto"
import { ShowCurrency } from "./showCurrency"
import { ShowStocks } from "./showStocks"
import { UserProfile } from "./userProfile"
import { UserWallet } from "./userWallet"
import { useSelector } from 'react-redux';
import { RootState } from "../../store"

export function Private(props: RouteComponentProps) {

    const userCode = useSelector((state: RootState) => state.authentication.type?.code)

    const componentsToMount = [
        { component: ShowStocks, path: '/', authorization: [1, 2] },
        { component: ShowCurrency, path: '/currencies', authorization: [1, 2] },
        { component: ShowCrypto, path: '/crypto', authorization: [1, 2] },
        { component: UserWallet, path: '/wallet', authorization: [2] },
        { component: UserProfile, path: '/info', authorization: [2] },
        { component: Admin, path: '/admin', authorization: [1] }
    ]

    const authorizedRoutesByUserType = componentsToMount.filter((route) => {
        if (userCode) {
            return route.authorization.includes(userCode)
        }
    })

    return (
        <Router>
            <LayoutPrivate path='/'>
                {authorizedRoutesByUserType.map(({component: Component, ...rest}, index) => (
                    <Component {...rest} key={index} />
                ))}
            </LayoutPrivate>
        </Router>
    )
}