import { Link, NavLink, useLocation } from 'react-router-dom'

import { useRef, useState } from 'react'
import { FiMenu, FiX } from 'react-icons/fi'
import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import { useGSAP } from '@gsap/react'
import logo from '../../assets/images/logo.png'
import logo1 from '../../assets/images/N.png'

gsap.registerPlugin(ScrollTrigger)

export default function Navbar() {
  const location = useLocation()
  const [mobileOpen, setMobileOpen] = useState(false)
  const [isMobileServicesOpen, setIsMobileServicesOpen] = useState(false)

  const navRef = useRef(null)
  const placeholderRef = useRef(null)

  useGSAP(() => {
    const navbar = navRef.current

    // Start transparent
    gsap.set(navbar, {
      backgroundColor: 'transparent',
      boxShadow: 'none',
      position: 'fixed',
      top: 0,
      left: '50%',
      xPercent: -50,
      width: '100%',
      zIndex: 50,
    })

    ScrollTrigger.create({
      trigger: document.body,
      start: 'top top',
      end: 99999,

      onUpdate: (self) => {
        if (self.direction === 1 && self.scroll() > 10) {
          // Scrolling Down → Add shadow + background
          gsap.to(navbar, {
            backgroundColor: 'rgba(15,15,15,0.85)',
            backdropFilter: 'blur(10px)',
            boxShadow: '0 4px 20px rgba(0,0,0,0.3)',
            duration: 0.3,
            ease: 'power2.out',
          })
        } else if (self.scroll() <= 10) {
          // Back to Top → Transparent Navbar
          gsap.to(navbar, {
            backgroundColor: 'transparent',
            backdropFilter: 'blur(0px)',
            boxShadow: 'none',
            duration: 0.3,
            ease: 'power2.out',
          })
        }
      },
    })
  }, [])
  useGSAP(() => {
    const logoA = navRef.current.querySelector('.logo-1')
    const logoB = navRef.current.querySelector('.logo-2')

    ScrollTrigger.create({
      trigger: document.body,
      start: 'top top',
      end: 99999,
      onUpdate: (self) => {
        const scrollRatio = Math.min(self.scroll() / 100, 1) // 0 → 1
        // gradually hide Logo 1 (right → left)
        gsap.to(logoA, {
          x: scrollRatio * 50, // move right
          clipPath: `inset(0 ${scrollRatio * 100}% 0 0)`, // hide gradually
          duration: 0.1,
          ease: 'none',
        })
        // gradually show Logo 2 (left → right)
        gsap.to(logoB, {
          x: -50 + scrollRatio * 5, // move from left
          clipPath: `inset(0 0 0 ${100 - scrollRatio * 100}%)`, // reveal gradually
          duration: 0.1,
          ease: 'none',
        })
      },
    })
  })

  return (
    <div>
      <div ref={placeholderRef} style={{ height: '100px' }} />
      <nav
        ref={navRef}
        className="flex justify-between items-center p-4 text-white z-50"
        style={{
          height: '100px',
        }}
      >
        <div className="container">
          <div className="flex justify-between items-center">
            <div className="">
              <Link to="/" className="font-bold text-xl">
                {/* Add a class name to the logo for targeted GSAP animation */}
                {/* <img
                  src={logo}
                  alt=""
                  className="w-32 h-10 md:w-36 md:h-10 logo"
                /> */}
                <div className="relative w-32 h-10 overflow-hidden">
                  {/* Logo 1 */}
                  <img
                    src={logo}
                    alt="Logo 1"
                    className="logo-1 absolute top-0 left-0 w-full h-full object-contain"
                    style={{ clipPath: 'inset(0 0 0 0)' }}
                  />
                  {/* Logo 2 */}
                  <img
                    src={logo1}
                    alt="Logo 2"
                    className="logo-2 absolute top-0 left-0 w-full h-full object-contain"
                    style={{ clipPath: 'inset(0 100% 0 0)', x: '-50px' }}
                  />
                </div>
              </Link>
            </div>
            {/* ... (Menu items, mobile drawer, and overlay remain the same) ... */}
            <div>
              <ul className="hidden md:flex items-center gap-6">
                <li>
                  <NavLink
                    to="/"
                    className={({ isActive }) =>
                      isActive
                        ? ' border-cyan-600 border-b-2 pb-1 font-semibold'
                        : ''
                    }
                  >
                    Overview
                  </NavLink>
                </li>
                <li>
                  <NavLink
                    to="/intexa"
                    className={({ isActive }) =>
                      isActive
                        ? ' border-cyan-600 border-b-2 pb-1 font-semibold'
                        : ''
                    }
                  >
                    Intexa
                  </NavLink>
                </li>
                <li>
                  <NavLink
                    to="/expertise"
                    className={({ isActive }) =>
                      isActive
                        ? ' border-cyan-600 border-b-2 pb-1 font-semibold'
                        : ''
                    }
                  >
                    Expertise
                  </NavLink>
                </li>
                <li>
                  <NavLink
                    to="/impact"
                    className={({ isActive }) =>
                      isActive
                        ? ' border-cyan-600 border-b-2 pb-1 font-semibold'
                        : ''
                    }
                  >
                    Impact
                  </NavLink>
                </li>

                <li>
                  <NavLink
                    to="/careers"
                    className={({ isActive }) =>
                      isActive
                        ? ' border-cyan-600 border-b-2 pb-1 font-semibold'
                        : ''
                    }
                  >
                    Join Us
                  </NavLink>
                </li>
                <li>
                  <NavLink
                    to="/contact"
                    className={({ isActive }) =>
                      isActive
                        ? ' border-cyan-600 border-b-2 pb-1 font-semibold'
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
              <button className="inset-ring-2 inset-ring-cyan-500 font-bold shadow-lg shadow-cyan-500/50 py-3 px-7 rounded-lg text-white">
                Call For Sehedule
              </button>
            </div>
          </div>
        </div>
        {/* Mobile Drawer (outside of hidden md:flex) */}
        <div
          className={`md:hidden fixed top-0 right-0 h-[100vh] w-72 bg-[#080917] shadow-lg z-50 transform transition-transform duration-500 ease-in-out ${
            mobileOpen ? 'translate-x-0' : 'translate-x-full'
          }`}
        >
          <div className="p-6 h-[98vh] overflow-auto  will-change-scroll">
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
            className="fixed inset-0 bg-[#080917]/30 backdrop-blur-[5px] h-[100vh] z-40"
            onClick={() => setMobileOpen(false)}
          />
        )}
      </nav>
    </div>
  )
}
