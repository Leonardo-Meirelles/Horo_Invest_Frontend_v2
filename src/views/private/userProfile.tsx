import { Button, ButtonGroup } from '@mui/material'
import { RouteComponentProps } from '@reach/router'
import styled from 'styled-components'
import { UserInfo } from '../../components/private/user/showUserInfo'
import { useState } from 'react'
import { ChangeUserInfo } from '../../components/private/user/changeUserInfo'

export function UserProfile(props: RouteComponentProps) {

    const [whichToLoad, setWhichToLoad] = useState<string>('show')

    return (
        <Container>
            <br />
            <Button variant='outlined' onClick={() => setWhichToLoad('show')} >Show your info</Button>
            <br />
            <Button variant='outlined' onClick={() => setWhichToLoad('change')} >Change access credentials</Button>

            {whichToLoad === 'show' ?
                (<UserInfo />) : (<ChangeUserInfo />)
            }
        </Container>
    )
}

const Container = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    width: 100vw;
`