export default function Careers() {
  return (
    <div className="min-h-screen py-16 px-6">
      <div className="max-w-6xl mx-auto">
        {/* Header */}
        <div className="text-center mb-12">
          <h1 className="text-3xl md:text-4xl font-bold text-white">
            Join Our Team
          </h1>
          <p className="text-gray-200 max-w-2xl mx-auto mt-4">
            At our company, we’re constantly exploring new ideas and building
            digital solutions that shape the future. While we may not have
            active openings right now, we’re always excited to connect with
            passionate individuals who want to create meaningful impact.
          </p>
        </div>

        {/* Illustration / Highlight Box */}
        <div className="bg-white border rounded-xl p-10 shadow-sm text-center max-w-3xl mx-auto">
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

          <h2 className="text-2xl font-semibold mt-6 text-gray-900">
            We’d Love to Work With You
          </h2>
          <p className="text-gray-600 mt-3 leading-relaxed">
            Even if we’re not currently hiring for your role, we believe in
            growing strong relationships with talented creators, engineers,
            designers, and innovators. Our culture is built on curiosity,
            collaboration, and pushing boundaries — and we’re always open to
            meeting people who share those values.
          </p>

          <div className="mt-6">
            <button className="bg-indigo-600 text-white px-6 py-3 rounded-lg text-sm shadow hover:bg-indigo-700 transition">
              Get in Touch
            </button>
          </div>
        </div>

        {/* Culture / Why Join Us */}
        <div className="mt-16 grid md:grid-cols-3 gap-8">
          <div className="bg-white border rounded-xl p-6 shadow-sm">
            <h3 className="font-semibold text-lg text-gray-900">
              Innovation-Driven
            </h3>
            <p className="text-gray-600 mt-2">
              We focus on solving real-world business challenges with creative
              problem-solving and cutting-edge technology.
            </p>
          </div>

          <div className="bg-white border rounded-xl p-6 shadow-sm">
            <h3 className="font-semibold text-lg text-gray-900">
              People First
            </h3>
            <p className="text-gray-600 mt-2">
              We believe in supportive environments, open communication, and
              empowering individuals to grow.
            </p>
          </div>

          <div className="bg-white border rounded-xl p-6 shadow-sm">
            <h3 className="font-semibold text-lg text-gray-900">
              Future-Focused
            </h3>
            <p className="text-gray-600 mt-2">
              From AI to product engineering, we stay ahead of digital trends to
              create meaningful, future-ready solutions.
            </p>
          </div>
        </div>
      </div>
    </div>
  )
}
