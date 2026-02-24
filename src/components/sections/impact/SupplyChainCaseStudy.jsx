import React, { useEffect } from 'react'
import caseStudy1 from '../../../assets/images/caseStudy1.png'
import { useLocation } from 'react-router-dom'

const SupplyChainCaseStudy = () => {
  const location = useLocation()

  useEffect(() => {
    if (location.hash) {
      const element = document.querySelector(location.hash)
      if (element) {
        element.scrollIntoView({ behavior: 'smooth' })
      }
    }
  }, [location])

  const stats = [
    { label: 'FLEET EFFICIENCY', value: '+22%' },
    { label: 'ANNUAL REVENUE', value: '$100M' },
    { label: 'NODES CONNECTED', value: '1.2k' },
  ]

  return (
    <section
      id="supply-chain"
      className="relative pt-10 pb-20 text-white overflow-hidden"
    >
      <div className="container mx-auto px-6">
        <div className="grid lg:grid-cols-2 gap-20 items-center">
          {/* Left - Image */}
          <div className="relative">
            {/* Glow Background */}
            <div className="absolute -inset-8 bg-cyan-500/10 blur-3xl rounded-3xl"></div>

            <div className="relative rounded-3xl overflow-hidden border border-white/10 ">
              <img
                src={caseStudy1}
                alt="Medicine Distribution Case Study"
                className="w-full h-[350px] md:h-[450px] object-cover hover:scale-105 transition duration-700"
              />
            </div>
          </div>
          {/* Right - Content */}
          <div className="space-y-8">
            <div>
              <p className="text-xs tracking-[0.4em] text-cyan-400 uppercase mb-4">
                Study 01
              </p>

              <h2 className="text-3xl md:text-4xl lg:text-5xl font-extrabold leading-tight">
                Streamlining Trans-Continental{' '}
                <br className="hidden md:block" />
                Supply Chains
              </h2>
            </div>

            <p className="text-gray-400 text-[16px] leading-relaxed max-w-xl">
              Intexa provided the backbone for Worldwide Logistic's fleet
              management, optimizing routes across the vast Canadian wilderness.
              By integrating satellite tracking with Intexa's AI layer, we
              reduced fuel overhead by 22% for their 500+ heavy-duty fleet.
            </p>

            {/* Stats Row */}
            <div className="grid grid-cols-3 gap-6 pt-6">
              {stats.map((stat, index) => (
                <div
                  key={index}
                  className="bg-white/5 backdrop-blur-md border border-white/10 rounded-2xl p-6 text-center hover:bg-white/10 transition duration-300"
                >
                  <h3 className="text-2xl md:text-3xl font-bold text-cyan-400">
                    {stat.value}
                  </h3>
                  <p className="text-[10px] md:text-xs tracking-widest mt-2 text-gray-400 uppercase">
                    {stat.label}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default SupplyChainCaseStudy
