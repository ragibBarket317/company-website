import { useRef } from 'react'
import gsap from 'gsap'
import { useGSAP } from '@gsap/react'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import { FaDatabase, FaServer, FaShieldAlt, FaUsers } from 'react-icons/fa'

gsap.registerPlugin(ScrollTrigger)

const PracticalAISolutions = () => {
  const practicalAISolutionRef = useRef(null)
  const descriptionRef = useRef(null)
  const headingRef = useRef(null)
  const cardsRef = useRef([])

  useGSAP(
    () => {
      const triggerOptions = {
        trigger: practicalAISolutionRef.current,
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

      //   gsap.fromTo(
      //     cardsRef.current,
      //     {
      //       opacity: 0,
      //       y: 40,
      //       scale: 0.95,
      //       willChange: 'transform, opacity',
      //     },
      //     {
      //       opacity: 1,
      //       y: 0,
      //       scale: 1,
      //       duration: 1.2,
      //       stagger: 0.15,
      //       ease: 'power3.out',
      //       scrollTrigger: {
      //         trigger: practicalAISolutionRef.current,
      //         start: 'top 85%',
      //         toggleActions: 'restart none none none',
      //       },
      //     }
      //   )
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
    { scope: practicalAISolutionRef }
  )
  return (
    <div
      ref={practicalAISolutionRef}
      className="relative py-[14px] md:py-[80px]"
    >
      <div className="circlePosition w-[400px] h-[150px] bg-blue-400 rounded-full absolute z-1 top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 blur-[200px]"></div>
      <div className="w-full h-full flex justify-center items-center">
        <section className=" py-16">
          <div className="container mx-auto text-center">
            <h2
              ref={headingRef}
              className="text-xl md:text-4xl font-bold text-white mb-4"
            >
              Practical AI Solutions Businesses Use Every Day
            </h2>
            <p
              ref={descriptionRef}
              className="text-gray-200 text-[14px] md:text-[18px] max-w-3xl mx-auto mb-10"
            >
              We design scalable AI products that seamlessly integrate with your
              operations, enhancing productivity, speed, and customer
              experience.
            </p>

            <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
              {[
                {
                  icon: <FaUsers />,
                  title: 'AI Chatbots',
                  desc: 'Enhance customer support with 24/7 intelligent chat systems.',
                },
                {
                  icon: <FaServer />,
                  title: 'Data Pipelines',
                  desc: 'Automate data collection, processing, and model deployment.',
                },
                {
                  icon: <FaShieldAlt />,
                  title: 'Fraud Detection',
                  desc: 'Detect anomalies and prevent financial or security breaches.',
                },
                {
                  icon: <FaDatabase />,
                  title: 'AI-Powered Analytics',
                  desc: 'Transform data into actionable insights in real time.',
                },
              ].map((item, i) => (
                <div
                  key={i}
                  ref={(el) => (cardsRef.current[i] = el)}
                  className="backdrop-blur-xl bg-white/10 border border-white/20 p-6 hover:bg-white/20 rounded-xl shadow-sm hover:shadow-md"
                >
                  <div className="w-10 h-10 bg-indigo-600 text-white flex items-center justify-center rounded-md text-lg mb-3 mx-auto">
                    {item.icon}
                  </div>
                  <h3 className="font-semibold text-white text-lg md:text-xl mb-1">
                    {item.title}
                  </h3>
                  <p className="text-gray-400 text-[14px] md:text-base">
                    {item.desc}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>
      </div>
    </div>
  )
}

export default PracticalAISolutions
