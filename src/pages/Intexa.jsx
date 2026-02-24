import React from 'react'
import FounderPerspective from '../components/sections/about/FounderPerspective'
import AboutHero from '../components/sections/about/AboutHero'
import GlobalHeadquarters from '../components/sections/about/GlobalHeadquarters'
import WorkCulture from '../components/sections/about/WorkCulture'
import DevelopmentCulture from '../components/sections/about/DevelopmentCentre'
import ReadyToConnect from '../components/reuseableComponents/ReadyToConnect'
import GlobalVision from '../components/sections/about/GlobalVision'

const Intexa = () => {
  return (
    <div>
      <AboutHero />
      <FounderPerspective />
      <GlobalVision />
      <GlobalHeadquarters />
      <DevelopmentCulture />
      <WorkCulture />
      <ReadyToConnect />
    </div>
  )
}

export default Intexa
