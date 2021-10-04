import { Link } from "@reach/router"
import { useState } from "react"
import { ButtonDropdown, DropdownToggle, DropdownItem, DropdownMenu } from "reactstrap"
import styled from "styled-components"

export function Header() {

    const [dropdownOpen, setOpen] = useState(false)

    const toggle = () => setOpen(!dropdownOpen)

    return (
        <Container>
            <div>
                <h4>Olá, Leonardo!</h4>
            </div>

            <SButtonDropdown direction="left" isOpen={dropdownOpen} toggle={toggle}>
                <DropdownToggle caret color="secondary" size="lg">
                    Menu
                </DropdownToggle>
                <DropdownMenu>
                    <DropdownItem header>Market</DropdownItem>
                    <DropdownItem tag={Link} exact="true" to='/user/stocks'>Trading Stocks</DropdownItem>
                    <DropdownItem tag={Link} exact="true" to='/user/currency'>Currency Exchange</DropdownItem>
                    <DropdownItem tag={Link} exact="true" to='/user/cripto'>Cripto Currency</DropdownItem>

                    <DropdownItem divider />

                    <DropdownItem header>User Info</DropdownItem>
                    <DropdownItem>User Wallet</DropdownItem>

                    <DropdownItem divider />

                    <DropdownItem>Sair</DropdownItem>
                </DropdownMenu>
            </SButtonDropdown>

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
    width: 15rem;

    
`

