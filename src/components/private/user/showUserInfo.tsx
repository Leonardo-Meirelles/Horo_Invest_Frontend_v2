import styled from 'styled-components'
import { useState } from 'react'
import { useSelector } from 'react-redux'
import { RootState } from '../../../store'
import { Card, CardContent, TextField, Typography } from '@mui/material'

export function UserInfo() {

    const { name: userName, email: userEmail } = useSelector((state: RootState) => state.authentication.user)

    return (
        <SCard>
            <SCardContent>
                <Typography sx={{ fontSize: 18 }} color="WindowText" gutterBottom>
                    Name: {userName}
                </Typography>

                <Typography sx={{ fontSize: 18 }} color="WindowText" gutterBottom>
                    Email: {userEmail}
                </Typography>

                <Typography sx={{ fontSize: 18 }} color="WindowText" gutterBottom>
                    User since: 00/00/0000
                </Typography>
            </SCardContent>
        </SCard>
    )
}

const SCard = styled(Card)`
    margin: 2rem;
    text-align: center;
    width: 30rem;
    height: 30rem;
`

const SCardContent = styled(CardContent)`
    display: flex;
    flex-direction: column;
    justify-content: space-around;
    text-align: left;
    height: 100%;
`
