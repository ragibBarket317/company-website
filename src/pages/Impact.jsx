import React from 'react'
import ImpactHero from '../components/sections/impact/ImpactHero'
import ProofDelivery from '../components/sections/impact/ProofDelivery'
import SupplyChainCaseStudy from '../components/sections/impact/SupplyChainCaseStudy'
import SupplyMedicineCaseStudy from '../components/sections/impact/SupplyMedicineCaseStudy'
import ImpactClients from '../components/sections/impact/ImpactClients'
import EngineeringFramework from '../components/sections/impact/EngineeringFramework'
import PartnerIntexa from '../components/sections/impact/PartnerIntexa'

const Impact = () => {
  return (
    <div>
      <ImpactHero />
      <ProofDelivery />
      <SupplyChainCaseStudy />
      <SupplyMedicineCaseStudy />
      <ImpactClients />
      {/* <EngineeringFramework /> */}
      <PartnerIntexa />
    </div>
  )
}

export default Impact
