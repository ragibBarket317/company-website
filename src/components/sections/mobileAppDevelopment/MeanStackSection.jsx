import Lottie from 'lottie-react'
import mobileAppUI from '../../../assets/animation/mobileAppUI.json'

export default function MeanStackSection() {
  return (
    <div className="py-[60px]">
      <section className="container bg-white rounded-2xl shadow-[0_10px_8px_5px_rgba(156,163,175,0.1),0_2px_4px_-1px_rgba(156,163,175,0.06)] shadow-gray-300 overflow-hidden my-16">
        <div className="grid md:grid-cols-2">
          {/* Left Image */}
          <div className="w-full h-full bg-red-400/80 flex items-center justify-center">
            {/* <img
              src="https://images.unsplash.com/photo-1603791440384-56cd371ee9a7?auto=format&fit=crop&w=900&q=80"
              alt="Developer working on tablet"
              className="w-full h-full object-cover"
            /> */}
            <Lottie
              animationData={mobileAppUI}
              loop
              autoplay
              className="w-[600px] h-full p-5"
            />
          </div>

          {/* Right Text Content */}
          <div className="p-10 flex flex-col justify-center">
            <h2 className="text-2xl md:text-4xl font-bold text-indigo-900 leading-snug mb-4">
              Ready to Build a Powerful Full-Stack Application?
            </h2>
            <p className="text-gray-600 leading-relaxed">
              Want to create a full-stack application that is reliable and
              performant? Using MongoDB, Express.js, Angular, and Node.js, we
              are a reputable MEAN Stack Development Services Company that
              specializes in building scalable, secure, and dynamic web
              applications. Our skilled developers collaborate closely with you
              to comprehend your objectives and create unique apps that produce
              outcomes, whether you're a startup with an MVP concept or a
              business in need of a sophisticated digital solution. From
              strategy and architecture to deployment and post-launch
              support—we’ve got you covered. Let’s collaborate and turn your
              vision into a future-ready solution.
            </p>
          </div>
        </div>
      </section>
    </div>
  )
}
