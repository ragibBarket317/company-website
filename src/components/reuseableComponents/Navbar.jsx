import React from 'react'
import { Link } from 'react-router-dom'
import DarkModeToggle from './DarkModeToggle'

const Navbar = () => {
  return (
    <nav className="flex justify-between items-center p-4 shadow bg-white dark:shadow-black dark:bg-dark-bg dark:text-dark-text-color">
      <div className="container">
        <div className="flex justify-between">
          <div>
            <Link to="/" className="font-bold text-xl">
              TechCompany
            </Link>
          </div>
          <div>
            <ul className="flex items-center gap-6">
              <li>
                <Link to="/">Home</Link>
              </li>
              <li>
                <Link to="/about">About</Link>
              </li>
              <li>
                <Link to="/services">Services</Link>
              </li>
              <li>
                <Link to="/industries">Industries</Link>
              </li>
              <li>
                <Link to="/case-studies">Case Studies</Link>
              </li>
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
          </div>

          <DarkModeToggle />
        </div>
      </div>
    </nav>
  )
}

export default Navbar
