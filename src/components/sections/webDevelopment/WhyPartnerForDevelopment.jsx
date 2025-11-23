import { useRef } from 'react'
import gsap from 'gsap'
import { useGSAP } from '@gsap/react'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import {
  FaChartLine,
  FaCogs,
  FaComments,
  FaDatabase,
  FaSyncAlt,
  FaUsers,
} from 'react-icons/fa'

gsap.registerPlugin(ScrollTrigger)

const WhyPartnerForDevelopment = () => {
  const whyPartnerDevRef = useRef(null)
  const descriptionRef = useRef(null)
  const headingRef = useRef(null)
  const cardsRef = useRef([])

  useGSAP(
    () => {
      const triggerOptions = {
        trigger: whyPartnerDevRef.current,
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

      //   cardsRef.current.forEach((card) => {
      //     gsap.fromTo(
      //       card,
      //       {
      //         opacity: 0,
      //         y: 40,
      //         scale: 0.95,
      //         willChange: 'transform, opacity',
      //       },
      //       {
      //         opacity: 1,
      //         y: 0,
      //         scale: 1,
      //         duration: 1,
      //         ease: 'power3.out',
      //         scrollTrigger: {
      //           trigger: card,
      //           start: 'top 85%',
      //           toggleActions: 'restart none none none',
      //         },
      //       }
      //     )
      //   })
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
            trigger: whyPartnerDevRef.current,
            start: 'top 85%',
            toggleActions: 'restart none none none',
          },
        }
      )
    },
    { scope: whyPartnerDevRef }
  )
  return (
    <div
      ref={whyPartnerDevRef}
      className="relative py-[40px] md:py-0 md:h-[100vh]"
    >
      <div className="circlePosition w-[400px] h-[100px] bg-blue-400 rounded-full absolute z-1 top-[25%] blur-[200px]"></div>
      <div className="w-full h-full flex justify-center items-center">
        <div>
          <section className="container py-16">
            <h2
              ref={headingRef}
              className="text-xl md:text-4xl font-bold text-white text-center mb-4"
            >
              Why Partner With Intexa for Development
            </h2>
            <p
              ref={descriptionRef}
              className="text-center text-gray-200 text-[14px] md:text-[18px] max-w-3xl mx-auto mb-10"
            >
              We don’t just code — we collaborate. Our focus is on
              communication, innovation, and delivering reliable digital
              solutions that grow with your business.
            </p>

            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {[
                {
                  icon: <FaUsers className="text-indigo-600 text-2xl" />,
                  title: 'Client-Focused Approach',
                  desc: 'We build around your goals and feedback to ensure your website meets your real business objectives.',
                },
                {
                  icon: <FaCogs className="text-indigo-600 text-2xl" />,
                  title: 'Dedicated Web Team',
                  desc: 'Our developers stay with your project from start to finish for seamless coordination and consistent delivery.',
                },
                {
                  icon: <FaDatabase className="text-indigo-600 text-2xl" />,
                  title: 'Data Security First',
                  desc: 'Following strict security practices, we keep your data safe while maintaining system reliability.',
                },
                {
                  icon: <FaChartLine className="text-indigo-600 text-2xl" />,
                  title: 'Proven Experience',
                  desc: 'We’ve worked with startups to enterprises — tailoring solutions that fit diverse industries and requirements.',
                },
                {
                  icon: <FaSyncAlt className="text-indigo-600 text-2xl" />,
                  title: 'Agile & Transparent Process',
                  desc: 'Track every stage of progress with real-time updates, ensuring complete transparency throughout development.',
                },
                {
                  icon: <FaComments className="text-indigo-600 text-2xl" />,
                  title: 'Clear Communication',
                  desc: 'Stay informed with open communication — no tech jargon, just clear and frequent project updates.',
                },
              ].map((feature, i) => (
                <div
                  key={i}
                  ref={(el) => (cardsRef.current[i] = el)}
                  className="backdrop-blur-xl bg-white/10 border border-white/20 hover:bg-white/20  rounded-lg p-6 shadow-2xl hover:shadow-md"
                >
                  <div className="mb-3">{feature.icon}</div>
                  <h3 className="font-semibold text-white text-lg md:text-xl mb-2">
                    {feature.title}
                  </h3>
                  <p className="text-gray-400 text-[14px] md:text-base">
                    {feature.desc}
                  </p>
                </div>
              ))}
            </div>
          </section>
        </div>
      </div>
    </div>
  )
}

export default WhyPartnerForDevelopment
