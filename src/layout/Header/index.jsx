import React from 'react'
import { Link } from "react-router-dom";
import './style.scss'

const Header = () => {
  return (
    <div className="l_header__wrapper">
      <div className="l_header__logo">
        <img src="https://www.kindpng.com/picc/m/540-5405583_transparent-comic-logo-comics-food-bar-hd-png.png" alt="" />
      </div>
      <div className="l_header_menu">
        <Link to="/" className="menu">Home</Link>
        <Link to="/hero" className="menu">Hero</Link>
        <Link to="/herodetails" className="menu">Hero Details</Link>
        <Link to="/catalogue" className="menu">Catalogue</Link>
        <Link to="/contact" className="menu">Contact</Link>
      </div>
    </div>
  )
}

export default Header
