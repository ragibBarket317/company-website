import React from 'react'
import grid from '../../assets/images/grid.jpg'
import {
  FaFacebookF,
  FaTwitter,
  FaLinkedinIn,
  FaInstagram,
  FaEnvelope,
  FaPhoneAlt,
  FaMapMarkerAlt,
} from 'react-icons/fa'

const Footer = () => {
  return (
    <footer className="relative text-gray-200 py-16 px-6 md:px-16">
      <div className="absolute inset-0 bg-cyan-950 mix-blend-multiply"></div>
      <div
        className="absolute inset-0 -z-10 bg-cover"
        style={{
          backgroundImage: `url(${grid})`,
        }}
      ></div>
      <div className="absolute inset-0 bg-blue-900/70 mix-blend-multiply"></div>
      <div>
        <div className="container grid grid-cols-1 md:grid-cols-4 gap-10">
          {/* Logo and About */}
          <div className="z-10">
            <h2 className="text-3xl font-bold text-white mb-4">
              Tech<span className="text-pink-500">C</span>ompany
            </h2>
            <p className="text-md leading-relaxed">
              We’re a leading development company that creates web apps, mobile
              apps, and AI-powered solutions for iOS, Android, and the web. We
              deliver on time, write clean code, and build exactly what your
              business needs.
            </p>
          </div>

          {/* Quick Links */}
          <div className="z-10">
            <h3 className="text-lg font-semibold text-white mb-4">
              Quick Links
            </h3>
            <ul className="space-y-2 text-md">
              <li>Hire Developers</li>
              <li>Mobile App Development</li>
              <li>Web Development Services</li>
              <li>AI Development</li>
              <li>AR VR App Development</li>
              <li>Privacy Policy</li>
              <li>Terms & Conditions</li>
            </ul>
          </div>

          {/* Recent Posts */}
          <div className="z-10">
            <h3 className="text-lg font-semibold text-white mb-4">
              Recent Posts
            </h3>
            <ul className="space-y-2 text-md">
              <li>Top Benefits of AI Chatbot Development</li>
              <li>How to Use AI in Marketing</li>
              <li>Safeguarding Data in AI Development</li>
              <li>AI Use Cases & Advantages</li>
            </ul>
          </div>

          {/* Contact */}
          <div className="z-10">
            <h3 className="text-lg font-semibold text-white mb-4">
              Get In Touch
            </h3>
            <ul className="space-y-3 text-md">
              <li className="flex items-center gap-2">
                <FaPhoneAlt className="text-slate-500" /> +1-825-901-9111
              </li>
              <li className="flex items-center gap-2">
                <FaEnvelope className="text-slate-500" />{' '}
                business@techcompany.ca
              </li>
              <li className="flex items-center gap-2">
                <FaMapMarkerAlt className="text-slate-500" /> Gulsan 1, Dhaka
              </li>
            </ul>

            <div className="mt-6">
              <h4 className="text-white font-semibold mb-3">Follow Us</h4>
              <div className="flex gap-3">
                <a
                  href="#"
                  className="p-2 bg-slate-700 shadow-2xl shadow-blue-200 rounded-full"
                >
                  <FaFacebookF />
                </a>
                <a
                  href="#"
                  className="p-2 bg-slate-700 shadow-2xl shadow-blue-200 rounded-full"
                >
                  <FaLinkedinIn />
                </a>
                <a
                  href="#"
                  className="p-2 bg-slate-700 shadow-2xl shadow-blue-200 rounded-full"
                >
                  <FaTwitter />
                </a>
                <a
                  href="#"
                  className="p-2 bg-slate-700 shadow-2xl shadow-blue-200 rounded-full"
                >
                  <FaInstagram />
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom line */}
      <div className="z-10">
        <div className="mt-12 border-t border-gray-700 pt-6 text-center text-sm text-gray-900">
          © {new Date().getFullYear()} techcompany. All rights reserved.
        </div>
      </div>
    </footer>
  )
}

export default Footer
