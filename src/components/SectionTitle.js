import React from "react"
import styled from "styled-components"
import Colors from "../utils/colors"
import PropTypes from "prop-types"

const Container = styled.div`
`

const Uppertitle = styled.div`
  font-size: 16px;
  font-style: italic;
  color: ${Colors.GREEN}
`

const Title = styled.h2`
  margin-top: 5px;
  margin-left: 15px;
  font-size: 30px;
  color: ${Colors.PURPLE};
`

const SectionTitle = ({ uppertitle, title }) => (
  <Container>
    <Uppertitle>{uppertitle}</Uppertitle>
    <Title>{title}</Title>
  </Container>  
)

SectionTitle.propTypes = {
  /**
   Big text shown in purple
   */
  title: PropTypes.string.isRequired,
  /**
   Small text shown above title
   */
  uppertitle: PropTypes.string
}


export default SectionTitle
