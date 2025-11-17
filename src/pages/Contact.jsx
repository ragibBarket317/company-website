import { FaPhoneAlt, FaEnvelope, FaFlagUsa } from 'react-icons/fa'
import { MdOutlineEmail } from 'react-icons/md'
import { FaCanadianMapleLeaf } from 'react-icons/fa6'
import contact from '../assets/images/contact.jpg'
import Form from '../components/reuseableComponents/Form'

export default function Contact() {
  return (
    <div className="w-full">
      {/* Top Section */}
      {/* <div className="container px-4 py-16 grid grid-cols-1 lg:grid-cols-2 gap-10">
        
        <div className="grid grid-cols-2 gap-4">
          <img src={contact} className="rounded-lg shadow col-span-2" />
        </div>
        <div
          className="backdrop-blur-xl bg-[#151420]/10 border border-[#4b486e]/30

 shadow-2xl text-white rounded-3xl p-8"
        >
          <Form />
        </div>
      </div> */}

      {/* ISO Badges */}
      <div className="text-center py-10">
        <h2 className="text-5xl text-white font-bold">
          We Are a Certified Digital Solutions Company
        </h2>

        <div className="flex justify-center gap-10 mt-6">
          <img src="/images/iso1.png" className="w-32" />
          <img src="/images/iso2.png" className="w-32" />
        </div>
      </div>

      {/* Services Section */}
      <div className="max-w-6xl mx-auto py-10">
        <h2 className="text-center text-2xl font-semibold">
          Schedule a Call and{' '}
          <span className="text-yellow-600">You Will Receive</span>
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-4 gap-6 text-center mt-10 px-4">
          <div>
            <h3 className="text-green-600 font-bold">Project Review</h3>
            <p className="text-gray-600 mt-2">
              We evaluate your project needs & outline a clear approach.
            </p>
          </div>

          <div>
            <h3 className="text-blue-700 font-bold">Agile Strategy</h3>
            <p className="text-gray-600 mt-2">
              Our team breaks tasks into agile modules for efficiency.
            </p>
          </div>

          <div>
            <h3 className="text-red-500 font-bold">Tech Guidance</h3>
            <p className="text-gray-600 mt-2">
              Get suggestions on frameworks & tools best suited for your idea.
            </p>
          </div>

          <div>
            <h3 className="text-yellow-500 font-bold">Expert Team</h3>
            <p className="text-gray-600 mt-2">
              Access highly skilled developers customized for your project.
            </p>
          </div>
        </div>
      </div>

      {/* Contact Options */}
      <div className=" py-14">
        <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
          <div>
            <div className="flex justify-center text-3xl text-purple-700">
              <MdOutlineEmail />
            </div>
            <h4 className="font-bold mt-3">Request a Quote</h4>
            <p className="text-gray-600">business@company.com</p>
          </div>

          <div>
            <div className="flex justify-center text-3xl text-blue-700">
              <FaPhoneAlt />
            </div>
            <h4 className="font-bold mt-3">Call Us</h4>
            <p className="text-gray-600">+1 825-901-9111</p>
          </div>

          <div>
            <div className="flex justify-center text-3xl text-purple-700">
              <MdOutlineEmail />
            </div>
            <h4 className="font-bold mt-3">General Inquiries</h4>
            <p className="text-gray-600">support@company.com</p>
          </div>
        </div>
      </div>

      {/* Office Locations */}
      <div className="max-w-6xl mx-auto py-16 px-4">
        <h2 className="text-center text-2xl font-semibold mb-10">
          Our <span className="text-yellow-600">Global Offices</span>
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {/* USA */}
          <div className="border rounded-lg p-6 shadow-sm">
            <div className="text-4xl text-red-600 mb-3">
              <FaFlagUsa />
            </div>
            <h4 className="font-bold">USA</h4>
            <p className="text-gray-600 mt-2">
              30 N Gould St Sheridan, WY 82801
              <br /> +1 825-882-0800
            </p>
          </div>

          {/* Canada 1 */}
          <div className="border rounded-lg p-6 shadow-sm">
            <div className="text-4xl text-red-600 mb-3">
              <FaCanadianMapleLeaf />
            </div>
            <h4 className="font-bold">CANADA</h4>
            <p className="text-gray-600 mt-2">
              116 Albert St Ottawa, ON K1P 5G3
              <br /> +1 825-901-9111
            </p>
          </div>

          {/* Canada 2 */}
          <div className="border rounded-lg p-6 shadow-sm">
            <div className="text-4xl text-red-600 mb-3">
              <FaCanadianMapleLeaf />
            </div>
            <h4 className="font-bold">CANADA</h4>
            <p className="text-gray-600 mt-2">
              7030 Woodbine Ave Suite 500 Markham, ON L3R 6G2
              <br /> +1 825-901-9111
            </p>
          </div>
        </div>
      </div>
    </div>
  )
}
