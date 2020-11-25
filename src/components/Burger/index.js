import React, { useState } from "react"
import "./burger.css"

const Burger = ({ active, ...rest }) => (
  <button {...rest} className={`hamburger hamburger--arrowalt ${active ? 'is-active' : ''}`} type="button">
    <span className="hamburger-box">
      <span className="hamburger-inner"></span>
    </span>
  </button>
)

export default Burger