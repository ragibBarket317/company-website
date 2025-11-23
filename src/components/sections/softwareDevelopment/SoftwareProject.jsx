import { useRef } from 'react'
import gsap from 'gsap'
import { useGSAP } from '@gsap/react'
import { ScrollTrigger } from 'gsap/ScrollTrigger'

import { FaProjectDiagram, FaUserPlus, FaUsersCog } from 'react-icons/fa'

gsap.registerPlugin(ScrollTrigger)

const SoftwareProject = () => {
  const softwareProjectRef = useRef(null)
  const descriptionRef = useRef(null)
  const headingRef = useRef(null)
  const cardsRef = useRef([])

  useGSAP(
    () => {
      const triggerOptions = {
        trigger: softwareProjectRef.current,
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
          duration: 1.2,
          stagger: 0.15,
          ease: 'power3.out',
          scrollTrigger: {
            trigger: softwareProjectRef.current,
            start: 'top 85%',
            toggleActions: 'restart none none none',
          },
        }
      )
    },
    { scope: softwareProjectRef }
  )
  return (
    <div ref={softwareProjectRef} className="py-[40px] md:py-0 md:h-[100vh]">
      <div className="w-full h-full flex justify-center items-center">
        <section className="container py-16 mx-auto">
          <div className="text-center">
            <h2
              ref={headingRef}
              className="text-xl md:text-4xl font-bold text-white mb-4"
            >
              How We Collaborate on Custom Software Projects
            </h2>
            <p
              ref={descriptionRef}
              className="text-gray-200 text-[14px] md:text-[18px] max-w-3xl mx-auto mb-10"
            >
              Whether you need full outsourcing, a dedicated engineering team,
              or a flexible engagement — our process ensures transparency,
              quality, and efficiency.
            </p>

            <div className="grid md:grid-cols-3 gap-6">
              {[
                {
                  icon: (
                    <FaProjectDiagram className="text-indigo-600 text-3xl" />
                  ),
                  title: 'Full Project Outsourcing',
                  desc: 'We manage your entire software lifecycle, from planning to maintenance — ensuring timely delivery and consistent quality.',
                },
                {
                  icon: <FaUsersCog className="text-indigo-600 text-3xl" />,
                  title: 'Dedicated Dev Teams',
                  desc: 'Hire a long-term development team that works as your extended arm — giving you control and flexibility with expert collaboration.',
                },
                {
                  icon: <FaUserPlus className="text-indigo-600 text-3xl" />,
                  title: 'Team Augmentation',
                  desc: 'Scale your workforce instantly with skilled developers, designers, and QA experts integrated into your existing workflow.',
                },
              ].map((item, i) => (
                <div
                  key={i}
                  ref={(el) => (cardsRef.current[i] = el)}
                  className="backdrop-blur-xl bg-gradient-to-b from-[#15192C] to-[#252b4b] border border-white/20 hover:bg-white/20 rounded-xl p-6 shadow-sm hover:shadow-md text-left"
                >
                  <div className="flex items-center justify-center w-12 h-12 md:w-14 md:h-14 mb-4 rounded-full bg-indigo-50 mx-auto">
                    {item.icon}
                  </div>
                  <h3 className="font-semibold text-white text-lg md:text-xl mb-2 text-center">
                    {item.title}
                  </h3>
                  <p className="text-gray-400 text-[14px] md:text-base text-center">
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

export default SoftwareProject
