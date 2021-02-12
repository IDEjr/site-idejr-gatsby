import React from 'react'
import styled from 'styled-components'
import PropTypes from "prop-types"
import { SMALL } from "../../support/breakpoints"

const Item = styled.div`
  position: relative;
  display: flex;
  justify-content: space-evenly;
  align-items: center;

  @media (max-width: ${SMALL}px) {
    flex-direction: column;
  }
`

const ItemLogo = styled.div`
  img {
    display: block;
    max-width: 100%;
  }

  @media (max-width: ${SMALL}px) {
    align-self: flex-start;
    max-width: 50%;
    margin-bottom: 1.5rem;
  }
`

const ItemContent = styled.div`
  img {
    display: block;
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
