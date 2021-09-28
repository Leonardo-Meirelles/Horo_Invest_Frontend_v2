import { RouteComponentProps } from '@reach/router'
import styled from 'styled-components'
import ArrowBackIcon from '@mui/icons-material/ArrowBack'
import { Box, Button, Modal, Typography } from '@mui/material'
import { useState } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import type { RootState } from '../../store/index'


interface LoginCardProps extends RouteComponentProps {

}

const style = {
    position: 'absolute' as 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    width: 400,
    bgcolor: 'background.paper',
    border: '2px solid #000',
    boxShadow: 24,
    p: 4,
};

export function LoginModal(props: LoginCardProps) {

    const dispatch = useDispatch()
    const handleClose = () => dispatch({type: 'CHANGE_CLOSE', open: false})

    const modalState = useSelector((state: RootState) => state.modal.open)

    return (
        <Container>
            <Modal
                open={modalState}
                onClose={handleClose}
                aria-labelledby="modal-modal-title"
                aria-describedby="modal-modal-description"
            >
                <Box sx={style}>
                    <Typography id="modal-modal-title" variant="h6" component="h2">
                        Text in a modal
                    </Typography>
                    <Typography id="modal-modal-description" sx={{ mt: 2 }}>
                        Duis mollis, est non commodo luctus, nisi erat porttitor ligula.
                    </Typography>
                </Box>
            </Modal>
        </Container>
    )
}

const Container = styled.div`
    display: flex;
    flex-direction: column;
    height: 100vh;
    justify-content: space-evenly;
    align-items: center;
`
