import React from 'react'
import NavbarLogo from '../assets/navbar-logo.png';
function NavBar() {
  return (
    <div className='navbar'>
        <img className='navbar-logo'src={NavbarLogo} height={"50px"}/>
    </div>
  )
}

export default NavBar