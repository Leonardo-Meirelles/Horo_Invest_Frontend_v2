import { Table } from "reactstrap"
import styled from "styled-components"
import { AiOutlineDelete } from "react-icons/ai"
import { useDispatch } from "react-redux"
import { toggleModal } from "../../../store/openModal/action"
import { Skeleton, ToggleButton, ToggleButtonGroup } from "@mui/material"
import { useEffect, useState } from "react"
import { getUserOrders } from "../../../services/userOrdersService"

interface Order {
    id: string
    orderName: string
    orderPrice: number
    orderTotal: number
}

export function OrdersList() {

    const [alignment, setAlignment] = useState('stocks')
    const [orderData, setOrderData] = useState<Order[]>()
    const [loading, setLoading] = useState(true)

    const handleChangeChoiceButtons = (
        event: React.MouseEvent<HTMLElement>,
        newAlignment: string,
    ) => {
        setAlignment(newAlignment)
    }

    useEffect(() => {
        const getUserOrdersByAsset = async () => {

            let data = {
                token: 'token',
                assetName: alignment,
                assetId: '1'
            }
            switch (alignment) {
                case 'stocks':
                    const ordersStocks = await (await getUserOrders(data)).data.ordersStocks
                    setOrderData(ordersStocks)
                    setLoading(false)
                    break
                case 'currencies':
                    const ordersCurrency = await (await getUserOrders(data)).data.ordersCurrencies
                    setOrderData(ordersCurrency)
                    setLoading(false)
                    break
                case 'cryptos':
                    const ordersCrypto = await (await getUserOrders(data)).data.ordersCryptos
                    setOrderData(ordersCrypto)
                    setLoading(false)
                    break
            }
        }
        getUserOrdersByAsset()
    }, [alignment])


    return (
        <Container>
            <ButtonContainer>
                <ToggleButtonGroup
                    color="info"
                    value={alignment}
                    exclusive
                    onChange={handleChangeChoiceButtons}
                >
                    <ToggleButton value="stocks">Stocks</ToggleButton>
                    <ToggleButton value="currencies">Currency</ToggleButton>
                    <ToggleButton value="cryptos">Criptocurrency</ToggleButton>
                </ToggleButtonGroup>
            </ButtonContainer>

            {loading === false ? (
                <STable bordered hover dark>
                    <thead>
                        <tr>
                            <th>ID</th>
                            <th>Product</th>
                            <th>Price</th>
                            <th>Total</th>
                            <th>Order date</th>
                            <th>Cancel Order</th>
                        </tr>
                    </thead>
                    <tbody>
                        {orderData?.map((order: Order, index: number) => (
                            <RowItem key={index} order={order} />
                        ))}
                    </tbody>
                </STable>
            )
                :
                (
                    <SkeletonDiv>
                        <Skeleton variant="text" width={1200} height={60} />
                        <Skeleton variant="text" width={1200} height={60} />
                        <Skeleton variant="text" width={1200} height={60} />
                    </SkeletonDiv>
                )
            }
        </Container>
    )
}

const RowItem = ({ order }: any) => {

    const dispatch = useDispatch()
    const handleOpenModal = () => dispatch(toggleModal())

    return (
        <tr>
            <td>{order.id}</td>
            <td>{order.orderName}</td>
            <td>{order.orderPrice}</td>
            <td>{order.orderTotal}</td>
            <td>00/00/0000</td>
            <td>
                <Button
                    color="danger"
                    onClick={handleOpenModal}>
                    <AiOutlineDelete />
                </Button>
            </td>
        </tr>
    )
}

const Container = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    width: 100%;
    padding: 1rem;
`

const ButtonContainer = styled.div`
    display: flex;
    padding: 1rem 0 0 2rem;
    width: 100%;
`

const STable = styled(Table)`
    width: 100%;
    margin-top: 2rem;
    text-align: center;
    font-size: 1.25rem;
`

const Button = styled.button`
    border: none;
    background: transparent;
    color: var(--white);
`

const SkeletonDiv = styled.div`
    margin-top: 2rem;
`