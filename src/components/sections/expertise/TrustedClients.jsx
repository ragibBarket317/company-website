import React from 'react'

const TrustedClients = () => {
  const avatars = [
    'https://randomuser.me/api/portraits/men/32.jpg',
    'https://randomuser.me/api/portraits/women/44.jpg',
    'https://randomuser.me/api/portraits/men/75.jpg',
    'https://randomuser.me/api/portraits/women/68.jpg',
  ]

  return (
    <div className="flex items-center gap-4 bg-[#0F1B35] px-6 py-4 rounded-md w-fit">
      {/* Overlapping Avatars */}
      <div className="flex -space-x-3">
        {avatars.map((src, index) => (
          <img
            key={index}
            src={src}
            alt="client"
            className="w-8 h-8 rounded-full border-2 border-white object-cover"
          />
        ))}
      </div>

      {/* Text */}
      <p className="text-gray-400 text-sm">
        Trusted by{' '}
        <span className="font-semibold text-gray-300">
          10,000+ clients globally
        </span>
      </p>
    </div>
  )
}

export default TrustedClients
