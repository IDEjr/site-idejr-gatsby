import React from 'react'
import PropTypes from "prop-types"

import Navbar from "@components/NavBar"
import Contact from "@components/SectionContact"

import "./style.css"

export default function Layout({ children }) {
  return (
    <div style={{ position: 'relative', overflow: 'hidden' }}>
      <Navbar />
      <main>{children }</main>
      <Contact />
    </div>
  )
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}
