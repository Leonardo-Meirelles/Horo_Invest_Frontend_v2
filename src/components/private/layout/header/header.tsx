import { Link } from "@reach/router"
import { useState } from "react"
import { ButtonDropdown, DropdownToggle, DropdownItem, DropdownMenu } from "reactstrap"
import styled from "styled-components"

export function Header() {

    const [dropdownOpen, setOpen] = useState(false)

    const toggle = () => setOpen(!dropdownOpen)

    return (
        <Container>
            <SButtonDropdown direction="down" isOpen={dropdownOpen} toggle={toggle}>
                <DropdownToggle caret color="secondary" size="lg">
                    Menu
                </DropdownToggle>
                <SDropdownMenu>
                    <SDropdownItem header>Market</SDropdownItem>
                    <SDropdownItem tag={Link} exact="true" to='/user/stocks'>Stocks</SDropdownItem>
                    <SDropdownItem tag={Link} exact="true" to='/user/currencies'>Currency</SDropdownItem>
                    <SDropdownItem tag={Link} exact="true" to='/user/cripto'>Criptocurrency</SDropdownItem>

                    <SDropdownItem divider />

                    <SDropdownItem header>Profile</SDropdownItem>
                    <SDropdownItem>Wallet</SDropdownItem>
                    <SDropdownItem>Info</SDropdownItem>

                    <SDropdownItem divider />

                    <SDropdownItem>Sair</SDropdownItem>
                </SDropdownMenu>
            </SButtonDropdown>

            <div>
                <h4>Olá, Leonardo!</h4>
            </div>

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
    height: 30rem;
    
`

const SDropdownItem = styled(DropdownItem)`
    font-size: 1.5rem;
    margin-top: 0.5rem;
`

