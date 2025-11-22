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
import MobileHeroForSmallScreen from '../../components/sections/mobileAppDevelopment/MobileHeroForSmallScreen'

const MobileAppDevelopment = () => {
  return (
    <div>
      <div className="md:hidden">
        <MobileHeroForSmallScreen />
      </div>

      <div className="hidden md:block">
        <MobileHero />
      </div>

      <div className="relative z-20 ">
        <Services />
        <MobileAppProcess />
        <MobileAppServices />
        <MeanStackSection />
        <WhyChooseUs />
        <IndustriesServices />
        <MobileAppSolutions />
        <GetFreeQuote />
      </div>
    </div>
  )
}

export default MobileAppDevelopment
