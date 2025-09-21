import React from 'react'
import { FaTaxi } from 'react-icons/fa'

const IndustriesServices = () => {
  return (
    <div className="bg-gray-50 dark:bg-dark-bg">
      <div className="container py-[60px]">
        <div className="">
          <h2 className="text-center text-2xl md:text-3xl font-bold  dark:text-white">
            Industries Serves With its Development Expertise
          </h2>
          <p className="text-center text-gray-600 dark:text-gray-400 mt-3 max-w-4xl mx-auto">
            delivers exceptional AI applications and IT services across multiple
            industry sectors, empowering start-ups, scale-ups, IT staff
            agencies, and large enterprises to fulfill their digital
            transformation goals.
          </p>

          <div className="mt-10 grid grid-cols-2 md:grid-cols-5 gap-6 px-10">
            {[
              {
                icon: FaTaxi,
                label: 'Fintech',
                bgColor: 'bg-blue-100',
                iconColor: 'text-blue-600',
              },
              {
                icon: FaTaxi,
                label: 'Fitness',
                bgColor: 'bg-green-100',
                iconColor: 'text-green-600',
              },
              {
                icon: FaTaxi,
                label: 'Food Delivery',
                bgColor: 'bg-yellow-100',
                iconColor: 'text-yellow-600',
              },
              {
                icon: FaTaxi,
                label: 'Healthcare',
                bgColor: 'bg-red-100',
                iconColor: 'text-red-600',
              },
              {
                icon: FaTaxi,
                label: 'Dating',
                bgColor: 'bg-pink-100',
                iconColor: 'text-pink-600',
              },
              {
                icon: FaTaxi,
                label: 'Travel',
                bgColor: 'bg-indigo-100',
                iconColor: 'text-indigo-600',
              },
              {
                icon: FaTaxi,
                label: 'Education',
                bgColor: 'bg-purple-100',
                iconColor: 'text-purple-600',
              },
              {
                icon: FaTaxi,
                label: 'Handyman',
                bgColor: 'bg-orange-100',
                iconColor: 'text-orange-600',
              },
              {
                icon: FaTaxi,
                label: 'Taxi',
                bgColor: 'bg-teal-100',
                iconColor: 'text-teal-600',
              },
              {
                icon: FaTaxi,
                label: 'Real Estate',
                bgColor: 'bg-gray-100',
                iconColor: 'text-gray-600',
              },
            ].map((item, i) => (
              <div
                key={i}
                className={`p-6 flex flex-col items-center justify-center rounded-xl shadow-xl hover:scale-105 duration-500 transition ${item.bgColor}`}
              >
                <item.icon size={40} className={item.iconColor} />
                <p className="mt-3 font-medium">{item.label}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}

export default IndustriesServices
