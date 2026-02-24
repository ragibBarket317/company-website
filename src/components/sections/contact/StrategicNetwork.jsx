import React, { useState } from 'react'
import { MapPin, Triangle, Cloud, Hexagon } from 'lucide-react'

const clusters = [
  {
    id: 1,
    tag: 'PRIMARY_HUB_BD',
    city: 'Dhaka',
    coords: '23.8103° N, 90.4125° E',
    role: 'Core Registry',
    latency: '<12ms',
    icon: MapPin,
  },
  {
    id: 2,
    tag: 'EMEA_HUB_UAE',
    city: 'Dubai',
    coords: '25.2048° N, 55.2708° E',
    role: 'Transit Link',
    latency: '<15ms',
    icon: Triangle,
  },
  {
    id: 3,
    tag: 'WEST_CLUSTER_US',
    city: 'San Francisco',
    coords: '37.7749° N, 122.4194° W',
    role: 'AI Training',
    latency: '<28ms',
    icon: Cloud,
  },
  {
    id: 4,
    tag: 'EAST_CLUSTER_CA',
    city: 'Toronto',
    coords: '43.6532° N, 79.3832° W',
    role: 'Asset Vault',
    latency: '<20ms',
    icon: Hexagon,
  },
]

const StrategicNetwork = () => {
  return (
    <section className="text-white mt-20">
      <div className="container">
        {/* Top Label */}
        <div className="mb-16">
          <p className="text-xs tracking-[0.3em] text-cyan-400 mb-4 uppercase">
            ARCHITECTURE / 04 CLUSTERS
          </p>
          <h2 className="text-xl md:text-2xl lg:text-5xl font-bold mb-4">
            Strategic Network Infrastructure.
          </h2>
          <p className="text-gray-200 font-body max-w-3xl text-[16px] text-justify">
            Global delivery points have optimized for low-latency intelligence
            distribution and secure asset management across four continents.
          </p>
        </div>
        {/* <div className=" text-cyan-400 text-xs tracking-widest py-2 mb-8">
          ARCHITECTURE / 04 CLUSTERS
        </div>


        <h1 className="text-5xl md:text-5xl font-bold leading-tight mb-6">
          Strategic Network Infrastructure.
        </h1>


        <p className="text-[16px] text-gray-400 max-w-3xl mb-16">
          Global delivery points have optimized for low-latency intelligence
          distribution and secure asset management across four continents.
        </p> */}

        {/* Cards Container */}
        <div className="max-w-6xl mx-auto">
          <div className="grid md:grid-cols-2 gap-6">
            {clusters.map((cluster) => {
              const Icon = cluster.icon

              return (
                <div
                  key={cluster.id}
                  className="
    group relative p-8 rounded-xl
    bg-gradient-to-br from-[#0F1B2E] to-[#0A1222]
    border border-[#1A2438]
    transition-all duration-300 ease-out
    hover:border-cyan-400
    hover:shadow-[0_0_25px_rgba(34,211,238,0.4)]
    hover:scale-[1.03]
  "
                >
                  {/* Background Icon */}
                  <Icon
                    size={90}
                    strokeWidth={1}
                    className="
    absolute top-6 right-6
    text-white opacity-10
    transition-all duration-300
    group-hover:text-cyan-400
    group-hover:opacity-40
    group-hover:drop-shadow-[0_0_12px_rgba(34,211,238,0.8)]
  "
                  />

                  <div className="text-xs tracking-widest text-cyan-400 mb-4">
                    {cluster.tag}
                  </div>

                  <h3 className="text-2xl font-semibold mb-1">
                    {cluster.city}
                  </h3>

                  <p className="text-sm text-gray-400 mb-8">{cluster.coords}</p>

                  <div className="border-t border-[#1A2438] mb-4"></div>

                  <div className="flex justify-between text-xs text-gray-400 mb-2">
                    <span>ROLE</span>
                    <span className="text-white">{cluster.role}</span>
                  </div>

                  <div className="flex justify-between text-xs text-gray-400">
                    <span>LATENCY</span>
                    <span className="text-green-400">{cluster.latency}</span>
                  </div>
                </div>
              )
            })}
          </div>
        </div>
      </div>
    </section>
  )
}

export default StrategicNetwork
