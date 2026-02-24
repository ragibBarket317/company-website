export default function ExecutiveLeadership() {
  const roles = [
    'Chief Technology Officer (CTO)',
    'Chief Information Security Officer (CISO)',
    'Chief Operating Officer (COO)',
    'Head of Engineering',
    'Director of Architecture',
    'Director of AI & Data',
  ]

  return (
    <section className="py-10 px-6 text-white">
      <div className="max-w-6xl mx-auto">
        {/* Section Label */}
        <p className="text-cyan-400 text-xs tracking-[0.35em] mb-12">
          4. EXECUTIVE LEADERSHIP
        </p>

        {/* Cards */}
        <div className="flex flex-col gap-6">
          {roles.map((role, index) => (
            <div
              key={index}
              className="
                relative
                rounded-xl
                border border-white/10
                bg-gradient-to-r from-[#06122A] to-[#030B1C]
                px-8 py-7
                transition-all duration-300
                hover:border-cyan-400
                hover:shadow-[0_0_30px_rgba(34,211,238,0.15)]
                group
              "
            >
              {/* Title */}
              <h3
                className="text-xl font-semibold tracking-wide 
                             group-hover:text-cyan-400 transition"
              >
                {role}
              </h3>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
