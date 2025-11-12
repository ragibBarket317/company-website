import Lottie from 'lottie-react'
import React from 'react'
import {
  FaBrain,
  FaRobot,
  FaChartLine,
  FaCodeBranch,
  FaCogs,
  FaLanguage,
  FaUsers,
  FaDatabase,
  FaProjectDiagram,
  FaServer,
  FaShieldAlt,
  FaUserTie,
} from 'react-icons/fa'
import ai from '../assets/animation/AI animation.json'
import Hero from '../components/sections/home/Hero'
import AIHero from '../components/sections/aiDevelopment/AIHero'

export default function AIDevelopmentPage() {
  return (
    <div className="">
      <AIHero />
      <div className="bg-white text-gray-800">
        {/* ===== Section 1: AI Development Services ===== */}
        <section className="py-16 px-6">
          <div className="container text-center">
            <h2 className="text-3xl md:text-4xl font-bold text-indigo-900 mb-4">
              Your Reliable Partner for AI Software Development
            </h2>
            <p className="text-gray-600 max-w-3xl mx-auto mb-10">
              From predictive analytics to custom-trained AI models — we help
              businesses harness artificial intelligence to gain a competitive
              edge through smart automation and deep insights.
            </p>

            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {[
                {
                  icon: <FaBrain />,
                  title: 'Machine Learning Solutions',
                  desc: 'Build models that learn from your data to automate decision-making and improve outcomes.',
                },
                {
                  icon: <FaLanguage />,
                  title: 'Natural Language Processing',
                  desc: 'Develop chatbots, sentiment analysis, and smart assistants that understand human language.',
                },
                {
                  icon: <FaChartLine />,
                  title: 'Predictive Analytics',
                  desc: 'Leverage historical data to predict trends, risks, and customer behavior with precision.',
                },
                {
                  icon: <FaRobot />,
                  title: 'Computer Vision Systems',
                  desc: 'Enable image recognition, video tracking, and quality inspection using deep learning.',
                },
                {
                  icon: <FaCodeBranch />,
                  title: 'Custom AI Model Development',
                  desc: 'We train and fine-tune models specifically tailored to your business needs and workflows.',
                },
                {
                  icon: <FaCogs />,
                  title: 'Generative AI & LLMs',
                  desc: 'Implement cutting-edge AI like ChatGPT, Gemini, or Claude to power creative automation.',
                },
              ].map((item, i) => (
                <div
                  key={i}
                  className="bg-white border border-gray-100 rounded-xl p-6 shadow-sm hover:shadow-md transition-all"
                >
                  <div className="w-12 h-12 bg-indigo-100 text-indigo-700 flex items-center justify-center rounded-lg text-2xl mb-4 mx-auto">
                    {item.icon}
                  </div>
                  <h3 className="font-semibold text-lg text-indigo-900 mb-2">
                    {item.title}
                  </h3>
                  <p className="text-gray-600 text-base">{item.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ===== Section 2: AI Solutions Businesses Need ===== */}
        <section className="bg-white py-16 px-6">
          <div className="container mx-auto text-center">
            <h2 className="text-3xl md:text-4xl font-bold text-indigo-900 mb-4">
              Practical AI Solutions Businesses Use Every Day
            </h2>
            <p className="text-gray-600 max-w-3xl mx-auto mb-10">
              We design scalable AI products that seamlessly integrate with your
              operations, enhancing productivity, speed, and customer
              experience.
            </p>

            <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
              {[
                {
                  icon: <FaUsers />,
                  title: 'AI Chatbots',
                  desc: 'Enhance customer support with 24/7 intelligent chat systems.',
                },
                {
                  icon: <FaServer />,
                  title: 'Data Pipelines',
                  desc: 'Automate data collection, processing, and model deployment.',
                },
                {
                  icon: <FaShieldAlt />,
                  title: 'Fraud Detection',
                  desc: 'Detect anomalies and prevent financial or security breaches.',
                },
                {
                  icon: <FaDatabase />,
                  title: 'AI-Powered Analytics',
                  desc: 'Transform data into actionable insights in real time.',
                },
              ].map((item, i) => (
                <div
                  key={i}
                  className="bg-indigo-50 border border-indigo-100 rounded-xl p-6 shadow-sm hover:shadow-md transition"
                >
                  <div className="w-10 h-10 bg-indigo-600 text-white flex items-center justify-center rounded-md text-lg mb-3 mx-auto">
                    {item.icon}
                  </div>
                  <h3 className="font-semibold text-indigo-900 text-lg mb-1">
                    {item.title}
                  </h3>
                  <p className="text-gray-600 text-sm">{item.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ===== Section 3: AI Banner ===== */}
        <section className="bg-gradient-to-r from-indigo-800 to-indigo-600 py-16 px-6 text-white">
          <div className="container mx-auto grid md:grid-cols-2 gap-8 items-center">
            <div>
              {/* <img
              src="https://cdn.pixabay.com/photo/2023/07/23/20/17/artificial-intelligence-8146845_1280.jpg"
              alt="AI illustration"
              className="rounded-xl shadow-lg"
            /> */}
              <Lottie
                animationData={ai}
                loop
                autoplay
                className="w-[600px] h-full p-10"
              />
            </div>
            <div>
              <h2 className="text-3xl md:text-4xl font-bold mb-4">
                AI Development Services That Deliver Real Results
              </h2>
              <p className="text-indigo-100 mb-6">
                Our AI experts bring years of experience in deep learning,
                automation, and cloud integration to build intelligent systems
                that actually solve your business challenges — not just showcase
                technology.
              </p>
              <button className="bg-white text-indigo-700 px-6 py-3 rounded-lg font-medium hover:bg-indigo-100 transition">
                Explore AI Expertise
              </button>
            </div>
          </div>
        </section>

        {/* ===== Section 4: Why Choose Us ===== */}
        <section className="bg-white py-16 px-6">
          <div className="container text-center">
            <h2 className="text-3xl md:text-4xl font-bold text-indigo-900 mb-4">
              Why Partner With Our AI Engineers
            </h2>
            <p className="text-gray-600 max-w-3xl mx-auto mb-10">
              We combine deep technical knowledge, proven methodologies, and a
              transparent process to ensure your AI initiative succeeds from
              start to finish.
            </p>

            <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
              {[
                {
                  icon: <FaProjectDiagram />,
                  title: 'Full-Cycle Development',
                  desc: 'End-to-end AI solutions from concept to deployment.',
                },
                {
                  icon: <FaUserTie />,
                  title: 'Industry Expertise',
                  desc: 'AI engineers specialized in multiple business domains.',
                },
                {
                  icon: <FaBrain />,
                  title: 'Research & Innovation',
                  desc: 'We stay ahead by adopting emerging AI technologies.',
                },
                {
                  icon: <FaCogs />,
                  title: 'Agile Delivery',
                  desc: 'Iterative development ensuring speed and flexibility.',
                },
              ].map((item, i) => (
                <div
                  key={i}
                  className="bg-white border border-gray-100 rounded-xl p-6 shadow-sm hover:shadow-md transition"
                >
                  <div className="w-12 h-12 bg-indigo-100 text-indigo-700 flex items-center justify-center rounded-lg text-2xl mb-4 mx-auto">
                    {item.icon}
                  </div>
                  <h3 className="font-semibold text-indigo-900 text-lg mb-2">
                    {item.title}
                  </h3>
                  <p className="text-gray-600 text-base">{item.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </section>
      </div>
    </div>
  )
}
