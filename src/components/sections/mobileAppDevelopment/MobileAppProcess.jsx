import React, { useRef } from 'react'
import { FaClipboard } from 'react-icons/fa'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import { useGSAP } from '@gsap/react'

gsap.registerPlugin(ScrollTrigger)

const steps = [
  { id: 1, title: 'Discovery & Consultation' },
  { id: 2, title: 'Wireframing & Prototyping' },
  { id: 3, title: 'UI/UX Design' },
  { id: 4, title: 'Development (Frontend + Backend)' },
  { id: 5, title: 'Testing & QA' },
  { id: 6, title: 'Launch & Deployment' },
  { id: 7, title: 'Post-Launch Support' },
]

function MobileAppProcess() {
  const sectionRef = useRef(null)
  const stepsRef = useRef([])
  const cardRef = useRef(null)

  useGSAP(() => {
    gsap.from(sectionRef.current, {
      opacity: 0,
      y: 60,
      duration: 1.2,
      ease: 'power3.out',
      scrollTrigger: {
        trigger: sectionRef.current,
        start: 'top 80%',
        toggleActions: 'restart none none none',
      },
    })

    // Steps stagger animation
    gsap.from(stepsRef.current, {
      opacity: 0,
      x: -50,
      duration: 0.8,
      stagger: 0.15,
      ease: 'power2.out',
      scrollTrigger: {
        trigger: sectionRef.current,
        start: 'top 70%',
        toggleActions: 'restart none none none',
      },
    })

    // Right Card Animation
    gsap.from(cardRef.current, {
      opacity: 0,
      scale: 0.9,
      y: 40,
      duration: 1,
      ease: 'power3.out',
      scrollTrigger: {
        trigger: cardRef.current,
        start: 'top 80%',
        toggleActions: 'restart none none none',
      },
    })
  }, [])

  return (
    <section ref={sectionRef} className="container py-[40px] md:py-[80px]">
      <div className="max-w-6xl mx-auto px-6 text-center">
        <h2 className="text-xl md:text-4xl font-bold text-white">
          Our Mobile App Development Process — From Idea to Launch, Done Right
        </h2>
        <p className="mt-4 text-gray-200 max-w-3xl mx-auto text-[14px] md:text-[18px]">
          We follow a proven mobile app development process that keeps you
          involved at every step. No guesswork, no jargon — just a clear,
          structured journey from first call to final launch. Here’s how we
          bring your app idea to life:
        </p>
      </div>

      <div className="mt-10 grid md:grid-cols-2 gap-6 px-6">
        {/* Left Section */}
        <div className="bg-[#10112D] text-white rounded-lg p-4 md:p-8 flex flex-col justify-center space-y-4">
          {steps.map((step, idx) => (
            <div
              key={step.id}
              ref={(el) => (stepsRef.current[idx] = el)}
              className="flex items-start space-x-4"
            >
              <div className="flex-shrink-0 w-6 h-6 bg-white text-blue-700 font-bold rounded-full flex items-center justify-center">
                {step.id}
              </div>
              <p className="font-medium text-[14px] md:text-base">
                {step.title}
              </p>
            </div>
          ))}
        </div>

        {/* Right Section */}
        <div
          ref={cardRef}
          className="border border-gray-300 rounded-lg p-5 md:p-10 flex flex-col items-start"
        >
          <div className="bg-blue-700 text-white p-4 rounded-xl mb-6">
            <FaClipboard className="w-5 h-5" />
          </div>
          <h3 className="text-lg md:text-xl font-semibold text-white mb-3">
            Discovery & Consultation
          </h3>
          <p className="text-gray-400 leading-relaxed text-[14px] md:text-[18px]">
            The process begins with learning about goals, users, and challenges.
            This phase includes ideation, market research, and feature mapping —
            setting the foundation for your app’s success.
          </p>
        </div>
      </div>
    </section>
  )
}

export default MobileAppProcess
