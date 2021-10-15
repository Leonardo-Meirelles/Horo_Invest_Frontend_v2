import { RouteComponentProps } from "@reach/router"
import { useEffect } from "react"
import styled from "styled-components"
import { useDispatch, useSelector } from 'react-redux'
import { RootState } from "../../store"
import { BuyModal } from "../../components/private/buyModal"
import { getCurrencies } from "../../store/currencies/action"
import { CurrencyCard } from "../../components/private/currencies/currencyCards"
import { Skeleton } from "@mui/material"

export function ShowCurrency(props: RouteComponentProps) {

    const dispatch = useDispatch()

    useEffect(() => {
        dispatch(getCurrencies())
    }, [])

    const currencies = useSelector((state: RootState) => state.currencies.currencies)

    return (
        <Container>
            {currencies.length > 0 ? (

                currencies.map(currency => (
                    <CurrencyCard key={currency.id} currencyInfo={currency} />
                ))
            ) :
                (
                    <>
                        <Skeleton variant="rectangular" width={200} height={200} />
                        <Skeleton variant="rectangular" width={200} height={200} />
                        <Skeleton variant="rectangular" width={200} height={200} />
                        <Skeleton variant="rectangular" width={200} height={200} />
                    </>
                )
            }
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