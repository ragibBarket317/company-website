import developmentCenter from '../assets/images/development-center.png'
import mission from '../assets/images/mission.png'
import vision from '../assets/images/vision.png'
// import innovation from '../assets/images/innovation.png'

export default function About() {
  return (
    <div className="font-sans text-gray-800 ">
      {/* Hero Section */}
      <section className="py-32  text-center text-white overflow-hidden">
        <div className="container">
          <div className="absolute inset-0 flex items-center justify-center">
            <div className="w-[600px] h-[300px] bg-blue-500/20 blur-[150px] rounded-full"></div>
          </div>

          <div className="relative z-10 max-w-3xl mx-auto">
            <h1 className="text-xl md:text-4xl font-bold leading-tight">
              Who We Are
            </h1>
            <p className="text-gray-300 mt-6 text-[14px] md:text-[18px] max-w-2xl mx-auto">
              At Intexa, we build digital experiences that transform businesses.
              Our team brings creativity, engineering, and deep technical
              expertise together to shape the future.
            </p>
          </div>
        </div>
      </section>

      {/* Development Center */}
      <div className="container py-[40px] md:py-[80px]">
        <section className=" grid md:grid-cols-2 gap-10 items-center">
          <div>
            <h2 className="text-xl md:text-4xl text-white font-bold mb-4">
              Our Development Center
            </h2>
            <p className="mb-4 text-[14px] md:text-[18px] text-gray-400">
              Intexa specializes in building modern websites and mobile apps
              with powerful, scalable, and secure technology. Our teams work
              globally and focus on delivering exceptional digital solutions.
            </p>
            <p className="text-[14px] md:text-[18px] text-gray-400">
              With a team of skilled engineers, designers, and digital experts,
              we ensure every project is handled with innovation, speed, and
              precision.
            </p>
          </div>
          <div className="h-full md:h-[400px] rounded-xl shadow-inner">
            <img src={developmentCenter} alt="" className="w-[80%] mx-auto " />
          </div>
        </section>
      </div>

      {/* Core Services */}
      <div className="container py-[40px] md:py-[80px]">
        <section className="text-center">
          <h2 className="text-xl md:text-4xl text-white font-bold mb-6">
            Our Core Services
          </h2>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            <div className="p-6 bg-white/5 border border-white/10 backdrop-blur-xl rounded-xl shadow-sm hover:shadow-lg transition text-white">
              <p className="text-xl md:text-3xl mb-2">📱</p>
              <p className="text-[14px] md:text-base">App Development</p>
            </div>
            <div className="p-6 bg-white/5 border border-white/10 backdrop-blur-xl rounded-xl shadow-sm hover:shadow-lg transition text-white">
              <p className="text-xl md:text-3xl mb-2">💻</p>
              <p className="text-[14px] md:text-base">Web Development</p>
            </div>
            <div className="p-6 bg-white/5 border border-white/10 backdrop-blur-xl rounded-xl shadow-sm hover:shadow-lg transition text-white">
              <p className="text-xl md:text-3xl mb-2">🧠</p>
              <p className="text-[14px] md:text-base">AI / ML</p>
            </div>
            <div className="p-6 bg-white/5 border border-white/10 backdrop-blur-xl rounded-xl shadow-sm hover:shadow-lg transition text-white">
              <p className="text-xl md:text-3xl mb-2">🔗</p>
              <p className="text-[14px] md:text-base">Blockchain</p>
            </div>
          </div>
        </section>
      </div>

      {/* Why Choose Us */}
      <div className="container py-[40px] md:py-[80px]">
        <section className="">
          <h2 className="text-xl md:text-4xl text-white font-bold mb-6 text-center">
            Why Choose Intexa?
          </h2>

          <div className="grid md:grid-cols-2 gap-10">
            <div className="bg-white h-72 rounded-xl shadow-md">
              {/* <img src={innovation} alt="" /> */}
            </div>

            <div className="grid grid-cols-1 gap-4 text-white">
              <div className="p-4 border border-white/10 bg-white/5 backdrop-blur-xl rounded-xl">
                <h3 className="text-lg md:text-xl font-semibold">
                  Extensive Expertise
                </h3>
                <p className="text-gray-400 text-[14px] md:text-base">
                  Highly experienced team providing top-tier solutions.
                </p>
              </div>
              <div className="p-4 border border-white/10 bg-white/5 backdrop-blur-xl rounded-xl">
                <h3 className="text-lg md:text-xl font-semibold">
                  Transparent Communication
                </h3>
                <p className="text-gray-400 text-[14px] md:text-base">
                  We keep you updated throughout the entire process.
                </p>
              </div>
              <div className="p-4 border border-white/10 bg-white/5 backdrop-blur-xl rounded-xl">
                <h3 className="text-lg md:text-xl font-semibold">
                  Quality Assurance
                </h3>
                <p className="text-gray-400 text-[14px] md:text-base">
                  Ensuring flawless performance across all devices.
                </p>
              </div>
              <div className="p-4 border border-white/10 bg-white/5 backdrop-blur-xl rounded-xl">
                <h3 className="text-lg md:text-xl font-semibold">
                  Flexibility
                </h3>
                <p className="text-gray-400 text-[14px] md:text-base">
                  Your requirements are always our priority.
                </p>
              </div>
            </div>
          </div>
        </section>
      </div>

      {/* Mission */}
      <div className="container py-[40px] md:py-[80px]">
        <section className="grid md:grid-cols-2 gap-10 items-center">
          <div>
            <h2 className="text-xl md:text-4xl text-white font-bold mb-4">
              Our Mission
            </h2>
            <p className="text-gray-300 text-[14px] md:text-base">
              Our mission is to empower businesses with scalable, secure, and
              customer-centric digital solutions. We believe in building strong
              partnerships and delivering value-driven results.
            </p>
          </div>
          <div className="h-full md:h-[300px] flex items-center justify-center rounded-xl shadow-inner">
            <img src={mission} alt="" className="w-56 h-56 md:w-96 md:h-96" />
          </div>
        </section>
      </div>

      {/* Vision */}
      <div className="hidden md:block container py-[40px] md:py-[80px]">
        <section className="p-10 grid md:grid-cols-2 gap-10 items-center">
          <div className="h-full md:h-[300px] flex items-center justify-center rounded-xl shadow-inner">
            <img src={vision} alt="" className="w-56 h-56 md:w-96 md:h-96" />
          </div>
          <div>
            <h2 className="text-4xl text-white font-bold mb-4">Our Vision</h2>
            <p className="text-gray-300">
              To be a global leader in digital transformation, empowering
              businesses through innovation, technology, and long-term growth.
            </p>
          </div>
        </section>
      </div>
      {/* Vision mobile */}
      <div className="block md:hidden container py-[40px] md:py-[80px]">
        <section className="grid md:grid-cols-2 gap-10 items-center">
          <div>
            <h2 className="text-xl text-white font-bold mb-4">Our Vision</h2>
            <p className="text-gray-300 text-[14px]">
              To be a global leader in digital transformation, empowering
              businesses through innovation, technology, and long-term growth.
            </p>
          </div>
          <div className="h-full md:h-[300px] flex items-center justify-center rounded-xl shadow-inner">
            <img src={vision} alt="" className="w-56 h-56 md:w-96 md:h-96" />
          </div>
        </section>
      </div>

      {/* Team Culture Section */}
      <section className="py-24 text-white text-center bg-[#080917]">
        <h2 className="text-xl md:text-4xl font-bold">Our Culture</h2>
        <p className="text-gray-400 max-w-2xl mx-auto text-[14px] md:text-[18px] mt-4 mb-8">
          We value curiosity, collaboration, and building meaningful digital
          experiences.
        </p>

        <div className="grid md:grid-cols-3 gap-8 mt-12 container">
          <div className="p-6 bg-white/5 backdrop-blur-xl border border-white/10 rounded-xl">
            <h3 className="text-lg md:text-xl font-semibold">Innovation</h3>
            <p className="text-gray-400 text-[14px] md:text-base mt-2">
              We always explore modern technologies.
            </p>
          </div>
          <div className="p-6 bg-white/5 backdrop-blur-xl border border-white/10 rounded-xl">
            <h3 className="text-lg md:text-xl font-semibold">Teamwork</h3>
            <p className="text-gray-400 text-[14px] md:text-base mt-2">
              We grow together as a unified team.
            </p>
          </div>
          <div className="p-6 bg-white/5 backdrop-blur-xl border border-white/10 rounded-xl">
            <h3 className="text-lg md:text-xl font-semibold">Growth</h3>
            <p className="text-gray-400 text-[14px] md:text-base mt-2">
              We help every member unlock their potential.
            </p>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-24 container text-center text-white">
        <h2 className="text-xl md:text-4xl font-bold">Want to Work With Us?</h2>
        <p className="text-gray-400 mt-3 max-w-xl mx-auto text-[14px] md:text-base">
          Let's build something extraordinary together.
        </p>
        <button className="mt-8 px-8 py-4 bg-indigo-600 hover:bg-indigo-700 rounded-lg font-semibold shadow-lg transition">
          Contact Us
        </button>
      </section>
    </div>
  )
}
