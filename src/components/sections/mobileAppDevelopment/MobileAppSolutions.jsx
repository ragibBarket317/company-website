import React from 'react'

const solutions = [
  {
    id: '01',
    color: 'border-blue-600 text-blue-600',
    title: 'Enterprise-Wide Mobile Apps',
    description:
      'We develop custom mobile apps that link all departments together, house data in one place, and support enterprise-grade.',
  },
  {
    id: '02',
    color: 'border-green-600 text-green-600',
    title: 'Departmental Mobile Apps',
    description:
      'Get mobile apps built for specific teams — like HR, sales, or support — to streamline daily tasks, approvals, and internal communication.',
  },
  {
    id: '03',
    color: 'border-yellow-500 text-yellow-500',
    title: 'Business Process Management Apps',
    description:
      'We develop mobile-first BPM apps to automate your workflows, visualize progress, and give managers visibility to operations in real time.',
  },
]

export default function MobileAppSolutions() {
  return (
    <section className="container h-[100vh]">
      <div className="w-full h-full flex justify-center items-center">
        <div>
          <div className="px-6 text-center">
            {/* Heading */}
            <div className="max-w-6xl mx-auto px-6 text-center">
              <h2 className="text-3xl md:text-5xl font-bold text-white">
                Mobile App Solutions Built Around Your Business Operations
              </h2>
              <p className="mt-4 text-gray-600">
                If you're managing an enterprise, optimizing a department, or
                automating internal processes – we develop mobile apps that
                streamline operations, boost productivity, and scale with your
                business.
              </p>
            </div>

            {/* Solutions Grid */}
            <div className="mt-12 grid md:grid-cols-3 gap-6">
              {solutions.map((item) => (
                <div key={item.id} className="text-left">
                  <div className={`text-2xl font-bold mb-2 ${item.color}`}>
                    {item.id}
                  </div>
                  <div
                    className={` border-l-6 ${item.color} rounded-xl shadow-2xl p-6 transition duration-300 hover:shadow-md`}
                  >
                    <h3 className="font-semibold text-indigo-400 text-lg mb-2">
                      {item.title}
                    </h3>
                    <p className="text-gray-200 text-[18px] leading-relaxed">
                      {item.description}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
