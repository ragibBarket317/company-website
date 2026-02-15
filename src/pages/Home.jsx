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
import HeroForSmallScreen from '../components/sections/home/HeroForSmallScreen'
import CapabilitiesSection from '../components/sections/home/CapabilitiesSection'
import PerformanceOverview from '../components/sections/home/PerformanceOverview'
import IndustrySectors from '../components/sections/home/IndustrySectors'

const Home = () => {
  return (
    <div className="overflow-x-hidden">
      <div className="md:hidden">
        <HeroForSmallScreen />
      </div>

      <div className="hidden md:block">
        <Hero />
      </div>

      {/* <Services /> */}
      <CapabilitiesSection />
      <OurStory />
      {/* <SoftwareOverview />
      <OurTechStack /> */}
      <PerformanceOverview />
      <Testimonial />
      {/* <IndustriesServices /> */}
      {/* <IndustrySectors /> */}
      <WhyChooseUs />
      <GetFreeQuote />
    </div>
  )
}

export default Home
