import React, { useState } from 'react'
import "./Navbar.css"


import { Link } from "react-router-dom"
const Navbar = () => {
    const [click, setClick] = useState(false)
    const handleClick = () => setClick(!click)
    const closeMobileMenu = () => setClick(false)
  return (
      <>
          <nav className="navbar">
              <div className="container flex_space">
                  <div className="menu-icon" onClick={handleClick}>
                      <i className= {click ? "fas fa-times" : "fas fa-bars"}></i>
                  </div>

                  <ul className={click ? "nav-menu active" : "nav-menu"}>
                          <li>
                          <Link to='/' onClick={closeMobileMenu}>Home</Link>
                          </li>
                          <li>
                          <Link to='/about' onClick={closeMobileMenu}>About</Link>
                          </li>
                          <li>
                          <Link to='/gallery' onClick={closeMobileMenu}>Gallery</Link>
                          </li>
                            <li>
                          <Link to='/blog' onClick={closeMobileMenu}>Blog</Link>
                            </li>
                      <li>
                          <Link to='/testimonail' onClick={closeMobileMenu}>Testimonail</Link>
                      </li>
                      <li>
                          <Link to='/contact' onClick={closeMobileMenu}>Contact Us</Link>
                      </li>
                  </ul>
                  <div className="login-area flex">
                      <li>
                          <Link to='/sign-in'>
                              <i className="far fa-chevron-right">Sign In</i>
                          </Link>
                      </li>
                       <li>
                          <Link to='/register'>
                              <i className="far fa-chevron-right">Register</i>
                          </Link>
                      </li>
                      <li>
                          <Link to='/contact'>
                              <button className="primary-btn">Request a Quote</button>
                          </Link>
                      </li>
                  </div>
            </div>
          </nav>

          <header>
              <div className='container flex_space'>
                  <div className='logo'>
                      <img src='images/logo.gif' alt='logo' />
                      <div className='logo-text'>
                        <span>Thiên Bình</span>
                        <p>Hotel & Love</p>
                      </div>
                  </div>

                  <div className="contact flex_space">
                    <div className="box flex_space">
                        <div className="icons">
                            <i className="far fa-clock"></i>
                        </div>
                        <div className="text">
                            <h4>Working Hours</h4>
                            <Link to='/contact'>Monday - Sunday: 9.00am to 6.00pm</Link>
                        </div>
                    </div>
                    <div className="box flex_space">
                        <div className="icons">
                            <i className="fas fa-phone-volume"></i>
                        </div>
                        <div className="text">
                            <h4>Call Us</h4>
                            <Link to='/contact'>+ 098 330 085</Link>
                        </div>
                    </div>
                    <div className="box flex_space">
                        <div className="icons">
                            <i className="far fa-envelope"></i>
                        </div>
                        <div className="text">
                            <h4>Mail Us</h4>
                            <Link to='/contact'>letuananh06101997@gmail.com</Link>
                        </div>
                    </div>
              </div>
              </div>
          </header>
    </>
  )
}

export default Navbar