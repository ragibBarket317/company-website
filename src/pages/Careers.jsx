import ReadyToConnect from '../components/reuseableComponents/ReadyToConnect'
import ArchitectureRoles from '../components/sections/career/ArchitrctureRoles'
import CareerHero from '../components/sections/career/CareerHero'
import CurrentOpenings from '../components/sections/career/CurrentOpenings'
import EngineeringRoles from '../components/sections/career/EngineeringRoles'
import ExecutiveLeadership from '../components/sections/career/ExecutiveLeadership'
import FAQSection from '../components/sections/career/FAQSection'
import GovernanceRoles from '../components/sections/career/GovernanceRoles'
import HiringProcess from '../components/sections/career/HiringProcess'
import HowWeDeliver from '../components/sections/career/HowWeDeliver'
import ReadySomthingGreat from '../components/sections/career/ReadySomethingGreat'
import GetFreeQuote from '../components/sections/home/GetFreeQuote'

export default function Careers() {
  return (
    <div>
      <CareerHero />
      <HowWeDeliver />
      <CurrentOpenings />
      <EngineeringRoles />
      <ArchitectureRoles />
      <GovernanceRoles />
      <ExecutiveLeadership />
      <HiringProcess />
      <FAQSection />
      {/* <ReadyToConnect /> */}
      <ReadySomthingGreat />
    </div>
  )
}
