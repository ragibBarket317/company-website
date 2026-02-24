export default function ReadySomthingGreat() {
  return (
    <section className="relative bg-[#050B1A] py-20 sm:py-28 overflow-hidden">
      <div className="container">
        {/* Gradient Background */}
        <div className="absolute inset-0 bg-gradient-to-r from-[#08122A] via-[#050B1A] to-[#020617]" />

        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-center items-center">
            {/* LEFT SIDE */}
            <div>
              <h2 className="text-2xl sm:text-3xl lg:text-5xl text-center font-semibold text-white leading-tight mb-6 sm:mb-8">
                Ready to Ship Something Great?
              </h2>

              <p className="text-base sm:text-lg text-center text-gray-300 leading-relaxed max-w-xl mx-auto mb-5 sm:mb-12">
                If you value craft over chaos, we'd love to hear from you, Send
                us your work and let's talk.
              </p>

              <div className="flex flex-col sm:flex-row justify-center gap-4 sm:gap-5">
                <button className="bg-cyan-500 shadow-lg font-bold shadow-cyan-500/50 py-3 px-7 rounded-lg">
                  Email Careers
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
