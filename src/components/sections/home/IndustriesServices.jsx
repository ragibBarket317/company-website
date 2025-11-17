import React from 'react'
import {
  FaMoneyCheckAlt,
  FaDumbbell,
  FaHamburger,
  FaHospitalAlt,
  FaPlane,
  FaBookReader,
  FaTools,
  FaBuilding,
} from 'react-icons/fa'

const IndustriesServices = () => {
  return (
    <div className="relative py-[80px]">
      <div className=" w-full h-full flex justify-center items-center ">
        <div className="container">
          <div className="circlePosition w-[400px] h-[100px] bg-blue-400 rounded-full absolute z-1 top-[25%] blur-[200px]"></div>
          <div className="">
            <h2 className="text-center font-head text-3xl md:text-5xl font-bold text-white">
              Industries Serves With its Development Expertise
            </h2>
            <p className="text-center font-body text-[18px] text-gray-200 mt-3 max-w-4xl mx-auto">
              delivers exceptional AI applications and IT services across
              multiple industry sectors, empowering start-ups, scale-ups, IT
              staff agencies, and large enterprises to fulfill their digital
              transformation goals.
            </p>

            <div className="mt-10 grid grid-cols-2 md:grid-cols-4 gap-6 px-10">
              {[
                {
                  icon: FaMoneyCheckAlt,
                  label: 'Fintech',
                  bgColor: 'bg-gray-100',
                  iconColor: 'text-blue-600',
                },
                {
                  icon: FaDumbbell,
                  label: 'Fitness',
                  bgColor: 'bg-gray-100',
                  iconColor: 'text-green-600',
                },
                {
                  icon: FaHamburger,
                  label: 'Food Delivery',
                  bgColor: 'bg-gray-100',
                  iconColor: 'text-yellow-600',
                },
                {
                  icon: FaHospitalAlt,
                  label: 'Healthcare',
                  bgColor: 'bg-gray-100',
                  iconColor: 'text-red-600',
                },
                {
                  icon: FaPlane,
                  label: 'Travel',
                  bgColor: 'bg-gray-100',
                  iconColor: 'text-indigo-600',
                },
                {
                  icon: FaBookReader,
                  label: 'Education',
                  bgColor: 'bg-gray-100',
                  iconColor: 'text-purple-600',
                },
                {
                  icon: FaTools,
                  label: 'Handyman',
                  bgColor: 'bg-gray-100',
                  iconColor: 'text-orange-600',
                },
                {
                  icon: FaBuilding,
                  label: 'Real Estate',
                  bgColor: 'bg-gray-100',
                  iconColor: 'text-gray-600',
                },
              ].map((item, i) => (
                <div
                  key={i}
                  className={`p-6 backdrop-blur-xl bg-white/10 border border-white/20 

hover:bg-white/20 flex flex-col items-center justify-center rounded-xl shadow-xl hover:scale-105 duration-500 transition ${item.bgColor}`}
                >
                  <item.icon size={40} className={item.iconColor} />
                  <p className="mt-3 font-medium text-white">{item.label}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default IndustriesServices
