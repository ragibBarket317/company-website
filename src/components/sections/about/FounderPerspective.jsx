export default function FounderPerspective() {
  return (
    <section className="relative  overflow-hidden">
      {/* Gradient Overlay */}
      {/* <div className="absolute inset-0 bg-gradient-to-r from-[#06142A] via-[#031022] to-[#010A18]" /> */}

      <div className="relative container py-10">
        {/* Small Label */}
        <p className="text-cyan-400 tracking-[0.25em] text-xs uppercase mb-10">
          MISSION STATEMENT
        </p>

        {/* Main Quote */}
        <h2 className="text-white text-xl md:text-3xl leading-[1.3] font-light italic">
          "Our mission is to engineer software as critical infrastructure —
          resilient, secure, and built to endure. We embed architectural
          discipline, governance maturity, and secure-by-default design into
          every system we deliver."
        </h2>
      </div>
      <div className="relative container py-10">
        {/* Small Label */}
        <p className="text-cyan-400 tracking-[0.25em] text-xs uppercase mb-10">
          VISION STATEMENT
        </p>

        {/* Main Quote */}
        <h2 className="text-white text-xl md:text-3xl leading-[1.3] font-light italic">
          "Our vision is to redefine enterprise engineering by building
          intelligent, scalable platforms that stand the test of time. We aim to
          become a globally trusted digital engineering partner for
          mission-critical systems across industries and borders."
        </h2>
      </div>
      <div className="relative container py-10">
        {/* Small Label */}
        <p className="text-cyan-400 tracking-[0.25em] text-xs uppercase mb-10">
          Founder’s Perspective
        </p>

        {/* Main Quote */}
        <h2 className="text-white text-xl md:text-3xl leading-[1.3] font-light italic">
          "We build on engineering discipline, not hype. At Intexa, we
          prioritize clarity before complexity and architecture before
          features."
        </h2>
      </div>
    </section>
  )
}
