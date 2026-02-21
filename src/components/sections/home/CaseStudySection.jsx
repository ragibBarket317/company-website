'use client'

import CaseStudyCard from './CaseStudyCard'
import { TrendingUp } from 'lucide-react'

export default function CaseStudySection() {
  return (
    <section className="py-24  text-white">
      <div className="">
        {/* Section Header */}
        <div className="container mb-14">
          <p className="text-[10px] tracking-[0.3em] text-cyan-400 mb-4 uppercase">
            Case Impact
          </p>
          <h2 className="text-xl md:text-4xl font-extrabold dark:text-white">
            Strategic Partnerships
          </h2>
          <p className="text-gray-400 max-w-2xl mt-2">
            Intexa isn't just software; it's the foundation for growth in global
            logistics and healthcare.
          </p>
        </div>

        {/* Case Study Cards */}
        <div className="max-w-4xl mx-auto px-6 mt-16">
          <div className="space-y-6">
            <CaseStudyCard
              type="logistics"
              title="Worldwide Logistic Inc."
              subtitle="$100M Enterprise"
            />

            <CaseStudyCard
              type="healthcare"
              title="PharmAid-Rx"
              subtitle="Million Dollar Platform"
            />

            <CaseStudyCard type="more" title="Many More..." />
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
