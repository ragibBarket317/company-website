import React, { useRef } from 'react'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import { useGSAP } from '@gsap/react'

gsap.registerPlugin(ScrollTrigger)

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

const stackData = [
  { icon: FaReact, label: 'React.js' },
  { icon: SiNextdotjs, label: 'Next.js' },
  { icon: FaVuejs, label: 'Vue.js' },
  { icon: FaAngular, label: 'Angular' },
  { icon: SiTypescript, label: 'TypeScript' },
  { icon: FaHtml5, label: 'HTML5' },
  { icon: FaCss3Alt, label: 'CSS3' },
  { icon: SiTailwindcss, label: 'Tailwind CSS' },

  { icon: FaNodeJs, label: 'Node.js' },
  { icon: SiExpress, label: 'Express.js' },
  { icon: FaPhp, label: 'PHP / Laravel' },
  { icon: FaPython, label: 'Python / Django' },
  { icon: FaJava, label: 'Java / Spring Boot' },

  { icon: FaReact, label: 'React Native' },
  { icon: FaAndroid, label: 'Android' },
  { icon: FaApple, label: 'iOS' },

  { icon: SiMongodb, label: 'MongoDB' },
  { icon: SiMysql, label: 'MySQL' },
  { icon: SiPostgresql, label: 'PostgreSQL' },

  { icon: FaDocker, label: 'Docker' },
  { icon: SiKubernetes, label: 'Kubernetes' },
  { icon: FaAws, label: 'AWS' },
  { icon: SiGooglecloud, label: 'Google Cloud' },

  { icon: SiTensorflow, label: 'TensorFlow' },
]

const OurTechStack = () => {
  const sectionRef = useRef()
  const headingRef = useRef()

  useGSAP(
    () => {
      const cards = gsap.utils.toArray('.tech-card')

      // animate cards
      gsap.from(cards, {
        y: 80,
        opacity: 0,
        stagger: 0.15,
        duration: 0.9,
        ease: 'power3.out',
        scrollTrigger: {
          trigger: sectionRef.current,
          start: 'top 70%',
          toggleActions: 'restart none none none',
        },
      })

      // heading scroll movement
      gsap.to(headingRef.current, {
        x: -0,
        ease: 'none',
        scrollTrigger: {
          trigger: sectionRef.current,
          start: 'top bottom',
          end: 'bottom top',
          scrub: true,
        },
      })
    },
    { scope: sectionRef }
  ) // IMPORTANT!!

  return (
    <section
      ref={sectionRef}
      className="container mx-auto py-20 text-white min-h-[90vh]"
    >
      <h2
        ref={headingRef}
        className="text-2xl md:text-4xl font-bold text-center mb-4"
      >
        Our Tech Stack for Innovative Business Solutions
      </h2>

      <p className="text-gray-300 max-w-3xl mx-auto text-center mb-10">
        We use a high-performance tech stack to build scalable products.
      </p>

      <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 xl:grid-cols-8 gap-6">
        {stackData.map((item, i) => {
          const Icon = item.icon
          return (
            <div
              key={i}
              className="tech-card h-32 bg-white/10 border border-white/20 
              backdrop-blur-lg rounded-xl flex flex-col items-center justify-center"
            >
              <Icon size={40} />
              <p className="mt-2">{item.label}</p>
            </div>
          )
        })}
      </div>
    </section>
  )
}

export default OurTechStack
