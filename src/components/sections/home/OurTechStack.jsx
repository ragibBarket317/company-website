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
    <div className="container py-[60px]">
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
              className="w-40 h-32 flex flex-col items-center justify-center rounded-xl shadow-lg shadow-slate-300 dark:shadow-slate-600 transition dark:text-white"
            >
              <item.icon size={40} />
              <p className="mt-2 font-medium">{item.label}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}

export default OurTechStack
