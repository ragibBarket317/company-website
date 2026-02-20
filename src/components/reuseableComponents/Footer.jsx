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
import logo from '../../assets/images/logo.png'
import { Link } from 'react-router-dom'

const Footer = () => {
  return (
    <footer className="relative bg-[#0C0D23]/50 text-gray-200 py-16 px-6 md:px-16">
      <div>
        <div className="container grid grid-cols-1 md:grid-cols-4 gap-10">
          <div className="z-10">
            <h2 className="text-3xl font-bold text-white mb-4">
              <img src={logo} alt="" className="w-32 h-10 md:w-36 md:h-10" />
            </h2>
            <p className="text-sm md:text-md leading-relaxed">
              Global engineering firm specializing in enterprise-grade
              insfrastructure, secure software development, and transformative
              AI solutions. Keadquartered in Candana.
            </p>
            <div className="flex gap-3 mt-5">
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
          <div className="z-10">
            <h3 className="text-lg font-semibold text-white mb-4">SOLUTIONS</h3>
            <ul className="space-y-2 text-md text-gray-400">
              <li>
                <Link className="hover:text-cyan-500">Custom Engineering</Link>
              </li>
              <li>
                <Link className="hover:text-cyan-500">
                  Cloud Infrastructure
                </Link>
              </li>
              <li>
                <Link className="hover:text-cyan-500">Enterprise AI</Link>
              </li>
              <li>
                <Link className="hover:text-cyan-500">Security Audits</Link>
              </li>
            </ul>
          </div>

          <div className="z-10">
            <h3 className="text-lg font-semibold text-white mb-4 uppercase">
              Comapany
            </h3>
            <ul className="space-y-2 text-md text-gray-400">
              <li>
                <Link to="/">Overview</Link>
              </li>
              <li>
                <Link to="/about">Intexa</Link>
              </li>
              <li>
                <Link to="/">Expertise</Link>
              </li>
              <li>
                <Link to="/">Join us</Link>
              </li>
              <li>
                <Link to="/">Contact</Link>
              </li>
            </ul>
          </div>

          <div className="z-10">
            <h3 className="text-lg font-semibold text-white mb-4 uppercase">
              Legal
            </h3>
            <ul className="space-y-2 text-md text-gray-400">
              <li>
                <Link to="/">Privacy Policy</Link>
              </li>
              <li>
                <Link to="/about">Terms of Service</Link>
              </li>
              <li>
                <Link to="/">Governance</Link>
              </li>
              <li>
                <Link to="/">Compiliance</Link>
              </li>
            </ul>
          </div>

          {/* <div className="z-10">
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
          </div> */}
        </div>
      </div>

      <div className="z-10">
        <div className="mt-12 border-t border-gray-800/50 pt-6 text-center text-sm text-gray-700">
          © {new Date().getFullYear()} intexa. All rights reserved.
        </div>
      </div>
    </footer>
  )
}

export default Footer
