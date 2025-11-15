import React from 'react'
import Hero from '../components/sections/home/Hero'
import { FaUsers, FaGlobe, FaProjectDiagram, FaThumbsUp } from 'react-icons/fa'
import { FaMobileAlt, FaLaptopCode, FaBrain, FaCubes } from 'react-icons/fa'

export default function About() {
  return (
    <div className="font-sans text-gray-800">
      <Hero />
      {/* Stats Section */}
      <section className="grid grid-cols-2 md:grid-cols-4 gap-6 p-10 text-center bg-gray-50">
        <div>
          <FaUsers className="text-4xl mx-auto mb-2" />
          <h2 className="text-xl font-bold">10+ Years</h2>
          <p>Experience</p>
        </div>
        <div>
          <FaProjectDiagram className="text-4xl mx-auto mb-2" />
          <h2 className="text-xl font-bold">700+ Projects</h2>
          <p>Delivered</p>
        </div>
        <div>
          <FaUsers className="text-4xl mx-auto mb-2" />
          <h2 className="text-xl font-bold">180+ Team</h2>
          <p>Members</p>
        </div>
        <div>
          <FaGlobe className="text-4xl mx-auto mb-2" />
          <h2 className="text-xl font-bold">18+ Countries</h2>
          <p>Served</p>
        </div>
      </section>

      {/* Development Center */}
      <section className="p-10 grid md:grid-cols-2 gap-10 items-center">
        <div>
          <h2 className="text-3xl font-bold mb-4">Our Development Center</h2>
          <p className="mb-4">
            Intexa specializes in building modern websites and mobile apps with
            powerful, scalable, and secure technology. Our teams work globally
            and focus on delivering exceptional digital solutions.
          </p>
          <p>
            With a team of skilled engineers, designers, and digital experts, we
            ensure every project is handled with innovation, speed, and
            precision.
          </p>
        </div>
        <div className="bg-blue-100 h-64 rounded-xl shadow-inner"></div>
      </section>

      {/* Services */}
      <section className="p-10 text-center">
        <h2 className="text-3xl font-bold mb-6">Our Core Services</h2>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
          <div className="p-6 border rounded-xl shadow-sm hover:shadow-md transition">
            <FaMobileAlt className="text-3xl mx-auto mb-2" />
            <p>App Development</p>
          </div>
          <div className="p-6 border rounded-xl shadow-sm hover:shadow-md transition">
            <FaLaptopCode className="text-3xl mx-auto mb-2" />
            <p>Web Development</p>
          </div>
          <div className="p-6 border rounded-xl shadow-sm hover:shadow-md transition">
            <FaBrain className="text-3xl mx-auto mb-2" />
            <p>AI / ML</p>
          </div>
          <div className="p-6 border rounded-xl shadow-sm hover:shadow-md transition">
            <FaCubes className="text-3xl mx-auto mb-2" />
            <p>Blockchain</p>
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="p-10 bg-gray-50">
        <h2 className="text-3xl font-bold mb-6 text-center">
          Why Choose Intexa?
        </h2>
        <div className="grid md:grid-cols-2 gap-10">
          <div className="bg-white rounded-xl h-72 shadow-md"></div>
          <div className="grid grid-cols-1 gap-4">
            <div className="p-4 border rounded-xl">
              <h3 className="text-lg font-semibold">Extensive Expertise</h3>
              <p>Highly experienced team providing top-tier solutions.</p>
            </div>
            <div className="p-4 border rounded-xl">
              <h3 className="text-lg font-semibold">
                Transparent Communication
              </h3>
              <p>We keep you updated throughout the entire process.</p>
            </div>
            <div className="p-4 border rounded-xl">
              <h3 className="text-lg font-semibold">Quality Assurance</h3>
              <p>Ensuring flawless performance across all devices.</p>
            </div>
            <div className="p-4 border rounded-xl">
              <h3 className="text-lg font-semibold">Flexibility</h3>
              <p>Your requirements are always our priority.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Mission */}
      <section className="p-10 grid md:grid-cols-2 gap-10 items-center">
        <div>
          <h2 className="text-3xl font-bold mb-4">Our Mission</h2>
          <p>
            Our mission is to empower businesses with scalable, secure, and
            customer-centric digital solutions. We believe in building strong
            partnerships and delivering value-driven results.
          </p>
        </div>
        <div className="bg-blue-100 h-72 rounded-xl shadow-inner"></div>
      </section>

      {/* Vision */}
      <section className="p-10 grid md:grid-cols-2 gap-10 items-center bg-gray-50">
        <div className="bg-white h-72 rounded-xl shadow-md"></div>
        <div>
          <h2 className="text-3xl font-bold mb-4">Our Vision</h2>
          <p>
            To be a global leader in digital transformation, empowering
            businesses through innovation, technology, and long-term growth.
          </p>
        </div>
      </section>
    </div>
  )
}
