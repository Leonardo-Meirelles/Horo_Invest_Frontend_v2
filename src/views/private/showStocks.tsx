import { RouteComponentProps } from "@reach/router"
import { useEffect } from "react"
import { useDispatch, useSelector } from "react-redux"
import styled from "styled-components"
import { BuyModal } from "../../components/private/buyModal"
import { StockCard } from "../../components/private/stocks/stocksCards"
import { RootState } from "../../store"
import { getStocks } from "../../store/stocks/action"

export function ShowStocks(props: RouteComponentProps) {

    const dispatch = useDispatch()

    useEffect(() => {
        dispatch(getStocks())
    }, [])

    const stocks = useSelector((state: RootState) => state.stocks.stocks)

    return (
        <Container>
            {stocks.map((stock) => (
                <StockCard key={stock.id} stockInfo={stock} />
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