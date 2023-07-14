import React from 'react'
import Logo from '../assets/Dexxtadesign_HD_Trans.png'
import IndiaLogo from '../assets/indialogo.png'
import { FaFacebookSquare } from 'react-icons/fa'
import { AiFillInstagram } from 'react-icons/ai'
import { BsTwitter } from 'react-icons/bs'
import '../styles/Footer.css'

function Footer() {
  const mailId = 'yadavanjali14041998@gmail.com';  
  const handleIconClick = () => {
    window.open('https://www.instagram.com/dexxta_design/', '_blank');
  };

  return (
    <div className='footer'>
      <div className='secContainer'>
        <div className='logoDiv'>
              <img src={Logo} alt='logo' className='icons'/>
        </div>

        <div className='social-flex'>
          <div className='iconOne'><FaFacebookSquare className='facebook' onClick={handleIconClick}
           style={{ cursor: 'pointer' }} /></div>
          <div className='iconTwo'><AiFillInstagram className='instagram' /></div>
          <div className='iconThree'><BsTwitter   className='twitter'/></div>
        </div>

        <div className='footerLinks'>
          <span className='linkTitle'>
            Contact Us
          </span>
          <span className='phone'>+91-9873826753</span>
          <a href={`mailto:${mailId}`} className='email'>yadavanjali14041998@gmail.com</a>
        </div>  
          <div className='logo-content'>
          <img src={IndiaLogo} alt='indialogo' className='indlogo'/>
          </div>
      </div>
      <hr></hr>
         <div className='sab-footer-below'>
          <div className='sab-footer-copyright'>
            <p>
              @{new Date().getFullYear()} Dexxta_Design
            </p>
          </div>
          <div>
            <a href='/about'><div><p className='condition'>Terms & Conditions</p></div></a>
          </div>
         </div>
    </div>
  )
}

export default Footer
