import { useRef } from 'react'
import gsap from 'gsap'
import { useGSAP } from '@gsap/react'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import {
  FaChartLine,
  FaCloudUploadAlt,
  FaGlobe,
  FaIndustry,
  FaLaptopCode,
  FaShieldAlt,
} from 'react-icons/fa'

gsap.registerPlugin(ScrollTrigger)

const WebIndustries = () => {
  const webIndustriesRef = useRef(null)
  const descriptionRef = useRef(null)
  const headingRef = useRef(null)
  const cardsRef = useRef([])

  useGSAP(
    () => {
      cardsRef.current.forEach((card) => {
        gsap.fromTo(
          card,
          {
            opacity: 0,
            y: 40,
            scale: 0.95,
            willChange: 'transform, opacity',
          },
          {
            opacity: 1,
            y: 0,
            scale: 1,
            duration: 1,
            ease: 'power3.out',
            scrollTrigger: {
              trigger: card,
              start: 'top 85%',
              toggleActions: 'restart none none none',
            },
          }
        )
      })
    },
    { scope: webIndustriesRef }
  )

  return (
    <section
      ref={webIndustriesRef}
      className="container py-[40px] md:py-[80px]"
    >
      <h2
        ref={headingRef}
        className="text-xl md:text-4xl font-bold text-white text-center mb-4"
      >
        Industries We Build Web Platforms For
      </h2>
      <p
        ref={descriptionRef}
        className="text-center text-[14px] md:text-[18px] text-gray-200 max-w-3xl mx-auto mb-10"
      >
        We provide full-cycle web development for diverse industries that demand
        scalability, modern design, and security. Our custom-built platforms
        help you connect, engage, and grow your business.
      </p>

      <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {[
          {
            icon: <FaLaptopCode className="text-indigo-600 text-2xl" />,
            title: 'Automotive Web Solutions',
            desc: 'From car listings to booking systems, we build dealer and service platforms that streamline operations and customer engagement.',
          },
          {
            icon: <FaGlobe className="text-indigo-600 text-2xl" />,
            title: 'Telecom Web Platforms',
            desc: 'We create telecom dashboards and customer portals that handle billing, data management, and user support efficiently.',
          },
          {
            icon: <FaShieldAlt className="text-indigo-600 text-2xl" />,
            title: 'Insurance & Finance Portals',
            desc: 'Designing secure, user-friendly portals for managing policies, claims, and account dashboards with data privacy in focus.',
          },
          {
            icon: <FaCloudUploadAlt className="text-indigo-600 text-2xl" />,
            title: 'Aviation & Travel Portals',
            desc: 'Developing booking engines and travel dashboards that ensure seamless user experience and operational control.',
          },
          {
            icon: <FaChartLine className="text-indigo-600 text-2xl" />,
            title: 'OTT & Media Websites',
            desc: 'Creating scalable streaming and subscription-based media platforms with custom content control and analytics.',
          },
          {
            icon: <FaIndustry className="text-indigo-600 text-2xl" />,
            title: 'Enterprise Web Apps',
            desc: 'Powerful web solutions that help enterprises manage workflows, automate tasks, and achieve digital transformation.',
          },
        ].map((item, i) => (
          <div
            key={i}
            ref={(el) => (cardsRef.current[i] = el)}
            className="backdrop-blur-xl bg-white/10 border border-white/20 hover:bg-white/20  rounded-lg p-6 shadow-[0_8px_6px_-1px_rgba(0,0,0,1),0_2px_4px_-1px_rgba(0,0,0,0.1)] hover:shadow-md"
          >
            <div className="mb-3">{item.icon}</div>
            <h3 className="font-semibold text-white text-lg md:text-xl mb-2">
              {item.title}
            </h3>
            <p className="text-gray-400 text-[14px] md:text-base">
              {item.desc}
            </p>
          </div>
        ))}
      </div>
    </section>
  )
}

export default WebIndustries
