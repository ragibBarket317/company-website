import { useRef } from 'react'
import gsap from 'gsap'
import { useGSAP } from '@gsap/react'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import { FaBrain, FaCogs, FaProjectDiagram, FaUserTie } from 'react-icons/fa'

gsap.registerPlugin(ScrollTrigger)

const WhyPartnarOurAI = () => {
  const partnerOurAIRef = useRef(null)
  const descriptionRef = useRef(null)
  const headingRef = useRef(null)
  const cardsRef = useRef([])

  useGSAP(
    () => {
      const triggerOptions = {
        trigger: partnerOurAIRef.current,
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
      //         trigger: partnerOurAIRef.current,
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
    { scope: partnerOurAIRef }
  )

  return (
    <div ref={partnerOurAIRef} className="relative py-[40px] md:py-[80px]">
      <div className="circlePosition w-[400px] h-[100px] bg-blue-400 rounded-full absolute z-1 top-[25%] blur-[200px]"></div>
      <div className="w-full h-full flex justify-center items-center">
        <section className=" py-16">
          <div className="container text-center">
            <h2
              ref={headingRef}
              className="text-xl md:text-4xl font-bold text-white mb-4"
            >
              Why Partner With Our AI Engineers
            </h2>
            <p
              ref={descriptionRef}
              className="text-gray-200 text-[14px] md:text-[18px] max-w-3xl mx-auto mb-10"
            >
              We combine deep technical knowledge, proven methodologies, and a
              transparent process to ensure your AI initiative succeeds from
              start to finish.
            </p>

            <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
              {[
                {
                  icon: <FaProjectDiagram />,
                  title: 'Full-Cycle Development',
                  desc: 'End-to-end AI solutions from concept to deployment.',
                },
                {
                  icon: <FaUserTie />,
                  title: 'Industry Expertise',
                  desc: 'AI engineers specialized in multiple business domains.',
                },
                {
                  icon: <FaBrain />,
                  title: 'Research & Innovation',
                  desc: 'We stay ahead by adopting emerging AI technologies.',
                },
                {
                  icon: <FaCogs />,
                  title: 'Agile Delivery',
                  desc: 'Iterative development ensuring speed and flexibility.',
                },
              ].map((item, i) => (
                <div
                  key={i}
                  ref={(el) => (cardsRef.current[i] = el)}
                  className="backdrop-blur-xl bg-white/10 border border-white/20 p-6 hover:bg-white/20 rounded-xl shadow-sm hover:shadow-md"
                >
                  <div className="w-12 h-12 bg-indigo-100 text-indigo-700 flex items-center justify-center rounded-lg text-2xl mb-4 mx-auto">
                    {item.icon}
                  </div>
                  <h3 className="font-semibold text-white text-lg md:text-xl mb-2">
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

export default WhyPartnarOurAI
