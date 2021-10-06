import { RouteComponentProps } from "@reach/router"
import { useEffect } from "react"
import styled from "styled-components"
import { useDispatch, useSelector } from 'react-redux'
import { RootState } from "../../store"
import { BuyModal } from "../../components/private/buyModal"
import { getCurrencies } from "../../store/currencies/action"
import { CurrencyCard } from "../../components/private/currencies/currencyCards"

export function ShowCurrency(props: RouteComponentProps) {

    const dispatch = useDispatch()

    useEffect(() => {
        dispatch(getCurrencies())
    }, [])

    const currencies = useSelector((state: RootState) => state.currencies.currencies)

    return (
        <Container>
            {currencies.map(currency => (
                <CurrencyCard key={currency.id} currencyInfo={currency} />
            ))}
            <BuyModal />
        </Container>
    )
}

const Container = styled.div`
    justify-content: center;
    display: grid;
    grid-gap: 2rem;
    grid-template-columns: repeat(4, 1fr);
    margin: 2rem;
`