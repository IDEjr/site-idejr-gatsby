import React from 'react'
import styled from 'styled-components'
import PropTypes from "prop-types"
import colors from '@utils/colors'
import { SMALL } from "@support/breakpoints"

const Div = styled.div`
  position: relative;
  width: fit-content;
`

const SectionTitle = styled.h2`
  font-size: 1rem;
  font-style: italic;
  font-weight: normal;
  color: ${ colors.GREEN };
  width: fit-content;
  position: absolute;
  left: 0;
  top: 0;
  @media (max-width: ${SMALL}px) {
    left: 3rem;
  }
`
const SectionDescription = styled.h3`
  font-size: 2rem;
  line-height: 1.2;
  color: ${ colors.PURPLE };
  width: fit-content;
  margin: 2rem 1.5rem 1.5rem 1.5rem;
  @media (max-width: ${SMALL}px) {
    margin: 2rem 1rem 1.5rem 1rem;
  }
`

export default function SectionHeader({title, description}) {
  return (
    <Div>
      <SectionTitle>{title}</SectionTitle>
      <SectionDescription>{description}</SectionDescription>
    </Div>
  )
}

SectionHeader.propTypes = {
  title: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired
}
