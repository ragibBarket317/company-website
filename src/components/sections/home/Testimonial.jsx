import React from 'react'
import { Swiper, SwiperSlide } from 'swiper/react'
// Import Swiper styles
import 'swiper/css'
import 'swiper/css/effect-cards'

// import required modules
import { EffectCards } from 'swiper/modules'
import { Autoplay, Pagination, Navigation } from 'swiper/modules'

const Testimonial = () => {
  return (
    <div className="container py-[60px]">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 px-10 py-12 items-center">
        <div>
          <h4 className="text-orange-600 font-semibold">
            Client’s Testimonial
          </h4>
          <h2 className="text-2xl md:text-5xl font-bold text-white mt-2">
            Problem-solving excellence by the team
          </h2>
          <p className="mt-4 text-gray-200 text-[18px] dark:text-gray-400">
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

        <div className="relative bg-[#11112E] border-[#4b486e]/30 border p-6 rounded-xl shadow-lg">
          <div className="circlePosition w-[400px] h-[80px] bg-[#eb26fd] rounded-full absolute z-1 top-[50%] left-[50%] translate-x-[-50%] translate-y-[-50%] blur-[200px]"></div>
          <div className="flex flex-col md:flex md:flex-row items-center gap-4">
            <img
              src="https://i.pravatar.cc/80?img=5"
              className="w-16 h-16 rounded-full border"
            />
            <div>
              <h3 className="font-semibold text-xl text-white font-head">
                Eoin Ryan
              </h3>
              <p className="text-gray-200 text-[18px] fond-body mt-1">
                Working with Rajat, Neelam, Bikram, Smith, and the rest of the
                team has been fantastic. Their dedication through this
                challenging journey has made all the difference. Cheers!
              </p>
            </div>
          </div>
          {/* <button className="mt-4 flex items-center gap-2 text-red-500 font-medium">
            ▶ Watch Testimonial Video
          </button> */}
        </div>
      </div>
    </div>
  )
}

export default Testimonial
