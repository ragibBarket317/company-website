export default function FounderPerspective() {
  return (
    <section className="relative  overflow-hidden">
      {/* Gradient Overlay */}
      {/* <div className="absolute inset-0 bg-gradient-to-r from-[#06142A] via-[#031022] to-[#010A18]" /> */}

      <div className="relative container py-28">
        {/* Small Label */}
        <p className="text-cyan-400 tracking-[0.25em] text-xs font-semibold uppercase mb-10">
          Founder’s Perspective
        </p>

        {/* Main Quote */}
        <h2 className="text-white text-4xl md:text-5xl leading-[1.3] font-light italic">
          "We build on engineering discipline, not hype. At Intexa, we
          prioritize clarity before complexity and architecture before
          features."
        </h2>

        {/* Description */}
        <p className="text-gray-400 text-lg mt-10 max-w-3xl leading-relaxed">
          Our mission is to ensure that software is treated as critical
          infrastructure. We avoid short-term speed in favor of long-term
          reliability and secure-by-default workflows.
        </p>

        {/* Author Section */}
        {/* <div className="flex items-center gap-5 mt-16">

          <div
            className="w-16 h-16 rounded-full bg-gradient-to-br 
                          from-slate-600 to-slate-800 border border-slate-700"
          />

          <div>
            <h4 className="text-white font-semibold text-lg">
              Engineering Principal
            </h4>
            <p className="text-gray-400 text-sm">Intexa Global</p>
          </div>
        </div> */}
      </div>
    </section>
  )
}
