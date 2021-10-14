import { Link } from "@reach/router"
import { useState } from "react"
import { useDispatch, useSelector } from "react-redux"
import { ButtonDropdown, DropdownToggle, DropdownItem, DropdownMenu, Button } from "reactstrap"
import styled from "styled-components"
import { logoutAuthentication } from "../../../../store/authentication/action"
import { RootState } from "../../../../store/index"

export function Header() {

    const dispatch = useDispatch()

    const [dropdownOpen, setOpen] = useState(false)

    const toggle = () => setOpen(!dropdownOpen)

    const user: any = useSelector((state: RootState) => state.authentication?.user)  

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
                    <SDropdownItem tag={Link} to='/user/stocks'>Stocks</SDropdownItem>
                    <SDropdownItem tag={Link} to='/user/currencies'>Currency</SDropdownItem>
                    <SDropdownItem tag={Link} to='/user/cripto'>Criptocurrency</SDropdownItem>

                    <SDropdownItem divider />

                    <SDropdownItem header>Profile</SDropdownItem>
                    <SDropdownItem tag={Link} to='/user/wallet'>Wallet</SDropdownItem>
                    <SDropdownItem tag={Link} to='/user/stocks'>Info</SDropdownItem>

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
    justify-content: space-around;
    align-items:center;
    background: var(--black);
    padding: 0.5rem 1.5rem;

    h4 {
        color: var(--white)
    }
`

const SButtonDropdown = styled(ButtonDropdown)`
    width: 20rem;    

`

const SDropdownMenu = styled(DropdownMenu)`
    width: 100%;
    height: 25rem;
`

const SDropdownItem = styled(DropdownItem)`
    font-size: 1.5rem;
    margin-top: 0.5rem;
`