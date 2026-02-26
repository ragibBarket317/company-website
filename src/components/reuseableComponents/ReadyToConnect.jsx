import { useNavigate } from 'react-router-dom'

export default function ReadyToConnect() {
  const navigate = useNavigate()
  return (
    <section className="relative bg-[#050B1A] py-20 sm:py-28 overflow-hidden">
      <div className="container">
        {/* Gradient Background */}
        <div className="absolute inset-0 bg-gradient-to-r from-[#08122A] via-[#050B1A] to-[#020617]" />

        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
            {/* LEFT SIDE */}
            <div>
              <h2 className="text-2xl sm:text-3xl lg:text-5xl font-semibold text-white leading-tight mb-6 sm:mb-8">
                Ready to connect?
              </h2>

              <p className="text-base sm:text-lg text-gray-300 leading-relaxed max-w-xl mb-8 sm:mb-12">
                Brief us on your challenge. We'll return with a roadmap that
                addresses scale, security, and velocity.
              </p>

              <div className="flex flex-col sm:flex-row gap-4 sm:gap-5">
                <button
                  onClick={() => navigate('/contact')}
                  className="bg-cyan-500 shadow-lg font-bold shadow-cyan-500/50 py-3 px-7 rounded-lg"
                >
                  Talk to Our Team
                </button>
                <button
                  onClick={() => navigate('/impact#case')}
                  class="inset-ring-2 inset-ring-cyan-500 font-bold shadow-lg shadow-cyan-500/50 py-3 px-7 rounded-lg text-white cursor-pointer"
                >
                  Request a Case Study
                </button>
              </div>
            </div>

            {/* RIGHT SIDE CARD */}
            <div
              className="bg-white/5 backdrop-blur-2xl border border-white/10
            rounded-3xl p-8 sm:p-10 text-white mt-8 lg:mt-0"
            >
              <h3 className="text-sm tracking-widest uppercase text-gray-400 mb-6 sm:mb-8">
                What to include
              </h3>

              <ul className="space-y-4 sm:space-y-6 text-gray-300">
                <li className="flex gap-3 sm:gap-4">
                  <span className="w-2 h-2 bg-cyan-400 rounded-full mt-1 sm:mt-2" />
                  Business problem + target users
                </li>

                <li className="flex gap-3 sm:gap-4">
                  <span className="w-2 h-2 bg-cyan-400 rounded-full mt-1 sm:mt-2" />
                  Must-have features & milestones
                </li>

                <li className="flex gap-3 sm:gap-4">
                  <span className="w-2 h-2 bg-cyan-400 rounded-full mt-1 sm:mt-2" />
                  Any existing system / constraints
                </li>

                <li className="flex gap-3 sm:gap-4">
                  <span className="w-2 h-2 bg-cyan-400 rounded-full mt-1 sm:mt-2" />
                  Timeline + budget range
                </li>

                <li className="flex gap-3 sm:gap-4">
                  <span className="w-2 h-2 bg-cyan-400 rounded-full mt-1 sm:mt-2" />
                  Compliance or security needs
                </li>
              </ul>

              <div className="mt-6 sm:mt-10 border-t border-white/10 pt-4 sm:pt-6 text-sm sm:text-base text-gray-400 italic">
                We are experienced with enterprise procurement and can sign NDAs
                immediately.
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
