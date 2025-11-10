import React from 'react'

export default function MeanStackSection() {
  return (
    <div className="py-[60px]">
      <section className="container bg-white rounded-2xl shadow-md overflow-hidden my-16">
        <div className="grid md:grid-cols-2">
          {/* Left Image */}
          <div className="w-full h-full">
            <img
              src="https://images.unsplash.com/photo-1603791440384-56cd371ee9a7?auto=format&fit=crop&w=900&q=80"
              alt="Developer working on tablet"
              className="w-full h-full object-cover"
            />
          </div>

          {/* Right Text Content */}
          <div className="p-10 flex flex-col justify-center">
            <h2 className="text-2xl md:text-3xl font-bold text-indigo-900 leading-snug mb-4">
              Empower Your Business with <br /> MEAN Stack Brilliance
            </h2>
            <p className="text-gray-600 leading-relaxed">
              we specialize in building dynamic web applications using the{' '}
              <strong>MEAN Stack</strong> — MongoDB, Express.js, Angular, and
              Node.js. Our scalable and high-performance solutions accelerate
              your digital growth, streamline operations, and help achieve
              long-term business success through robust architecture and clean
              code.
            </p>
          </div>
        </div>
      </section>
    </div>
  )
}
