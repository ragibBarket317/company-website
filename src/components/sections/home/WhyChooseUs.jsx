import React, { useRef } from 'react'
import { useGSAP } from '@gsap/react'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
gsap.registerPlugin(ScrollTrigger)

import Lottie from 'lottie-react'
import meeting from '../../../assets/animation/Meeting.json'

const WhyChooseUs = () => {
  const sectionRef = useRef(null)
  const headingRef = useRef(null)
  const paragraphRef = useRef(null)
  const lottieRef = useRef(null)

  useGSAP(
    () => {
      const q = gsap.utils.selector(sectionRef)

      const triggerOptions = {
        trigger: sectionRef.current,
        start: 'top 85%',
        toggleActions: 'restart none none none', // replay every re-entry
        // markers: true,
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

      // Left 4 Cards
      gsap.from(q('.why-card'), {
        opacity: 0,
        y: 80,
        stagger: 0.15,
        duration: 0.9,
        ease: 'power3.out',
        delay: 0.3,
        scrollTrigger: {
          trigger: sectionRef.current,
          start: 'top 70%',
          toggleActions: 'restart none none none',
        },
      })
    },
    { scope: sectionRef }
  )

  return (
    <div ref={sectionRef} className="py-[40px] md:py-[80px]">
      <div className="w-full h-full flex justify-center items-center">
        <div className="container">
          <h2
            ref={headingRef}
            className="text-center text-xl md:text-4xl font-bold text-white"
          >
            Why Choose for Digital Solutions?
          </h2>

          <p
            ref={paragraphRef}
            className="text-center font-body text-[14px] md:text-[18px] text-gray-200 mt-3 max-w-4xl mx-auto"
          >
            delivers exceptional AI applications and IT services across multiple
            industry sectors, empowering start-ups, scale-ups, IT staff
            agencies, and large enterprises to fulfill their digital
            transformation goals.
          </p>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-5 mt-10 items-start dark:text-white">
            {/* Left Side Cards */}
            <div className="flex flex-col justify-center lg:h-[500px]">
              <div className="p-0 md:p-5 grid grid-cols-1 md:grid-cols-2 gap-5">
                <div className="why-card px-3 py-6 text-white shadow-[0_8px_6px_-1px_rgba(0,0,0,1),0_2px_4px_-1px_rgba(0,0,0,0.1)] rounded-2xl">
                  <div className="text-xl font-bold bg-blue-950 text-blue-300 rounded-full p-2 w-10 h-10 mb-2">
                    01
                  </div>
                  <h4 className="text-md font-head font-semibold mb-2">
                    Less Time to Market
                  </h4>
                  <p className="text-[14px] md:text-base">
                    Our development approach is such that it will take no time
                    for your app to hit the market.
                  </p>
                </div>

                <div className="why-card px-3 py-6 text-white shadow-[0_8px_6px_-1px_rgba(0,0,0,1),0_2px_4px_-1px_rgba(0,0,0,0.1)] rounded-2xl">
                  <div className="text-xl font-bold bg-red-700 text-red-300 rounded-full p-2 w-10 h-10 mb-2">
                    02
                  </div>
                  <h4 className="text-md font-semibold mb-2">
                    Dedicated Development
                  </h4>
                  <p className="text-[14px] md:text-base">
                    We build a cross-functional team fully devoted to your
                    success.
                  </p>
                </div>

                <div className="why-card px-3 py-6 text-white shadow-[0_8px_6px_-1px_rgba(0,0,0,1),0_2px_4px_-1px_rgba(0,0,0,0.1)] rounded-2xl">
                  <div className="text-xl font-bold bg-violet-700 text-violet-300 rounded-full p-2 w-10 h-10 mb-2">
                    03
                  </div>
                  <h4 className="text-md font-semibold mb-2">
                    Robust Development
                  </h4>
                  <p className="text-[14px] md:text-base">
                    We ensure secure, scalable and rock-solid app development.
                  </p>
                </div>

                <div className="why-card px-3 py-6 text-white shadow-[0_8px_6px_-1px_rgba(0,0,0,1),0_2px_4px_-1px_rgba(0,0,0,0.1)] rounded-2xl">
                  <div className="text-xl font-bold bg-green-950 text-green-300 rounded-full p-2 w-10 h-10 mb-2">
                    04
                  </div>
                  <h4 className="text-md font-semibold mb-2">
                    Less Time to Market
                  </h4>
                  <p className="text-[14px] md:text-base">
                    Our fast development ensures your product reaches users
                    quickly.
                  </p>
                </div>
              </div>
            </div>

            {/* Lottie Side */}
            <div ref={lottieRef} className="relative p-5">
              <div className="flex items-center justify-center h-full">
                <div className="hidden dark:block circlePosition w-[400px] h-[200px] bg-[#eb26fd] rounded-full absolute z-1 top-[50%] left-[50%] translate-x-[-50%] translate-y-[-50%] blur-[200px]"></div>

                <Lottie
                  animationData={meeting}
                  loop
                  autoplay
                  className="w-full h-full lg:h-[600px]"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default WhyChooseUs
