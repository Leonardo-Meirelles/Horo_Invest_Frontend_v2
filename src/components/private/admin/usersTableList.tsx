import { RouteComponentProps } from "@reach/router"
import { Table } from "reactstrap"
import styled from "styled-components"
import { FaUserPlus, FaUserTimes, FaUserCog } from "react-icons/fa"
import { useDispatch } from "react-redux"
import { toggleModal } from "../../../store/openModal/action"

export function UsersTableList(props: RouteComponentProps) {

    const dispatch = useDispatch()

    const handleClickUserType = (event: any) => {
        const x = event.target.value
        console.log('🚀 ~ x', x)
        dispatch(toggleModal())
    }

    const handleClickUserStatus = () => {
        dispatch(toggleModal())
    }

    return (
        <Container>
            <STable bordered hover dark>
                <thead>
                    <tr>
                        <th>ID:</th>
                        <th>Name:</th>
                        <th>Email:</th>
                        <th>User Type:</th>
                        <th>Status:</th>
                        <th>Created At:</th>
                    </tr>
                </thead>

                <tbody>
                    <tr>
                        <td>{1}</td>
                        <td>{'Leonardo'}</td>
                        <td>{'leonardo@meirelles.com'}</td>
                        <td>
                            <button
                                value={'legal'}
                                onClick={(event: any) => handleClickUserType(event)}>
                                {1} <br /><FaUserCog className='text-warning' />
                            </button>
                        </td>
                        <td>
                            <button onClick={() => handleClickUserStatus()}>
                                {'true'} <br /><FaUserCog className='text-warning' />
                            </button>
                        </td>
                        <td>{'0000/00/00'}</td>
                    </tr>
                </tbody>
            </STable>
        </Container>
    )
}

const Container = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    width: 100%;
    padding: 1rem;
`

const STable = styled(Table)`
    width: 100%;
    margin-top: 1rem;
    text-align: center;
    font-size: 1.25rem;

    td {
        vertical-align: middle; 
        button {
            background: transparent;
            border: none;
            color: white;
        }
    }
`