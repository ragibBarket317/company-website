import React from 'react'
import { FaReact, FaVuejs, FaAngular, FaPhp } from 'react-icons/fa'

const OurTechStack = () => {
  const stackData = [
    { icon: FaReact, label: 'React js' },
    { icon: FaVuejs, label: 'Vue.js' },
    { icon: FaAngular, label: 'Angular' },
    { icon: FaPhp, label: 'PHP' },
    { icon: FaReact, label: 'React js' },
    { icon: FaVuejs, label: 'Vue.js' },
    { icon: FaAngular, label: 'Angular' },
    { icon: FaPhp, label: 'PHP' },
    { icon: FaReact, label: 'React js' },
    { icon: FaVuejs, label: 'Vue.js' },
    { icon: FaAngular, label: 'Angular' },
    { icon: FaPhp, label: 'PHP' },
    { icon: FaReact, label: 'React js' },
    { icon: FaVuejs, label: 'Vue.js' },
    { icon: FaAngular, label: 'Angular' },
    { icon: FaPhp, label: 'PHP' },
  ]
  return (
    <div className="container py-[60px] text-white">
      <div className="text-center py-12">
        <h2 className="text-3xl md:text-3xl font-bold dark:text-white">
          Our Tech Stack for Innovative Business Solutions
        </h2>
        <p className="mt-3 text-gray-600 max-w-3xl mx-auto">
          At iTechnolabs, we leverage a cutting-edge tech stack to deliver
          transformative solutions across industries such as healthcare,
          e-commerce, and food delivery. Our tailored technologies enhance
          engagement, optimize operations, and drive innovation.
        </p>

        <div className="mt-8 flex flex-wrap justify-center gap-6">
          {stackData.map((item, i) => (
            <div
              key={i}
              className="w-40 h-32 bg-[#232246]/70 border-[1px] border-[#44446f] flex flex-col items-center justify-center rounded-xl shadow-md shadow-black dark:shadow-slate-600 transition dark:text-white"
            >
              <item.icon size={40} />
              <p className="mt-2 font-medium">{item.label}</p>
            </div>
          ))}
        </div>
      </div>
      <div
        className="backdrop-blur-xl bg-white/10 border border-white/20 
rounded-3xl shadow-xl p-6 
hover:bg-white/20 transition duration-300"
      >
        <h2 className="text-white text-xl font-semibold">Glass Card</h2>
        <p className="text-gray-200 mt-2">
          This is an iPhone-style glassmorphism design.
        </p>
      </div>
      <div className="relative mt-5">
        <div className="absolute inset-0 rounded-3xl bg-white/30 blur-2xl opacity-20"></div>

        <div
          className="relative backdrop-blur-xl bg-white/10 border border-white/20 
  rounded-3xl shadow-lg p-6"
        >
          <h2 className="text-white text-xl font-semibold">Premium Card</h2>
          <p className="text-gray-200">Smooth, soft, and elegant like iOS.</p>
        </div>
      </div>
    </div>
  )
}

export default OurTechStack
