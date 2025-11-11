import React from 'react'
import Hero from '../components/sections/home/Hero'
import WhyChooseUs from '../components/sections/home/WhyChooseUs'
import GetFreeQuote from '../components/sections/home/GetFreeQuote'
import Lottie from 'lottie-react'
import software from '../assets/animation/Software.json'

export default function SoftwareDevelopmentPage() {
  return (
    <div className="bg-white text-gray-700">
      <Hero />
      {/* --- Section 1: Capabilities --- */}
      <section className="container py-16 px-6">
        <h2 className="text-3xl md:text-4xl font-bold text-indigo-900 text-center mb-4">
          Capabilities to Build Diverse Software Solutions
        </h2>
        <p className="text-center text-gray-600 max-w-3xl mx-auto mb-10">
          As a full-cycle development company, our expert engineers design,
          develop, and scale digital solutions tailored to different industries
          and business needs.
        </p>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {[
            {
              title: 'Custom Software Development',
              desc: 'We handle complete development from concept to deployment — delivering secure and scalable applications for any business domain.',
            },
            {
              title: 'Finance & Banking Solutions',
              desc: 'We create reliable financial apps and platforms built to ensure compliance, speed, and top-grade security for transactions.',
            },
            {
              title: 'Healthcare Applications',
              desc: 'Our healthcare software solutions enhance care delivery, improve patient data management, and maintain HIPAA compliance.',
            },
            {
              title: 'eCommerce Platforms',
              desc: 'From product catalogs to payment integrations, we craft online shopping experiences optimized for conversions and performance.',
            },
            {
              title: 'Automotive Software',
              desc: 'We build smart solutions for vehicle tracking, diagnostics, and automation to streamline operations in the automotive sector.',
            },
            {
              title: 'Telecom Systems',
              desc: 'Custom-built platforms that simplify billing, support automation, and improve customer communication efficiency.',
            },
          ].map((item, i) => (
            <div
              key={i}
              className="bg-white border border-gray-100 rounded-lg p-6 shadow-sm hover:shadow-md transition"
            >
              <h3 className="font-semibold text-indigo-900 text-xl mb-2">
                {item.title}
              </h3>
              <p className="text-gray-600 text-lg">{item.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* --- Section 2: Work Process --- */}
      <section className="container bg-gray-50 py-16 px-6">
        <div className="text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-indigo-900 mb-4">
            How We Collaborate on Custom Software Projects
          </h2>
          <p className="text-gray-600 max-w-3xl mx-auto mb-10">
            Whether you need full outsourcing, a dedicated engineering team, or
            a flexible engagement — our process ensures transparency, quality,
            and efficiency.
          </p>

          <div className="grid md:grid-cols-3 gap-6">
            {[
              {
                title: 'Full Project Outsourcing',
                desc: 'We manage your entire software lifecycle, from planning to maintenance — ensuring timely delivery and consistent quality.',
              },
              {
                title: 'Dedicated Dev Teams',
                desc: 'Hire a long-term development team that works as your extended arm — giving you control and flexibility with expert collaboration.',
              },
              {
                title: 'Team Augmentation',
                desc: 'Scale your workforce instantly with skilled developers, designers, and QA experts integrated into your existing workflow.',
              },
            ].map((item, i) => (
              <div
                key={i}
                className="bg-white rounded-lg p-6 border border-gray-100 shadow-sm hover:shadow-md transition"
              >
                <h3 className="font-semibold text-indigo-900 text-xl mb-2">
                  {item.title}
                </h3>
                <p className="text-gray-600 text-lg">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* --- Section 3: Why Choose Us --- */}
      <section className="bg-gray-100 py-16 px-6">
        <div className="container">
          <h2 className="text-3xl md:text-4xl font-bold text-indigo-900 text-center mb-4">
            Why Choose CodeNova as Your Development Partner
          </h2>
          <p className="text-center text-gray-600 max-w-3xl mx-auto mb-10">
            We’re more than developers — we’re your digital partners focused on
            building innovative, transparent, and long-term software solutions.
          </p>

          <div className="grid md:grid-cols-2 gap-8 items-center">
            <div className="space-y-6">
              {[
                {
                  num: '1',
                  title: 'High-Quality Delivery',
                  desc: 'We maintain complete transparency throughout the project and deliver software that meets your expectations and beyond.',
                },
                {
                  num: '2',
                  title: 'Faster Time-to-Market',
                  desc: 'Our agile processes and experienced developers ensure your product reaches users faster without compromising quality.',
                },
                {
                  num: '3',
                  title: 'Modern Tech Stack',
                  desc: 'We utilize the latest frameworks, libraries, and tools for performance-driven and scalable applications.',
                },
              ].map((item) => (
                <div key={item.num} className="flex items-start space-x-4">
                  <div className="flex-shrink-0 w-8 h-8 flex items-center justify-center rounded-full bg-indigo-100 text-indigo-700 font-bold">
                    {item.num}
                  </div>
                  <div>
                    <h4 className="font-semibold text-indigo-900 text-xl">
                      {item.title}
                    </h4>
                    <p className="text-lg text-gray-600">{item.desc}</p>
                  </div>
                </div>
              ))}
            </div>

            <div className="flex justify-center">
              <Lottie
                animationData={software}
                loop
                autoplay
                className="w-[600px] h-full p-5"
              />
            </div>
          </div>
        </div>
      </section>

      {/* --- Section 4: Solutions --- */}
      <section className="container bg-gray-50 py-16 px-6">
        <div className="text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-indigo-900 mb-6">
            We Deliver Tailored Software Solutions for Every Business Level
          </h2>
          <div className="grid md:grid-cols-3 gap-6 mt-10">
            {[
              {
                num: '01',
                color: 'text-blue-600 border-blue-600',
                title: 'Enterprise Software',
                desc: 'Build scalable systems that unify your company’s data, boost collaboration, and improve visibility.',
              },
              {
                num: '02',
                color: 'text-green-600 border-green-600',
                title: 'Departmental Tools',
                desc: 'Custom solutions that streamline daily operations for departments like HR, sales, or logistics.',
              },
              {
                num: '03',
                color: 'text-yellow-500 border-yellow-500',
                title: 'Process Automation',
                desc: 'Automate repetitive workflows, minimize human error, and enhance productivity through smart tools.',
              },
            ].map((item) => (
              <div key={item.num} className="text-left">
                <div className={`text-2xl font-bold mb-2 ${item.color}`}>
                  {item.num}
                </div>
                <div
                  className={`border-t-4 ${item.color} bg-white rounded-md shadow-sm p-6 hover:shadow-md transition`}
                >
                  <h3 className="font-semibold text-indigo-900 text-xl mb-2">
                    {item.title}
                  </h3>
                  <p className="text-gray-600 text-lg leading-relaxed">
                    {item.desc}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
      <WhyChooseUs />
      <GetFreeQuote />
    </div>
  )
}
