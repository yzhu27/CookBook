import React from 'react'
import './Header.css'
import Navbar from '../Navbar/Navbar'
/**
 * File name: Header.tsx
 * Task - This component is responsible for the static header seen throughout the application with the option to navigate back to home
 * and provides 'Contact' and 'About' information.
 * @author Asrita Kuchibhotla
 */

const Header = () => {
  return (
    <section className="header">
      <section className="header-top">
        <section className="header-top__logo">
          <a href="/" className="header-logo">
            C o o k B o o k
          </a>
        </section>
        <section className="header-top__navbar" data-testid="nav-comp-43">
          <section className="header-top__navigation">
            <Navbar />
          </section>
          <hr className="header-top__seperator" />
        </section>
      </section>
      {/* <section className="header-bottom">
        <section className="header-bottom__phone">
          99999999999
        </section>
        <section className="header-bottom__email">
          shop.info@gmail.com
        </section>
      </section> */}
    </section>
  )
}

export default Header
