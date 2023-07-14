import React from 'react'
import Members from '../assets/family.jpeg'
import '../styles/Family.css'

function Family() {
  return (
    <div className='family-container'>
          <div className='family-together'>
             <a href='/aboutus'><img src={Members} alt='family' className='family-image'/></a>
          </div>         
          <div className='family-content'>
            <h1>
                Fusing form and function into forever pieces for your home… 
            </h1>
            <p className='family-contents'>Daniel and Sarah Bullen-Webb design and handcraft one-of-a-kind products 
             using a combination of sustainably sourced wood, resin, acrylic, glass 
             and metal from their workshop on the border of West Sussex and Surrey. 
            </p>
          </div>
    </div>
  )
}

export default Family