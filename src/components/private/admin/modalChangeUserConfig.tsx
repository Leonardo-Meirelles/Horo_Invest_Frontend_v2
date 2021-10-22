import { useDispatch, useSelector } from "react-redux"
import { Button, Modal, ModalBody, ModalFooter } from "reactstrap"
import styled from "styled-components"
import { RootState } from "../../../store"
import { toggleModal } from "../../../store/openModal/action"

export function ModalChangeUserConfig() {

    const dispatch = useDispatch()

    const modal = useSelector((state: RootState) => state.modal.open)

    const toggle = () => dispatch(toggleModal())

    return (
        <SModal isOpen={modal} toggle={toggle}>
            <ModalBody>

            </ModalBody>

            <SModalFooter>
                <Button color="warning" onClick={toggle}>Cancel</Button>
                <Button color="danger" onClick={toggle}>Change</Button>
            </SModalFooter>
        </SModal>
    )
}

const SModal = styled(Modal)`
    margin-top: 30rem;
`

const SModalFooter = styled(ModalFooter)`
    display: flex;
    justify-content: space-between;
`