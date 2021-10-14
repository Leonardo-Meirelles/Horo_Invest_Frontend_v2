import { RouteComponentProps } from "@reach/router"
import { useEffect } from "react"
import { useSelector } from "react-redux"
import styled from "styled-components"
import { getUserOrders } from "../../services/userOrdersService"
import { RootState } from "../../store"
import { DeleteOrderModal } from "../../components/private/user/deleteOrderModal"
import { OrdersList } from "../../components/private/user/userOrdersList"

export function UserWallet(props: RouteComponentProps) {

    // const userEmail = useSelector((state: RootState) => state.authentication.user.email)

    // useEffect(() => {
    //     const orders = getUserOrders(userEmail)

    // }, [])

    return (
        <Container>
            <OrdersList />
            <DeleteOrderModal />
        </Container>
    )
}

const Container = styled.div`
    display: flex;
    justify-content: center;
    width: 100vw;
`

