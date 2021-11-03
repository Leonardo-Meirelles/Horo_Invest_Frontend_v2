import { useDispatch, useSelector } from 'react-redux';
import { Button, Modal, ModalHeader, ModalBody, ModalFooter } from 'reactstrap';
import styled from 'styled-components';
import { RootState } from '../../../store';
import { toggleModal } from '../../../store/openModal/action';
import closeImg from '../../../assets/images/close.svg';
import { deleteUserOrderByIdService } from '../../../services/userService';
import toast from 'react-hot-toast';

export function DeleteOrderModal(props: any) {

    const dispatch = useDispatch()
    const handleClose = () => dispatch(toggleModal())

    const modalState = useSelector((state: RootState) => state.modal.open)
    const orderIdToDelete = useSelector((state: RootState) => state.deleteOrder.id)
    const orderAssetToDelete = useSelector((state: RootState) => state.deleteOrder.asset)

    const handleDeleteOrder = async () => {
        const data = {
            assetName: orderAssetToDelete,
            assetId: orderIdToDelete
        }
        try {
            await deleteUserOrderByIdService(data)
                .then(() => toast.success('Order deleted successfully!'))
                handleClose()

        } catch {
            toast.success('Something went wrong with your request')
            handleClose()
        }

    }

    return (
        <Modal
            isOpen={modalState}
            modalTransition={{ timeout: 500 }}
            backdropTransition={{ timeout: 800 }}
            toggle={handleClose}
        >
            <CloseButton onClick={handleClose}>
                <img src={closeImg} alt="Close modal" />
            </CloseButton>
            <ModalHeader>
                Please confirm order cancelation!
            </ModalHeader>

            <ModalBody>
                If you proceed, there is no way of turning back and your order will be completely deleted!
            </ModalBody>

            <SModalFooter>
                <Button
                    color="success"
                    onClick={handleClose}
                >Keep Order</Button>
                <Button
                    color="danger"
                    onClick={() => handleDeleteOrder()}
                >Delete Order</Button>
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