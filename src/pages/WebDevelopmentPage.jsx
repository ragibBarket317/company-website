import React, { useRef } from 'react'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import { useGSAP } from '@gsap/react'

import {
  FaCode,
  FaUsers,
  FaShieldAlt,
  FaIndustry,
  FaCogs,
  FaHandsHelping,
  FaDatabase,
  FaSyncAlt,
  FaComments,
  FaChartLine,
  FaLaptopCode,
  FaGlobe,
  FaCloudUploadAlt,
  FaClipboard,
} from 'react-icons/fa'

import Hero from '../components/sections/home/Hero'
import WhyChooseUs from '../components/sections/home/WhyChooseUs'
import GetFreeQuote from '../components/sections/home/GetFreeQuote'
import Lottie from 'lottie-react'
import software from '../assets/animation/Software.json'
import MeanStackSection from '../components/sections/mobileAppDevelopment/MeanStackSection'
import WebHero from '../components/sections/webDevelopment/WebHero'
import WebHeroSmallScreen from '../components/sections/webDevelopment/WebHeroSmallScreen'

gsap.registerPlugin(ScrollTrigger)

export default function WebDevelopmentPage() {
  const sectionRef = useRef(null)
  const devSectionRef = useRef(null)
  const stepsRef = useRef([])
  const devStepsRef = useRef([])
  const cardRef = useRef(null)
  const devCardRef = useRef(null)

  // useGSAP(
  //   () => {
  //     gsap.from(devStepsRef.current, {
  //       y: 80,
  //       opacity: 0,
  //       stagger: 0.15,
  //       duration: 0.9,
  //       ease: 'power3.out',
  //       scrollTrigger: {
  //         trigger: devSectionRef.current,
  //         start: 'top 70%',
  //         toggleActions: 'restart none none none',
  //       },
  //     })
  //   },
  //   { scope: devSectionRef }
  // )

  useGSAP(
    () => {
      gsap.from(sectionRef.current, {
        opacity: 0,
        y: 60,
        duration: 1.2,
        ease: 'power3.out',
        scrollTrigger: {
          trigger: sectionRef.current,
          start: 'top 80%',
          toggleActions: 'restart none none none',
        },
      })

      // Steps stagger animation
      gsap.from(stepsRef.current, {
        opacity: 0,
        x: -50,
        duration: 0.8,
        stagger: 0.15,
        ease: 'power2.out',
        scrollTrigger: {
          trigger: sectionRef.current,
          start: 'top 70%',
          toggleActions: 'restart none none none',
        },
      })

      // Right Card Animation
      gsap.from(cardRef.current, {
        opacity: 0,
        scale: 0.9,
        y: 40,
        duration: 1,
        ease: 'power3.out',
        scrollTrigger: {
          trigger: cardRef.current,
          start: 'top 80%',
          toggleActions: 'restart none none none',
        },
      })
    },
    { scope: sectionRef }
  )

  return (
    <div className=" ">
      <div className="md:hidden">
        <WebHeroSmallScreen />
      </div>

      <div className="hidden md:block">
        <WebHero />
      </div>

      <div className=" text-gray-200">
        <section ref={devSectionRef} className="py-16">
          <div className="container text-center">
            <div className="grid md:grid-cols-3 lg:grid-cols-4 gap-6 text-left">
              {[
                {
                  num: '01',
                  title: 'Frontend Developers',
                  desc: 'Build pixel-perfect, fast-loading interfaces with our frontend experts — delivering smooth user experiences across all screen sizes.',
                },
                {
                  num: '02',
                  title: 'Backend Developers',
                  desc: 'Power your site with secure, scalable backend logic — designed by developers who understand performance, data flow, and uptime.',
                },
                {
                  num: '03',
                  title: 'Full-Stack Developers',
                  desc: 'Get end-to-end development from one team. Our full-stack experts manage frontend, backend, and everything in between — efficiently.',
                },
                {
                  num: '04',
                  title: 'Custom Web App Developers',
                  desc: 'We offer web app development services tailored to your workflows. From idea to deployment, our custom builds match your business goals.',
                },
              ].map((step, i) => (
                <div
                  key={i}
                  ref={(el) => (devStepsRef.current[i] = el)}
                  className="backdrop-blur-xl bg-white/10 border border-white/20 
 p-6 
hover:bg-white/20 rounded-lg shadow-sm hover:shadow-md transition"
                >
                  <div className="flex items-center justify-between mb-2"></div>
                  <h4 className="font-semibold text-white text-lg md:text-xl mb-1">
                    {step.title}
                  </h4>
                  <p className="text-gray-200 text-[14px] md:text-base">
                    {step.desc}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>
        <section ref={sectionRef} className="container py-[40px] md:py-[80px]">
          <div className="max-w-6xl mx-auto px-6 text-center">
            <h2 className="text-xl md:text-4xl font-bold text-white">
              A Complete Suite of Web Development Services for Modern Brands
            </h2>
            <p className="mt-4 text-gray-200 max-w-3xl mx-auto text-[14px] md:text-[18px]">
              Our web development process is built around real business needs.
              We create secure and scalable websites and custom web applications
              that offer strong performance and excellent user experience. We
              are a trusted web development company, building clean code,
              improving transparency, fostering collaboration, with results
              built to grow alongside your business.
            </p>
          </div>

          <div className="mt-10 grid md:grid-cols-2 gap-6 px-6">
            {/* Left Section */}
            <div className="bg-[#10112D] text-white rounded-lg p-4 md:p-8 flex flex-col justify-center space-y-4">
              {[
                { id: 1, title: 'Website Consulting Services' },
                { id: 2, title: 'Custom Website Development' },
                { id: 3, title: 'Enterprise Web Development' },
                { id: 4, title: 'Web App Development Services' },
                { id: 5, title: 'CMS & Website Integration Services' },
                { id: 6, title: 'eCommerce Website Development' },
                { id: 7, title: 'Third-Party API Integration' },
              ].map((step, index) => (
                <div
                  key={step.id}
                  ref={(el) => (stepsRef.current[index] = el)}
                  className="flex items-start space-x-4"
                >
                  <div className="flex-shrink-0 w-6 h-6 bg-white text-blue-700 font-bold rounded-full flex items-center justify-center">
                    {step.id}
                  </div>
                  <p className="font-medium text-[14px] md:text-base">
                    {step.title}
                  </p>
                </div>
              ))}
            </div>

            {/* Right Section */}
            <div
              ref={cardRef}
              className="border border-gray-300 rounded-lg p-5 md:p-10 flex flex-col items-start"
            >
              <div className="bg-blue-700 text-white p-4 rounded-xl mb-6">
                <FaClipboard className="w-5 h-5" />
              </div>
              <h3 className="text-lg md:text-xl font-semibold text-white mb-3">
                Third-Party API Integration
              </h3>
              <p className="text-gray-400 leading-relaxed text-[14px] md:text-[18px]">
                Already using tools like Stripe, Salesforce, or HubSpot? We
                connect your website with these platforms using secure, reliable
                APIs — so everything works together in real time.
              </p>
            </div>
          </div>
        </section>
        <MeanStackSection />
        {/* --- Section 1: Industries --- */}
        <section className="container py-[40px] md:py-[80px]">
          <h2 className="text-xl md:text-4xl font-bold text-white text-center mb-4">
            Industries We Build Web Platforms For
          </h2>
          <p className="text-center text-[14px] md:text-[18px] text-gray-200 max-w-3xl mx-auto mb-10">
            We provide full-cycle web development for diverse industries that
            demand scalability, modern design, and security. Our custom-built
            platforms help you connect, engage, and grow your business.
          </p>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              {
                icon: <FaLaptopCode className="text-indigo-600 text-2xl" />,
                title: 'Automotive Web Solutions',
                desc: 'From car listings to booking systems, we build dealer and service platforms that streamline operations and customer engagement.',
              },
              {
                icon: <FaGlobe className="text-indigo-600 text-2xl" />,
                title: 'Telecom Web Platforms',
                desc: 'We create telecom dashboards and customer portals that handle billing, data management, and user support efficiently.',
              },
              {
                icon: <FaShieldAlt className="text-indigo-600 text-2xl" />,
                title: 'Insurance & Finance Portals',
                desc: 'Designing secure, user-friendly portals for managing policies, claims, and account dashboards with data privacy in focus.',
              },
              {
                icon: <FaCloudUploadAlt className="text-indigo-600 text-2xl" />,
                title: 'Aviation & Travel Portals',
                desc: 'Developing booking engines and travel dashboards that ensure seamless user experience and operational control.',
              },
              {
                icon: <FaChartLine className="text-indigo-600 text-2xl" />,
                title: 'OTT & Media Websites',
                desc: 'Creating scalable streaming and subscription-based media platforms with custom content control and analytics.',
              },
              {
                icon: <FaIndustry className="text-indigo-600 text-2xl" />,
                title: 'Enterprise Web Apps',
                desc: 'Powerful web solutions that help enterprises manage workflows, automate tasks, and achieve digital transformation.',
              },
            ].map((item, i) => (
              <div
                key={i}
                className="backdrop-blur-xl bg-white/10 border border-white/20 

hover:bg-white/20  rounded-lg p-6 shadow-[0_8px_6px_-1px_rgba(0,0,0,1),0_2px_4px_-1px_rgba(0,0,0,0.1)] hover:shadow-md transition"
              >
                <div className="mb-3">{item.icon}</div>
                <h3 className="font-semibold text-white text-lg md:text-xl mb-2">
                  {item.title}
                </h3>
                <p className="text-gray-400 text-[14px] md:text-base">
                  {item.desc}
                </p>
              </div>
            ))}
          </div>
        </section>
        {/* --- Section 3: Why Choose Us --- */}
        <section className="py-[40px] md:py-[80px]">
          <div className="container">
            <h2 className="text-xl md:text-4xl font-bold text-white text-center mb-4">
              Why Choose Intexa as Your Development Partner
            </h2>
            <p className="text-center text-gray-200 text-[14px] md:text-[18px] max-w-3xl mx-auto mb-10">
              We’re more than developers — we’re your digital partners focused
              on building innovative, transparent, and long-term software
              solutions.
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
                      <h4 className="font-semibold text-white text-lg md:text-xl">
                        {item.title}
                      </h4>
                      <p className="text-[14px] text-lg text-gray-400">
                        {item.desc}
                      </p>
                    </div>
                  </div>
                ))}
              </div>

              <div className="flex justify-center">
                <Lottie
                  animationData={software}
                  loop
                  autoplay
                  className="w-full lg:w-[600px] h-full p-5"
                />
              </div>
            </div>
          </div>
        </section>

        {/* --- Section 2: Web Dev Process --- */}
        <section className="relative bg-[#080917] md:h-[100vh] py-[40px] md:py-16">
          <div className="circlePosition w-[400px] h-[150px] bg-blue-400 rounded-full absolute z-1 top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 blur-[200px]"></div>
          <div className="w-full h-full flex justify-center items-center">
            <div>
              <div className="container text-center">
                <h2 className="text-xl md:text-4xl font-bold text-white mb-4">
                  Our Web Development Process
                </h2>
                <p className="text-gray-200 text-[14px] md:text-[18px] max-w-3xl mx-auto mb-10">
                  We follow a structured, agile process that turns your ideas
                  into high-performing websites and applications — delivered on
                  time and with complete transparency.
                </p>

                <div className="grid md:grid-cols-3 lg:grid-cols-6 gap-6 text-left">
                  {[
                    {
                      num: '01',
                      title: 'Discovery',
                      desc: 'We analyze your requirements, goals, and users to create a solid foundation for your project.',
                    },
                    {
                      num: '02',
                      title: 'Planning & Design',
                      desc: 'Our designers and planners map the UX/UI flow and design prototypes aligned with your brand identity.',
                    },
                    {
                      num: '03',
                      title: 'Development',
                      desc: 'Using modern frameworks, our developers code robust, scalable, and mobile-responsive web apps.',
                    },
                    {
                      num: '04',
                      title: 'Testing',
                      desc: 'Rigorous testing ensures flawless performance, security, and smooth functionality across devices.',
                    },
                    {
                      num: '05',
                      title: 'Deployment',
                      desc: 'We handle deployment with zero downtime — ensuring your web solution goes live seamlessly.',
                    },
                    {
                      num: '06',
                      title: 'Maintenance',
                      desc: 'Post-launch, we offer continuous support and updates to keep your platform secure and optimized.',
                    },
                  ].map((step, i) => (
                    <div
                      key={i}
                      className=" rounded-lg p-5 shadow-[0_8px_6px_-1px_rgba(0,0,0,1),0_2px_4px_-1px_rgba(0,0,0,0.1)] transition"
                    >
                      <div className="flex items-center justify-between mb-2">
                        <div className="text-[12px] md:text-sm font-bold text-indigo-600">
                          Step {step.num}
                        </div>
                      </div>
                      <h4 className="font-semibold text-white text-[14px] md:text-xl mb-1">
                        {step.title}
                      </h4>
                      <p className="text-gray-400 text-[14px] md:text-base">
                        {step.desc}
                      </p>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* --- Section 3: Why Choose Us --- */}
        <div className="relative py-[40px] md:py-0 md:h-[100vh]">
          <div className="circlePosition w-[400px] h-[100px] bg-blue-400 rounded-full absolute z-1 top-[25%] blur-[200px]"></div>
          <div className="w-full h-full flex justify-center items-center">
            <div>
              <section className="container py-16">
                <h2 className="text-xl md:text-4xl font-bold text-white text-center mb-4">
                  Why Partner With Intexa for Development
                </h2>
                <p className="text-center text-gray-200 text-[14px] md:text-[18px] max-w-3xl mx-auto mb-10">
                  We don’t just code — we collaborate. Our focus is on
                  communication, innovation, and delivering reliable digital
                  solutions that grow with your business.
                </p>

                <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
                  {[
                    {
                      icon: <FaUsers className="text-indigo-600 text-2xl" />,
                      title: 'Client-Focused Approach',
                      desc: 'We build around your goals and feedback to ensure your website meets your real business objectives.',
                    },
                    {
                      icon: <FaCogs className="text-indigo-600 text-2xl" />,
                      title: 'Dedicated Web Team',
                      desc: 'Our developers stay with your project from start to finish for seamless coordination and consistent delivery.',
                    },
                    {
                      icon: <FaDatabase className="text-indigo-600 text-2xl" />,
                      title: 'Data Security First',
                      desc: 'Following strict security practices, we keep your data safe while maintaining system reliability.',
                    },
                    {
                      icon: (
                        <FaChartLine className="text-indigo-600 text-2xl" />
                      ),
                      title: 'Proven Experience',
                      desc: 'We’ve worked with startups to enterprises — tailoring solutions that fit diverse industries and requirements.',
                    },
                    {
                      icon: <FaSyncAlt className="text-indigo-600 text-2xl" />,
                      title: 'Agile & Transparent Process',
                      desc: 'Track every stage of progress with real-time updates, ensuring complete transparency throughout development.',
                    },
                    {
                      icon: <FaComments className="text-indigo-600 text-2xl" />,
                      title: 'Clear Communication',
                      desc: 'Stay informed with open communication — no tech jargon, just clear and frequent project updates.',
                    },
                  ].map((feature, i) => (
                    <div
                      key={i}
                      className="backdrop-blur-xl bg-white/10 border border-white/20 

hover:bg-white/20  rounded-lg p-6 shadow-2xl hover:shadow-md transition"
                    >
                      <div className="mb-3">{feature.icon}</div>
                      <h3 className="font-semibold text-white text-lg md:text-xl mb-2">
                        {feature.title}
                      </h3>
                      <p className="text-gray-400 text-[14px] md:text-base">
                        {feature.desc}
                      </p>
                    </div>
                  ))}
                </div>
              </section>
            </div>
          </div>
        </div>
        <WhyChooseUs />
        <GetFreeQuote />
      </div>
    </div>
  )
}
