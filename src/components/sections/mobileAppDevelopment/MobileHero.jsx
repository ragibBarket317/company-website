import Lottie from 'lottie-react'

import mobileApp from '../../../assets/animation/Mobile App Showcase.json'
import { useEffect, useRef } from 'react'

const MobileHero = () => {
  const lottieRef = useRef()

  useEffect(() => {
    lottieRef.current.setSpeed(0.3)
  }, [])

  return (
    <div className="max-h-[100vh] h-[95vh] bg-cover bg-center p-6 ">
      <div className="absolute inset-0 pointer-events-none">
        <div className="w-full h-full bg-[radial-gradient(60%_120%_at_90%_0%,rgba(255,255,255,0.35),transparent_70%)]"></div>
      </div>
      <div className="container z-10">
        <div className="flex gap-5">
          <div className="md:w-[50%] z-10">
            <div className="h-[70vh] flex flex-col justify-center items-center gap-5">
              <div className="space-y-5">
                <h1 className="text-2xl md:text-2xl lg:text-6xl text-white font-extrabold">
                  Mobile App Development Company
                </h1>
                <p className="text-gray-200">
                  We’re a mobile app development company that delivers results —
                  not just code. From idea to launch, our mobile app development
                  services align with your goals, your users, and your growth
                  strategy. Clean UI, secure backend, and rapid delivery —
                  that’s how we build mobile apps that work.
                </p>
                <div className="flex gap-5">
                  <button className="bg-cyan-500 shadow-lg shadow-cyan-500/50 py-3 px-7 rounded-lg">
                    Contact
                  </button>
                  <button class="inset-ring-2 inset-ring-cyan-500 shadow-lg shadow-cyan-500/50 py-3 px-7 rounded-lg text-white">
                    Subscribe
                  </button>
                </div>
              </div>
            </div>
          </div>
          <div className="">
            <div className="absolute inset-0 flex justify-end items-center">
              <div className="circlePosition w-[400px] h-[200px] bg-[#eb26fd] rounded-full absolute z-1 top-[50%] left-[70%] translate-x-[-50%] translate-y-[-50%] blur-[200px]"></div>
              <Lottie
                lottieRef={lottieRef}
                animationData={mobileApp}
                loop
                autoplay
                className="w-[100%] md:w-[52%] h-auto relative z-10"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default MobileHero
