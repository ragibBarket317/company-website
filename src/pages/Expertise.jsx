import React from 'react'
import ExpertiseHero from '../components/sections/expertise/ExpertiseHero'
import Specialized from '../components/sections/expertise/Specialized'
import Details from '../components/sections/expertise/Details'
import ReadyToConnect from '../components/reuseableComponents/ReadyToConnect'

const Expertise = () => {
  return (
    <div>
      <ExpertiseHero />
      <Specialized />
      <Details />
      <ReadyToConnect />
    </div>
  )
}

export default Expertise
