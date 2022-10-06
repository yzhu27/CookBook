import React from 'react'

import './Navbar.css'

/**
 * File name: Navbar.tsx
 * Task - Home, About, Contact options available for the user from the title bar.
 * @author Asrita Kuchibhotla
 */

function Navbar() {
  return (
    <section className="navbar">
      <a href="/" className="navbar-item">
        Home
      </a>
      <a href="/about" className="navbar-item">
        About
      </a>
      <a href="/contact" className="navbar-item">
        Contact
      </a>
    </section>
  )
}

export default Navbar
