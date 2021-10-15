import { RouteComponentProps } from "@reach/router"
import styled from "styled-components"
import { DeleteOrderModal } from "../../components/private/user/deleteOrderModal"
import { OrdersList } from "../../components/private/user/userOrdersList"

export function UserWallet(props: RouteComponentProps) {

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

