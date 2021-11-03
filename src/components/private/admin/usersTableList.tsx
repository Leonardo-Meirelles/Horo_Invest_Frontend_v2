import { RouteComponentProps } from "@reach/router"
import { Table } from "reactstrap"
import styled from "styled-components"
import { FaUserPlus, FaUserTimes, FaUserCog } from "react-icons/fa"
import { useDispatch } from "react-redux"
import { toggleModal } from "../../../store/openModal/action"
import { getAllUsersService } from "../../../services/adminService"
import { useEffect, useState } from "react"

export function UsersTableList(props: RouteComponentProps) {

    const [userData, setUserData] = useState<any>([])

    const dispatch = useDispatch()

    const handleClickUserType = (event: any) => {

        dispatch(toggleModal())
    }

    const handleClickUserStatus = () => {
        dispatch(toggleModal())
    }

    useEffect(() => {

        const getUsers = async () => {

            const users = await (await getAllUsersService()).data

            setUserData(users)
        }
        getUsers()

    }, [])

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
                    {userData?.map((user: any) => (
                        <tr>
                            <td>{user.id}</td>
                            <td>{user.name}</td>
                            <td>{user.email}</td>
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
                            <td>{user.created_at}</td>
                        </tr>
                    ))}
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