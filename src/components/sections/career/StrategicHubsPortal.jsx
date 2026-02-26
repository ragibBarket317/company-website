import React from 'react'
import { Mail, Phone, MessageSquare, Building2 } from 'lucide-react'

const StrategicHubsPortal = () => {
  return (
    <div
      id="contact-form"
      className="text-white px-6  md:px-12 md:pt-[10px] pb-24 font-sans "
    >
      {/* Main Content: Support & Form */}
      <div className="max-w-6xl mx-auto mt-10 flex flex-col lg:flex-row gap-12 bg-[#050a14] rounded-3xl overflow-hidden border border-white/5 shadow-2xl">
        {/* Left Side: Support Cards */}

        {/* Right Side: Form */}
        <div className="p-8 md:p-12 w-full bg-[#030812]">
          <form className="space-y-6" onSubmit={(e) => e.preventDefault()}>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="space-y-2">
                <label className="text-[10px] font-bold text-gray-500 uppercase tracking-widest">
                  Full Name
                </label>
                <input
                  type="text"
                  placeholder="John Doe"
                  className="w-full bg-[#0a1120] border border-white/10 rounded-xl p-4 focus:border-cyan-500 outline-none transition-all"
                />
              </div>
              <div className="space-y-2">
                <label className="text-[10px] font-bold text-gray-500 uppercase tracking-widest">
                  Work Email
                </label>
                <input
                  type="email"
                  placeholder="john@enterprise.com"
                  className="w-full bg-[#0a1120] border border-white/10 rounded-xl p-4 focus:border-cyan-500 outline-none transition-all"
                />
              </div>
            </div>

            <div className="space-y-2">
              <label className="text-[10px] font-bold text-gray-500 uppercase tracking-widest">
                Service Interest
              </label>
              <select className="w-full bg-[#0a1120] border border-white/10 rounded-xl p-4 focus:border-cyan-500 outline-none transition-all appearance-none cursor-pointer">
                <option>Cloud Migration & Ops</option>
                <option>Infrastructure Security</option>
                <option>DevOps Automation</option>
              </select>
            </div>

            <div className="space-y-2">
              <label className="text-[10px] font-bold text-gray-500 uppercase tracking-widest">
                Message
              </label>
              <textarea
                rows="4"
                placeholder="Briefly describe your requirements..."
                className="w-full bg-[#0a1120] border border-white/10 rounded-xl p-4 focus:border-cyan-500 outline-none transition-all resize-none"
              ></textarea>
            </div>

            {/* Cyan Submit Button with Glow Effect */}
            <button className="w-full py-4 bg-cyan-500 hover:bg-cyan-400 text-[#010409] font-bold rounded-xl shadow-[0_0_20px_rgba(6,182,212,0.3)] hover:shadow-[0_0_30px_rgba(6,182,212,0.5)] transition-all duration-300 transform active:scale-[0.98] uppercase tracking-[0.2em]">
              Send Transmission
            </button>
          </form>
        </div>
      </div>
    </div>
  )
}

export default StrategicHubsPortal
