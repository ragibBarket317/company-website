import React, { useRef } from 'react'
import Lottie from 'lottie-react'
import world from '../../../assets/animation/World.json'
import { useGSAP } from '@gsap/react'
import gsap from 'gsap'
import {
  ArrowDown,
  BarChart3,
  CircleSmall,
  Gauge,
  Layers,
  MapPin,
  Shield,
  ShieldCheck,
  Sparkles,
} from 'lucide-react'

gsap.registerPlugin(useGSAP)

const Hero = () => {
  const titleRef = useRef(null)

  const title = 'Engineering Digital Systems that Businesses Rely on'

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
      },
    )
  }, [])
  return (
    <div className="relative overflow-x-hidden max-h-[100vh] h-[95vh] bg-cover bg-center p-6 ">
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
                <div className="inline-block">
                  <span className="flex gap-2 text-xs capitalize text-cyan-500 py-2 px-4 rounded-full bg-[#0A1428] border border-[#13203B]">
                    <Sparkles className="h-4 w-4" />
                    Enterprice grade delivery
                    <CircleSmall className="h-4 w-4 text-white" />
                    AI ready system
                    <CircleSmall className="h-4 w-4 text-white" />
                    Security first
                  </span>
                </div>
                <h1
                  ref={titleRef}
                  className="text-xl md:text-2xl lg:text-5xl text-white font-head font-extrabold leading-snug"
                >
                  {title.split(' ').map((word, i) => (
                    <span
                      key={i}
                      className="inline-block mr-2 whitespace-nowrap"
                    >
                      {word.split('').map((char, j) => (
                        <span key={j} className="letter inline-block">
                          {char}
                        </span>
                      ))}
                    </span>
                  ))}
                </h1>
                <p className="text-gray-200 font-body text-[18px] text-justify">
                  With over 15 years of engineering experience, Intexa designs
                  and delivers secure, scalable mobile, web, and artificial
                  intelligence systems built for long term performance. Through
                  disciplined architecture, experienced teams, and structured
                  development processes, we create digital platforms that
                  support sustainable enterprise growth.
                </p>
                <div className="flex gap-5">
                  <button className="bg-cyan-500 shadow-lg font-bold shadow-cyan-500/50 py-3 px-7 rounded-lg">
                    Get a free discovery
                  </button>
                  <button class="inset-ring-2 inset-ring-cyan-500 font-bold shadow-lg shadow-cyan-500/50 py-3 px-7 rounded-lg text-white">
                    <a
                      href="#services"
                      className="hover:text-cyan-400 transition"
                    >
                      Explore Services
                    </a>
                  </button>
                </div>
                <div className="mt-5 flex gap-5">
                  <div className="bg-[#0A1428] border border-[#13203B] rounded-lg py-2 px-4">
                    <div className="flex flex-col items-center">
                      <ShieldCheck className="w-4 h-4 text-cyan-500 " />
                      <p className="text-gray-400 text-[10px] font-semibold text-center mt-2 uppercase">
                        Security By
                        <br /> Design
                      </p>
                    </div>
                  </div>
                  <div className="bg-[#0A1428] border border-[#13203B] rounded-lg py-2 px-4">
                    <div className="flex flex-col items-center">
                      <Gauge className="w-4 h-4 text-cyan-500 " />
                      <p className="text-gray-400 text-[10px] font-semibold text-center mt-2 uppercase">
                        Performance
                        <br /> First
                      </p>
                    </div>
                  </div>
                  <div className="bg-[#0A1428] border border-[#13203B] rounded-lg py-2 px-4">
                    <div className="flex flex-col items-center">
                      <Layers className="w-4 h-4 text-cyan-500 " />
                      <p className="text-gray-400 text-[10px] font-semibold text-center mt-2 uppercase">
                        Scalable
                        <br /> Architecture
                      </p>
                    </div>
                  </div>
                  <div className="bg-[#0A1428] border border-[#13203B] rounded-lg py-2 px-4">
                    <div className="flex flex-col items-center">
                      <MapPin className="w-4 h-4 text-cyan-500 " />
                      <p className="text-gray-400 text-[10px] font-semibold text-center mt-2 uppercase">
                        Global
                        <br /> Delivery
                      </p>
                    </div>
                  </div>
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
            <div className="absolute top-[-120px] inset-0 flex justify-end items-center">
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
      {/* Bottom Center Animated Impact Card */}
      <div className="absolute bottom-16 left-1/2 -translate-x-1/2 z-20 animate-bounce">
        <button
          className="relative px-6 py-3 rounded-3xl 
    bg-gradient-to-b from-[#1B2435] to-[#111827] 
    border border-white/10 
    backdrop-blur-xl 
    shadow-2xl shadow-cyan-500/10 
    text-center"
        >
          <p className="text-gray-400 text-[10px]">Typical impact</p>

          <div className="flex items-center justify-center gap-2 my-1">
            <ArrowDown className="w-5 h-5 text-cyan-400" />
            <span className="text-[14px] font-bold text-cyan-400">30–60%</span>
          </div>

          <p className="text-gray-400 text-[10px]">manual effort</p>
        </button>
      </div>
    </div>
  )
}

export default Hero
