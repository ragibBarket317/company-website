import GetFreeQuote from '../components/sections/home/GetFreeQuote'

export default function Careers() {
  return (
    <div className="min-h-screen py-16">
      <section className="relative text-white py-24 px-6">
        {/* <div className="absolute top-20 left-1/2 -translate-x-1/2 w-[600px] h-[300px] bg-blue-500/50 opacity-20 blur-[140px] rounded-full"></div> */}
        <div className="absolute inset-0 flex items-center justify-center">
          <div className="w-[600px] h-[300px] bg-blue-500/50 blur-[150px] rounded-full"></div>
        </div>
        <div className="container relative grid md:grid-cols-2 gap-12 items-center z-20">
          {/* Left Content */}
          <div>
            <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold">
              Your Next Chapter Starts Here
            </h1>

            <p className="text-gray-300 mt-4 text-base md:text-lg">
              We're always open to connecting with exceptional talent. If you're
              driven by innovation and purpose, you’ll feel right at home here.
            </p>
          </div>

          {/* Right highlight card */}
          <div className="bg-gradient-to-b from-[#15192C] to-[#252b4b] text-white border rounded-xl p-8 shadow-sm">
            <h3 className="text-lg md:text-xl font-semibold">Why Join Us?</h3>

            <p className="text-gray-400 mt-3 text-sm md:text-base">
              You'll work with passionate people, contribute to meaningful
              projects, and be part of a culture that values creativity,
              curiosity, and growth.
            </p>
          </div>
        </div>
      </section>

      <section className="py-[80px] text-white">
        <div className="container text-center">
          <h2 className="text-2xl md:text-3xl font-bold">
            Our Culture & Values
          </h2>

          <p className="text-gray-300 max-w-3xl mx-auto mt-4 text-sm md:text-base">
            We believe in a culture where creativity thrives, ownership is
            encouraged, and every team member feels valued. Our work environment
            empowers people to push boundaries, explore new ideas, and grow both
            personally and professionally.
          </p>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8 mt-12">
            <div className="backdrop-blur-xl bg-white/10 border border-white/20 hover:bg-white/20 rounded-lg p-6 shadow transition">
              <h3 className="text-lg md:text-xl font-semibold">
                Collaboration
              </h3>
              <p className="text-gray-400 mt-3 text-sm md:text-base">
                We work as one team, supporting and learning from each other.
              </p>
            </div>

            <div className="backdrop-blur-xl bg-white/10 border border-white/20 hover:bg-white/20 rounded-lg p-6 shadow transition">
              <h3 className="text-lg md:text-xl font-semibold">Innovation</h3>
              <p className="text-gray-400 mt-3 text-sm md:text-base">
                We embrace fresh ideas and build solutions that shape the
                future.
              </p>
            </div>

            <div className="backdrop-blur-xl bg-white/10 border border-white/20 hover:bg-white/20 rounded-lg p-6 shadow transition">
              <h3 className="text-lg md:text-xl font-semibold">Integrity</h3>
              <p className="text-gray-400 mt-3 text-sm md:text-base">
                We take responsibility and deliver with honesty and commitment.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="py-[80px] text-white">
        <div className="container text-center">
          <h2 className="text-2xl md:text-3xl font-bold">
            Life at Our Company
          </h2>

          <p className="text-gray-300 max-w-3xl mx-auto mt-4 text-sm md:text-base">
            A workplace where talent meets opportunity. We value balance,
            flexibility, and a positive mindset that fuels a vibrant working
            environment.
          </p>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8 mt-12">
            <div className="backdrop-blur-xl bg-white/10 border border-white/20 hover:bg-white/20 rounded-lg p-6 shadow transition">
              <h4 className="font-semibold text-base md:text-lg">
                Flexible Hours
              </h4>
              <p className="text-gray-400 mt-2 text-sm md:text-base">
                Work schedules designed around productivity and comfort.
              </p>
            </div>

            <div className="backdrop-blur-xl bg-white/10 border border-white/20 hover:bg-white/20 rounded-lg p-6 shadow transition">
              <h4 className="font-semibold text-base md:text-lg">
                Remote Friendly
              </h4>
              <p className="text-gray-400 mt-2 text-sm md:text-base">
                Collaborate with teammates from anywhere in the world.
              </p>
            </div>

            <div className="backdrop-blur-xl bg-white/10 border border-white/20 hover:bg-white/20 rounded-lg p-6 shadow transition">
              <h4 className="font-semibold text-base md:text-lg">
                Team Retreats
              </h4>
              <p className="text-gray-400 mt-2 text-sm md:text-base">
                Annual meetups to connect, reset, and celebrate achievements.
              </p>
            </div>

            <div className="backdrop-blur-xl bg-white/10 border border-white/20 hover:bg-white/20 rounded-lg p-6 shadow transition">
              <h4 className="font-semibold text-base md:text-lg">
                Learning Support
              </h4>
              <p className="text-gray-400 mt-2 text-sm md:text-base">
                Access to courses, workshops, and growth programs.
              </p>
            </div>
          </div>
        </div>
      </section>

      <div className="container py-[80px]">
        <div className="text-center mb-12">
          <h1 className="text-2xl md:text-3xl lg:text-4xl font-bold text-white">
            Join Our Team
          </h1>

          <p className="text-gray-200 max-w-2xl mx-auto mt-4 text-sm md:text-base">
            At our company, we’re constantly exploring new ideas and building
            digital solutions that shape the future. While we may not have
            active openings right now, we’re always excited to connect with
            passionate individuals who want to create meaningful impact.
          </p>
        </div>

        <div className="bg-gradient-to-b from-[#15192C] to-[#252b4b] rounded-xl p-10 shadow-sm text-center">
          <div className="w-20 h-20 rounded-full bg-indigo-50 flex items-center justify-center mx-auto">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="w-10 h-10 text-indigo-600"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={1.5}
                d="M16 17l-4 4m0 0l-4-4m4 4V3"
              />
            </svg>
          </div>

          <h2 className="text-xl md:text-2xl font-semibold mt-6 text-white">
            We’d Love to Work With You
          </h2>

          <p className="text-gray-400 mt-3 leading-relaxed text-sm md:text-base">
            Even if we’re not currently hiring for your role, we believe in
            growing strong relationships with talented creators, engineers,
            designers, and innovators.
          </p>

          <div className="mt-6">
            <button className="bg-indigo-600 text-white px-6 py-3 rounded-lg text-sm shadow hover:bg-indigo-700 transition">
              Get in Touch
            </button>
          </div>
        </div>

        <div className="py-[40px] grid md:grid-cols-3 gap-8">
          <div className="bg-gradient-to-b from-[#15192C] to-[#252b4b] rounded-xl p-6 shadow-sm">
            <h3 className="font-semibold text-base md:text-lg text-white">
              Innovation-Driven
            </h3>
            <p className="text-gray-400 mt-2 text-sm md:text-base">
              We focus on solving real-world business challenges.
            </p>
          </div>

          <div className="bg-gradient-to-b from-[#15192C] to-[#252b4b] rounded-xl p-6 shadow-sm">
            <h3 className="font-semibold text-base md:text-lg text-white">
              People First
            </h3>
            <p className="text-gray-400 mt-2 text-sm md:text-base">
              We believe in supportive environments.
            </p>
          </div>

          <div className="bg-gradient-to-b from-[#15192C] to-[#252b4b] rounded-xl p-6 shadow-sm">
            <h3 className="font-semibold text-base md:text-lg text-white">
              Future-Focused
            </h3>
            <p className="text-gray-400 mt-2 text-sm md:text-base">
              We stay ahead of digital trends.
            </p>
          </div>
        </div>
      </div>

      <GetFreeQuote />
    </div>
  )
}
