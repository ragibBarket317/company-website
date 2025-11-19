import React from 'react'

const Form = () => {
  return (
    <div>
      <div>
        <div className=" mb-4">
          <h3 className="text-md md:text-lg font-semibold text-center">
            Get A Free Quote
          </h3>
          <p className="text-gray-800 text-center text-[14px] md:text-base">
            Share your details Now to get strated.
          </p>
        </div>
        <form className="space-y-4">
          <input
            type="text"
            placeholder="Name*"
            className="w-full text-[14px] md:text-base p-3 border border-[#4b486e]/30 bg-[#141323] rounded-md"
          />
          <input
            type="email"
            placeholder="Email*"
            className="w-full text-[14px] md:text-base p-3 border border-[#4b486e]/30  bg-[#141323] rounded-md"
          />
          <div className="flex gap-2">
            <select className="p-3 text-[14px] md:text-base border border-[#4b486e]/30 bg-[#141323] rounded-md">
              <option>Bangladesh</option>
              <option>India</option>
              <option>USA</option>
            </select>
            <input
              type="text"
              placeholder="+880"
              className="w-full text-[14px] md:text-base p-3 border border-[#4b486e]/30 bg-[#141323] rounded-md"
            />
          </div>
          <textarea
            placeholder="Message*"
            rows="4"
            className="w-full text-[14px] md:text-base p-3 border border-[#4b486e]/30 bg-[#141323] rounded-md"
          ></textarea>
          <button className="bg-[#0F172A] border border-[#4b486e]/30 text-white px-5 py-2 rounded-md">
            Submit
          </button>
        </form>
      </div>
    </div>
  )
}

export default Form
