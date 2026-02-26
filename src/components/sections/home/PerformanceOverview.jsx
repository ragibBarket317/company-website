import React, { useEffect, useState } from 'react'
import { ShieldCheck, Users, Zap, TrendingUp } from 'lucide-react'

const MAX_REACH = 45000
const MIN_REACH = 1000

export default function PerformanceOverview() {
  const [uptime, setUptime] = useState(99.5)
  const [reach, setReach] = useState(1493)
  const [efficiency, setEfficiency] = useState(95.0)
  const [expansion, setExpansion] = useState(24)

  const [initialQuarterReach, setInitialQuarterReach] = useState(1493)

  useEffect(() => {
    const interval = setInterval(() => {
      setUptime((prev) => {
        // small random change between -0.05 to +0.05
        let change = (Math.random() - 0.5) * 0.1
        let newUptime = prev + change

        // clamp to 98.00 - 99.99
        if (newUptime > 99.99) newUptime = 99.99
        if (newUptime < 98.0) newUptime = 98.0

        return parseFloat(newUptime.toFixed(2))
      })

      setEfficiency((prev) => {
        // small random change between -0.1 to +0.1
        let change = (Math.random() - 0.5) * 0.2
        let newEff = prev + change

        // clamp to 94 - 96
        if (newEff > 96) newEff = 96
        if (newEff < 94) newEff = 94

        return parseFloat(newEff.toFixed(2))
      })
    }, 5000) // 5 sec interval

    return () => clearInterval(interval)
  }, [])

  // 🔥 Smart Live Simulation
  useEffect(() => {
    const interval = setInterval(() => {
      setReach((prev) => {
        let growth = Math.floor(Math.random() * 9) // 0-8
        let churn = Math.floor(Math.random() * 7) // 0-6

        // Rare churn spike (5%)
        if (Math.random() < 0.05) {
          churn = Math.floor(Math.random() * 21) + 20 // 20-40
        }

        // Slow growth near max
        if (prev > 40000) {
          growth = Math.floor(growth / 2)
        }

        let newReach = prev + growth - churn

        if (newReach > 45000) newReach = 45000
        if (newReach < 1000) newReach = 1000

        return newReach
      })
    }, 5000)

    return () => clearInterval(interval)
  }, [])

  // 📊 Quarterly Expansion (Integer only)
  useEffect(() => {
    const quarterlyInterval = setInterval(() => {
      setExpansion((prevExpansion) => {
        const growthPercent =
          ((reach - initialQuarterReach) / initialQuarterReach) * 100

        setInitialQuarterReach(reach)

        // return prevExpansion + Math.floor(growthPercent) // no decimal
        return Math.floor(growthPercent) // no decimal
      })
    }, 20000)

    return () => clearInterval(quarterlyInterval)
  }, [reach, initialQuarterReach])

  return (
    <div className="min-h-screen text-white p-10">
      <div className="container mx-auto">
        {/* Header */}
        <div className="flex justify-between items-center mb-8">
          <div>
            <p className="text-xs tracking-[0.3em] text-cyan-400 mb-2 uppercase">
              Real-time Analytics Dashboard
            </p>
            <h2 className="text-xl md:text-2xl lg:text-5xl font-extrabold dark:text-white">
              Performance Overview
            </h2>
          </div>

          <div className="bg-green-500/10 text-green-400 px-4 py-2 rounded-full text-sm border border-green-500/30">
            ● SYSTEM: STABLE
          </div>
        </div>

        {/* Cards */}
        <div className="grid md:grid-cols-2 gap-6">
          <Card
            icon={<ShieldCheck className="text-green-400" />}
            title={`${uptime}%`}
            label="UPTIME"
            subtitle="Enterprise stability"
          />

          <Card
            icon={<Users className="text-blue-400" />}
            title={reach.toLocaleString()}
            label="REACH"
            subtitle="Active users"
          />

          <Card
            icon={<Zap className="text-yellow-400" />}
            title={`${efficiency}%`}
            label="EFFICIENCY"
            subtitle="Optimized throughput"
          />

          <Card
            icon={<TrendingUp className="text-purple-400" />}
            title={`+${expansion}%`}
            label="EXPANSION"
            subtitle="Quarterly growth"
          />
        </div>
      </div>
    </div>
  )
}

function Card({ icon, title, label, subtitle }) {
  return (
    <div
      className="bg-[#1e293b] border border-gray-800 rounded-2xl p-6 shadow-lg transition-all duration-300 ease-out
    hover:border-cyan-400
    hover:shadow-[0_0_25px_rgba(34,211,238,0.4)]
    hover:scale-[1.03]"
    >
      <div className="flex justify-between items-start mb-6">
        <div className="bg-gray-800 p-3 rounded-xl">{icon}</div>
        <span className="text-xs text-green-400 bg-green-500/10 px-2 py-1 rounded-md">
          Live
        </span>
      </div>

      <h2 className="text-3xl font-bold mb-2">{title}</h2>
      <p className="text-gray-400 text-sm font-medium">{label}</p>
      <p className="text-gray-500 text-xs mt-1">{subtitle}</p>
    </div>
  )
}
