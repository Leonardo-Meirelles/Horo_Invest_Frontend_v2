import { Table } from "reactstrap";
import styled from "styled-components";
import { AiOutlineDelete } from "react-icons/ai";
import { useDispatch } from "react-redux";
import { toggleModal } from "../../../store/openModal/action";
import { Skeleton, ToggleButton, ToggleButtonGroup } from "@mui/material";
import { useEffect, useState } from "react";
import { getUserCryptosOrdersService } from "../../../services/userService";
import { getUserStocksOrdersService } from "../../../services/userService";
import { deleteOrder } from "../../../store/deleteOrderModal/action";

interface Order {
    id: number
    orderName: string
    orderPrice: string
    orderQuantity: string
    orderDate: string
};

export function OrdersList() {

    const [alignment, setAlignment] = useState('stocks');
    const [orderData, setOrderData] = useState<Order[]>();
    const [loading, setLoading] = useState(true);

    const handleChangeChoiceButtons = (
        event: React.MouseEvent<HTMLElement>,
        newAlignment: string,
    ) => {
        setAlignment(newAlignment)
    };

    useEffect(() => {
        const getUserOrdersByAsset = async () => {

            let data = {
                assetName: alignment
            };
            switch (alignment) {
                case 'stocks':
                    const ordersStocksReturn = await (await getUserStocksOrdersService(data)).data
                    const ordersStocks = ordersStocksReturn.map((order: any) => {
                        const data = {
                            id: order.id,
                            orderName: order.stock_name,
                            orderPrice: 'R$ ' + order.stock_price,
                            orderQuantity: order.stock_quantity,
                            orderDate: order.created_at
                        }
                        return data
                    })
                    setOrderData(ordersStocks)
                    setLoading(false)
                    break
                // case 'currencies':
                //     const ordersCurrency = await (await getUserOrdersService()).data.ordersCurrencies
                //     setOrderData(ordersCurrency)
                //     setLoading(false)
                //     break
                case 'cryptos':
                    const ordersCryptoReturn = await (await getUserCryptosOrdersService(data)).data
                    const ordersCryptos = ordersCryptoReturn.map((order: any) => {
                        const data = {
                            id: order.id,
                            orderName: order.crypto_name,
                            orderPrice: 'USD ' + order.crypto_price,
                            orderQuantity: order.crypto_quantity,
                            orderDate: order.created_at
                        }
                        return data
                    })
                    setOrderData(ordersCryptos)
                    setLoading(false)
                    break
            };
        };
        getUserOrdersByAsset()
    }, [alignment]);

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
                    {/* <ToggleButton value="currencies">Currency</ToggleButton> */}
                    <ToggleButton value="cryptos">Cryptocurrency</ToggleButton>
                </ToggleButtonGroup>
            </ButtonContainer>

            {loading === false ? (
                <STable bordered hover dark>
                    <thead>
                        <tr>
                            <th>ID</th>
                            <th>Product</th>
                            <th>Price</th>
                            <th>Quantity</th>
                            <th>Order date</th>
                            <th>Cancel Order</th>
                        </tr>
                    </thead>
                    <tbody>
                        {orderData?.map((order: Order, index: number) => (
                            <RowItem key={index} order={order} asset={alignment} />
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

const RowItem = ({ order, asset }: any) => {

    const dispatch = useDispatch()
    const handleDeleteOrder = (event: React.MouseEvent<HTMLButtonElement>) => {
        const id = event.currentTarget.value
        dispatch(toggleModal())
        dispatch(deleteOrder(id, asset))
    }

    return (
        <tr>
            <td>{order.id}</td>
            <td>{order.orderName}</td>
            <td>{order.orderPrice}</td>
            <td>{order.orderQuantity}</td>
            <td>{order.orderDate}</td>
            <td>
                <Button
                    value={order.id}
                    onClick={(event: React.MouseEvent<HTMLButtonElement>) => handleDeleteOrder(event)}>
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