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
    { scope: storySectionRef },
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
              <div className="space-y-5">
                <p className="text-[10px] tracking-[0.3em] text-cyan-400 mb-4 uppercase">
                  OUR digital journey
                </p>
                <h2
                  ref={headingRef}
                  className="text-xl md:text-4xl font-extrabold dark:text-white"
                >
                  Our Story
                </h2>

                {/* <p
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
                </p> */}
                <p
                  ref={textRef}
                  className="text-[14px] md:text-[16px] font-body text-white leading-7 text-justify"
                >
                  Our Story Our journey began with a simple vision, to build
                  digital solutions that solve real world problems and deliver
                  meaningful value. From the beginning, we focused on
                  understanding people, not just projects. This human-centered
                  mindset enables us to create products that feel intuitive,
                  purposeful, and aligned with our clients’ long-term ambitions.
                  As technology evolved, so did we. Today, our expertise is not
                  only limited to web development, mobile applications but span
                  artificial intelligence and machine learning, cloud
                  infrastructure, and enterprise platforms. Each challenge we
                  take on strengthens our commitment to innovation, quality, and
                  measurable business impact. Yet one principle continues to
                  guide everything we do. Technology should empower
                  organizations, accelerate growth, and create better
                  experiences for people everywhere. We do not just build
                  technology. We build digital foundations for long term
                  success.
                </p>
              </div>
            </div>
          </div>

          <div className="w-full lg:w-[50%] flex justify-center items-center mt-10 lg:mt-0">
            <div className="relative w-full max-w-lg">
              {/* Glow Background (optional premium look) */}
              <div className="absolute -inset-4 bg-cyan-500/10 blur-3xl rounded-3xl"></div>

              {/* Image Container */}
              <div className="relative rounded-3xl overflow-hidden border border-white/10 shadow-2xl">
                <img
                  src="/story.png"
                  alt="Our Story"
                  className="w-full h-[300px] md:h-[400px] object-cover hover:scale-105 transition duration-700"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default OurStory
