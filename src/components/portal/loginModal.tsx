import { RouteComponentProps } from '@reach/router'
import styled from 'styled-components'
import { Backdrop, Box, Button, Fade, Modal, TextField, Typography } from '@mui/material'
import { useSelector, useDispatch } from 'react-redux'
import { toggleModal } from '../../store/loginModal/actions'
import type { RootState } from '../../store/index'
import LoginSharpIcon from '@mui/icons-material/LoginSharp'
import AccountBoxIcon from '@mui/icons-material/AccountBox'


interface LoginCardProps extends RouteComponentProps {

}

export function LoginModal(props: LoginCardProps) {

    const dispatch = useDispatch()
    const handleClose = () => dispatch(toggleModal())

    const modalState = useSelector((state: RootState) => state.modal.open)

    return (
        <Modal
            open={modalState}
            onClose={handleClose}
            closeAfterTransition
            BackdropComponent={Backdrop}
            BackdropProps={{
                timeout: 600,
            }}
        >
            <Fade in={modalState}>
                <Box sx={style}>
                    <Container>
                        <h2>Login</h2>
                        <TextField label="Email" variant="filled" />
                        <TextField label="Password" variant="filled" />

                        <ButtonGroup>
                            <Button variant="outlined" startIcon={<AccountBoxIcon />}>
                                Sign in
                            </Button>
                            <Button variant="outlined" startIcon={<LoginSharpIcon />}>
                                Login
                            </Button>
                        </ButtonGroup>
                    </Container>
                </Box>
            </Fade>
        </Modal>
    )
}

const style = {
    position: 'absolute' as 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    width: 600,
    bgcolor: 'background.paper',
    border: '2px solid #000',
    boxShadow: 24,
    p: 0,

}

const Container = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: space-evenly;
    text-align: center;
    padding: 1rem;
    height: 24rem;
    width: 100%;
`

const ButtonGroup = styled.div`
    display: flex;
    justify-content: space-around;
`
