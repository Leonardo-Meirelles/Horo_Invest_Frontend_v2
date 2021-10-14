import { useDispatch, useSelector } from 'react-redux'
import { Button, Modal, ModalHeader, ModalBody, ModalFooter } from 'reactstrap'
import { RootState } from '../../../store'
import { toggleModal } from '../../../store/openModal/action'

export function DeleteOrderModal (props: any) {

    const {
        buttonLabel,
        className
      } = props;

    const dispatch = useDispatch()
    const handleClose = () => dispatch(toggleModal())

    const modalState = useSelector((state: RootState) => state.modal.open)

    return (
        <div>
            <Modal
                isOpen={modalState}
                modalTransition={{ timeout: 500 }}
                backdropTransition={{ timeout: 1000 }}
                toggle={handleClose}
            >
                <ModalHeader toggle={handleClose}>
                    Please confirm order cancelation!
                </ModalHeader>

                <ModalBody>
                    
                </ModalBody>

                <ModalFooter>
                    <Button color="primary" >Do Something</Button>
                    <Button color="secondary" >Cancel</Button>
                </ModalFooter>
            </Modal>
        </div>
    )
}