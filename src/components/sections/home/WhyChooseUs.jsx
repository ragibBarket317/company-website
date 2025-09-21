import React from 'react'
import bussiness from '../../../assets/images/bussiness.jpg'

const WhyChooseUs = () => {
  return (
    <div className="bg-gray-50 dark:bg-dark-bg">
      <div className="container py-[60px]">
        <h2 className="text-center text-2xl md:text-3xl font-bold  dark:text-white">
          Why Choose for Digital Solutions?
        </h2>
        <p className="text-center text-gray-600 dark:text-gray-400 mt-3 max-w-4xl mx-auto">
          delivers exceptional AI applications and IT services across multiple
          industry sectors, empowering start-ups, scale-ups, IT staff agencies,
          and large enterprises to fulfill their digital transformation goals.
        </p>
        <div className="grid grid-cols-2 grap-5 mt-10 items-start">
          <div className="flex items-center">
            <div className="p-5 grid grid-cols-2 gap-5">
              <div className="p-3 shadow rounded-2xl">
                <div className="text-xl font-bold bg-blue-950 text-blue-300 rounded-full p-2 w-10 h-10 mb-2">
                  01
                </div>
                <h4 className="text-md font-semibold mb-2">
                  Less Time to Market
                </h4>
                <p>
                  Our development approach is such that it will take no time for
                  your app to hit the market and enchant your audience
                </p>
              </div>
              <div className="p-3 shadow rounded-2xl">
                <div className="text-xl font-bold bg-red-700 text-red-300 rounded-full p-2 w-10 h-10 mb-2">
                  02
                </div>
                <h4 className="text-md font-semibold mb-2">
                  Dedicated Development
                </h4>
                <p>
                  We build a cross-functional team which is devoted to cater you
                  with a premier app development experience
                </p>
              </div>
              <div className="p-3 shadow rounded-2xl">
                <div className="text-xl font-bold bg-violet-700 text-violet-300 rounded-full p-2 w-10 h-10 mb-2">
                  03
                </div>
                <h4 className="text-md font-semibold mb-2">
                  Robust Development
                </h4>
                <p>
                  When it comes to app development, we always make sure that we
                  build a product that is strong and secure
                </p>
              </div>
              <div className="p-3 shadow rounded-2xl">
                <div className="text-xl font-bold bg-green-950 text-green-300 rounded-full p-2 w-10 h-10 mb-2">
                  04
                </div>
                <h4 className="text-md font-semibold mb-2">
                  Less Time to Market
                </h4>
                <p>
                  Our development approach is such that it will take no time for
                  your app to hit the market and enchant your audience
                </p>
              </div>
            </div>
          </div>
          <div className="p-5">
            <div className="flex items-center justify-center h-full">
              <img
                src={bussiness}
                alt=""
                className="rounded-2xl shadow h-[420px]"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default WhyChooseUs
