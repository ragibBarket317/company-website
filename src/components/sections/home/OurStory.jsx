import React from 'react'

const OurStory = () => {
  return (
    <div className="bg-gray-50 dark:bg-dark-bg">
      <div className="container py-[30px] p-6">
        <div className="md:flex gap-5">
          <div className="w-full md:w-[50%]">
            <div className="h-full flex flex-col justify-center">
              <div className="space-y-10">
                <h2 className="text-4xl font-extrabold dark:text-white">
                  Our Story
                </h2>
                <p className="text-gray-800 text-[18px] leading-7 dark:text-gray-300">
                  Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                  Illum nam sint ipsam dignissimos repudiandae sed labore
                  dolorum dolores minima aspernatur! Molestiae enim ad
                  explicabo, iure corporis dolorum autem cum modi eius mollitia
                  voluptatem, cupiditate sint debitis ratione assumenda! Qui
                  quod eligendi quibusdam necessitatibus illo est fuga
                  exercitationem non sunt natus.
                </p>
                {/* <div className="grid grid-cols-4 gap-2">
                <div className="border border-gray-600 py-5 px-2 rounded-lg bg-green-300">
                  <h3>hello</h3>
                </div>
                <div className="border border-gray-600 py-5 px-2 rounded-lg bg-cyan-300">
                  <h3>hello</h3>
                </div>
                <div className="border border-gray-600 py-5 px-2 rounded-lg bg-pink-300">
                  <h3>hello</h3>
                </div>
              </div> */}
                <div className="">
                  <button className="w-full md:w-[50%] bg-blue-300 text-white py-3 px-7 rounded-lg">
                    Learn More About XYZ
                  </button>
                </div>
              </div>
            </div>
          </div>
          <div className="hidden md:block relative w-full md:w-[50%]">
            <div className="circlePosition w-[400px] h-[200px] bg-[#eb26fd] rounded-full absolute z-1 top-[50%] left-[50%] translate-x-[-50%] translate-y-[-50%] blur-[200px]"></div>
            <div className="flex justify-center py-10">
              <div className="relative bg-blue-100 shadow-lg h-[400px] w-[400px]  rounded-xl p-8 flex flex-col gap-6 z-20">
                <div className="absolute left-[-100px] bg-white shadow-md rounded-lg px-10 py-5 border-l-4 border-blue-500">
                  <h2 className="text-3xl font-bold text-blue-600">800+</h2>
                  <p className="text-gray-800">Successful Implementations</p>
                </div>
                <div className="absolute top-[38%] right-[60px] bg-white shadow-md rounded-lg px-10 py-5 border-l-4 border-pink-500">
                  <h2 className="text-3xl font-bold text-blue-600">1000+</h2>
                  <p className="text-gray-800">Successful Implementations</p>
                </div>
                <div className="absolute bottom-[7%] right-[-100px] bg-white shadow-md rounded-lg px-10 py-5 border-l-4 border-green-500">
                  <h2 className="text-3xl font-bold text-blue-600">500+</h2>
                  <p className="text-gray-800">Successful Implementations</p>
                </div>
              </div>
            </div>
          </div>
          <div className="md:hidden w-full md:w-[50%]">
            <div className="flex justify-center py-10">
              <div className="relative bg-blue-100 shadow-lg h-[400px] w-[400px]  rounded-xl p-8 flex flex-col gap-6">
                <div className="absolute left-2 right-2 bg-white shadow-md rounded-lg px-10 py-5 border-l-4 border-blue-500">
                  <h2 className="text-3xl font-bold text-blue-600">800+</h2>
                  <p className="text-gray-800">Successful Implementations</p>
                </div>
                <div className="absolute top-[38%] left-2 right-2 bg-white shadow-md rounded-lg px-10 py-5 border-l-4 border-pink-500">
                  <h2 className="text-3xl font-bold text-blue-600">1000+</h2>
                  <p className="text-gray-800">Successful Implementations</p>
                </div>
                <div className="absolute bottom-[7%] left-2 right-2 bg-white shadow-md rounded-lg px-10 py-5 border-l-4 border-green-500">
                  <h2 className="text-3xl font-bold text-blue-600">500+</h2>
                  <p className="text-gray-800">Successful Implementations</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default OurStory
