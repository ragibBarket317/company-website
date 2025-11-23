import Lottie from 'lottie-react'
import React from 'react'
import {
  FaBrain,
  FaRobot,
  FaChartLine,
  FaCodeBranch,
  FaCogs,
  FaLanguage,
  FaUsers,
  FaDatabase,
  FaProjectDiagram,
  FaServer,
  FaShieldAlt,
  FaUserTie,
} from 'react-icons/fa'
import ai from '../assets/animation/AI animation.json'
import Hero from '../components/sections/home/Hero'
import AIHero from '../components/sections/aiDevelopment/AIHero'
import WhyChooseUs from '../components/sections/home/WhyChooseUs'
import GetFreeQuote from '../components/sections/home/GetFreeQuote'
import AIHeroSmallScreen from '../components/sections/aiDevelopment/AIHeroSmallScreen'
import AISoftwareDevelopment from '../components/sections/aiDevelopment/AISoftwareDevelopment'
import PracticalAISolutions from '../components/sections/aiDevelopment/PracticalAISolutions'
import WhyPartnarOurAI from '../components/sections/aiDevelopment/WhyPartnarOurAI'

export default function AIDevelopmentPage() {
  return (
    <div className="">
      <div className="md:hidden">
        <AIHeroSmallScreen />
      </div>

      <div className="hidden md:block">
        <AIHero />
      </div>

      <div className="text-gray-800">
        {/* ===== Section 1: AI Development Services ===== */}
        <AISoftwareDevelopment />
        {/* ===== Section 2: AI Solutions Businesses Need ===== */}
        <PracticalAISolutions />
        {/* ===== Section 3: AI Banner ===== */}
        <div className="py-[40px] md:py-[80px]">
          <div className=" bg-gradient-to-b from-[#15192C] to-[#252b4b] md:rounded-tl-[200px] md:rounded-br-[200px] px-6 text-white">
            <div className="w-full h-full flex justify-center items-center">
              <div>
                <div className="container mx-auto grid md:grid-cols-2 gap-8 items-center">
                  <div>
                    <Lottie
                      animationData={ai}
                      loop
                      autoplay
                      className="w-full lg:w-[600px] h-full p-10"
                    />
                  </div>
                  <div className="pb-10 md:pb-0">
                    <h2 className="text-xl md:text-4xl font-bold mb-4">
                      AI Development Services That Deliver Real Results
                    </h2>
                    <p className="text-indigo-100 text-[14px] md:text-[18px] mb-6">
                      Our AI experts bring years of experience in deep learning,
                      automation, and cloud integration to build intelligent
                      systems that actually solve your business challenges — not
                      just showcase technology.
                    </p>
                    <button className="bg-white text-indigo-700 px-6 py-3 rounded-lg font-medium hover:bg-indigo-100 transition">
                      Explore AI Expertise
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* ===== Section 4: Why Choose Us ===== */}
        <WhyPartnarOurAI />
        <WhyChooseUs />
        <GetFreeQuote />
      </div>
    </div>
  )
}
