'use client'
import { useState } from 'react'
import { ChevronDown } from 'lucide-react'

import { ShieldCheck, Gavel, FileCheck, Share2 } from 'lucide-react'

const faqs = [
  {
    question: 'How do you protect enterprise client data?',
    answer:
      "We use a 'Zero Trust' architecture. Every data point is encrypted in transit and at rest, with access strictly logged and limited to project-essential personnel.",
    icon: <ShieldCheck className="w-5 h-5 text-cyan-400" />,
  },
  {
    question: 'Are your services governed by Canadian law?',
    answer:
      'Yes. Unless explicitly negotiated otherwise in an MSA, all legal disputes are subject to the jurisdiction of the courts in Canada.',
    icon: <Gavel className="w-5 h-5 text-cyan-400" />,
  },
  {
    question: "What is the 'Proof of Delivery' process?",
    answer:
      'PoD is our verification standard. Upon milestone completion, we provide a cryptographically hashed report or signed document that confirms all technical requirements were met.',
    icon: <FileCheck className="w-5 h-5 text-cyan-400" />,
  },
  {
    question: 'Do you share data with third parties?',
    answer:
      'Only with vetted sub-processors essential for service delivery (e.g., cloud hosting), all of whom are bound by strict Data Processing Agreements (DPAs).',
    icon: <Share2 className="w-5 h-5 text-cyan-400" />,
  },
]

export default function FAQ() {
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
