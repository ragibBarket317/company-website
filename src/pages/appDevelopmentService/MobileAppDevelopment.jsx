import React from 'react'
import MobileHero from '../../components/sections/mobileAppDevelopment/MobileHero'
import Services from '../../components/sections/home/Services'
import WhyChooseUs from '../../components/sections/home/WhyChooseUs'
import GetFreeQuote from '../../components/sections/home/GetFreeQuote'
import MobileAppProcess from '../../components/sections/mobileAppDevelopment/MobileAppProcess'
import MobileAppServices from '../../components/sections/mobileAppDevelopment/MobileAppServices'
import MeanStackSection from '../../components/sections/mobileAppDevelopment/MeanStackSection'

const MobileAppDevelopment = () => {
  return (
    <div>
      <MobileHero />
      <Services />
      <MobileAppProcess />
      <MobileAppServices />
      <MeanStackSection />
      <WhyChooseUs />

      <GetFreeQuote />
    </div>
  )
}

export default MobileAppDevelopment
