import { RouteComponentProps, Router } from "@reach/router"
import { LayoutPrivate } from "../../components/private/layout/layoutPrivate"
import { ShowCripto } from "./showCripto"
import { ShowCurrency } from "./showCurrency"
import { ShowStocks } from "./showStocks"
import { UserInfo } from "./userInfo"
import { UserWallet } from "./userWallet"



export function Private(props: RouteComponentProps) {
    
    return (
        <Router>
            <LayoutPrivate path='/'>
                <ShowStocks path='/stocks' />
                <ShowCurrency path='/currencies' />
                <ShowCripto path='/cripto' />
                <UserWallet path='/wallet' />
                <UserInfo path='info' />
            </LayoutPrivate>
        </Router>
    )
}