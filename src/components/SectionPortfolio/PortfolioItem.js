import React from 'react'
import styled from 'styled-components'
import PropTypes from "prop-types"
import { SMALL } from "@utils/breakpoints"

const Item = styled.div`
  position: relative;
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 2rem 4rem;

  @media (max-width: ${SMALL}px) {
    flex-direction: column;
    padding: 0;
  }
`

const ItemLogo = styled.div`
  max-width: 40%;
  img {
    display: block;
    width:100%;
  }

  @media (max-width: ${SMALL}px) {
    align-self: flex-start;
    max-width: 60%;
    margin-bottom: 1.5rem;
  }
`

const ItemContent = styled.div`
  max-width: 60%;
  img {
    display: block;
    width:100%;
  }

  @media (max-width: ${SMALL}px) {
    max-width: 100%;
  }
`

export default function PortfolioItem({logoProps, contentProps}) {
  return (
    <Item>
      <ItemLogo>
        <img alt={logoProps.alt||""} {...logoProps }/>
      </ItemLogo>
      <ItemContent>
        <img alt={logoProps.alt||""} {...contentProps }/>
      </ItemContent>
    </Item>
  )
}

PortfolioItem.propTypes = {
  logoProps: PropTypes.object.isRequired,
  contentProps: PropTypes.object.isRequired
}
