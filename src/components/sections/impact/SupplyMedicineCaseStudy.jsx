import React, { useEffect } from 'react'
import caseStudy2 from '../../../assets/images/caseStudy2.png'
import { Link, useLocation } from 'react-router-dom'
import { MapPin } from 'lucide-react'

const SupplyMedicineCaseStudy = () => {
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
    { label: 'SAFETY ACCURACY', value: '99.99%' },
    { label: 'DAILY ORDERS', value: '15k+' },
    { label: 'UPTIME', value: '99.99%' },
  ]

  return (
    <section
      id="supply-medicine"
      className="relative py-28  text-white overflow-hidden"
    >
      <div className="container mx-auto px-6">
        <div className="grid lg:grid-cols-2 gap-20 items-center">
          {/* LEFT - Content */}
          <div className="space-y-8">
            <div>
              <p className="text-xs tracking-[0.4em] text-cyan-400 uppercase mb-4">
                Case 02
              </p>

              <h2 className="text-3xl md:text-4xl lg:text-5xl font-extrabold leading-tight">
                Revolutionizing Digital <br className="hidden md:block" />
                Medicine Distribution
              </h2>
            </div>

            <p className="text-gray-400 text-[16px] leading-relaxed max-w-xl">
              Helping PharmAid-Rx scale to handle thousands of concurrent
              prescriptions daily. Our secure ledger technology ensures every
              pill dispensed is authenticated, bringing pharmaceutical safety to
              millions across Bangladesh.
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

          {/* RIGHT - Image */}
          {/* <div className="relative">
            <div className="absolute -inset-8 bg-cyan-500/10 blur-3xl rounded-3xl"></div>

            <div className="relative rounded-3xl overflow-hidden border border-white/10">
              <img
                src={caseStudy2}
                alt="Medicine Distribution Case Study"
                className="w-full h-[350px] md:h-[450px] object-cover hover:scale-105 transition duration-700"
              />
            </div>
          </div> */}
          <div className="relative">
            {/* Glow Background */}
            <div className="absolute -inset-8 bg-cyan-500/10 blur-3xl rounded-3xl"></div>

            <div className="relative rounded-3xl overflow-hidden border border-white/10 group">
              {/* Capsule Location Badge */}
              <div className="absolute top-5 left-5 z-20">
                <div
                  className="flex items-center gap-2 px-4 py-1.5 rounded-full 
                      bg-black/60 backdrop-blur-md border border-white/20
                      text-white text-sm font-medium shadow-lg"
                >
                  <MapPin className="w-4 h-4 text-cyan-400" />
                  <span>Dhaka, Bangladesh</span>
                </div>
              </div>

              <img
                src={caseStudy2}
                alt="Medicine Distribution Case Study"
                className="w-full h-[350px] md:h-[450px] object-cover 
                 transition duration-700 group-hover:scale-105"
              />
            </div>
          </div>
        </div>
        {/* CTA Button */}
        <div className="flex justify-center mt-20">
          <Link
            to="/technical-whitepaper"
            className="relative inline-flex items-center justify-center px-10 py-4 text-sm md:text-base font-semibold uppercase tracking-widest rounded-full bg-cyan-500 text-black transition duration-300 hover:bg-cyan-400 shadow-lg shadow-cyan-500/20 hover:shadow-cyan-500/40"
          >
            Technical Whitepaper
          </Link>
        </div>
      </div>
    </section>
  )
}

export default SupplyMedicineCaseStudy
