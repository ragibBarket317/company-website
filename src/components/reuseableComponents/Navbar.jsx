import { Link, NavLink, useLocation, useNavigate } from 'react-router-dom'
import DarkModeToggle from '../reuseableComponents/DarkModeToggle'
import { useEffect, useRef, useState } from 'react'
import { FiMenu, FiX } from 'react-icons/fi'
import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import { div } from 'three/tsl'
import logo from '../../assets/images/logo.png'

gsap.registerPlugin(ScrollTrigger)

export default function Navbar() {
  const navigate = useNavigate()
  const location = useLocation()
  const isServiceActive = location.pathname.startsWith('/services')
  const [mobileOpen, setMobileOpen] = useState(false)
  const [isMobileServicesOpen, setIsMobileServicesOpen] = useState(false)
  const [isAboutOpen, setIsAboutOpen] = useState(false)

  const navRef = useRef(null)
  const placeholderRef = useRef(null)

  useEffect(() => {
    if (window.innerWidth < 768) return
    const navbar = navRef.current

    // Initial setup: always fixed but normal top, scale 1
    gsap.set(navbar, {
      position: 'fixed',
      top: 0,
      left: '50%',
      xPercent: -50,
      width: '100%',
      transformOrigin: 'center center',
      scaleX: 1,
      scaleY: 1,
      // backgroundColor: 'rgba(0,0,0,1)',
      borderRadius: '0px',
      boxShadow: 'none',
      zIndex: 50,
    })

    // Placeholder height = navbar height to prevent content jump
    if (placeholderRef.current) {
      placeholderRef.current.style.height = `${navbar.offsetHeight}px`
    }

    const shrink = () => {
      gsap.to(navbar, {
        scaleX: 0.7,
        scaleY: 0.65,
        top: 20,
        backgroundColor: 'rgba(15,15,15,0.85)',
        backdropFilter: 'blur(10px)',
        borderRadius: '20px',
        boxShadow: '0 8px 25px rgba(0,0,0,0.25)',
        duration: 1.5,
        ease: 'power3.inOut',
      })

      gsap.to('.logo', {
        scale: 0.85,
        duration: 1.2,
        ease: 'power2.inOut',
      })
    }

    const expand = () => {
      gsap.to(navbar, {
        scaleX: 1,
        scaleY: 1,
        top: 0,
        backgroundColor: 'transparent',
        borderRadius: '0px',
        boxShadow: 'none',
        backdropFilter: 'blur(0px)',
        duration: 1.5,
        ease: 'power3.inOut',
      })

      gsap.to('.logo', {
        scale: 1,
        duration: 1.2,
        ease: 'power2.inOut',
      })
    }

    ScrollTrigger.create({
      trigger: 'body',
      start: 'top+=50 top',
      onEnter: shrink,
      onLeaveBack: expand,
    })
  }, [])

  return (
    <div>
      <div ref={placeholderRef} />
      <nav
        ref={navRef}
        className="flex justify-between items-center p-4 text-white z-50"
        style={{
          height: '100px',
        }}
      >
        {/* <div className="absolute inset-0 pointer-events-none">
        <div className="w-full h-full bg-[radial-gradient(circle_at_top_right,_rgba(255,255,255,0.3),_transparent_70%)]"></div>
      </div> */}
        <div className="container">
          <div className="flex justify-between items-center">
            <div className="">
              <Link to="/" className="font-bold text-xl">
                <img src={logo} alt="" className="w-20 h-16 md:w-32 md:h-20" />
              </Link>
            </div>
            <div>
              <ul className="hidden md:flex items-center gap-6">
                <li>
                  <NavLink
                    to="/"
                    className={({ isActive }) =>
                      isActive
                        ? ' border-orange-600 border-b-2 pb-1 font-semibold'
                        : ''
                    }
                  >
                    Home
                  </NavLink>
                </li>
                <li>
                  <NavLink
                    to="/about"
                    className={({ isActive }) =>
                      isActive
                        ? ' border-orange-600 border-b-2 pb-1 font-semibold'
                        : ''
                    }
                  >
                    About
                  </NavLink>
                </li>
                <li className="w-full relative group px-3 py-2">
                  <button
                    className={
                      isServiceActive
                        ? 'border-orange-600 border-b-2 pb-1 font-semibold'
                        : 'hover:opacity-50 hover:text-blue-600 cursor-default'
                    }
                  >
                    Services
                  </button>
                  <div className="absolute top-0 left-[-400px] transition group-hover:translate-y-5 translate-y-0 opacity-0 invisible group-hover:opacity-100 group-hover:visible duration-500 ease-in-out group-hover:transform z-50 min-w-[1000px] transform">
                    <div className="relative top-9  bg-gray-100 rounded-xl shadow-xl w-full">
                      <div className="grid grid-cols-3 rounded-xl gap-8">
                        <div className="bg-gradient-to-tl from-blue-950 to-blue-900 rounded-bl-xl rounded-tl-xl text-white">
                          <div className="p-5 space-y-3">
                            <h3 className="text-lg font-bold ">
                              Build modern, scalable, and high-performance
                              digital solutions tailored for your business
                              needs.
                            </h3>
                            <button className="bg-cyan-700 shadow-lg py-2 px-5 rounded-lg">
                              {'Contact >'}
                            </button>
                          </div>
                        </div>
                        {/* <div className="col-span-2 grid grid-cols-2 gap-5 py-10">
                          <div
                            onClick={() =>
                              navigate('/services/mobile-app-development')
                            }
                            className="py-5 cursor-pointer text-gray-800 hover:bg-gray-200 rounded-lg px-3"
                          >
                            <h4 className="font-semibold text-lg text-orange-600 mb-3 flex items-center gap-2">
                              <Link to="/services/mobile-app-development">
                                Mobile App Development
                              </Link>
                            </h4>
                            <p>
                              We design and develop intuitive, fast, and
                              feature-rich mobile apps for Android, iOS, and
                              cross-platform environments.
                            </p>
                          </div>
                          <div
                            onClick={() =>
                              navigate('/services/web-development')
                            }
                            className="py-5 cursor-pointer text-gray-800 hover:bg-gray-200 rounded-lg px-3"
                          >
                            <h4 className="font-semibold text-lg text-orange-600 mb-3 flex items-center gap-2">
                              Web Development
                            </h4>
                            <p>
                              From dynamic websites to powerful web
                              applications, our team builds responsive and
                              scalable digital experiences.
                            </p>
                          </div>
                          <div
                            onClick={() =>
                              navigate('/services/software-development')
                            }
                            className="py-5 cursor-pointer text-gray-800 hover:bg-gray-200 rounded-lg px-3"
                          >
                            <h4 className="font-semibold text-lg text-orange-600 mb-3 flex items-center gap-2">
                              Software Development
                            </h4>
                            <p>
                              We create secure, custom software solutions that
                              automate workflows and enhance your business
                              operations.
                            </p>
                          </div>
                          <div
                            onClick={() => navigate('/services/ai-development')}
                            className="py-5 cursor-pointer text-gray-800 hover:bg-gray-200 rounded-lg px-3"
                          >
                            <h4 className="font-semibold text-lg text-orange-600 mb-3 flex items-center gap-2">
                              AI Development
                            </h4>
                            <p>
                              Leverage the power of AI with intelligent
                              automation, predictive analytics, and machine
                              learning-driven applications.
                            </p>
                          </div>
                        </div> */}
                        <div className="col-span-2 grid grid-cols-2 gap-5 py-10 pr-5">
                          {/* Mobile App Development */}
                          <NavLink
                            to="/services/mobile-app-development"
                            className={({ isActive }) =>
                              `py-5 rounded-lg px-3 cursor-pointer 
      ${isActive ? 'bg-gray-300' : 'hover:bg-gray-200 text-gray-800'}`
                            }
                          >
                            <h4 className="font-semibold text-lg text-orange-600 mb-3">
                              Mobile App Development
                            </h4>
                            <p className="text-gray-800">
                              We design and develop intuitive, fast, and
                              feature-rich mobile apps for Android, iOS, and
                              cross-platform environments.
                            </p>
                          </NavLink>

                          {/* Web Development */}
                          <NavLink
                            to="/services/web-development"
                            className={({ isActive }) =>
                              `py-5 rounded-lg px-3 cursor-pointer 
      ${isActive ? 'bg-gray-300' : 'hover:bg-gray-200 text-gray-800'}`
                            }
                          >
                            <h4 className="font-semibold text-lg text-orange-600 mb-3">
                              Web Development
                            </h4>
                            <p className="text-gray-800">
                              From dynamic websites to powerful web
                              applications, our team builds responsive and
                              scalable digital experiences.
                            </p>
                          </NavLink>

                          {/* Software Development */}
                          <NavLink
                            to="/services/software-development"
                            className={({ isActive }) =>
                              `py-5 rounded-lg px-3 cursor-pointer 
      ${isActive ? 'bg-gray-300' : 'hover:bg-gray-200 text-gray-800'}`
                            }
                          >
                            <h4 className="font-semibold text-lg text-orange-600 mb-3">
                              Software Development
                            </h4>
                            <p className="text-gray-800">
                              We create secure, custom software solutions that
                              automate workflows and enhance business
                              operations.
                            </p>
                          </NavLink>

                          {/* AI Development */}
                          <NavLink
                            to="/services/ai-development"
                            className={({ isActive }) =>
                              `py-5 rounded-lg px-3 cursor-pointer 
      ${isActive ? 'bg-gray-300' : 'hover:bg-gray-200 text-gray-800'}`
                            }
                          >
                            <h4 className="font-semibold text-lg text-orange-600 mb-3">
                              AI Development
                            </h4>
                            <p className="text-gray-800">
                              Leverage AI with intelligent automation,
                              predictive analytics, and ML-driven apps.
                            </p>
                          </NavLink>
                        </div>
                      </div>
                    </div>
                  </div>
                </li>
                {/* <li>
                <Link to="/industries">Industries</Link>
              </li> */}
                {/* <li><Link to="/case-studies">Case Studies</Link></li> */}
                {/* <li>
                <Link to="/blog">Blog</Link>
              </li> */}
                <li>
                  <NavLink
                    to="/careers"
                    className={({ isActive }) =>
                      isActive
                        ? ' border-orange-600 border-b-2 pb-1 font-semibold'
                        : ''
                    }
                  >
                    Careers
                  </NavLink>
                </li>
                <li>
                  <NavLink
                    to="/contact"
                    className={({ isActive }) =>
                      isActive
                        ? ' border-orange-600 border-b-2 pb-1 font-semibold'
                        : ''
                    }
                  >
                    Contact
                  </NavLink>
                </li>
              </ul>
              {/* Right Side (DarkMode + Mobile Button) */}
              <div className="flex items-center gap-4">
                <div className=" md:hidden">{/* <DarkModeToggle /> */}</div>
                <button
                  className="block md:hidden text-2xl"
                  onClick={() => setMobileOpen(!mobileOpen)}
                >
                  {mobileOpen ? <FiX /> : <FiMenu />}
                </button>
              </div>
            </div>
            <div className="hidden md:block">
              {/* <button className="bg-[#17233f] border shadow-lg border-[#4b486e]/30 text-white px-5 py-2.5 rounded-md">
                Call For Sehedule
              </button> */}
              <button className="inset-ring-2 inset-ring-cyan-500 font-bold shadow-lg shadow-cyan-500/50 py-3 px-7 rounded-lg text-white">
                Call For Sehedule
              </button>
            </div>
          </div>
        </div>
        {/* Mobile Drawer (outside of hidden md:flex) */}
        <div
          className={`md:hidden fixed top-0 right-0 h-full w-72 bg-[#080917] shadow-lg z-50 transform transition-transform duration-500 ease-in-out ${
            mobileOpen ? 'translate-x-0' : 'translate-x-full'
          }`}
        >
          <div className="p-6 h-[98vh] overflow-auto  will-change-scroll">
            <ul className="space-y-6 text-md">
              <li onClick={() => setMobileOpen(false)}>
                <Link to="/">Home</Link>
              </li>
              <li onClick={() => setMobileOpen(false)}>
                <Link to="/about">About</Link>
              </li>

              <li>
                <button
                  onClick={() => setIsMobileServicesOpen(!isMobileServicesOpen)}
                  className="w-full text-left flex justify-between items-center"
                >
                  Services
                  <span>{isMobileServicesOpen ? '-' : '+'}</span>
                </button>

                {isMobileServicesOpen && (
                  <div className="pl-5 mt-2 space-y-3 text-sm">
                    <ul className=" space-y-4">
                      <li onClick={() => setMobileOpen(false)}>
                        <Link to="/services/mobile-app-development">
                          Mobile App Development
                        </Link>
                      </li>
                      <li onClick={() => setMobileOpen(false)}>
                        <Link to="/services/web-development">
                          Web Development
                        </Link>
                      </li>
                      <li onClick={() => setMobileOpen(false)}>
                        <Link to="/services/software-development">
                          Software Development
                        </Link>
                      </li>
                      <li onClick={() => setMobileOpen(false)}>
                        <Link to="/services/ai-development">
                          AI Development
                        </Link>
                      </li>
                    </ul>
                  </div>
                )}
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
            className="fixed inset-0 bg-[#080917]/30 backdrop-blur-[5px] z-40"
            onClick={() => setMobileOpen(false)}
          />
        )}
      </nav>
    </div>
  )
}
