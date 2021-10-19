import styled from 'styled-components'
import { useState } from 'react'
import { useSelector } from 'react-redux'
import { RootState } from '../../../store'
import { Button, Card, CardContent, TextField, Typography } from '@mui/material'
import { changeUserEmailService, changeUserPasswordService } from '../../../services/userService'
import toast from 'react-hot-toast'

export function ChangeUserInfo() {

    const [newEmail, setNewEmail] = useState<string>('')
    const [confirmEmail, setConfirmEmail] = useState<string>('')
    const [newPassword, setNewPassword] = useState<string>('')
    const [confirmPassword, setConfirmPassword] = useState<string>('')

    const { email: userEmail } = useSelector((state: RootState) => state.authentication.user)

    const handleChangeUserInfo = () => {

        if (newEmail.length > 0 && confirmEmail.length > 0) {
            try {
                changeUserEmailService(confirmEmail)
                    .then(() => toast.success(
                        'Your EMAIL was updated successfully',
                        {
                            position: "top-center"
                        }))
                //! Retirar
                toast.success(
                    'Your EMAIL was updated successfully',
                    {
                        position: "top-right"
                    })
                //!    
            } catch {
                toast.error('Something went wrong with your request')
            }
        }

        if (newPassword.length > 0 && confirmPassword.length > 0) {
            try {
                changeUserPasswordService(confirmPassword)
                    .then(() => toast.success(
                        'Your PASSWORD was updated successfully',
                        {
                            position: "top-center"
                        }))
                //! Retirar
                toast.success(
                    'Your PASSWORD was updated successfully',
                    {
                        position: "top-right"
                    })
                //!
            } catch {
                toast.error('Something went wrong with your request')
            }
        }
    }

    return (
        <SCard>
            <SCardContent>
                <Typography sx={{ fontSize: 18 }} color="WindowText" gutterBottom>
                    Email: {userEmail}
                </Typography>

                <TextField
                    label="Enter new email"
                    variant="filled"
                    value={newEmail}
                    onChange={(event) => setNewEmail(event.target.value)}
                    helperText={newEmail === confirmEmail ? '' : 'Please confirm both entries are equal.'}
                    error={newEmail === confirmEmail ? false : true}
                />

                <TextField
                    label="Confirm new email"
                    variant="filled"
                    value={confirmEmail}
                    onChange={(event) => setConfirmEmail(event.target.value)}
                    helperText={newEmail === confirmEmail ? '' : 'Please confirm both entries are equal.'}
                    error={newEmail === confirmEmail ? false : true}
                />

                <hr />

                <TextField
                    label="Enter new password"
                    variant="filled"
                    value={newPassword}
                    onChange={(event) => setNewPassword(event.target.value)}
                    helperText={newPassword === confirmPassword ? '' : 'Please confirm both entries are equal.'}
                    error={newPassword === confirmPassword ? false : true}
                />

                <TextField
                    label="Confirm new password"
                    variant="filled"
                    value={confirmPassword}
                    onChange={(event) => setConfirmPassword(event.target.value)}
                    helperText={newPassword === confirmPassword ? '' : 'Please confirm both entries are equal.'}
                    error={newPassword === confirmPassword ? false : true}
                />

                <Button
                    variant="outlined"
                    color='success'
                    onClick={() => handleChangeUserInfo()}
                    disabled={
                        newEmail === confirmEmail &&
                            newPassword === confirmPassword
                            ? false : true}
                >
                    Change
                </Button>
            </SCardContent>
        </SCard>
    )
}

const SCard = styled(Card)`
    margin: 2rem; 
    text-align: center;
    width: 50rem;
    height: 50rem;
`

const SCardContent = styled(CardContent)`
    display: flex;
    flex-direction: column;
    justify-content: space-around;
    text-align: center;
    height: 100%;
`
