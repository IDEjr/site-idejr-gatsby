// Styled Components
import styled from "styled-components"

import Colors from "@utils/colors"
import { SMALL } from "@utils/breakpoints"


export const SectionContainer = styled.section`
  position: relative;
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  align-items: flex-start;
  min-height:60vh;
  padding: 5vh 5vw;
`

export const TextContainer = styled.div`
  position: relative;
  display: flex;
  flex-direction: column;
  width: 600px;
  height: 100%;
  margin-left: 10vw;

  @media screen and (max-width: 760px) {
    width: 100%;
    margin-left:0;
    margin-bottom: 2rem;
  }
`

export const Paragraph = styled.p`
  text-align: justify;
  position: relative;
  margin-left: 6rem;
  font-style: italic;
  color: #A0A0A0;
  line-height: 1.5rem;
  &::before {
    content:"";
    position: absolute;
    top: 0.5rem;
    left: -4rem;
    background-color: ${Colors.BLUE};
    height: 2px;
    width: 3.5rem;
  }

  @media (max-width: ${SMALL}px) {
    margin-left: 1rem;
    margin-right: 1rem;
    text-indent: 2.5rem;
    &::before {
      left: 0;
      width: 2rem;
    }
  }
`

export const SectionBackground = styled.img`
  position: absolute;
  z-index: -99;
  height: 100%;
  top: 40%;
  right: -25%;
  max-width: 60vw;
  @media (max-width: ${SMALL}px) {
    right: 0;
  }
`
