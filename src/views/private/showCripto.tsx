
import { RouteComponentProps } from "@reach/router"
import { useEffect, useState } from "react"
import styled from "styled-components"

export interface StocksProps {
    id: number;
    stockName: string;
    stockPrice: number;
}

export function ShowCripto(props: RouteComponentProps) {

    return (
        <Container>
            
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