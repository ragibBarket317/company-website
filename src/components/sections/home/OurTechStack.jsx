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
    <div className="relative container h-[80vh] text-white">
      <div className="circlePosition w-[400px] h-[100px] bg-blue-400 rounded-full absolute z-1 top-[25%] blur-[200px]"></div>
      <div className="h-full w-full flex justify-center items-center text-center">
        <div>
          <h2 className="text-3xl md:text-5xl font-bold dark:text-white">
            Our Tech Stack for Innovative Business Solutions
          </h2>
          <p className="mt-3 font-body text-gray-300 text-[18px] max-w-3xl mx-auto">
            we leverage a cutting-edge tech stack to deliver transformative
            solutions across industries such as healthcare, e-commerce, and food
            delivery. Our tailored technologies enhance engagement, optimize
            operations, and drive innovation.
          </p>

          <div className="mt-8 flex flex-wrap justify-center gap-6">
            {stackData.map((item, i) => (
              <div
                key={i}
                className="w-40 h-32 backdrop-blur-xl bg-white/10 border border-white/20 
 p-6 
hover:bg-white/20  duration-300 flex flex-col items-center justify-center rounded-xl shadow-md shadow-black  transition "
              >
                <item.icon size={40} />
                <p className="mt-2 font-medium">{item.label}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}

export default OurTechStack
