import React from 'react'
import {
  FaApple,
  FaAndroid,
  FaReact,
  FaCogs,
  FaMobileAlt,
  FaConnectdevelop,
} from 'react-icons/fa'

const services = [
  {
    icon: <FaMobileAlt className="text-indigo-600 text-4xl" />,
    title: 'App Strategy Consulting',
    description:
      'We help you outline a clear app roadmap — from product vision to tech stack — ensuring your app meets market needs before development starts.',
  },
  {
    icon: <FaApple className="text-black text-4xl" />,
    title: 'Custom App Development',
    description:
      'Our experts design and build powerful mobile apps for iOS and Android, combining sleek design with seamless functionality.',
  },
  {
    icon: <FaAndroid className="text-green-600 text-4xl" />,
    title: 'Enterprise Mobility Solutions',
    description:
      'We create scalable mobile solutions that boost internal workflows, integrate with your existing systems, and drive business growth.',
  },
  {
    icon: <FaCogs className="text-purple-600 text-4xl" />,
    title: 'Product Engineering',
    description:
      'From MVP to full-scale product, we turn your app idea into a robust, maintainable, and high-performing mobile solution.',
  },
  {
    icon: <FaReact className="text-sky-500 text-4xl" />,
    title: 'Integration & APIs',
    description:
      'We build secure, high-performance integrations with APIs and third-party systems — connecting your app to everything it needs.',
  },
  {
    icon: <FaConnectdevelop className="text-blue-500 text-4xl" />,
    title: 'Cross-Platform Development',
    description:
      'Leverage one codebase for iOS and Android with our cross-platform solutions built using React Native and Flutter.',
  },
]

function MobileAppServices() {
  return (
    <section className="container py-[80px]">
      <div className="max-w-6xl mx-auto px-6 text-center">
        <h2 className="text-3xl md:text-4xl font-bold text-white">
          Full-Scale Mobile App Development for Modern Businesses
        </h2>
        <p className="mt-4 text-gray-200 max-w-3xl mx-auto">
          We go beyond coding — our team focuses on solving real business
          problems with reliable architecture, intuitive UX, and smooth app
          performance. From strategy to launch, we deliver mobile apps that make
          an impact.
        </p>
      </div>

      <div className="mt-10 grid sm:grid-cols-2 lg:grid-cols-3 gap-6 px-6">
        {services.map((service, index) => (
          <div
            key={index}
            className="backdrop-blur-xl bg-white/10 border border-white/20 

hover:bg-white/20  shadow-md  rounded-xl p-6 text-left hover:shadow-lg transition"
          >
            <div className="mb-4">{service.icon}</div>
            <h3 className="font-semibold text-white text-lg mb-2">
              {service.title}
            </h3>
            <p className="text-gray-300 text-base leading-relaxed">
              {service.description}
            </p>
          </div>
        ))}
      </div>
    </section>
  )
}

export default MobileAppServices
