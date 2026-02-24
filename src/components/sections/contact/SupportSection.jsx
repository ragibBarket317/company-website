import React from 'react'
import { Mail, Phone, MessageSquare } from 'lucide-react'
import support from '../../../assets/images/support.png'

const SupportSection = () => {
  // Common hover classes for the cards
  const cardHoverStyles =
    'hover:-translate-y-2 hover:border-cyan-500/50 hover:shadow-[0_0_20px_rgba(6,182,212,0.2)] transition-all duration-300 cursor-pointer border border-transparent p-6 rounded-2xl group'

  return (
    <div className="flex flex-col md:flex-row bg-[#020617] text-white min-h-[450px] w-full container overflow-hidden rounded-3xl shadow-2xl border border-white/5">
      {/* Left Side: Image Section */}
      <div className="relative w-full md:w-1/2 h-80 md:h-auto overflow-hidden">
        <img
          src={support}
          alt="Support Team"
          className="object-cover w-full h-full opacity-70 group-hover:scale-105 transition-transform duration-700"
        />
        {/* <div className="absolute inset-0 bg-gradient-to-r from-transparent to-[#020617]"></div> */}
      </div>

      {/* Right Side: Contact Details */}
      <div className="w-full md:w-1/2 p-8 md:p-12 flex flex-col justify-center space-y-4 bg-[#020b18]">
        {/* Email Support */}
        <div className={cardHoverStyles}>
          <div className="flex items-start space-x-5">
            <div className="p-3 bg-cyan-950/30 rounded-xl border border-cyan-500/30 group-hover:bg-cyan-500/20 group-hover:border-cyan-400 transition-colors">
              <Mail className="w-6 h-6 text-cyan-400" />
            </div>
            <div className="space-y-1">
              <h3 className="text-xl font-semibold tracking-wide">
                Email Support
              </h3>
              <p className="text-gray-400 text-sm">
                Direct line to our technical team.
              </p>
              <p className="text-gray-200 font-medium pt-1">
                engineering@intexa.tech
              </p>
            </div>
          </div>
        </div>

        {/* Direct Call */}
        <div className={cardHoverStyles}>
          <div className="flex items-start space-x-5">
            <div className="p-3 bg-blue-950/30 rounded-xl border border-blue-500/30 group-hover:bg-cyan-500/20 group-hover:border-cyan-400 transition-colors">
              <Phone className="w-6 h-6 text-blue-400 group-hover:text-cyan-400" />
            </div>
            <div className="space-y-1">
              <h3 className="text-xl font-semibold tracking-wide">
                Direct Call
              </h3>
              <p className="text-gray-400 text-sm">
                Available Mon-Fri, 9am - 6pm EST.
              </p>
              <p className="text-gray-200 font-medium pt-1">
                +1 (888) 420-INTX
              </p>
            </div>
          </div>
        </div>

        {/* Live Portal */}
        <div className={cardHoverStyles}>
          <div className="flex items-start space-x-5">
            <div className="p-3 bg-purple-950/30 rounded-xl border border-purple-500/30 group-hover:bg-cyan-500/20 group-hover:border-cyan-400 transition-colors">
              <MessageSquare className="w-6 h-6 text-purple-400 group-hover:text-cyan-400" />
            </div>
            <div className="space-y-4 flex-1">
              <div>
                <h3 className="text-xl font-semibold tracking-wide text-cyan-400">
                  Live Portal
                </h3>
                <p className="text-gray-400 text-sm">
                  Real-time infrastructure support.
                </p>
                <p className="text-gray-200 font-medium pt-1">
                  Open Support Ticket
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default SupportSection
