import { useRef } from 'react'
import gsap from 'gsap'
import { useGSAP } from '@gsap/react'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import {
  FaBrain,
  FaChartLine,
  FaCodeBranch,
  FaCogs,
  FaLanguage,
  FaRobot,
} from 'react-icons/fa'

gsap.registerPlugin(ScrollTrigger)

const AISoftwareDevelopment = () => {
  const aiSoftwareRef = useRef(null)
  const descriptionRef = useRef(null)
  const headingRef = useRef(null)
  const cardsRef = useRef([])

  useGSAP(
    () => {
      const triggerOptions = {
        trigger: aiSoftwareRef.current,
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
            trigger: aiSoftwareRef.current,
            start: 'top 85%',
            toggleActions: 'restart none none none',
          },
        }
      )
    },
    { scope: aiSoftwareRef }
  )
  return (
    <div ref={aiSoftwareRef} className="pb-[80px]">
      <div className="w-full h-full flex justify-center items-center">
        <section className="py-16">
          <div className="container text-center">
            <h2
              ref={headingRef}
              className="text-xl md:text-4xl font-bold text-white mb-4"
            >
              Your Reliable Partner for AI Software Development
            </h2>
            <p
              ref={descriptionRef}
              className="text-gray-200 text-[14px] md:text-[18px] max-w-3xl mx-auto mb-10"
            >
              From predictive analytics to custom-trained AI models — we help
              businesses harness artificial intelligence to gain a competitive
              edge through smart automation and deep insights.
            </p>

            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {[
                {
                  icon: <FaBrain />,
                  title: 'Machine Learning Solutions',
                  desc: 'Build models that learn from your data to automate decision-making and improve outcomes.',
                },
                {
                  icon: <FaLanguage />,
                  title: 'Natural Language Processing',
                  desc: 'Develop chatbots, sentiment analysis, and smart assistants that understand human language.',
                },
                {
                  icon: <FaChartLine />,
                  title: 'Predictive Analytics',
                  desc: 'Leverage historical data to predict trends, risks, and customer behavior with precision.',
                },
                {
                  icon: <FaRobot />,
                  title: 'Computer Vision Systems',
                  desc: 'Enable image recognition, video tracking, and quality inspection using deep learning.',
                },
                {
                  icon: <FaCodeBranch />,
                  title: 'Custom AI Model Development',
                  desc: 'We train and fine-tune models specifically tailored to your business needs and workflows.',
                },
                {
                  icon: <FaCogs />,
                  title: 'Generative AI & LLMs',
                  desc: 'Implement cutting-edge AI like ChatGPT, Gemini, or Claude to power creative automation.',
                },
              ].map((item, i) => (
                <div
                  key={i}
                  ref={(el) => (cardsRef.current[i] = el)}
                  className="bg-gradient-to-b from-[#15192C] to-[#252b4b] rounded-xl p-6 shadow-sm hover:shadow-md"
                >
                  <div className="w-12 h-12 bg-indigo-100 text-indigo-700 flex items-center justify-center rounded-lg text-2xl mb-4 mx-auto">
                    {item.icon}
                  </div>
                  <h3 className="font-semibold text-lg md:text-xl text-white mb-2">
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

export default AISoftwareDevelopment
