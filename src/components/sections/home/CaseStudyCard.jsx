import { Truck, Pill, Layers } from 'lucide-react'
import { useNavigate } from 'react-router-dom'

export default function CaseStudyCard({ title, subtitle, type, query }) {
  const navigate = useNavigate()
  // Select icon based on type
  const getIcon = () => {
    switch (type) {
      case 'logistics':
        return (
          <Truck className="text-cyan-400 group-hover:text-blue-300 transition" />
        )
      case 'healthcare':
        return (
          <Pill className="text-cyan-400 group-hover:text-blue-300 transition" />
        )
      case 'more':
        return (
          <Layers className="text-cyan-400 group-hover:text-blue-300 transition" />
        )
      default:
        return null
    }
  }

  return (
    <div
      onClick={() => navigate(`/impact#${query}`)}
      className="group relative p-6 rounded-2xl border border-white/10 
      bg-[#111827] cursor-pointer transition-all duration-300
      hover:border-cyan-500/50 hover:shadow-[0_0_30px_rgba(59,130,246,0.25)]
      hover:-translate-y-1"
    >
      <div className="flex items-center gap-5">
        {/* Icon */}
        <div
          className="w-14 h-14 flex items-center justify-center rounded-xl
          bg-cyan-500/10 group-hover:bg-cyan-500/20 transition"
        >
          {getIcon()}
        </div>

        {/* Text */}
        <div>
          <h3 className="text-lg font-semibold text-white">{title}</h3>

          <p className="text-sm tracking-wide uppercase text-cyan-400">
            {subtitle}
          </p>
        </div>
      </div>
    </div>
  )
}
