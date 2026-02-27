import React from 'react'
import LegalHero from '../components/sections/legal/LegalHero'
import Privacy from '../components/sections/legal/Privacy'
import Terms from '../components/sections/legal/Terms'
import FAQ from '../components/sections/legal/FAQ'
import CorporateGovernance from '../components/sections/legal/CorporateGovernance'
import ComplianceFramework from '../components/sections/legal/ComplianceFramework'

const Legal = () => {
  return (
    <div>
      <LegalHero />
      <Privacy />
      <Terms />
      {/* <CorporateGovernance />
      <ComplianceFramework /> */}
      <FAQ />
    </div>
  )
}

export default Legal
