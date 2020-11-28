import React from "react"
import "./burger.css"

const Burger = ({ active, className, ...rest }) => (
  <button {...rest} className={`hamburger hamburger--arrowalt ${active ? 'is-active' : ''} ${className}`} type="button">
    <span className="hamburger-box">
      <span className="hamburger-inner"></span>
    </span>
  </button>
)

export default Burger