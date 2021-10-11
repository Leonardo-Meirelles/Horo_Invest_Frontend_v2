import styled from 'styled-components'
import { Backdrop, Box, Button, Fade, Modal, TextField } from '@mui/material'
import { useSelector, useDispatch } from 'react-redux'
import { toggleModal } from '../../store/openModal/action'
import type { RootState } from '../../store/index'
import { ChangeEvent, useState } from 'react'
import { FiUserPlus, FiUserCheck } from "react-icons/fi"
import { RiLoginBoxLine } from "react-icons/ri"
import closeImg from '../../assets/images/close.svg'
import { loginAuthentication } from '../../store/authentication/action'
// import { toast } from 'react-hot-toast'

interface LoginForm {
    name?: string
    email: string
    password: string
}

export function LoginModal() {
    const [hasUser, setHasUser] = useState(true)
    const [loginForm, setLoginForm] = useState<LoginForm>({
        email: '',
        password: ''
    })

    const dispatch = useDispatch()
    const handleClose = () => dispatch(toggleModal())

    const modalState = useSelector((state: RootState) => state.modal.open)

    const handleChange = (event: ChangeEvent<HTMLInputElement>) => {
        setLoginForm((prevState) => ({
            ...prevState,
            [event.target.name]: event.target.value
        }))
    }

    const handleLoginSubmit = () => {
        // toast.error('deu certo', {
        //     position: 'top-right'
        // })
        // dispatch(toggleModal())
        // navigate('/user')
        dispatch(loginAuthentication(loginForm))

    }

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
                <Fade in={modalState}>
                    <Container>
                        <h2>Login</h2>

                        <ButtonGroup>
                            <SLink
                                type="button"
                                onClick={() => {
                                    setHasUser(false)
                                    setLoginForm({name: '', email: '', password: '' })
                                }}
                            >
                                <FiUserPlus />
                                <br />
                                Create an account
                            </SLink>

                            <SLink
                                type="button"
                                onClick={() => {
                                    setHasUser(true)
                                    setLoginForm({ email: '', password: '' })
                                }}
                            >
                                <FiUserCheck />
                                <br />
                                I have an account
                            </SLink>
                        </ButtonGroup>

                        {hasUser ?
                            ''
                            :
                            <TextField
                                label='Name'
                                variant='filled'
                                name='name'
                                value={loginForm.name || ''}
                                onChange={(event: ChangeEvent<HTMLInputElement>) => handleChange(event)}
                            />
                        }
                        <TextField
                            label='Email'
                            name='email'
                            value={loginForm.email || ''}
                            variant='filled'
                            onChange={(event: ChangeEvent<HTMLInputElement>) => handleChange(event)}
                        />
                        <TextField
                            label='Password'
                            variant="filled"
                            name='password'
                            value={loginForm.password || ''}
                            onChange={(event: ChangeEvent<HTMLInputElement>) => handleChange(event)}
                        />

                        <Button
                            variant='outlined'
                            endIcon={<RiLoginBoxLine />}
                            color='success'
                            onClick={handleLoginSubmit}
                        >
                            {hasUser ? 'Login' : 'Sigin'}
                        </Button>
                    </Container>
                </Fade>
            </Box>
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

const Container = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: space-evenly;
    text-align: center;
    padding: 1rem;
    height: 30rem;
    width: 100%;
`

const ButtonGroup = styled.div`
    display: flex;
    justify-content: space-around;
`

const SLink = styled.a`
    font-size: 1.15rem;
    font-weight: 600;
    color: var(--black);
    text-decoration: none;
    transition: 0.3s;

    &:hover {
        color: var(--yellow);
        filter: brightness(0.7);
    }
`


