import React from 'react'
import {
  FaGlobe,
  FaMobileAlt,
  FaCloud,
  FaPaintBrush,
  FaShieldAlt,
  FaMicrochip,
} from 'react-icons/fa'

const Services = () => {
  const servicesData = [
    {
      title: 'Web Development',
      description:
        'Custom, scalable, and responsive websites built with modern technologies to help your business grow online.',
      icon: FaGlobe,
      color: '#2563eb',
      borderColor: '#93c5fd',
    },
    {
      title: 'Mobile App Development',
      description:
        'High-performing iOS and Android applications designed with a focus on user experience and performance.',
      icon: FaMobileAlt,
      color: '#16a34a',
      borderColor: '#86efac',
    },
    {
      title: 'Cloud Solutions',
      description:
        'Cloud migration, deployment, and management services to ensure your business stays efficient and secure.',
      icon: FaCloud,
      color: '#9333ea',
      borderColor: '#d8b4fe',
    },
    {
      title: 'UI/UX Design',
      description:
        'Beautiful, intuitive, and user-centered designs that make your digital products stand out.',
      icon: FaPaintBrush,
      color: '#f59e0b',
      borderColor: '#fcd34d',
    },
    {
      title: 'Cybersecurity',
      description:
        'Protect your business with advanced cybersecurity solutions, risk assessment, and monitoring services.',
      icon: FaShieldAlt,
      color: '#dc2626',
      borderColor: '#fca5a5',
    },
    {
      title: 'IT Consulting',
      description:
        'Expert guidance to streamline your IT strategy, optimize costs, and implement the right technology stack.',
      icon: FaMicrochip,
      color: '#0d9488',
      borderColor: '#5eead4',
    },
  ]
  return (
    <div className="container relative py-[60px] h-[100vh] text-white space-y-10">
      <div className="circlePosition w-[400px] h-[100px] bg-blue-400 rounded-full absolute z-1 top-[25%] blur-[200px]"></div>
      <div className="">
        <div className="space-y-3">
          <h2 className="text-center text-5xl font-bold dark:text-white ">
            Our Digital Services
          </h2>
          <p className="text-center text-white text-[18px]">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Quis
            doloremque et voluptates id architecto dolorem deleniti laborum
            velit quas alias
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-5 mt-10">
          {servicesData.map((data, inex) => (
            <div
              key={inex}
              style={{
                '--border-color': data.borderColor,
                '--border-width': data.borderWidth || '2px',
              }}
              className={`w-full z-10 animate-rotate-border rounded-lg bg-conic/[from_var(--border-angle)] from-border-[#4b486e]/30 via-[var(--border-color)] to-white from-70% via-90% to-100% p-[3px] shadow-lg`}
            >
              <div className="p-8 rounded-lg bg-[#232246]">
                <div
                  className="w-12 h-12 md:w-16 md:h-16 rounded-full"
                  style={{ backgroundColor: data.borderColor }}
                >
                  <div className="h-full flex justify-center items-center">
                    <data.icon
                      className="w-8 h-8 md:w-10 md:h-10"
                      style={{ color: data.color }}
                    />
                  </div>
                </div>

                <div>
                  <h3 className="mt-4 text-xl font-semibold dark:text-white">
                    {data.title}
                  </h3>
                  <p className="mt-2 text-gray-600 dark:text-gray-300">
                    {data.description}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}

export default Services
