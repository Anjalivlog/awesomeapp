import React from 'react'
import Table from '../assets/7.JPG'
import Candles from '../assets/teracotta.JPG'
import '../styles/HeroSection.css'

function HeroSection() {
  return (
    <div className='hero-container'>
        <img src={Table} alt='phots'/>
        <img src={Candles} alt='photos'/>
    </div>
  )
}

export default HeroSection