import React from 'react'

const IndustriesServices = () => {
  return (
    <div className="container py-[60px]">
      <div className="bg-gray-50 py-12">
        <h2 className="text-center text-2xl md:text-3xl font-bold text-indigo-900">
          Industries that iTechnolabs Serves With its Development Expertise
        </h2>
        <p className="text-center text-gray-600 mt-3 max-w-4xl mx-auto">
          iTechnolabs delivers exceptional AI applications and IT services
          across multiple industry sectors, empowering start-ups, scale-ups, IT
          staff agencies, and large enterprises to fulfill their digital
          transformation goals.
        </p>

        <div className="mt-10 grid grid-cols-2 md:grid-cols-5 gap-6 px-10">
          {[
            { icon: <GiTakeMyMoney size={40} />, label: 'Fintech' },
            { icon: <MdFitnessCenter size={40} />, label: 'Fitness' },
            { icon: <GiFoodTruck size={40} />, label: 'Food Delivery' },
            { icon: <MdHealthAndSafety size={40} />, label: 'Healthcare' },
            { icon: <FaHandsHelping size={40} />, label: 'Dating' },
            { icon: <RiHotelLine size={40} />, label: 'Travel' },
            { icon: <MdOutlineSchool size={40} />, label: 'Education' },
            { icon: <GiAutoRepair size={40} />, label: 'Handyman' },
            { icon: <GiTaxi size={40} />, label: 'Taxi' },
            { icon: <HiOutlineMail size={40} />, label: 'Real Estate' },
          ].map((item, i) => (
            <div
              key={i}
              className="bg-white p-6 flex flex-col items-center justify-center rounded-xl shadow hover:shadow-lg transition"
            >
              {item.icon}
              <p className="mt-3 font-medium">{item.label}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}

export default IndustriesServices
