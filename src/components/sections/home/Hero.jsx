import React from 'react'
import bgImage from '../../../assets/images/hero-bg.jpg'

const Hero = () => {
  return (
    <div
      className="max-h-[80vh] h-[80vh] bg-cover bg-center p-6"
      style={{ backgroundImage: `url(${bgImage})` }}
    >
      <div className="container">
        <div className="flex gap-5">
          <div className="w-[50%]">
            <div className="h-[70vh] flex flex-col justify-center items-center gap-5">
              <div className="space-y-5">
                <h1 className="text-5xl text-white font-head">
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
          <div className="w-[50%]"></div>
        </div>
      </div>
    </div>
  )
}

export default Hero
