import Lottie from 'lottie-react'
import mobileAppUI from '../../../assets/animation/mobileAppUI.json'

export default function MeanStackSection() {
  return (
    <div className="h-[100vh]">
      <div className="w-full h-full flex justify-center items-center">
        <section className="container bg-white rounded-2xl shadow-[0_10px_8px_5px_rgba(0,0,0,1),0_2px_4px_-1px_rgba(0,0,0,1)] overflow-hidden my-16">
          <div className="grid md:grid-cols-2">
            {/* Left Image */}
            <div className="w-full h-full bg-[#10112D] flex items-center justify-center">
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
                applications. Our skilled developers collaborate closely with
                you to comprehend your objectives and create unique apps that
                produce outcomes, whether you're a startup with an MVP concept
                or a business in need of a sophisticated digital solution. From
                strategy and architecture to deployment and post-launch
                support—we’ve got you covered. Let’s collaborate and turn your
                vision into a future-ready solution.
              </p>
            </div>
          </div>
        </section>
      </div>
    </div>
  )
}
