import { useEffect } from 'react'
import { useLocation } from 'react-router-dom'

export default function HiringProcess() {
  const location = useLocation()

  useEffect(() => {
    if (location.hash) {
      const element = document.querySelector(location.hash)
      if (element) {
        element.scrollIntoView({ behavior: 'smooth' })
      }
    }
  }, [location])

  const steps = [
    {
      number: 'Step 1',
      title: 'Intro Call',
      description:
        'High-level alignment on values, goals, and technical background.',
    },
    {
      number: 'Step 2',
      title: 'Skill Signal',
      description:
        'A practical task focused on your domain, followed by a review.',
    },
    {
      number: 'Step 3',
      title: 'The Deep Dive',
      description:
        'Architecture discussion with the founders and engineering leads.',
    },
    {
      number: 'Step 4',
      title: 'The Offer',
      description:
        'Competitive comp, clear equity, and an immediate start date.',
    },
  ]

  return (
    <section id="process" className=" py-24  text-white">
      <div className="max-w-6xl mx-auto">
        {/* Top Label */}
        <p className="text-cyan-400 text-xs tracking-[0.3em] mb-6">HIRING</p>

        {/* Heading */}
        <h2 className="text-4xl md:text-5xl font-semibold leading-tight mb-6">
          A Process Designed for Engineers
        </h2>

        {/* Subtitle */}
        <p className="text-gray-400 text-[16px] max-w-3xl mb-16">
          No trivia, no whiteboard riddles. We look for technical judgment and
          the ability to solve real problems.
        </p>

        {/* Steps */}
        <div className="space-y-12">
          {steps.map((step, index) => (
            <div key={index} className="flex gap-8">
              {/* Step Label */}
              <div className="w-24 flex-shrink-0">
                <span className="text-cyan-700 font-semibold text-lg">
                  {step.number}
                </span>
              </div>

              {/* Content */}
              <div>
                <h3 className="text-lg font-semibold mb-2">{step.title}</h3>
                <p className="text-gray-400">{step.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
