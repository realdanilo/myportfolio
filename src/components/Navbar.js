import React from 'react'
import { withRouter, NavLink, Link } from 'react-router-dom'
import '../css/Navbar.css'
function Navbar() {
    return (
        <nav className="navbar">
            <div className="logo">
                <Link to="/" >Danilo Mera</Link>
            </div>
            <div className="links">
                <NavLink exact to="/about" activeClassName="active-nav">About</NavLink>
                <NavLink exact to="/contact" activeClassName="active-nav">Contact</NavLink>
            </div>
        </nav>
    )
}

export default withRouter(Navbar)