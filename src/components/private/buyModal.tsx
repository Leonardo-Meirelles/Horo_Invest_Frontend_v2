import { Backdrop, Box, Button, Fade, IconButton, Modal, TextField, Typography } from "@mui/material"
import { useDispatch, useSelector } from "react-redux"
import styled from "styled-components"
import { RootState } from "../../store"
import { toggleModal } from "../../store/openModal/action"
import { RiPlayListAddFill } from "react-icons/ri"
import { GoDiffRemoved } from "react-icons/go"
import { ChangeEvent, useState } from "react"
import toast from "react-hot-toast"
import closeImg from '../../assets/images/close.svg'

interface OrderState {
    orderQuantity: number | ''
    orderPrice: number | ''
    orderTotal: number | ''
}

export function BuyModal() {

    const [order, setOrder] = useState<OrderState[]>([
        {
            orderQuantity: '',
            orderPrice: '',
            orderTotal: ''
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
                orderQuantity: '',
                orderPrice: '',
                orderTotal: ''
            }
        ]))
        if (order.length == 5) {
            toast.error(
                'The limit of orders to be done at once is 6. Please complete this order and open a new one', {
                style: {
                    border: '1px solid #713200',
                    padding: '16px',
                    color: '#713200',
                },
                iconTheme: {
                    primary: '#713200',
                    secondary: '#FFFAEE',
                },
                duration: 8000,
            });
        }
    }

    const handleRemoveInputFields = (index: number) => {

        const orderRemoved = [...order]
        orderRemoved.splice(index, 1)
        setOrder(orderRemoved)
    }

    const dispatch = useDispatch()
    const handleClose = () => {
        setOrder([{
            orderQuantity: '',
            orderPrice: '',
            orderTotal: ''
        }])
        dispatch(toggleModal())
    }

    const modalState = useSelector((state: RootState) => state.modal.open)

    const modalAssets = useSelector((state: RootState) => state.modalAssets.asset)

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
                <CloseButton onClick={handleClose}>
                    <img src={closeImg} alt="Close modal" />
                </CloseButton>
                <Fade
                    in={modalState}
                    style={{ transitionDelay: '150ms' }}
                >
                    <Container>
                        <TextContent>

                            <Typography variant="overline">
                                You are buying: {modalAssets.assetType}
                            </Typography>

                            <Typography variant="h5" >
                                {modalAssets.assetName}
                            </Typography>

                            <Typography variant="h5" >
                                R$ {modalAssets.assetPrice}
                            </Typography>

                        </TextContent>

                        <IconButton
                            color="warning"
                            onClick={() => handleAddInputFields()}
                            disabled={order.length == 6 ? true : false}
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
                                            multiline
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

                        <ButtonContent>
                            <Button variant="contained" color='success' size="large">
                                Send Order
                            </Button>
                        </ButtonContent>

                    </Container>
                </Fade>
            </Box>
        </Modal >
    )
}

const CloseButton = styled.button`
    position: absolute;
    right: 1.5rem;
    top: 1.5rem;
    border: 0;
    background: transparent;
    transition: filter 0.2s;
        &:hover {
            filter: brightness(0.6);
        }
`

const style = {
    position: 'absolute' as 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    width: 800,
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
    height: 50rem;
    width: 100%;
`

const TextContent = styled.div`
    display: flex;
    justify-content: space-around;
    align-items: center;
    margin: 0.75rem 0;
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

const ButtonContent = styled.div`
    display: flex;
    justify-content: center;
    margin-top: 4rem;
`