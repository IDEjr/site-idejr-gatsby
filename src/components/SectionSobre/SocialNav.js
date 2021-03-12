import React from "react"
import styled from "styled-components"
import { FaGithub, FaLinkedin, FaInstagram, FaFacebookF } from "react-icons/fa"
import colors from "@utils/colors"
import { SMALL } from "@utils/breakpoints"

const Aside = styled.aside`
  position: absolute;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: fit-content;
  height: fit-content;

  svg {
    height: 2.5rem;
    width: 2.5rem;
    color: ${ colors.BLUE }
  }

  @media (max-width: ${SMALL}px) {
    position: static;
    flex-direction: row;
    justify-content: space-around;
    width: 100%;
  }
`

export default function SocialNav() {
  return (
    <Aside >
      <a href="https://github.com/IDEjr" target="_blank" rel="noopener noreferrer">
        <FaGithub />
      </a>
      <a href="https://www.linkedin.com/company/empresa-j%C3%BAnior-ide/" target="_blank" rel="noopener noreferrer">
        <FaLinkedin />
      </a>
      <a href="https://www.instagram.com/ide_jr/" target="_blank" rel="noopener noreferrer">
        <FaInstagram />
      </a>
      <a href="https://www.facebook.com/idejr" target="_blank" rel="noopener noreferrer">
        <FaFacebookF />
      </a>
    </Aside>
  )
}
