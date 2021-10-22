import { RouteComponentProps } from "@reach/router"
import { useEffect } from "react"
import styled from "styled-components"
import { useDispatch, useSelector } from 'react-redux'
import { getCryptos } from "../../store/cryptos/action"
import { RootState } from "../../store"
import { CryptoCard } from "../../components/private/crypto/cryptosCards"
import { BuyModal } from "../../components/private/buyModal"
import { Skeleton } from "@mui/material"

export function ShowCrypto(props: RouteComponentProps) {

    const dispatch = useDispatch()

    useEffect(() => {
        dispatch(getCryptos())
    }, [])

    const cryptos = useSelector((state: RootState) => state.cryptos.cryptos)

    return (
        <Container>
            {cryptos.length > 0 ? (
                cryptos.map(crypto => (
                    <CryptoCard key={crypto.id} cryptoInfo={crypto} />
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