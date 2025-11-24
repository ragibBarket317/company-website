import React, { useRef } from 'react'
import Lottie from 'lottie-react'
import world from '../../../assets/animation/World.json'
import { useGSAP } from '@gsap/react'
import gsap from 'gsap'

gsap.registerPlugin(useGSAP)

const Hero = () => {
  const titleRef = useRef(null)

  const title =
    'Powering Organizations Worldwide with Advanced Digital Engineering'

  useGSAP(() => {
    const letters = titleRef.current.querySelectorAll('.letter')

    gsap.fromTo(
      letters,
      { opacity: 0, x: -8 },
      {
        opacity: 1,
        x: 0,
        duration: 0.05,
        stagger: 0.03,
        ease: 'power1.out',
      }
    )
  }, [])
  return (
    <div className="overflow-x-hidden max-h-[100vh] h-[95vh] bg-cover bg-center p-6 ">
      {/* <div className="hidden md:block absolute inset-0 pointer-events-none">
        <div className="w-full h-full bg-[radial-gradient(60%_120%_at_90%_0%,rgba(255,255,255,0.35),transparent_70%)]"></div>
      </div> */}
      <div className="absolute inset-0 flex items-center justify-center">
        <div className="w-[600px] h-[300px] bg-blue-500/50 blur-[150px] rounded-full"></div>
      </div>

      <div className="container z-10">
        <div className="flex flex-col md:flex-row gap-5">
          <div className="md:w-[50%] z-10">
            <div className="h-[50vh] md:h-[80vh] flex flex-col justify-center items-center gap-5">
              <div className="space-y-5">
                {/* <h1
                  ref={titleRef}
                  className="text-2xl md:text-2xl lg:text-5xl text-white font-extrabold"
                >
                  Powering Organizations Worldwide with Advanced Digital
                  Engineering
                </h1> */}
                <h1
                  ref={titleRef}
                  className="text-2xl md:text-2xl lg:text-5xl text-white font-head font-extrabold leading-snug"
                >
                  {title.split('').map((char, i) => (
                    <span key={i} className="letter inline-block">
                      {char === ' ' ? '\u00A0' : char}
                    </span>
                  ))}
                </h1>
                <p className="text-gray-200 font-body text-[18px]">
                  Specialists in mobile, web, AI/ML, and blockchain engineering
                  Proven expertise across app development, web platforms, AI/ML,
                  and blockchain solutions Skilled teams delivering world-class
                  mobile, web, AI, and blockchain products
                </p>
                <div className="flex gap-5">
                  <button className="bg-cyan-500 shadow-lg font-bold shadow-cyan-500/50 py-3 px-7 rounded-lg">
                    Call For Sehedule
                  </button>
                  {/* <button class="inset-ring-2 inset-ring-cyan-500 font-bold shadow-lg shadow-cyan-500/50 py-3 px-7 rounded-lg text-white">
                    Subscribe
                  </button> */}
                </div>
              </div>
            </div>
          </div>
          <div className="block md:hidden">
            {/* <div className="circlePosition w-[400px] h-[200px] bg-[#eb26fd] rounded-full absolute z-1 top-[50%] left-[70%] translate-x-[-50%] translate-y-[-50%] blur-[200px]"></div> */}
            <Lottie
              animationData={world}
              loop
              autoplay
              className="w-full h-auto  z-10"
            />
          </div>
          <div className="hidden md:block ">
            <div className="absolute top-14 inset-0 flex justify-end items-center">
              {/* <div className="circlePosition w-[400px] h-[200px] bg-[#eb26fd] rounded-full absolute z-1 top-[50%] left-[70%] translate-x-[-50%] translate-y-[-50%] blur-[200px]"></div> */}
              <Lottie
                animationData={world}
                loop
                autoplay
                className="md:w-[55%] h-auto relative z-10"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Hero
