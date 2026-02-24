import { FaPhoneAlt, FaEnvelope, FaFlagUsa } from 'react-icons/fa'
import { MdOutlineEmail } from 'react-icons/md'
import { FaCanadianMapleLeaf } from 'react-icons/fa6'
import GetFreeQuote from '../components/sections/home/GetFreeQuote'
import { BsFlagFill } from 'react-icons/bs'
import ContactHero from '../components/sections/contact/ContactHero'
import SupportSection from '../components/sections/contact/SupportSection'
import StrategicHubsPortal from '../components/sections/career/StrategicHubsPortal'
import StrategicNetwork from '../components/sections/contact/StrategicNetwork'

export default function Contact() {
  return (
    <div className="">
      <ContactHero />
      <SupportSection />
      <StrategicNetwork />
      <StrategicHubsPortal />
    </div>
  )
}
