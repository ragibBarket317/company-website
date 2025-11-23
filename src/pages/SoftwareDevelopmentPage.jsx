import React from 'react'
import Hero from '../components/sections/home/Hero'
import WhyChooseUs from '../components/sections/home/WhyChooseUs'
import GetFreeQuote from '../components/sections/home/GetFreeQuote'
import Lottie from 'lottie-react'
import software from '../assets/animation/Software.json'
import {
  FaCode,
  FaUniversity,
  FaHeartbeat,
  FaShoppingCart,
  FaCar,
  FaSatelliteDish,
  FaProjectDiagram,
  FaUsersCog,
  FaUserPlus,
} from 'react-icons/fa'
import SoftwareHero from '../components/sections/softwareDevelopment/SoftwareHero'
import SoftwareHeroSmallScreen from '../components/sections/softwareDevelopment/SoftwareHeroSmallScreen'
import SoftwareSolution from '../components/sections/softwareDevelopment/SoftwareSolution'
import SoftwareProject from '../components/sections/softwareDevelopment/SoftwareProject'

export default function SoftwareDevelopmentPage() {
  return (
    <div>
      <div className="md:hidden">
        <SoftwareHeroSmallScreen />
      </div>

      <div className="hidden md:block">
        <SoftwareHero />
      </div>

      <div className="pb-[80px] text-gray-200">
        {/* --- Section 1: Capabilities --- */}
        <SoftwareSolution />
        {/* --- Section 2: Work Process --- */}
        <SoftwareProject />
        {/* --- Section 3: Why Choose Us --- */}
        <section className="py-[40px] md:py-[80px]">
          <div className="container">
            <h2 className="text-xl md:text-4xl font-bold text-white text-center mb-4">
              Why Choose Intexa as Your Development Partner
            </h2>
            <p className="text-center text-gray-200 text-[14px] md:text-[18px] max-w-3xl mx-auto mb-10">
              We’re more than developers — we’re your digital partners focused
              on building innovative, transparent, and long-term software
              solutions.
            </p>

            <div className="grid md:grid-cols-2 gap-8 items-center">
              <div className="space-y-6">
                {[
                  {
                    num: '1',
                    title: 'High-Quality Delivery',
                    desc: 'We maintain complete transparency throughout the project and deliver software that meets your expectations and beyond.',
                  },
                  {
                    num: '2',
                    title: 'Faster Time-to-Market',
                    desc: 'Our agile processes and experienced developers ensure your product reaches users faster without compromising quality.',
                  },
                  {
                    num: '3',
                    title: 'Modern Tech Stack',
                    desc: 'We utilize the latest frameworks, libraries, and tools for performance-driven and scalable applications.',
                  },
                ].map((item) => (
                  <div key={item.num} className="flex items-start space-x-4">
                    <div className="flex-shrink-0 w-8 h-8 flex items-center justify-center rounded-full bg-indigo-100 text-indigo-700 font-bold">
                      {item.num}
                    </div>
                    <div>
                      <h4 className="font-semibold text-white text-lg md:text-xl">
                        {item.title}
                      </h4>
                      <p className="text-[14px] text-lg text-gray-400">
                        {item.desc}
                      </p>
                    </div>
                  </div>
                ))}
              </div>

              <div className="flex justify-center">
                <Lottie
                  animationData={software}
                  loop
                  autoplay
                  className="w-full lg:w-[600px] h-full p-5"
                />
              </div>
            </div>
          </div>
        </section>
        {/* --- Section 4: Solutions --- */}
        <section className="container py-[40px]  md:py-[80px]">
          <div className="text-center">
            <h2 className="text-xl md:text-4xl max-w-3xl mx-auto font-bold text-white mb-6">
              We Deliver Tailored Software Solutions for Every Business Level
            </h2>
            <p className="text-center text-gray-400 text-[14px] md:text-[18px] max-w-3xl mx-auto mb-10">
              We’re more than developers — we’re your digital partners focused
              on building innovative, transparent, and long-term software
              solutions.
            </p>
            <div className="grid md:grid-cols-3 gap-6 mt-10">
              {[
                {
                  num: '01',
                  color: 'text-blue-600 border-blue-600',
                  title: 'Enterprise Software',
                  desc: 'Build scalable systems that unify your company’s data, boost collaboration, and improve visibility.',
                },
                {
                  num: '02',
                  color: 'text-green-600 border-green-600',
                  title: 'Departmental Tools',
                  desc: 'Custom solutions that streamline daily operations for departments like HR, sales, or logistics.',
                },
                {
                  num: '03',
                  color: 'text-yellow-500 border-yellow-500',
                  title: 'Process Automation',
                  desc: 'Automate repetitive workflows, minimize human error, and enhance productivity through smart tools.',
                },
              ].map((item) => (
                <div key={item.num} className="text-left">
                  <div
                    className={`text-xl md:text-2xl font-bold mb-2 ${item.color}`}
                  >
                    {item.num}
                  </div>
                  <div
                    className={`border-t-4 ${item.color}  rounded-lg shadow-2xl p-6 hover:shadow-md transition`}
                  >
                    <h3 className="font-semibold text-white text-lg md:text-xl mb-2">
                      {item.title}
                    </h3>
                    <p className="text-gray-400 text-[14px] md:text-base leading-relaxed">
                      {item.desc}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>
        <WhyChooseUs />
        <GetFreeQuote />
      </div>
    </div>
  )
}
