import React, { useState } from "react"
import styled from "styled-components"
import Logo from "../../assets/logo_branco.png"
import Burger from "../Burger/index"
import Colors from "../../style/colors"
import { SMALL } from "../../support/breakpoints"
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

  @media (max-width: ${SMALL}px) {
    width: calc(100vw - ${2*SMALL_NAVBAR_HORIZONTAL_PADDING}px);
    padding: 0 ${SMALL_NAVBAR_HORIZONTAL_PADDING}px;
    height: ${NAVBAR_HEIGHT}px;
  }
`

const NavbarLogo = styled.div`
  width: 80px;
  img {
    max-height: 100%; 
    max-width: 100%;
  }

  @media (max-width: ${SMALL}px) {
    width: 50px;
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
  border-radius: 15px;
  padding: 5px 20px;
  border: ${props => props.featured ? 'solid 1px white' : '0px'};
  font-size: 14px;
  margin: 0 ${props => props.featured ? '20px' : '10px'};
  cursor: pointer;
  @media (max-width: ${SMALL}px) {
    margin: 10px 0;
    color: ${Colors.PURPLE};
    border: ${props => props.featured ? `solid 1px ${Colors.PURPLE}` : '0px'};
  }
`

const NavbarLink = styled.a`
  text-decoration: none;
`

const Navbar = ({ ...rest }) => {
  const [hidden, setHiddenMobileNavbar] = useState(true)
  return (
    <NavbarContainer {...rest} >
      <NavbarLogo >
        <img src={Logo} />
      </NavbarLogo>
      <Burger onClick={() => setHiddenMobileNavbar(!hidden)} active={!hidden} color="white" />
      <NavbarLinkList hidden={hidden}>
        <NavbarLinkItem onClick={() => { scrollTo("#sobre"); setHiddenMobileNavbar(true); }}>
          <NavbarLink>
            Empresa
          </NavbarLink>
        </NavbarLinkItem>
        <NavbarLinkItem onClick={() => { scrollTo("#produtos"); setHiddenMobileNavbar(true); }}>
          <NavbarLink>
            Serviços
          </NavbarLink>
        </NavbarLinkItem>
        <NavbarLinkItem featured onClick={() => { scrollTo("#contato"); setHiddenMobileNavbar(true); }}>
          <NavbarLink>
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
