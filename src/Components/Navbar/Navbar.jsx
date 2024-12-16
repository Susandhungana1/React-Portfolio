import React from 'react'
import './Navbar.css'
import logo from '../../assets/mylogo.png'

const Navbar = () => {
  return (
    <div className='navbar'>
      <img className='logo1' src={logo} alt="" />
      <ul className="nav-menu">
        <li>Home</li>
        <li>About Me</li>
        <li>Skills</li>
        <li>Projects</li>
        <li>Contact</li>
      </ul>
      <div className="nav-connect">Connect With Me</div>
    </div>
  )
}

export default Navbar
