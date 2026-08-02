import React from 'react'
import './css/navbar.css'
import logo from '/assets/img/logopage.png'
const Navbar = () => {
  return (
    <>
     <nav className="navbar">
      <div className="brand">
        <img src={logo} className="logo-mark" alt="NATrinklets Logo" />
        <div>
          <div className="brand-name">NATrinklets</div>
        
        </div>
      </div>

      <div className="static-note static">
        This is a static website for showcasing products
      </div>
    </nav>
    </>
  )
}

export default Navbar