import React from 'react'

const GetFreeQuote = () => {
  return (
    <div className="container py-[60px]">
      <div className="grid grid-cols-1 md:grid-cols-5 gap-14">
        <div className="md:col-span-3 bg-gradient-to-tl from-green-400 to-green-700 text-white rounded-3xl p-10 flex flex-col justify-center">
          <h2 className="text-3xl md:text-4xl font-bold leading-snug">
            Ready to Innovate Together? Let’s <br /> Connect
          </h2>
          <p className="mt-5 text-lg">
            We’re your one-stop destination for extensive web and mobile app
            solutions. Let’s talk about how the iTechnoLabs team can assist you
            in building your next big project. We’re here to turn your visions
            into reality.
          </p>
        </div>

        <div className="md:col-span-2 bg-white shadow-2xl rounded-3xl p-8">
          <div className=" mb-4">
            <h3 className="text-lg font-semibold text-center">
              Get A Free Quote
            </h3>
            <p className="text-gray-800 text-center">
              Share your details Now to get strated.
            </p>
          </div>
          <form className="space-y-4">
            <input
              type="text"
              placeholder="Name*"
              className="w-full p-3 border rounded-md"
            />
            <input
              type="email"
              placeholder="Email*"
              className="w-full p-3 border rounded-md"
            />
            <div className="flex gap-2">
              <select className="p-3 border rounded-md">
                <option>Bangladesh</option>
                <option>India</option>
                <option>USA</option>
              </select>
              <input
                type="text"
                placeholder="+880"
                className="w-full p-3 border rounded-md"
              />
            </div>
            <textarea
              placeholder="Message*"
              rows="4"
              className="w-full p-3 border rounded-md"
            ></textarea>
            <button className="bg-orange-400 text-white px-5 py-2 rounded-md hover:bg-orange-500">
              Submit
            </button>
          </form>
        </div>
      </div>
    </div>
  )
}

export default GetFreeQuote
