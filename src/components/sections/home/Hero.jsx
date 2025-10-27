import React, { useEffect, useRef, useState } from 'react'
import bgImage from '../../../assets/images/hero-bg.jpg'
import grid from '../../../assets/images/grid.jpg'
import Lottie from 'lottie-react'
import coding from '../../../assets/animation/Coding.json'
import starfall from '../../../assets/animation/Starfall.json'
import world from '../../../assets/animation/World.json'

const Hero = () => {
  return (
    <div
      className="relative max-h-[90vh] h-[85vh] bg-cover bg-center p-6 "
      // style={{ backgroundImage: `url(${bgImage})` }}
    >
      <div className="absolute inset-0 bg-cyan-950 mix-blend-multiply"></div>
      <div
        className="absolute inset-0 -z-10 bg-cover"
        style={{
          backgroundImage: `url(${grid})`,
        }}
      ></div>
      <div className="absolute inset-0 bg-blue-900/70 mix-blend-multiply"></div>
      <div className="absolute inset-0 pointer-events-none">
        <div className="w-full h-full bg-[radial-gradient(circle_at_top_right,_rgba(255,255,255,0.3),_transparent_70%)]"></div>
      </div>
      <div className="container z-10">
        <div className="flex gap-5">
          <div className="md:w-[50%] z-10">
            <div className="h-[70vh] flex flex-col justify-center items-center gap-5">
              <div className="space-y-5">
                <h1 className="text-2xl md:text-2xl lg:text-6xl text-white font-extrabold">
                  Lorem Ipsum is simply dummy text of the printing and
                  typesetting industry
                </h1>
                <p className="text-gray-200">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Neque, cumque adipisci voluptas voluptate consequuntur, omnis
                  provident autem tenetur unde, reiciendis quos accusantium
                  voluptatum! Sunt recusandae eligendi enim! Ut, labore ratione!
                </p>
                <div className="flex gap-5">
                  <button className="bg-cyan-500 shadow-lg shadow-cyan-500/50 py-3 px-7 rounded-lg">
                    Subscribe
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
              <Lottie
                animationData={world}
                loop
                autoplay
                className="w-[100%] md:w-[60%] h-auto relative z-10"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Hero
