import { Backdrop, Box, Fade, IconButton, Modal, TextField, Typography } from "@mui/material"
import { useDispatch, useSelector } from "react-redux"
import styled from "styled-components"
import { RootState } from "../../store"
import { toggleModal } from "../../store/openModal/action"
import { RiPlayListAddFill } from "react-icons/ri"
import { GoDiffRemoved } from "react-icons/go"
import { ChangeEvent, useState } from "react"

interface OrderState {
    orderQuantity: number
    orderPrice: number
    orderTotal: number
}

export function BuyModal() {

    const [order, setOrder] = useState<OrderState[]>([
        {
            orderQuantity: 0,
            orderPrice: 0,
            orderTotal: 0
        }
    ])

    const handleChange = (index: number, event: ChangeEvent<HTMLInputElement>) => {
        //! Retirar type any
        const orderChange: any = [...order]
        orderChange[index][event.target.name] = event.target.value

        const quantity = Number(orderChange[index].orderQuantity)
        const price = Number(orderChange[index].orderPrice)

        orderChange[index].orderTotal = quantity * price

        setOrder(orderChange)
    }

    const handleAddInputFields = () => {
        setOrder(prevState => ([
            ...prevState,
            {
                orderQuantity: 0,
                orderPrice: 0,
                orderTotal: 0
            }
        ]))
    }

    const handleRemoveInputFields = (index: number) => {

        const orderRemoved = [...order]
        orderRemoved.splice(index, 1)
        setOrder(orderRemoved)
    }

    const dispatch = useDispatch()
    const handleClose = () => {
        setOrder([{
            orderQuantity: 0,
            orderPrice: 0,
            orderTotal: 0
        }])
        dispatch(toggleModal())
    }

    const modalState = useSelector((state: RootState) => state.modal.open)
    
    const modalAssets = useSelector((state: RootState) => state.modalAssets.asset)
    console.log(modalAssets);
    
    return (
        <Modal
            open={modalState}
            onClose={handleClose}
            closeAfterTransition
            BackdropComponent={Backdrop}
            BackdropProps={{
                timeout: 800,
            }}
        >

            <Box sx={style}>
                <Fade
                    in={modalState}
                    style={{ transitionDelay: '150ms' }}
                >
                    <Container>
                        <Typography variant="h6" component="h2">
                            {modalAssets.assetName}
                        </Typography>

                        <Typography sx={{ mt: 2 }}>
                            {modalAssets.assetType}
                        </Typography>

                        <Typography sx={{ mt: 2 }}>
                        R$ {modalAssets.assetPrice}
                        </Typography>

                        <IconButton
                            color="warning"
                            onClick={() => handleAddInputFields()}
                            disabled={order.length == 8 ? true : false}
                            title='Add'

                        >
                            <RiPlayListAddFill />
                        </IconButton>

                        <InputBox>
                            <InputContent>
                                {order.map((item, index) => (
                                    <TextFields>
                                        <TextField
                                            key={index}
                                            name='orderQuantity'
                                            value={item.orderQuantity}
                                            onChange={(event: ChangeEvent<HTMLInputElement>) => handleChange(index, event)}
                                            type='number'
                                            label="Quantity"
                                            variant="filled"
                                        />

                                        <TextField
                                            key={index}
                                            name='orderPrice'
                                            value={item.orderPrice}
                                            onChange={(event: ChangeEvent<HTMLInputElement>) => handleChange(index, event)}
                                            type='number'
                                            label="Price"
                                            variant="filled"
                                        />

                                        <TextField
                                            key={index}
                                            name='orderTotal'
                                            value={item.orderTotal}
                                            onChange={(event: ChangeEvent<HTMLInputElement>) => handleChange(index, event)}
                                            type='number'
                                            label="Total"
                                            variant="filled"
                                        />
                                        <IconButton
                                            color="warning"
                                            onClick={() => handleRemoveInputFields(index)}
                                            disabled={order.length == 1 ? true : false}
                                            title='Remove'
                                        >
                                            <GoDiffRemoved />
                                        </IconButton>
                                    </TextFields>
                                ))}
                            </InputContent>
                        </InputBox>
                    </Container>
                </Fade>
            </Box>
        </Modal >
    )
}

const style = {
    position: 'absolute' as 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    width: 1000,
    bgcolor: 'background.paper',
    border: '2px solid #000',
    boxShadow: 24,
    p: 0,
}

const Container = styled.div`
    display: flex;
    flex-direction: column;
    text-align: center;
    padding: 2rem;
    height: 60rem;
    width: 100%;
`

const InputContent = styled.div`
    display: flex;
    flex-direction: column;
`

const TextFields = styled.div`
    display: flex;
    align-content: center;
    padding: 0.75rem;
`

const InputBox = styled.div`
    display: flex;
    justify-content: center;
    margin-top: 1rem;
`