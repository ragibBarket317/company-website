import React, { useRef } from 'react'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import { useGSAP } from '@gsap/react'

gsap.registerPlugin(ScrollTrigger)

const OurStory = () => {
  const storySectionRef = useRef(null)
  const headingRef = useRef(null)
  const textRef = useRef(null)
  const cardsRef = useRef([])

  useGSAP(
    () => {
      const cards = gsap.utils.toArray(cardsRef.current)

      // ⭐ Heading animation (plays every scroll in/out)
      gsap.from(headingRef.current, {
        opacity: 0,
        x: -40,
        duration: 0.8,
        ease: 'power3.out',
        scrollTrigger: {
          trigger: storySectionRef.current,
          start: 'top 80%',
          toggleActions: 'play none none reset',
        },
      })

      // ⭐ Text animation
      gsap.from(textRef.current, {
        opacity: 0,
        y: 40,
        duration: 1,
        ease: 'power3.out',
        delay: 0.2,
        scrollTrigger: {
          trigger: storySectionRef.current,
          start: 'top 80%',
          toggleActions: 'play none none reset',
        },
      })

      // ⭐ Cards animation
      gsap.from(cards, {
        opacity: 0,
        scale: 0.8,
        duration: 0.8,
        stagger: 0.15,
        ease: 'back.out(1.8)',
        delay: 0.3,
        scrollTrigger: {
          trigger: storySectionRef.current,
          start: 'top 80%',
          toggleActions: 'play none none reset', // replay every time
        },
      })
    },
    { scope: storySectionRef }
  )

  return (
    <div
      ref={storySectionRef}
      className="text-white py-[40px] md:py-[80px] dark:bg-dark-bg"
    >
      <div className="container p-6">
        <div className="lg:flex gap-5">
          {/* LEFT SIDE */}
          <div className="w-full lg:w-[50%]">
            <div className="h-full flex flex-col justify-center">
              <div className="space-y-10">
                <h2
                  ref={headingRef}
                  className="text-xl md:text-4xl font-extrabold dark:text-white"
                >
                  Our Story
                </h2>

                <p
                  ref={textRef}
                  className="text-[14px] md:text-[18px] font-body text-white leading-7"
                >
                  Our story began with a simple idea — to create digital
                  solutions that solve real problems and deliver meaningful
                  value. From the beginning, we focused on understanding people,
                  not just projects. This mindset helped us build products that
                  feel intuitive, purposeful, and aligned with our clients’
                  long-term goals. Over the years, we expanded our expertise
                  across web development, mobile apps, AI/ML, cloud systems, and
                  enterprise platforms. Each new challenge strengthened our
                  commitment to innovation and quality. But even as we evolve,
                  our core belief remains unchanged: technology should empower
                  businesses and create better experiences for users.
                </p>
              </div>
            </div>
          </div>

          {/* RIGHT SIDE DESKTOP */}
          <div className="hidden md:block relative w-full lg:w-[50%]">
            <div className="circlePosition w-[400px] h-[100px] bg-blue-500 rounded-full absolute top-[50%] left-[50%] translate-x-[-50%] translate-y-[-50%] blur-[200px]"></div>

            <div className="flex justify-center py-10">
              <div className="relative bg-[#15192C] shadow-lg h-[400px] w-[400px] rounded-xl p-8 flex flex-col gap-6 z-20">
                <div
                  ref={(el) => (cardsRef.current[0] = el)}
                  className="absolute left-[-100px] bg-white shadow-md rounded-lg px-10 py-5 border-l-4 border-blue-500"
                >
                  <h2 className="text-3xl font-bold text-blue-600">800+</h2>
                  <p className="text-gray-800">Successful Implementations</p>
                </div>

                <div
                  ref={(el) => (cardsRef.current[1] = el)}
                  className="absolute top-[38%] right-[60px] bg-white shadow-md rounded-lg px-10 py-5 border-l-4 border-pink-500"
                >
                  <h2 className="text-3xl font-bold text-blue-600">1000+</h2>
                  <p className="text-gray-800">Successful Implementations</p>
                </div>

                <div
                  ref={(el) => (cardsRef.current[2] = el)}
                  className="absolute bottom-[7%] right-[-100px] bg-white shadow-md rounded-lg px-10 py-5 border-l-4 border-green-500"
                >
                  <h2 className="text-3xl font-bold text-blue-600">500+</h2>
                  <p className="text-gray-800">Successful Implementations</p>
                </div>
              </div>
            </div>
          </div>

          {/* MOBILE (No Need Animation For Now) */}
          <div className="md:hidden w-full md:w-[50%]">
            <div className="flex justify-center py-10">
              <div className="relative bg-[#15192C] shadow-lg h-[400px] w-[400px] rounded-xl p-8 flex flex-col gap-6">
                {/* Same cards simplified */}
                <div className="absolute left-2 right-2 bg-white shadow-md rounded-lg px-10 py-5 border-l-4 border-blue-500">
                  <h2 className="text-lg font-bold text-blue-600">800+</h2>
                  <p className="text-gray-800 text-[14px]">
                    Successful Implementations
                  </p>
                </div>
                <div className="absolute top-[38%] left-2 right-2 bg-white shadow-md rounded-lg px-10 py-5 border-l-4 border-pink-500">
                  <h2 className="text-lg font-bold text-blue-600">1000+</h2>
                  <p className="text-gray-800 text-[14px]">
                    Successful Implementations
                  </p>
                </div>
                <div className="absolute bottom-[7%] left-2 right-2 bg-white shadow-md rounded-lg px-10 py-5 border-l-4 border-green-500">
                  <h2 className="text-lg font-bold text-blue-600">500+</h2>
                  <p className="text-gray-800 text-[14px]">
                    Successful Implementations
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default OurStory
