import { Skeleton } from "@mui/material"
import { RouteComponentProps } from "@reach/router"
import { useEffect, useState } from "react"
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
            {stocks.length > 0 ? (
                stocks.map((stock) => (
                    <StockCard key={stock.id} stockInfo={stock} />
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
};

const Container = styled.div`
    display: flex;
    justify-content: center;
    flex-wrap: wrap;
    margin: 2rem;
`