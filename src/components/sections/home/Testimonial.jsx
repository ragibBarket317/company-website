import React from 'react'
import { Swiper, SwiperSlide } from 'swiper/react'

// Swiper styles
import 'swiper/css'
import 'swiper/css/pagination'
import 'swiper/css/autoplay'

// Modules
import { Pagination, Autoplay } from 'swiper/modules'

const testimonials = [
  {
    name: 'Eoin Ryan',
    img: 'https://randomuser.me/api/portraits/men/32.jpg',
    text: 'Working with Rajat, Neelam, Bikram, Smith, and the team was fantastic. Their dedication made all the difference.',
  },
  {
    name: 'Sophia Carter',
    img: 'https://randomuser.me/api/portraits/women/44.jpg',
    text: 'The team delivered everything on time with top quality. Very easy to work with and very professional.',
  },
  {
    name: 'Michael Johnson',
    img: 'https://randomuser.me/api/portraits/men/41.jpg',
    text: 'Outstanding work! Clean code, great communication, and they exceeded expectations.',
  },
  {
    name: 'Emma Williams',
    img: 'https://randomuser.me/api/portraits/women/50.jpg',
    text: 'Highly impressed with their attention to detail. Everything was perfect and smooth.',
  },
  {
    name: 'David Smith',
    img: 'https://randomuser.me/api/portraits/men/60.jpg',
    text: 'A skilled and experienced team. They handled complex tasks with ease.',
  },
  {
    name: 'Isabella Green',
    img: 'https://randomuser.me/api/portraits/women/68.jpg',
    text: 'Amazing creativity and execution. They went above and beyond every time.',
  },
]

const Testimonial = () => {
  return (
    <div className="container py-[40px] md:py-[80px]">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 py-12 items-center">
        {/* Left Content */}
        <div>
          <h4 className="text-orange-600 font-semibold text-[12px] md:text-[14px]">
            Client’s Testimonial
          </h4>
          <h2 className="text-xl md:text-4xl font-bold text-white mt-2">
            Problem-solving excellence by the team
          </h2>
          <p className="mt-4 text-gray-200 text-[14px] md:text-[18px] dark:text-gray-400">
            We follow a customer-centric approach that ensures long-term
            partnerships built on trust and performance.
          </p>
        </div>

        {/* Right Swiper Slider */}
        <div className="relative bg-[#11112E] border-[#4b486e]/30 border p-6 rounded-xl shadow-lg pb-12">
          <div className="w-[400px] h-[80px] bg-blue-500 rounded-full absolute z-1 top-[50%] left-[50%] translate-x-[-50%] translate-y-[-50%] blur-[200px]"></div>

          <Swiper
            modules={[Pagination, Autoplay]}
            spaceBetween={30}
            slidesPerView={1}
            autoplay={{ delay: 5000 }}
            pagination={{
              el: '.custom-pagination',
              clickable: true,
            }}
            loop={true}
            className="testimonialSwiper"
          >
            {testimonials.map((item, index) => (
              <SwiperSlide key={index}>
                <div className="flex flex-col md:flex-row items-center gap-4">
                  <img
                    src={item.img}
                    className="w-16 h-16 rounded-full border object-cover"
                  />
                  <div>
                    <h3 className="font-semibold text-lg md:text-xl text-white">
                      {item.name}
                    </h3>
                    <p className="text-gray-200 text-[13px] md:text-[18px] mt-1">
                      {item.text}
                    </p>
                  </div>
                </div>
              </SwiperSlide>
            ))}
          </Swiper>

          {/* Default Swiper Pagination Dots below */}
          <div className="custom-pagination flex justify-center mt-4"></div>
        </div>
      </div>
    </div>
  )
}

export default Testimonial
