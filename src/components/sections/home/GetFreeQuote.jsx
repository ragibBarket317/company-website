import React from 'react'
import rocket from '../../../assets/animation/Rocket.json'
import Lottie from 'lottie-react'
import Form from '../../reuseableComponents/Form'

const GetFreeQuote = () => {
  return (
    <div className="h-[100vh]">
      <div className="w-full h-full flex justify-center items-center">
        <div className="relative container pb-[60px]">
          <div className="circlePosition w-[400px] h-[100px] bg-blue-400 rounded-full absolute z-1 top-[25%] blur-[200px]"></div>
          <div className="grid grid-cols-1 md:grid-cols-5 gap-14">
            <div className="relative md:col-span-3 bg-gradient-to-tl from-[#161B2F] to-[#0f1220] text-white rounded-3xl p-10 flex flex-col justify-center">
              <div className="w-20 h-20 absolute top-[20px] right-[20px] bg-[#262d49] rounded-full ">
                <Lottie
                  animationData={rocket}
                  loop
                  autoplay
                  className="w-full h-full"
                />
              </div>
              <h2 className="text-3xl font-head md:text-4xl font-bold leading-snug">
                Ready to Innovate Together? Let’s <br /> Connect
              </h2>
              <p className="mt-5 text-lg">
                We’re your one-stop destination for extensive web and mobile app
                solutions. Let’s talk about how the iTechnoLabs team can assist
                you in building your next big project. We’re here to turn your
                visions into reality.
              </p>
            </div>

            <div
              className="md:col-span-2 backdrop-blur-xl bg-[#151420]/10 border border-[#4b486e]/30

 shadow-2xl text-white rounded-3xl p-8"
            >
              <Form />
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default GetFreeQuote
