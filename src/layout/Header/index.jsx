import React from 'react'
import { Link } from "react-router-dom";

const Header = () => {
  return (
    <header className="main-header">
      <span className="logo">API-REST</span>
        <nav className="main-nav">
          <ul>
            <li><Link to="/" className="link">Home</Link></li>
            <li><Link to="/persona" className="link">Persona</Link></li>
            <li><Link to="/hero" className="link">Heroes</Link></li>
          </ul>
        </nav>
    </header>
  )
}

export default Header
