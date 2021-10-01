import { RouteComponentProps, Router } from "@reach/router"
import { LayoutPrivate } from "../../components/private/layout/layoutPrivate"
import { ShowCripto } from "./showCripto"
import { ShowStocks } from "./showStocks"



export function Private(props: RouteComponentProps) {
    return (
        <LayoutPrivate>
            <Router>
                <ShowStocks exact path='/stocks' />
                <ShowCripto exact path='/cripto' />
            </Router>
        </LayoutPrivate>
    )
}