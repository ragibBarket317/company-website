import React from 'react'
import {
  FaCloud,
  FaCogs,
  FaRobot,
  FaCheckCircle,
  FaShieldAlt,
  FaChartPie,
} from 'react-icons/fa'
import software from '../../../assets/images/software.png'
import webpage from '../../../assets/images/webpage.png'
import { IoMdCheckmarkCircleOutline } from 'react-icons/io'

export default function SoftwareOverview() {
  return (
    <div className="py-[80px] text-gray-800">
      {/* Trusted By */}
      {/* <section className="py-16 px-6 text-center">
        <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-10">
          Trusted by Industry Leaders
        </h2>

        <div className="flex flex-wrap justify-center gap-10 grayscale opacity-80">
          {[
            'Siemens',
            'CapitalOne',
            'Infosphere',
            'NovaTech',
            'BlueShield',
          ].map((item, i) => (
            <div key={i} className="text-lg font-semibold text-gray-600">
              {item}
            </div>
          ))}
        </div>
      </section> */}
      <div className="container">
        <h1 className="text-center text-2xl md:text-4xl font-bold text-white">
          Area Of Our Software Expertise Over Two Decades
        </h1>

        {/* Multi-Cloud Governance */}
        <section className="py-[80px] px-6 container mx-auto grid md:grid-cols-2 gap-12 items-center">
          <div className="flex items-center justify-center">
            <div className="w-60 h-60 lg:w-[500px] lg:h-[500px] rounded-full bg-[#15192C] border border-[#272d4d]/90 flex items-center justify-center shadow-inner">
              <img src={software} alt="" className="w-full" />
            </div>
          </div>

          <div>
            <p className="uppercase text-orange-600 text-sm font-semibold mb-2">
              Standardized Multi‑Cloud Governance
            </p>
            <h2 className="text-3xl md:text-4xl font-bold text-gray-100 mb-4">
              Strategic Software Team Augmentation
            </h2>
            <p className="text-gray-300 text-[18px] leading-relaxed">
              Gain access to qualified experienced and qualified software
              engineers without having to go through time-consuming and
              expensive hiring processes. We can help you extend your software
              team so you can start making a difference right away.
            </p>
            <ul className="text-gray-300 text-[18px] space-y-2 mt-5">
              <li className="flex items-center gap-2">
                <IoMdCheckmarkCircleOutline
                  size={24}
                  className="text-orange-600"
                />
                <p>High-performing team extension with skilled professionals</p>
              </li>
              <li className="flex items-center gap-2">
                <IoMdCheckmarkCircleOutline
                  size={24}
                  className="text-orange-600"
                />
                <p>Reduction in staff fluctuations</p>
              </li>
              <li className="flex items-center gap-2">
                <IoMdCheckmarkCircleOutline
                  size={24}
                  className="text-orange-600"
                />
                <p>Scalable and evolves as your business grows</p>
              </li>
              <li className="flex items-center gap-2">
                <IoMdCheckmarkCircleOutline
                  size={24}
                  className="text-orange-600"
                />
                <p>Get constant support from a technical team</p>
              </li>
            </ul>
          </div>
        </section>

        {/* Automated Workflows */}
        <section className="py-[80px] px-6 container mx-auto grid md:grid-cols-2 gap-12 items-center">
          <div>
            <p className="uppercase text-orange-600 text-sm font-semibold mb-2">
              Standardized Multi‑Cloud Governance
            </p>
            <h2 className="text-3xl md:text-4xl font-bold text-gray-100 mb-4">
              Strategic Software Team Augmentation
            </h2>
            <p className="text-gray-300 text-[18px] leading-relaxed">
              Gain access to qualified experienced and qualified software
              engineers without having to go through time-consuming and
              expensive hiring processes. We can help you extend your software
              team so you can start making a difference right away.
            </p>
            <ul className="text-gray-300 text-[18px] space-y-2 mt-5">
              <li className="flex items-center gap-2">
                <IoMdCheckmarkCircleOutline
                  size={24}
                  className="text-orange-600"
                />
                <p>High-performing team extension with skilled professionals</p>
              </li>
              <li className="flex items-center gap-2">
                <IoMdCheckmarkCircleOutline
                  size={24}
                  className="text-orange-600"
                />
                <p>Reduction in staff fluctuations</p>
              </li>
              <li className="flex items-center gap-2">
                <IoMdCheckmarkCircleOutline
                  size={24}
                  className="text-orange-600"
                />
                <p>Scalable and evolves as your business grows</p>
              </li>
              <li className="flex items-center gap-2">
                <IoMdCheckmarkCircleOutline
                  size={24}
                  className="text-orange-600"
                />
                <p>Get constant support from a technical team</p>
              </li>
            </ul>
          </div>

          <div className="flex items-center justify-center">
            <div className="p-8 w-60 h-60 lg:w-[500px] lg:h-[500px] rounded-full bg-[#15192C] border border-[#272d4d]/90 flex items-center justify-center shadow-inner">
              <img src={webpage} alt="" className="w-full" />
            </div>
          </div>
        </section>

        {/* Policy Guardrails */}
        {/* <section className="py-20 h-[80vh] px-6 container mx-auto grid md:grid-cols-2 gap-12 items-center">
          <div className="flex items-center justify-center">
            <div className="w-[500px] h-[500px] rounded-full bg-[#15192C] border border-[#272d4d]/90 flex items-center justify-center shadow-inner">
              <img src={software} alt="" className="w-full" />
            </div>
          </div>

          <div>
            <p className="uppercase text-orange-600 text-sm font-semibold mb-2">
              Prevent Cloud Waste & Risks
            </p>
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Automated Policy Guardrails
            </h2>
            <p className="text-gray-600 leading-relaxed mb-6">
              Enforce AI-assisted guardrails across the entire cloud lifecycle.
              From identifying risky misconfigurations to auto-remediation, our
              system ensures continuous optimization and strong governance.
            </p>
          </div>
        </section> */}
      </div>
    </div>
  )
}
