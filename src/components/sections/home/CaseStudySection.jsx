'use client'

import caseStudy from '../../../assets/images/case.jpg'
import CaseStudyCard from './CaseStudyCard'
import { TrendingUp } from 'lucide-react'

export default function CaseStudySection() {
  return (
    <section className="py-24  text-white">
      <div className="">
        {/* Section Header */}
        <div className="container mb-14">
          <p className="text-xs tracking-[0.3em] text-cyan-400 mb-4 uppercase">
            Case Impact
          </p>
          <h2 className="text-xl md:text-2xl lg:text-5xl font-extrabold dark:text-white">
            Strategic Partnerships
          </h2>
          <p className="text-gray-400 max-w-3xl mt-2 text-justify">
            At Intexa, we believe meaningful digital transformation is built
            through long term partnership, not transactions. We work closely
            with our clients to align disciplined engineering with strategic
            business goals, supporting roadmap planning, infrastructure
            evolution, and continuous optimization to ensure technology remains
            a secure, scalable, and lasting asset.
          </p>
        </div>

        {/* Case Study Cards */}
        <div className="mt-16">
          <div className="container flex items-center gap-5">
            <div className="w-full lg:w-[50%] flex justify-center items-center mt-10 lg:mt-0">
              <div className="relative w-full ">
                {/* Glow Background (optional premium look) */}
                <div className="absolute -inset-4 bg-cyan-500/10 blur-3xl rounded-3xl"></div>

                {/* Image Container */}
                <div className="relative rounded-3xl overflow-hidden border border-white/10 shadow-2xl">
                  <img
                    src={caseStudy}
                    alt="Our Story"
                    className="w-full h-[300px] md:h-[400px] object-cover hover:scale-105 transition duration-700"
                  />
                </div>
              </div>
            </div>
            <div className="w-[50%]">
              <div className="space-y-6">
                <CaseStudyCard
                  type="logistics"
                  title="Worldwide Logistic Inc."
                  subtitle="$100M Enterprise"
                  query="supply-chain"
                />

                <CaseStudyCard
                  type="healthcare"
                  title="PharmAid-Rx"
                  subtitle="Million Dollar Platform"
                  query="supply-medicine"
                />

                <CaseStudyCard
                  type="more"
                  title="Many More..."
                  subtitle="successful Enterprises"
                  query="clients"
                />
              </div>
            </div>
          </div>
        </div>

        {/* CTA Box */}
        {/* <div className="max-w-7xl mx-auto px-6">
          <div
            className=" mt-16 bg-gradient-to-r from-blue-600/20 to-indigo-600/20 
                        border border-blue-500/20 rounded-3xl p-10 backdrop-blur-xl"
          >
            <div className="flex items-center gap-3 mb-4 text-blue-400">
              <TrendingUp size={22} />
              <span className="font-medium">Scale Faster.</span>
            </div>

            <p className="text-gray-400 mb-8 max-w-xl">
              Join 40+ industry leaders who leverage Intexa for critical
              infrastructure management.
            </p>

            <button
              className="bg-white text-black px-8 py-3 rounded-xl font-medium
                             hover:scale-105 transition-all duration-300"
            >
              Contact Sales →
            </button>
          </div>
        </div> */}
      </div>
    </section>
  )
}
