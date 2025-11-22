import React, { useRef } from 'react'
import {
  FaApple,
  FaAndroid,
  FaReact,
  FaCogs,
  FaMobileAlt,
  FaConnectdevelop,
} from 'react-icons/fa'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import { useGSAP } from '@gsap/react'

gsap.registerPlugin(ScrollTrigger)

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
  const sectionRef = useRef(null)
  const headingRef = useRef(null)
  const paragraphRef = useRef(null)
  const cardsRef = useRef([])

  useGSAP(
    () => {
      ScrollTrigger.refresh()

      const triggerOptions = {
        trigger: sectionRef.current,
        start: 'top 85%',
        toggleActions: 'restart none none none',
      }

      // Heading
      gsap.from(headingRef.current, {
        opacity: 0,
        y: 40,
        duration: 1,
        ease: 'power3.out',
        scrollTrigger: { ...triggerOptions, start: 'top 90%' },
      })

      // Paragraph
      gsap.from(paragraphRef.current, {
        opacity: 0,
        y: 30,
        duration: 1,
        ease: 'power3.out',
        delay: 0.1,
        scrollTrigger: { ...triggerOptions, start: 'top 88%' },
      })

      // Cards
      gsap.from(cardsRef.current.filter(Boolean), {
        opacity: 0,
        x: -50,
        duration: 1.2,
        stagger: 0.15,
        ease: 'power2.out',
        scrollTrigger: {
          trigger: sectionRef.current,
          start: 'top 75%',
          toggleActions: 'restart none none none',
        },
      })
    },
    { scope: sectionRef }
  )

  return (
    <section ref={sectionRef} className="py-[40px] md:py-[80px]">
      <div className="w-full h-full">
        <div className="container">
          <div className="max-w-6xl mx-auto px-6 text-center">
            <h2
              ref={headingRef}
              className="text-xl md:text-4xl font-bold text-white"
            >
              Full-Scale Mobile App Development for Modern Businesses
            </h2>
            <p
              ref={paragraphRef}
              className="mt-4 text-gray-200 max-w-3xl mx-auto text-[14px] md:text-[18px]"
            >
              We go beyond coding — our team focuses on solving real business
              problems with reliable architecture, intuitive UX, and smooth app
              performance. From strategy to launch, we deliver mobile apps that
              make an impact.
            </p>
          </div>

          <div className="mt-10 grid sm:grid-cols-2 lg:grid-cols-3 gap-6 px-6">
            {services.map((service, index) => (
              <div
                key={index}
                // ref={cardsRef}
                className="service-card bg-gray-800/40 border border-white/20 backdrop-blur-xl hover:bg-gray-700/40 shadow-md rounded-xl p-6 text-left hover:shadow-lg transition"
              >
                <div className="mb-4 service-icon">{service.icon}</div>
                <h3 className="font-semibold text-white text-md md:text-lg mb-2">
                  {service.title}
                </h3>
                <p className="text-gray-300 leading-relaxed text-[14px] md:text-[18px]">
                  {service.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}

export default MobileAppServices
