import React from 'react'
import { FaClipboard } from 'react-icons/fa'
// import { ClipboardList } from "lucide-react"; // you can replace icon as needed

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
  return (
    <section className="container bg-white py-16">
      <div className="max-w-6xl mx-auto px-6 text-center">
        <h2 className="text-3xl md:text-4xl font-bold text-indigo-900">
          Our Mobile App Development Process — From Idea to Launch, Done Right
        </h2>
        <p className="mt-4 text-gray-600 max-w-3xl mx-auto">
          We follow a proven mobile app development process that keeps you
          involved at every step. No guesswork, no jargon — just a clear,
          structured journey from first call to final launch. Here’s how we
          bring your app idea to life:
        </p>
      </div>

      <div className="mt-10 grid md:grid-cols-2 gap-6 px-6">
        {/* Left Section */}
        <div className="bg-blue-700 text-white rounded-lg p-8 flex flex-col justify-center space-y-4">
          {steps.map((step) => (
            <div key={step.id} className="flex items-start space-x-4">
              <div className="flex-shrink-0 w-6 h-6 bg-white text-blue-700 font-bold rounded-full flex items-center justify-center">
                {step.id}
              </div>
              <p className="font-medium">{step.title}</p>
            </div>
          ))}
        </div>

        {/* Right Section */}
        <div className="border border-gray-300 rounded-lg p-10 flex flex-col items-start">
          <div className="bg-blue-700 text-white p-4 rounded-xl mb-6">
            <FaClipboard size={32} />
          </div>
          <h3 className="text-xl font-semibold text-indigo-900 mb-3">
            Discovery & Consultation
          </h3>
          <p className="text-gray-600 leading-relaxed">
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
