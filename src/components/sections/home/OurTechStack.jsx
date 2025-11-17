import React from 'react'
import {
  FaReact,
  FaVuejs,
  FaAngular,
  FaHtml5,
  FaCss3Alt,
  FaNodeJs,
  FaPhp,
  FaPython,
  FaJava,
  FaAndroid,
  FaApple,
  FaAws,
  FaGitAlt,
  FaDocker,
} from 'react-icons/fa'

import {
  SiNextdotjs,
  SiTypescript,
  SiExpress,
  SiMongodb,
  SiPostgresql,
  SiMysql,
  SiTailwindcss,
  SiKubernetes,
  SiGooglecloud,
  SiTensorflow,
} from 'react-icons/si'

const OurTechStack = () => {
  const stackData = [
    // Frontend
    { icon: FaReact, label: 'React.js' },
    { icon: SiNextdotjs, label: 'Next.js' },
    { icon: FaVuejs, label: 'Vue.js' },
    { icon: FaAngular, label: 'Angular' },
    { icon: SiTypescript, label: 'TypeScript' },
    { icon: FaHtml5, label: 'HTML5' },
    { icon: FaCss3Alt, label: 'CSS3' },
    { icon: SiTailwindcss, label: 'Tailwind CSS' },

    // Backend
    { icon: FaNodeJs, label: 'Node.js' },
    { icon: SiExpress, label: 'Express.js' },
    { icon: FaPhp, label: 'PHP / Laravel' },
    { icon: FaPython, label: 'Python / Django' },
    { icon: FaJava, label: 'Java / Spring Boot' },

    // Mobile App
    { icon: FaReact, label: 'React Native' },
    { icon: FaAndroid, label: 'Android (Kotlin/Java)' },
    { icon: FaApple, label: 'iOS (Swift)' },

    // Database
    { icon: SiMongodb, label: 'MongoDB' },
    { icon: SiMysql, label: 'MySQL' },
    { icon: SiPostgresql, label: 'PostgreSQL' },

    // DevOps & Cloud
    { icon: FaDocker, label: 'Docker' },
    { icon: SiKubernetes, label: 'Kubernetes' },
    { icon: FaAws, label: 'AWS' },
    { icon: SiGooglecloud, label: 'Google Cloud' },

    // AI / ML
    { icon: SiTensorflow, label: 'TensorFlow' },
  ]
  return (
    <div className="relative container py-[80px] text-white">
      <div className="circlePosition w-[400px] h-[100px] bg-blue-400 rounded-full absolute z-1 top-[25%] blur-[200px]"></div>
      <div className="h-full w-full flex justify-center items-center text-center">
        <div>
          <h2 className="text-3xl md:text-5xl font-bold dark:text-white">
            Our Tech Stack for Innovative Business Solutions
          </h2>
          <p className="mt-3 font-body text-gray-300 text-[18px] max-w-3xl mx-auto">
            we leverage a cutting-edge tech stack to deliver transformative
            solutions across industries such as healthcare, e-commerce, and food
            delivery. Our tailored technologies enhance engagement, optimize
            operations, and drive innovation.
          </p>

          <div className="mt-8 flex flex-wrap justify-center gap-6">
            {stackData.map((item, i) => (
              <div
                key={i}
                className="w-40 h-32 backdrop-blur-xl bg-white/10 border border-white/20 
 p-6 
hover:bg-white/20  duration-300 flex flex-col items-center justify-center rounded-xl shadow-md shadow-black  transition "
              >
                <item.icon size={40} />
                <p className="mt-2 font-medium">{item.label}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}

export default OurTechStack
