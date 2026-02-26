import precision from '../../../assets/images/precision.png'

const EngineeringPrecision = () => {
  return (
    <div className="text-white py-[40px] md:py-[80px] dark:bg-dark-bg">
      <div className="container p-6">
        <div className="lg:flex gap-5">
          {/* LEFT SIDE */}
          <div className="w-full lg:w-[50%]">
            <div className="h-full flex flex-col justify-center">
              <div className="space-y-5">
                <p className="text-xs tracking-[0.3em] text-cyan-400 mb-4 uppercase">
                  ENGINEERING PRINCIPLE
                </p>
                <h2 className="text-xl md:text-2xl lg:text-5xl font-extrabold dark:text-white">
                  Engineering with Precision and Intigrity
                </h2>
                <p className="text-[14px] md:text-[16px] font-body text-white leading-7 text-justify">
                  At Intexa, engineering is a responsibility carried with
                  discipline and intent, guided by five core pillars:
                  innovation, intelligence, precision, collaboration, and
                  sustainability. We treat every system as critical
                  infrastructure designed to endure scale, complexity, and time,
                  applying intelligent architecture and precise execution while
                  fostering deep collaboration across teams and stakeholders.
                  Software shapes institutions, markets, and lives, therefore it
                  must be built with accountability, secure by default design,
                  and forward-thinking innovation that anticipates change. We
                  reject fragile shortcuts and instead embrace systems thinking,
                  performance rigor, and sustainable engineering practices,
                  ensuring that every platform we create delivers long term
                  resilience, operational integrity, and measurable impact.
                </p>
              </div>
            </div>
          </div>

          <div className="w-full lg:w-[50%] flex justify-center items-center mt-10 lg:mt-0">
            <div className="relative w-full max-w-lg">
              {/* Glow Background (optional premium look) */}
              <div className="absolute -inset-4 bg-cyan-500/10 blur-3xl rounded-3xl"></div>

              {/* Image Container */}
              <div className="relative rounded-3xl overflow-hidden border border-white/10 shadow-2xl">
                <img
                  src={precision}
                  alt="EngineeringPrecision"
                  className="w-full h-[300px] md:h-[400px] object-cover hover:scale-105 transition duration-700"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default EngineeringPrecision
