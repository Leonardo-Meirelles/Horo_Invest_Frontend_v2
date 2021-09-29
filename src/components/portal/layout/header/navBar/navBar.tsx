import styled from 'styled-components'
import { Button, ButtonGroup, Nav, NavItem, NavLink } from 'reactstrap'
import { Link } from "@reach/router"
import logo from '../../../../../assets/images/logo.png'
import { useDispatch } from 'react-redux'
import { toggleModal } from '../../../../../store/loginModal/actions'


export function NavBar() {

  const dispatch = useDispatch()
  const changeStoreModalState = () => dispatch(toggleModal())

  return (
    <Container>
      <Logo src={logo} alt="" />
      <Nav>
        <NavItem>
          <SNavLink tag={Link} to='/'>Home</SNavLink >
        </NavItem>
        <NavItem>
          <SNavLink tag={Link} to="stocks">Trading Stocks</SNavLink >
        </NavItem>
        <NavItem>
          <SNavLink tag={Link} to="/currency">Currency Exchange</SNavLink >
        </NavItem>
        <NavItem>
          <SNavLink tag={Link} to="/cripto">Cripto Currency</SNavLink >
        </NavItem>
        <NavItem>
          <SNavLink tag={Link} to="/about">About</SNavLink >
        </NavItem>
      </Nav>

      <ButtonGroup>
        <SButton onClick={changeStoreModalState}>Entrar</SButton>
        <SButton>Sair</SButton>
      </ButtonGroup>
    </Container>
  )
}

const Container = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;  
`

const SNavLink = styled(NavLink)`
  color: var(--white);
  &:hover {
    color: var(--yellow)
  }
`

const SButton = styled(Button)`
  margin: 0.4rem;
  width: 4.5rem;
`

const Logo = styled.img`
  height: 6rem;
`
