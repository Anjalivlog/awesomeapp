import React from 'react'
import HeroSection from '../components/HeroSection'
import Family from '../components/Family'
import Cards from '../components/Cards'
import NewProduct from '../components/NewProduct'
import BottomSection from '../components/BottomSection'
//import Footer from '../components/Footer'


function Home() {
  return (
    <div>
      <HeroSection/>
      <Family/>
      <Cards/>
      <NewProduct/>
      <BottomSection/>  
    </div>
  )
}

export default Home