import { FaPhoneAlt, FaEnvelope, FaFlagUsa } from 'react-icons/fa'
import { MdOutlineEmail } from 'react-icons/md'
import { FaCanadianMapleLeaf } from 'react-icons/fa6'
import GetFreeQuote from '../components/sections/home/GetFreeQuote'
import { BsFlagFill } from 'react-icons/bs'

export default function Contact() {
  return (
    <div className="w-full text-white">
      {/* Top Section */}

      <section className="relative w-full text-white py-24 px-6">
        {/* <div className="circlePosition w-[400px] h-[150px] bg-blue-400 rounded-full absolute z-1 top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 blur-[200px]"></div> */}
        {/* <div className="absolute top-20 left-1/2 -translate-x-1/2 w-[600px] h-[300px] bg-blue-500 opacity-20 blur-[140px] rounded-full"></div> */}
        <div className="absolute inset-0 flex items-center justify-center">
          <div className="w-[600px] h-[300px] bg-blue-500/50 blur-[150px] rounded-full"></div>
        </div>
        <div className="container relative z-10 grid md:grid-cols-2 gap-10 items-center">
          {/* Left Content */}
          <div>
            <h1 className="text-4xl md:text-5xl font-bold leading-tight">
              Contact Our Team of Experts
            </h1>
            <p className="text-gray-300 mt-4 text-lg">
              We're always ready to discuss your project, explore opportunities,
              or answer questions about our services.
            </p>
          </div>

          {/* Right Icon Grid */}
          <div className="grid grid-cols-2 gap-6">
            <div className="bg-gradient-to-b from-[#15192C] to-[#252b4b] border border-gray-700 rounded-xl p-6 text-center">
              <span className="text-4xl text-yellow-500">📩</span>
              <p className="mt-3 font-semibold">Email Support</p>
            </div>

            <div className="bg-gradient-to-b from-[#15192C] to-[#252b4b] border border-gray-700 rounded-xl p-6 text-center">
              <span className="text-4xl text-blue-400">☎️</span>
              <p className="mt-3 font-semibold">Phone Assistance</p>
            </div>

            <div className="bg-gradient-to-b from-[#15192C] to-[#252b4b] border border-gray-700 rounded-xl p-6 text-center">
              <span className="text-4xl text-red-400">🌎</span>
              <p className="mt-3 font-semibold">Global Offices</p>
            </div>

            <div className="bg-gradient-to-b from-[#15192C] to-[#252b4b] border border-gray-700 rounded-xl p-6 text-center">
              <span className="text-4xl text-green-400">🤝</span>
              <p className="mt-3 font-semibold">Project Support</p>
            </div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <div className="container py-[80px]">
        <h2 className="text-center text-4xl font-semibold">
          Schedule a Call and You Will Receive
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-4 gap-6 text-center mt-20 px-4">
          <div className="backdrop-blur-xl bg-white/10 border border-white/20 hover:bg-white/20 rounded-lg p-6 shadow-[0_8px_6px_-1px_rgba(0,0,0,1),0_2px_4px_-1px_rgba(0,0,0,0.1)] hover:shadow-md transition">
            <h3 className="text-green-400 font-bold">Project Review</h3>
            <p className="text-gray-300 mt-2">
              We evaluate your project needs & outline a clear direction.
            </p>
          </div>

          <div className="backdrop-blur-xl bg-white/10 border border-white/20 hover:bg-white/20 rounded-lg p-6 shadow-[0_8px_6px_-1px_rgba(0,0,0,1),0_2px_4px_-1px_rgba(0,0,0,0.1)] hover:shadow-md transition">
            <h3 className="text-blue-400 font-bold">Agile Strategy</h3>
            <p className="text-gray-300 mt-2">
              Tasks are broken into agile modules for faster delivery.
            </p>
          </div>

          <div className="backdrop-blur-xl bg-white/10 border border-white/20 hover:bg-white/20 rounded-lg p-6 shadow-[0_8px_6px_-1px_rgba(0,0,0,1),0_2px_4px_-1px_rgba(0,0,0,0.1)] hover:shadow-md transition">
            <h3 className="text-red-400 font-bold">Tech Consultation</h3>
            <p className="text-gray-300 mt-2">
              Get expert guidance on suitable tools and frameworks.
            </p>
          </div>

          <div className="backdrop-blur-xl bg-white/10 border border-white/20 hover:bg-white/20 rounded-lg p-6 shadow-[0_8px_6px_-1px_rgba(0,0,0,1),0_2px_4px_-1px_rgba(0,0,0,0.1)] hover:shadow-md transition">
            <h3 className="text-yellow-400 font-bold">Expert Team</h3>
            <p className="text-gray-300 mt-2">
              Work with a dedicated team tailored for your project.
            </p>
          </div>
        </div>
      </div>

      {/* Contact Options */}
      <div className="py-[80px] bg-[#080917]">
        <div className="container grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
          <div>
            <div className="flex justify-center text-3xl text-yellow-500">
              <MdOutlineEmail />
            </div>
            <h4 className="font-bold mt-3">Request a Quote</h4>
            <p className="text-gray-300">business@company.com</p>
          </div>

          <div>
            <div className="flex justify-center text-3xl text-blue-400">
              <FaPhoneAlt />
            </div>
            <h4 className="font-bold mt-3">Call Us</h4>
            <p className="text-gray-300">+1 825-901-9111</p>
          </div>

          <div>
            <div className="flex justify-center text-3xl text-yellow-500">
              <MdOutlineEmail />
            </div>
            <h4 className="font-bold mt-3">General Inquiries</h4>
            <p className="text-gray-300">support@company.com</p>
          </div>
        </div>
      </div>

      {/* Office Locations */}
      <div className="container py-16">
        <h2 className="text-center text-2xl font-semibold mb-10">
          Our <span className="text-yellow-500">Global Offices</span>
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {/* USA */}
          <div className="border border-gray-700 rounded-lg p-6 shadow-sm bg-gradient-to-b from-[#15192C] to-[#252b4b]">
            <div className="text-4xl text-red-500 mb-3">
              <BsFlagFill />
            </div>
            <h4 className="font-bold">Bangladesh</h4>
            <p className="text-gray-300 mt-2">
              LR Concord Villa, Gulsan 2
              <br /> +1 825-882-0800
            </p>
          </div>

          {/* Canada Location 1 */}
          <div className="border border-gray-700 rounded-lg p-6 shadow-sm bg-gradient-to-b from-[#15192C] to-[#252b4b]">
            <div className="text-4xl text-red-500 mb-3">
              <FaCanadianMapleLeaf />
            </div>
            <h4 className="font-bold">CANADA</h4>
            <p className="text-gray-300 mt-2">
              116 Albert St Ottawa, ON K1P 5G3
              <br /> +1 825-901-9111
            </p>
          </div>

          {/* Canada Location 2 */}
          <div className="border border-gray-700 rounded-lg p-6 shadow-sm bg-gradient-to-b from-[#15192C] to-[#252b4b]">
            <div className="text-4xl text-red-500 mb-3">
              <FaCanadianMapleLeaf />
            </div>
            <h4 className="font-bold">CANADA</h4>
            <p className="text-gray-300 mt-2">
              7030 Woodbine Ave Suite 500 Markham, ON L3R 6G2
              <br /> +1 825-901-9111
            </p>
          </div>
        </div>
      </div>
      <GetFreeQuote />
    </div>
  )
}
