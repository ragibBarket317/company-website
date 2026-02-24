import GlobalHq from '../../../assets/images/globalHq.jpg'
const GlobalHeadquarters = () => {
  return (
    <div className="text-white py-[40px] md:py-[80px] dark:bg-dark-bg">
      <div className="container p-6">
        <div className="lg:flex gap-5">
          {/* LEFT SIDE */}
          <div className="w-full lg:w-[50%]">
            <div className="h-full flex flex-col justify-center">
              <div className="space-y-5">
                <p className="text-xs tracking-[0.3em] text-cyan-400 mb-4 uppercase">
                  Intexa Global
                </p>
                <h2 className="text-xl md:text-2xl lg:text-5xl font-extrabold dark:text-white">
                  Global Headquarter
                </h2>
                <p className="text-[14px] md:text-[16px] text-gray-400 font-body  leading-7 text-justify">
                  Situated in the heart of Canada's tech corridor, our
                  headquarters serves as the strategic nervous system for
                  Intexa's global operations. It is here that we define the
                  standards for digital excellence.
                </p>
                <ul className="space-y-3 mb-8 flex gap-2">
                  {[
                    'Strategic Governance',
                    'Global Client Relations',
                    'Architectural Oversight',
                  ].map((point, i) => (
                    <li
                      key={i}
                      className="flex items-start text-sm text-gray-400"
                    >
                      <span className="w-2 h-2 bg-cyan-400 rounded-full mt-2 mr-3"></span>
                      {point}
                    </li>
                  ))}
                </ul>
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
                  src={GlobalHq}
                  alt="Our Story"
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

export default GlobalHeadquarters
