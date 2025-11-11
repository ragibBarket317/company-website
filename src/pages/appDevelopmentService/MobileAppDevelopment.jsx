import React from 'react'
import MobileHero from '../../components/sections/mobileAppDevelopment/MobileHero'
import Services from '../../components/sections/home/Services'
import WhyChooseUs from '../../components/sections/home/WhyChooseUs'
import GetFreeQuote from '../../components/sections/home/GetFreeQuote'
import MobileAppProcess from '../../components/sections/mobileAppDevelopment/MobileAppProcess'
import MobileAppServices from '../../components/sections/mobileAppDevelopment/MobileAppServices'
import MeanStackSection from '../../components/sections/mobileAppDevelopment/MeanStackSection'
import IndustriesServices from '../../components/sections/home/IndustriesServices'
import MobileAppSolutions from '../../components/sections/mobileAppDevelopment/MobileAppSolutions'

const MobileAppDevelopment = () => {
  return (
    <div>
      <MobileHero />
      <Services />
      <MobileAppProcess />
      <MobileAppServices />
      <MeanStackSection />
      <WhyChooseUs />
      <IndustriesServices />
      <MobileAppSolutions />
      <GetFreeQuote />
    </div>
  )
}

export default MobileAppDevelopment
