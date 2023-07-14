import React, { useState } from 'react';
import Logo from '../assets/Dexxtadesign_HD_Trans.png';
import { Link } from 'react-router-dom';
//import { GiHamburger }  from 'react-icons/gi';
import ReorderIcon from '@mui/icons-material/Reorder';
import '../styles/Navbar.css'

function Navbar() {
const [openLinks, setOpenLinks] =useState(false);

const showLinksNavebar = () => {
   setOpenLinks(!openLinks)
}

  return (
    <div className='navbar'>
        <div className='leftSide' id={openLinks ? 'open' : 'close'}>
            <img src={Logo} alt='logo'/>
            <div className='hiddenLinks'>
            <ul>
              <li><Link to='/lightning'>LIGHTNING</Link></li>
              <li><Link to='/furniture'>FURNITURE</Link></li>
              <li><Link to='/accessories'>ACCESSORIES</Link></li>
              <li><Link to='/dexxta'>TOOLS</Link></li>
              <li><Link to='/aboutus'>ABOUT</Link></li>
              <li><Link to='/gallery'>GALLERY</Link></li>
              <li><Link to='/contact'>CONTACT</Link></li>
            </ul>
             </div>
        </div>
        <div className='rightSide'>
          <Link to='/lightning'>LIGHTNING</Link>
          <Link to='/furniture'>FURNITURE</Link>
          <Link to='/accessories'>ACCESSORIES</Link>
          <Link to='/dexxta'>TOOLS</Link>
          <Link to='/aboutus'>ABOUT</Link>
          <Link to='/gallery'>GALLERY</Link>
          <Link to='/contact'>CONTACT</Link>
          <div className='humburgerLink'>
          <button onClick={showLinksNavebar}>
          <ReorderIcon/>
          </button>
          </div>
        </div>
    </div>
  )
}

export default Navbar;