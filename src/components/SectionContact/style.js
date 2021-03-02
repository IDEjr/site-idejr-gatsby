// Styled Components
import styled from "styled-components"
import SectionContainer from "../shared/SectionContainer"


// Colors
import Colors from "@style/colors"
import Breakpoints from "@support/breakpoints"


export const Container = styled(SectionContainer)`
  background-image: linear-gradient(90deg,${Colors.PURPLE},${Colors.BLUE});
`

export const FormContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;
  max-width: 80%;
  margin: auto;

  @media(min-width: ${Breakpoints.MEDIUM}px) {
    max-width: 800px;
  }
`
