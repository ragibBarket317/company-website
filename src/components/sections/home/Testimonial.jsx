import React from 'react'

const Testimonial = () => {
  return (
    <div className="container py-[60px]">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 px-10 py-12 items-center">
        <div>
          <h4 className="text-yellow-500 font-semibold">
            Client’s Testimonial
          </h4>
          <h2 className="text-2xl md:text-3xl font-bold text-indigo-900 mt-2">
            Problem-solving excellence by the team
          </h2>
          <p className="mt-4 text-gray-600">
            We follow a customer-centric approach which ensures that our
            services are at par with their requirements. This turns us to their
            long-term technology partners.
          </p>
          <div className="flex mt-5 -space-x-3">
            <img
              src="https://i.pravatar.cc/40?img=1"
              className="w-10 h-10 rounded-full border"
            />
            <img
              src="https://i.pravatar.cc/40?img=2"
              className="w-10 h-10 rounded-full border"
            />
            <img
              src="https://i.pravatar.cc/40?img=3"
              className="w-10 h-10 rounded-full border"
            />
            <img
              src="https://i.pravatar.cc/40?img=4"
              className="w-10 h-10 rounded-full border"
            />
          </div>
        </div>

        <div className="bg-blue-50 p-6 rounded-xl shadow">
          <div className="flex items-center gap-4">
            <img
              src="https://i.pravatar.cc/80?img=5"
              className="w-16 h-16 rounded-full border"
            />
            <div>
              <h3 className="font-semibold text-lg">Eoin Ryan</h3>
              <p className="text-gray-600 text-sm mt-1">
                Working with Rajat, Neelam, Bikram, Smith, and the rest of the
                team has been fantastic. Their dedication through this
                challenging journey has made all the difference. Cheers!
              </p>
            </div>
          </div>
          <button className="mt-4 flex items-center gap-2 text-red-500 font-medium">
            ▶ Watch Testimonial Video
          </button>
        </div>
      </div>
    </div>
  )
}

export default Testimonial
