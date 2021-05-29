import styled from 'styled-components'
import { SMALL } from "@utils/breakpoints"
import nextIcon from '@assets/next-arrow-icon.svg'


export const SectionContainer = styled.section`
  position: relative;
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  align-items: center;
  min-height: 80vh;
  padding: 5vh 5vw;
  @media (max-width: ${SMALL}px) {
    min-height: 70vh;
  }
`

export const SectionBackground = styled.img`
  position: absolute;
  z-index: -99;
  height: 50%;
  top: 15%;
  right: 10%;
  max-width: 50vw;
  @media (max-width: ${SMALL}px) {
    right: 0;
    top: 20%;
  }
`

export const SliderContainer = styled.div`
  width: 75vw;
`

export const Control = styled.button`
  width: 80px;
  &::before {
    content: "" !important;
    background-image: url(${nextIcon}) !important;
    width: 100%;
    height: 100%;
    ${({prev}) => prev ? "transform: rotate(180deg)" : "" };
  }
  @media (max-width: ${SMALL}px) {
    width: 40px;
    &::before {
      background-image: none !important;
    }
  }
`
