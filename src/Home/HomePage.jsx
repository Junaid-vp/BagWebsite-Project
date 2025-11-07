import React from 'react'
import SliderComponent from '../Pages/SliderComponent'
import SecondSection from '../Pages/SecondSection'
import MainSection from '../Pages/MainSection'
import Tote from '../Bag-Components/Tote-Bags/Tote'
import MainTote from '../Bag-Components/Tote-Bags/MainTote'
import MiniNav from '../Navbar-Section/MiniNav'
import MainBag from '../Bag-Components/MainBag'
import SecondSlider from '../Pages/SecondSlider'

function HomePage() {

  return (
    <div data-aos="fade-up"
     data-aos-duration="2000">
      <SliderComponent/>
      <SecondSection/>
      <MainBag/>
      <SecondSlider/>
    </div>
  )
}

export default HomePage
