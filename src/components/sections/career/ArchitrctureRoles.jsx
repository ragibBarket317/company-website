import { useState } from 'react'
import { ChevronDown } from 'lucide-react'

const jobs = [
  {
    id: 2,
    title: 'Architecture & Technical Leadership',
    description: [
      'Solutions Architect',
      'Enterprise Architect',
      'Cloud Architect',
      'AI Systems Architect',
      'Technical Lead',
      'Principal Engineer',
    ],
  },
  {
    id: 3,
    title: 'Quality & Reliability',
    description: [
      'QA Engineer',
      'Automation QA Engineer',
      'Performance Testing Engineer',
      'Security Testing Specialist',
    ],
  },
  {
    id: 4,
    title: 'Product & Strategy',
    description: [
      'Product Manager',
      'Technical Product Manager',
      'Program Manager',
      'Business Analyst',
      'Technical Consultant',
    ],
  },
  {
    id: 5,
    title: 'Design & Experience',
    description: [
      'UI/UX Designer',
      'Product Designer',
      'Interaction Designer',
      'Design Systems Engineer',
    ],
  },
]

export default function ArchitectureRoles() {
  const [expanded, setExpanded] = useState(null)

  const toggleExpand = (id) => {
    setExpanded(expanded === id ? null : id)
  }

  return (
    <section className="py-5 px-6 text-white">
      <div className="max-w-6xl mx-auto">
        {/* Section Title */}
        <p className="text-cyan-400 tracking-[0.3em] text-xs mb-10">
          02. ArchitectureRoles & Technical Leadership
        </p>

        {/* Grid */}
        <div className="grid md:grid-cols-2 gap-6 items-start">
          {jobs.map((job) => (
            <div
              key={job.id}
              className={`relative rounded-xl border border-white/10 
              bg-gradient-to-br from-[#06122A] to-[#030B1C]
              p-6 transition-all duration-300 group
              hover:border-cyan-400 hover:shadow-[0_0_25px_rgba(34,211,238,0.2)]
              `}
            >
              {/* Title */}
              <h3 className="text-lg font-semibold mb-1 group-hover:text-cyan-400 transition">
                {job.title}
              </h3>

              {/* <p className="text-xs text-gray-400 tracking-wide mb-4">
                {job.subtitle}
              </p> */}

              {/* Expandable Content */}
              <div
                className={`overflow-hidden transition-all duration-500 ${
                  expanded === job.id
                    ? 'max-h-40 opacity-100'
                    : 'max-h-0 opacity-0'
                }`}
              >
                <ul>
                  {job.description.map((item, index) => (
                    <li
                      key={index}
                      className="ml-3 flex items-start text-gray-300 text-sm"
                    >
                      <span className="w-2 h-2 bg-cyan-400 rounded-full mt-2 mr-3"></span>
                      {item}
                    </li>
                  ))}
                </ul>
              </div>

              {/* View More Button */}
              <button
                onClick={() => toggleExpand(job.id)}
                className="flex items-center gap-2 text-cyan-400 text-sm mt-2"
              >
                {expanded === job.id ? 'View Less' : 'View More'}
                <ChevronDown
                  size={16}
                  className={`transition-transform ${
                    expanded === job.id ? 'rotate-180' : ''
                  }`}
                />
              </button>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
