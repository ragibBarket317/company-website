import Lottie from 'lottie-react'

import software from '../../../assets/animation/Software development.json'
import { useEffect, useRef } from 'react'

const SoftwareHeroSmallScreen = () => {
  const lottieRef = useRef()

  useEffect(() => {
    lottieRef.current.setSpeed(0.3)
  }, [])

  return (
    <div className="overflow-x-hidden mb-14 flex flex-col gap-5">
      {/* MOBILE LOTTIE */}
      <div className="w-full h-[280px] flex justify-center">
        <div className="circlePosition w-[400px] h-[200px] bg-blue-400 rounded-full absolute z-1 top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 blur-[200px]"></div>
        <Lottie
          lottieRef={lottieRef}
          animationData={software}
          loop
          autoplay
          className="w-[85%] ml-10 mx-auto h-auto"
        />
      </div>
      {/* TEXT CONTENT */}
      <div className="container">
        <div className="text-center mt-[-40px] space-y-5">
          <h1 className="text-xl text-white font-extrabold leading-snug">
            Software Development Company
          </h1>

          <p className="text-gray-200 font-body text-[14px] leading-relaxed">
            We’re a mobile app development company that delivers results — not
            just code. From idea to launch, our mobile app development services
            align with your goals, your users, and your growth strategy. Clean
            UI, secure backend, and rapid delivery — that’s how we build mobile
            apps that work.
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

export default SoftwareHeroSmallScreen
