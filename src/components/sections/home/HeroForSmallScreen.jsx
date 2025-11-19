import Lottie from 'lottie-react'
import world from '../../../assets/animation/World.json'

const HeroForSmallScreen = () => {
  return (
    <div className="overflow-x-hidden min-h-screen bg-cover bg-center flex flex-col justify-center gap-5">
      {/* MOBILE LOTTIE */}
      <div className="w-full flex justify-center mb-5">
        <div className="circlePosition w-[400px] h-[200px] bg-blue-400 rounded-full absolute z-1 top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 blur-[200px]"></div>
        <Lottie animationData={world} loop autoplay className="w-full h-auto" />
      </div>
      {/* TEXT CONTENT */}
      <div className="container">
        <div className="text-center space-y-5">
          <h1 className="text-xl text-white font-extrabold leading-snug">
            Powering Organizations Worldwide with Advanced Digital Engineering
          </h1>

          <p className="text-gray-200 font-body text-[14px] leading-relaxed">
            Specialists in mobile, web, AI/ML, and blockchain engineering.
            Proven expertise across app development, AI/ML, and blockchain
            solutions. Skilled teams delivering world-class digital products.
          </p>

          {/* BUTTONS */}
          <div className="flex flex-col gap-4 w-[80%] mx-auto mt-4">
            {/* <button className="bg-cyan-500 shadow-lg font-bold shadow-cyan-500/50 py-3 px-7 rounded-lg text-white">
            Subscribe
          </button> */}

            <button className="inset-ring-2 inset-ring-cyan-500 font-bold shadow-lg shadow-cyan-500/50 py-3 px-7 rounded-lg text-white">
              Subscribe
            </button>
          </div>
        </div>
      </div>
    </div>
  )
}

export default HeroForSmallScreen
