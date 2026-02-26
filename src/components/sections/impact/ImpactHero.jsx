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
import { useNavigate } from 'react-router-dom'

gsap.registerPlugin(useGSAP)

const ImpactHero = () => {
  const navigate = useNavigate()
  const titleRef = useRef(null)

  const title = 'Engineering the Digital Backbone for Global Enterprise.'

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
          <div className="md:w-[70%] z-10">
            <div className="h-[50vh] md:h-[80vh] flex flex-col justify-center items-center gap-5">
              <div className="space-y-5">
                <div className="inline-block">
                  <span className="flex gap-2 text-xs text-cyan-500 py-2 px-4 rounded-full bg-[#0A1428] border border-[#13203B] uppercase">
                    <Sparkles className="h-4 w-4" />
                    GLOBAL STANDARDS • ENTERPRISE DISCIPLINE
                  </span>
                </div>
                <h1
                  ref={titleRef}
                  className="text-2xl md:text-2xl lg:text-5xl text-white font-head font-extrabold leading-snug"
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
                  Intexa is a premier digital engineering firm building secure,
                  scalable, and intelligent systems for institutions and
                  world-class growth companies.
                </p>
                <div className="flex gap-5">
                  <button className="bg-cyan-500 shadow-lg font-bold shadow-cyan-500/50 py-3 px-7 rounded-lg">
                    <a
                      href="#clients"
                      className="hover:text-cyan-400 transition"
                    >
                      View Testimonial
                    </a>
                  </button>
                  <button
                    onClick={() => navigate('/careers')}
                    class="inset-ring-2 inset-ring-cyan-500 font-bold shadow-lg shadow-cyan-500/50 py-3 px-7 rounded-lg text-white"
                  >
                    Work with Us
                  </button>
                </div>
                {/* <div className="mt-5">
                  <TrustedClients />
                </div> */}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default ImpactHero
