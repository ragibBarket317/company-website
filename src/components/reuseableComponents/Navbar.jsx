import { Link } from 'react-router-dom'
import DarkModeToggle from '../reuseableComponents/DarkModeToggle'
import { useState } from 'react'
import { FiMenu, FiX } from 'react-icons/fi'

export default function Navbar() {
  const [mobileOpen, setMobileOpen] = useState(false)

  return (
    <nav className="flex justify-between items-center p-4 shadow bg-white dark:shadow-black dark:bg-dark-bg dark:text-dark-text-color">
      <div className="container">
        <div className="flex justify-between items-center">
          <div>
            <Link to="/" className="font-bold text-xl">
              TechCompany
            </Link>
          </div>
          <div>
            <ul className="hidden md:flex items-center gap-6">
              <li>
                <Link to="/">Home</Link>
              </li>
              <li className="w-full relative group px-3 py-2">
                <button className="hover:opacity-50 hover:text-blue-600 cursor-default">
                  About
                </button>
                <div className="absolute top-0 left-[-300px] transition group-hover:translate-y-5 translate-y-0 opacity-0 invisible group-hover:opacity-100 group-hover:visible duration-500 ease-in-out group-hover:transform z-50 min-w-[1000px] transform">
                  <div className="relative top-9  bg-gray-100 rounded-xl shadow-xl w-full">
                    <div className="grid grid-cols-3 rounded-xl gap-8">
                      <div className="bg-gradient-to-tl from-blue-950 to-blue-900 rounded-bl-xl rounded-tl-xl text-white">
                        <div className="p-5 space-y-3">
                          <h3 className="text-lg font-bold ">
                            Lorem ipsum dolor sit amet consectetur adipisicing
                            elit. Quasi accusantium.
                          </h3>
                          <button className="bg-cyan-700 shadow-lg py-2 px-5 rounded-lg">
                            {'Contact >'}
                          </button>
                        </div>
                      </div>
                      <div className="col-span-2 grid grid-cols-2 gap-5 py-10">
                        <div className="py-5 ">
                          <h4 className="font-semibold text-lg text-yellow-600 mb-3 flex items-center gap-2">
                            About
                          </h4>
                          <p>
                            Lorem ipsum dolor sit amet consectetur adipisicing
                            elit. Corrupti repudiandae distinctio doloremque
                            provident.
                          </p>
                        </div>
                        <div className="py-5">
                          <h4 className="font-semibold text-lg text-yellow-600 mb-3 flex items-center gap-2">
                            Our Reviews
                          </h4>
                          <p>
                            Lorem ipsum dolor sit amet consectetur adipisicing
                            elit. Corrupti repudiandae distinctio doloremque
                            provident.
                          </p>
                        </div>
                        <div className="py-5">
                          <h4 className="font-semibold text-lg text-yellow-600 mb-3 flex items-center gap-2">
                            Our Team
                          </h4>
                          <p>
                            Lorem ipsum dolor sit amet consectetur adipisicing
                            elit. Corrupti repudiandae distinctio doloremque
                            provident.
                          </p>
                        </div>
                        <div className="py-5">
                          <h4 className="font-semibold text-lg text-yellow-600 mb-3 flex items-center gap-2">
                            Why Chosse Us
                          </h4>
                          <p>
                            Lorem ipsum dolor sit amet consectetur adipisicing
                            elit. Corrupti repudiandae distinctio doloremque
                            provident.
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </li>
              <li className="w-full relative group px-3 py-2">
                <button className="hover:opacity-50 hover:text-blue-600 cursor-default">
                  Services
                </button>
                <div className="absolute top-0 left-[-300px] transition group-hover:translate-y-5 translate-y-0 opacity-0 invisible group-hover:opacity-100 group-hover:visible duration-500 ease-in-out group-hover:transform z-50 min-w-[1000px] transform">
                  <div className="relative top-9  bg-gray-100 rounded-xl shadow-xl w-full">
                    <div className="grid grid-cols-4 rounded-xl gap-8">
                      <div className="bg-gradient-to-tl from-blue-950 to-blue-900 rounded-bl-xl rounded-tl-xl text-white">
                        <div className="p-5 space-y-3">
                          <h3 className="text-lg font-bold ">
                            Lorem ipsum dolor sit amet consectetur adipisicing
                            elit. Quasi accusantium.
                          </h3>
                          <button className="bg-cyan-700 shadow-lg py-2 px-5 rounded-lg">
                            {'Contact >'}
                          </button>
                        </div>
                      </div>
                      {/* Column 1 */}
                      <div className="py-10">
                        <h4 className="font-semibold text-lg text-yellow-600 mb-5 flex items-center gap-2">
                          App Development
                        </h4>
                        <ul className="space-y-5 text-md">
                          <li>
                            <Link to="#">Mobile App Development</Link>
                          </li>
                          <li>
                            <Link to="#">iOS App Development</Link>
                          </li>
                          <li>
                            <Link to="#">Android App Development</Link>
                          </li>
                          <li>
                            <Link to="#">Flutter App Development</Link>
                          </li>
                          <li>
                            <Link to="#">React Native App Development</Link>
                          </li>
                        </ul>
                      </div>

                      {/* Column 2 */}
                      <div className="py-10">
                        <h4 className="font-semibold text-green-600 text-lg mb-5 flex items-center gap-2">
                          Web Development
                        </h4>
                        <ul className="space-y-5 text-md">
                          <li>
                            <Link to="#">MERN Stack Development</Link>
                          </li>
                          <li>
                            <Link to="#">Full Stack Development</Link>
                          </li>
                          <li>
                            <Link to="#">PHP Development</Link>
                          </li>
                          <li>
                            <Link to="#">WordPress Development</Link>
                          </li>
                          <li>
                            <Link to="#">Python Development</Link>
                          </li>
                        </ul>
                      </div>

                      {/* Column 3 */}
                      <div className="py-10">
                        <h4 className="font-semibold text-red-600 text-lg mb-5 flex items-center gap-2">
                          Software Development
                        </h4>
                        <ul className="space-y-5 text-md">
                          <li>
                            <Link to="#">Custom Software</Link>
                          </li>
                          <li>
                            <Link to="#">CRM Development</Link>
                          </li>
                          <li>
                            <Link to="#">ERP Solutions</Link>
                          </li>
                          <li>
                            <Link to="#">Fintech Software</Link>
                          </li>
                          <li>
                            <Link to="#">Education Software</Link>
                          </li>
                        </ul>
                      </div>
                    </div>
                  </div>
                </div>
              </li>
              <li>
                <Link to="/industries">Industries</Link>
              </li>
              <li>{/* <Link to="/case-studies">Case Studies</Link> */}</li>
              <li>
                <Link to="/blog">Blog</Link>
              </li>
              <li>
                <Link to="/careers">Careers</Link>
              </li>
              <li>
                <Link to="/contact">Contact</Link>
              </li>
            </ul>
            {/* Right Side (DarkMode + Mobile Button) */}
            <div className="flex items-center gap-4">
              <div className=" md:hidden">
                <DarkModeToggle />
              </div>
              <button
                className="block md:hidden text-2xl"
                onClick={() => setMobileOpen(!mobileOpen)}
              >
                {mobileOpen ? <FiX /> : <FiMenu />}
              </button>
            </div>
          </div>
          <div className="hidden md:block">
            <DarkModeToggle />
          </div>
        </div>
      </div>
      {/* Mobile Drawer (outside of hidden md:flex) */}
      <div
        className={`fixed top-0 right-0 h-full w-72 bg-white dark:bg-dark-bg shadow-lg z-50 transform transition-transform duration-500 ease-in-out ${
          mobileOpen ? 'translate-x-0' : 'translate-x-full'
        }`}
      >
        <div className="p-6">
          <ul className="space-y-6 text-lg">
            <li>
              <Link to="/" onClick={() => setMobileOpen(false)}>
                Home
              </Link>
            </li>
            <li>
              <Link to="/industries" onClick={() => setMobileOpen(false)}>
                Industries
              </Link>
            </li>
            <li>
              <Link to="/blog" onClick={() => setMobileOpen(false)}>
                Blog
              </Link>
            </li>
            <li>
              <Link to="/careers" onClick={() => setMobileOpen(false)}>
                Careers
              </Link>
            </li>
            <li>
              <Link to="/contact" onClick={() => setMobileOpen(false)}>
                Contact
              </Link>
            </li>
          </ul>
        </div>
      </div>
      {/* Overlay */}
      {mobileOpen && (
        <div
          className="fixed inset-0 bg-white/30 backdrop-blur-xs z-40"
          onClick={() => setMobileOpen(false)}
        />
      )}
    </nav>
  )
}
