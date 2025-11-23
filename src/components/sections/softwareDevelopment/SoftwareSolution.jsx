import { useRef } from 'react'
import gsap from 'gsap'
import { useGSAP } from '@gsap/react'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import {
  FaCar,
  FaCode,
  FaHeartbeat,
  FaSatelliteDish,
  FaShoppingCart,
  FaUniversity,
} from 'react-icons/fa'

gsap.registerPlugin(ScrollTrigger)

const SoftwareSolution = () => {
  const softwareSolutionRef = useRef(null)
  const descriptionRef = useRef(null)
  const headingRef = useRef(null)
  const cardsRef = useRef([])

  useGSAP(
    () => {
      const triggerOptions = {
        trigger: softwareSolutionRef.current,
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
      gsap.from(descriptionRef.current, {
        opacity: 0,
        y: 30,
        duration: 1,
        ease: 'power3.out',
        delay: 0.1,
        scrollTrigger: { ...triggerOptions, start: 'top 88%' },
      })

      gsap.fromTo(
        cardsRef.current,
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
          stagger: 0.15,
          ease: 'power3.out',
          scrollTrigger: {
            trigger: softwareSolutionRef.current,
            start: 'top 85%',
            toggleActions: 'restart none none none',
          },
        }
      )
    },
    { scope: softwareSolutionRef }
  )
  return (
    <div>
      <div
        ref={softwareSolutionRef}
        className="w-full h-full flex justify-center items-center"
      >
        <section className="container py-16 mx-auto">
          <h2
            ref={headingRef}
            className="text-xl md:text-4xl font-bold text-white text-center mb-4"
          >
            Capabilities to Build Diverse Software Solutions
          </h2>
          <p
            ref={descriptionRef}
            className="text-center text-gray-200 text-[14px] md:text-[18px] max-w-3xl mx-auto mb-10"
          >
            As a full-cycle development company, our expert engineers design,
            develop, and scale digital solutions tailored to different
            industries and business needs.
          </p>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              {
                icon: <FaCode className="text-indigo-600 text-3xl mb-3" />,
                title: 'Custom Software Development',
                desc: 'We handle complete development from concept to deployment — delivering secure and scalable applications for any business domain.',
              },
              {
                icon: (
                  <FaUniversity className="text-indigo-600 text-3xl mb-3" />
                ),
                title: 'Finance & Banking Solutions',
                desc: 'We create reliable financial apps and platforms built to ensure compliance, speed, and top-grade security for transactions.',
              },
              {
                icon: <FaHeartbeat className="text-indigo-600 text-3xl mb-3" />,
                title: 'Healthcare Applications',
                desc: 'Our healthcare software solutions enhance care delivery, improve patient data management, and maintain HIPAA compliance.',
              },
              {
                icon: (
                  <FaShoppingCart className="text-indigo-600 text-3xl mb-3" />
                ),
                title: 'eCommerce Platforms',
                desc: 'From product catalogs to payment integrations, we craft online shopping experiences optimized for conversions and performance.',
              },
              {
                icon: <FaCar className="text-indigo-600 text-3xl mb-3" />,
                title: 'Automotive Software',
                desc: 'We build smart solutions for vehicle tracking, diagnostics, and automation to streamline operations in the automotive sector.',
              },
              {
                icon: (
                  <FaSatelliteDish className="text-indigo-600 text-3xl mb-3" />
                ),
                title: 'Telecom Systems',
                desc: 'Custom-built platforms that simplify billing, support automation, and improve customer communication efficiency.',
              },
            ].map((item, i) => (
              <div
                key={i}
                ref={(el) => (cardsRef.current[i] = el)}
                className="backdrop-blur-xl bg-white/10 border border-white/20 hover:bg-white/20 rounded-xl p-6 shadow-sm hover:shadow-md"
              >
                {item.icon}
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
      </div>
    </div>
  )
}

export default SoftwareSolution
