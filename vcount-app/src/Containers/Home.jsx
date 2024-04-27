import React from 'react'
import Brands from '../Components/Home/Brands'
import HeroSection from '../Components/Home/HeroSection'
import FirstSection from '../Components/Home/Home'
import Services from '../Components/Home/Services'
import About from '../Components/Home/About'

function Home() {
  return (
    <div>
      <FirstSection/>
      <Services/>
      <About/>
      <HeroSection/>
      <Brands id='avis'/>
    </div>
  )
}

export default Home
