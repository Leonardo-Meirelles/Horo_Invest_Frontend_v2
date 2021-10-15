import { useDispatch, useSelector } from 'react-redux'
import { Button, Modal, ModalHeader, ModalBody, ModalFooter } from 'reactstrap'
import styled from 'styled-components'
import { RootState } from '../../../store'
import { toggleModal } from '../../../store/openModal/action'
import closeImg from '../../../assets/images/close.svg'

export function DeleteOrderModal (props: any) {

    const dispatch = useDispatch()
    const handleClose = () => dispatch(toggleModal())

    const modalState = useSelector((state: RootState) => state.modal.open)

    return (
            <Modal
                isOpen={modalState}
                modalTransition={{ timeout: 500 }}
                backdropTransition={{ timeout: 1000 }}
                toggle={handleClose}
            >
                <CloseButton onClick={handleClose}>
                    <img src={closeImg} alt="Close modal" />
                </CloseButton>
                <ModalHeader>
                    Please confirm order cancelation!
                </ModalHeader>

                <ModalBody>
                    If you proceed, there is no way of turning back and your order will be completly deleted!
                </ModalBody>

                <SModalFooter>
                    <Button color="success" >Keep Order</Button>
                    <Button color="danger" >Delete Order</Button>
                </SModalFooter>
            </Modal>
    )
}

const CloseButton = styled.button`
    position: absolute;
    right: 1rem;
    top: 1rem;
    border: 0;
    background: transparent;
    transition: filter 0.2s;
        &:hover {
            filter: brightness(0.6);
        }
`

const SModalFooter = styled(ModalFooter)`
    justify-content: space-between;
`