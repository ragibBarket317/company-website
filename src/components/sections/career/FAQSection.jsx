'use client'
import { useState } from 'react'
import { ChevronDown } from 'lucide-react'

const faqs = [
  {
    question: 'Do you hire remote team members?',
    answer:
      'Yes. Intexa is built to support talented people wherever they are. We believe meaningful work is driven by clarity, ownership, and discipline not geography. Our culture is async first, which gives you space for deep focus and thoughtful execution. While some roles may require occasional alignment across time zones, flexibility and trust remain at the core of how we operate.',
  },
  {
    question: 'What do you value most in candidates?',
    answer:
      'We value ownership, curiosity, and integrity.We look for individuals who think beyond tasks and care about outcomes. People who communicate clearly take responsibility for decisions, and approach challenges with structured thinking tend to thrive at Intexa.You do not need to know everything. What matters most is your willingness to learn, improve, and build systems that stand the test of real-world use.',
  },
  {
    question: 'Do you sponsor visas?',
    answer:
      'In select cases, yes.For senior professionals and long-term contributors who align strongly with our direction, we are open to exploring sponsorship opportunities. Each situation is reviewed thoughtfully and with long term perspective in mind.',
  },
  {
    question: 'What is the best way to apply?',
    answer:
      'If you find a role that aligns with your strengths and ambitions, apply directly. We genuinely look forward to learning about the people behind the applications.If you do not see a perfect match, you can still reach out with your CV, portfolio, GitHub, or any work you are proud of. We value initiative and are always open to conversations with exceptional talent.At Intexa, we are not just hiring roles.We are building a team that believes in quality, clarity, and long-term impact.',
  },
]

export default function FAQSection() {
  const [openIndex, setOpenIndex] = useState(0)

  const toggleFAQ = (index) => {
    setOpenIndex(openIndex === index ? null : index)
  }

  return (
    <section className="text-white py-24 px-6">
      <div className="max-w-4xl mx-auto">
        {/* Heading */}
        <h2 className="text-3xl md:text-4xl font-bold mb-12">
          Frequently Asked Questions
        </h2>

        {/* FAQ Container */}
        <div className="space-y-6">
          {faqs.map((faq, index) => (
            <div key={index}>
              {/* Question Button */}
              <button
                onClick={() => toggleFAQ(index)}
                className={`w-full flex justify-between items-center text-left px-5 py-4 rounded-lg transition-all
                ${
                  openIndex === index
                    ? 'border border-gray-400 bg-[#0b1220]'
                    : 'border border-transparent hover:bg-[#0b1220]'
                }`}
              >
                <span className="text-lg font-medium">{faq.question}</span>

                <ChevronDown
                  className={`w-5 h-5 transition-transform duration-300 ${
                    openIndex === index ? 'rotate-180' : ''
                  }`}
                />
              </button>

              {/* Answer */}
              <div
                className={`overflow-hidden transition-all duration-300 ${
                  openIndex === index
                    ? 'max-h-40 mt-3 opacity-100'
                    : 'max-h-0 opacity-0'
                }`}
              >
                <p className="text-gray-300 text-base leading-relaxed">
                  {faq.answer}
                </p>
              </div>

              {/* Divider */}
              {index !== faqs.length - 1 && (
                <div className="border-b border-gray-800 mt-6" />
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
