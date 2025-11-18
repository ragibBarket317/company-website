import React from 'react'
import Hero from '../components/sections/home/Hero'
import OurStory from '../components/sections/home/OurStory'
import Services from '../components/sections/home/Services'
import GetFreeQuote from '../components/sections/home/GetFreeQuote'
import OurTechStack from '../components/sections/home/OurTechStack'
import Testimonial from '../components/sections/home/Testimonial'
import IndustriesServices from '../components/sections/home/IndustriesServices'
import WhyChooseUs from '../components/sections/home/WhyChooseUs'
import SoftwareOverview from '../components/sections/home/SoftwareOverview'

const Home = () => {
  return (
    <div className="overflow-x-hidden">
      <Hero />
      <Services />
      <OurStory />
      <SoftwareOverview />
      <OurTechStack />
      <Testimonial />
      <IndustriesServices />
      <WhyChooseUs />
      <GetFreeQuote />
    </div>
  )
}

export default Home
