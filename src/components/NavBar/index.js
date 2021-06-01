import React, { useState } from "react"
import styled from "styled-components"
import Logo from "@assets/logo_branco.png"
import Burger from "./Burger"
import Colors from "@utils/colors"
import { SMALL, MEDIUM } from "@utils/breakpoints"
import scrollTo from 'gatsby-plugin-smoothscroll';

const NAVBAR_HORIZONTAL_PADDING = 300
const SMALL_NAVBAR_HORIZONTAL_PADDING = 30

const NAVBAR_HEIGHT = 100

const NavbarContainer = styled.nav`
  overflow-x: unset;
  width: calc(100vw - ${2*NAVBAR_HORIZONTAL_PADDING}px);
  height: ${NAVBAR_HEIGHT}px;
  background-color: transparent;
  position: absolute;
  padding: 0 ${NAVBAR_HORIZONTAL_PADDING}px;
  display: flex;
  justify-content: space-between;
  align-items: center;

  @media (max-width: ${MEDIUM}px) {
    width: calc(100vw - ${2*SMALL_NAVBAR_HORIZONTAL_PADDING}px);
    padding: 0 ${SMALL_NAVBAR_HORIZONTAL_PADDING}px;
  }
`

const NavbarLogo = styled.div`
  width: 80px;
  img {
    max-height: 100%;
    max-width: 100%;
  }

  @media (max-width: ${SMALL}px) {
    width: 55px;
  }
`

const NavbarLinkList = styled.ul`
  display: flex;
  margin: 0;
  justify-content: space-around;
  transition: right 0.5s;
  @media (max-width: ${SMALL}px) {
    padding: 30px;
    width: calc(100vw - 2*30px);
    background-color: white;
    flex-direction: column;
    align-items: center;
    position: absolute;
    top: ${NAVBAR_HEIGHT}px;
    right: ${props => props.hidden ? "-100%" : "0"};
  }
`

const NavbarLinkItem = styled.li`
  color: white;
  border-radius: 1.1rem;
  padding: 5px 20px;
  border: ${props => props.featured ? 'solid 1px white' : '0px'};
  font-size: 0.9rem;
  margin: 0 ${props => props.featured ? '20px' : '10px'};
  cursor: pointer;
  @media (max-width: ${SMALL}px) {
    margin: 10px 0;
    color: ${Colors.PURPLE};
    border: ${props => props.featured ? `solid 1px ${Colors.PURPLE}` : '0px'};
  }
`

const NavbarLink = styled.button`
  text-decoration: none;
  padding: 0;
  font-family: inherit;
  transition: all 0.2s ease-in-out;
  font-size: inherit;
  color: inherit;
  background-color: transparent;
  outline: none;
  border: 0px;
  cursor: pointer;
`

const StyledBurger = styled(Burger)`
  display: none;
  @media (max-width: ${SMALL}px) {
    display: flex;
  }
`

const Navbar = ({ ...rest }) => {
  const [hidden, setHiddenMobileNavbar] = useState(true)
  return (
    <NavbarContainer {...rest} >
      <NavbarLogo >
        <img src={Logo} alt="Empresa júnior IDE - Logo"/>
      </NavbarLogo>
      <StyledBurger onClick={() => setHiddenMobileNavbar(!hidden)} active={!hidden} color="white" />
      <NavbarLinkList hidden={hidden}>
        <NavbarLinkItem>
          <NavbarLink onClick={() => { scrollTo("#sobre"); setHiddenMobileNavbar(true); }}>
            Empresa
          </NavbarLink>
        </NavbarLinkItem>
        {/* <NavbarLinkItem>
          <NavbarLink onClick={() => { scrollTo("#clientes"); setHiddenMobileNavbar(true); }}>
            Clientes
          </NavbarLink>
        </NavbarLinkItem> */}
        <NavbarLinkItem>
          <NavbarLink onClick={() => { scrollTo("#portfolio"); setHiddenMobileNavbar(true); }}>
            Portfólio
          </NavbarLink>
        </NavbarLinkItem>
        <NavbarLinkItem>
          <NavbarLink onClick={() => { scrollTo("#produtos"); setHiddenMobileNavbar(true); }}>
            Serviços
          </NavbarLink>
        </NavbarLinkItem>
        <NavbarLinkItem featured>
          <NavbarLink onClick={() => { scrollTo("#contato"); setHiddenMobileNavbar(true); }}>
            Contato
          </NavbarLink>
        </NavbarLinkItem>
      </NavbarLinkList>
    </NavbarContainer>
  )
}

Navbar.propTypes = {
}


export default Navbar
