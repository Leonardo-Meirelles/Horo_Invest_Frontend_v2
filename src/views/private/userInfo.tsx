import { RouteComponentProps } from '@reach/router'
import styled from 'styled-components'
import { UserInfoTableList } from '../../components/private/user/userInfoTableList'

export function UserInfo(props: RouteComponentProps) {

    return (
        <Container>
            <UserInfoTableList />
        </Container>
    )
}

const Container = styled.div`
    display: flex;
    justify-content: center;
    width: 100vw;
`