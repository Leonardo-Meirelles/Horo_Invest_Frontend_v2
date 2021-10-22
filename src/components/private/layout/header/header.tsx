import { Link } from "@reach/router"
import { useState } from "react"
import { useDispatch, useSelector } from "react-redux"
import { ButtonDropdown, DropdownToggle, DropdownItem, DropdownMenu, Button } from "reactstrap"
import styled from "styled-components"
import { logoutAuthentication } from "../../../../store/authentication/action"
import { RootState } from "../../../../store/index"
import { FaCog } from "react-icons/fa"

export function Header() {

    const dispatch = useDispatch()

    const [dropdownOpen, setOpen] = useState(false)

    const toggle = () => setOpen(!dropdownOpen)

    const user: any = useSelector((state: RootState) => state.authentication?.user)
    const userRoute = useSelector((state: RootState) => state.authentication.type?.route)

    const handleLogout = () => {

        dispatch(logoutAuthentication())
    }

    return (
        <Container>
            <div>
                <h4>Hello, {user.name}!</h4>
            </div>

            <SButtonDropdown direction="down" isOpen={dropdownOpen} toggle={toggle}>
                <DropdownToggle caret color="secondary" size="lg">
                    Menu
                </DropdownToggle>
                <SDropdownMenu>
                    <SDropdownItem header>Market</SDropdownItem>
                    <SDropdownItem tag={Link} to={`${userRoute}/`}>Stocks</SDropdownItem>
                    <SDropdownItem tag={Link} to={`${userRoute}/currencies`}>Currency</SDropdownItem>
                    <SDropdownItem tag={Link} to={`${userRoute}/crypto`}>Cryptocurrency</SDropdownItem>

                    <SDropdownItem divider />

                    {userRoute == '/user' ? (
                        <>
                            <SDropdownItem header>User</SDropdownItem>
                            <SDropdownItem tag={Link} to={`${userRoute}/wallet`}>Wallet</SDropdownItem>
                            <SDropdownItem tag={Link} to={`${userRoute}/info`}>Profile</SDropdownItem>
                        </>
                    ) :
                        (
                            <>
                                <SDropdownItem header>Restricted</SDropdownItem>
                                <SDropdownItem tag={Link} to={`${userRoute}/admin`}>Admin <FaCog/></SDropdownItem>
                            </>
                        )}

                </SDropdownMenu>
            </SButtonDropdown>

            <Button
                color="secondary"
                onClick={() => handleLogout()}
            >
                Logout
            </Button>
        </Container>
    )
}

const Container = styled.header`
    display: flex;
    justify-content: space-between;
    align-items:center;
    background: var(--black);
    padding: 0.5rem 1.5rem;

    h4 {
        color: var(--white)
    }
`

const SButtonDropdown = styled(ButtonDropdown)`
    width: 20rem;    
    margin-right: 2.25rem;
`

const SDropdownMenu = styled(DropdownMenu)`
    width: 100%;
`

const SDropdownItem = styled(DropdownItem)`
    font-size: 1.5rem;
    margin-top: 0.5rem;
    text-align: center;
`