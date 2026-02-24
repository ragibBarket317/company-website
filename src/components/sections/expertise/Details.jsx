import React, { useEffect } from 'react'
import fintechImg from './images/image1.jpg'
import healthtechImg from './images/image2.jpg'
import governmentImg from './images/image26.jpg'
import ecommerceImg from './images/image28.jpg'
import educationImg from './images/image29.jpg'
import realestateImg from './images/image30.jpg'
import energyImg from './images/image31.jpg'
import manufacturingImg from './images/image32.jpg'
import telecomImg from './images/image3.jpg'
import travelImg from './images/image6.jpg'
import automotiveImg from './images/image7.png'
import saasImg from './images/image8.jpg'
import itservicesImg from './images/image9.png'
import cybersecurityImg from './images/image10.png'
import entertainment from './images/entertainment.jpg'
import owner from './images/owner.png'

import { useLocation } from 'react-router-dom'

// Sample data (you can replace with your full JSON)
const sectors = [
  {
    heading: 'Financial Services & FinTech',
    description:
      'Intexa designs secure, high-performance financial platforms built for transaction integrity, regulatory compliance, and scalability. We develop digital banking systems, payment infrastructures, lending engines, trading dashboards, and compliance automation platforms that operate in real time without performance degradation. Clients in this sector must prioritize uptime, auditability, encryption, and regulatory readiness. Our architecture integrates secure authentication layers, transaction monitoring systems, fraud detection modules, and high-availability cloud infrastructure. Whether serving retail banking customers or institutional investors, we engineer financial systems that can handle large transaction volumes with predictable performance and zero tolerance for security compromise.',
    image: fintechImg,
    id: 'fintech',
  },
  {
    heading: 'Healthcare & HealthTech',
    description:
      'Intexa develops digital healthcare ecosystems designed for compliance, data protection, and clinical reliability. We build telemedicine platforms, hospital information systems, diagnostics dashboards, and pharmacy management software integrated with AI-driven decision support. Healthcare clients require secure patient data handling, system interoperability, and seamless workflows between practitioners and patients. Our systems incorporate encrypted medical records, real-time reporting, and AI-assisted analysis while aligning with global healthcare compliance standards. The focus is always on improving operational efficiency while maintaining patient privacy and data integrity.',
    image: healthtechImg,
    id: 'healthtech',
  },
  {
    heading: 'Government & Public Sector',
    description:
      'Intexa engineers secure digital infrastructure for public services and large-scale citizen platforms. We build e-governance portals, identity systems, public data platforms, and secure service management applications. Government systems require reliability at scale, transparency, and strict access controls. We implement multi-layer authentication, secure data storage, audit tracking, and scalable cloud-native architectures capable of serving millions of users. Our solutions enhance operational efficiency while maintaining trust and compliance.',
    image: governmentImg,
  },
  {
    heading: 'Logistics & Supply Chain',
    description:
      'Intexa builds logistics systems that provide full operational visibility from warehouse to final delivery. Our platforms integrate fleet tracking, warehouse automation, route optimization, and predictive analytics. Clients in this space require real-time monitoring, reduced operational costs, and predictive insight. We design scalable tracking systems, automated reporting modules, and intelligent forecasting tools that allow logistics operators to improve efficiency and minimize disruptions.',
    image: owner,
  },
  {
    heading: 'E-commerce & Retail',
    description:
      'Intexa develops high-performance e-commerce platforms designed for conversion optimization, scalability, and seamless integration with payment gateways and inventory systems. Retail clients must prioritize fast load times, secure transactions, customer engagement analytics, and system resilience during peak traffic. Our architecture ensures optimized backend operations, secure checkout systems, and data-driven personalization capabilities.',
    image: ecommerceImg,
  },
  {
    heading: 'Education & EdTech',
    description:
      'We build education platforms that scale globally and support modern digital learning environments. From LMS systems to AI-driven tutoring tools and analytics dashboards, Intexa engineers platforms that enhance engagement and track performance in real time. Clients benefit from scalable infrastructure capable of handling thousands of concurrent users while delivering measurable learning insights.',
    image: educationImg,
  },
  {
    heading: 'Real Estate & PropTech',
    description:
      'Intexa develops digital property management systems and CRM platforms tailored to real estate operations. We integrate smart analytics, tenant portals, and automated reporting tools that streamline property management and sales workflows.',
    image: realestateImg,
  },
  {
    heading: 'Energy & Utilities',
    description:
      'We design digital monitoring systems for energy providers, integrating IoT dashboards, smart grid analytics, and predictive maintenance capabilities. Our solutions enhance operational efficiency and infrastructure resilience.',
    image: energyImg,
    id: 'energy',
  },
  {
    heading: 'Manufacturing & Industrial Automation',
    description:
      'Intexa digitizes manufacturing operations through integrated ERP systems, IoT device management, and real-time production monitoring dashboards. Our solutions reduce downtime and increase operational visibility.',
    image: manufacturingImg,
  },
  {
    heading: 'Telecommunications',
    description:
      'We engineer telecom platforms capable of processing high volumes of user data and transactions. Billing systems, CRM platforms, and network monitoring dashboards are built for stability and scale.',
    image: telecomImg,
  },
  {
    heading: 'Media & Entertainment',
    description:
      'Intexa builds scalable content platforms, streaming systems, and audience analytics tools designed for performance optimization and engagement tracking.',
    image: entertainment,
  },
  {
    heading: 'Travel & Hospitality',
    description:
      'We develop booking engines, operational dashboards, and customer engagement systems tailored for travel businesses that demand seamless user experiences.',
    image: travelImg,
  },
  {
    heading: 'Automotive & Mobility',
    description:
      'Intexa engineers fleet intelligence platforms and connected mobility systems with real-time tracking and operational automation.',
    image: automotiveImg,
  },
  {
    heading: 'SaaS & Enterprise Software',
    description:
      'We design and develop cloud-native SaaS platforms built for performance, scalability, and enterprise-grade reliability.',
    image: saasImg,
  },
  {
    heading: 'IT Services & Staff Augmentation',
    description:
      'Intexa provides dedicated engineering teams, DevOps support, AI integration, and cloud migration expertise to accelerate digital transformation initiatives.',
    image: itservicesImg,
  },
  {
    heading: 'Cybersecurity & Digital Risk Management',
    description:
      'Intexa designs and implements enterprise cybersecurity systems that protect digital assets, infrastructure, and sensitive data. We develop security monitoring dashboards, threat detection engines, identity management systems, and risk assessment platforms. Modern organizations must defend against increasingly complex threats. Our cybersecurity solutions integrate real-time threat intelligence, automated anomaly detection, secure authentication layers, and compliance reporting frameworks. We build security as a core architectural principle — not an afterthought.',
    image: cybersecurityImg,
  },
]

const Details = () => {
  const location = useLocation()

  useEffect(() => {
    if (location.hash) {
      const element = document.querySelector(location.hash)
      if (element) {
        element.scrollIntoView({ behavior: 'smooth' })
      }
    }
  }, [location])
  return (
    <div id="details" className="py-12 px-4 md:px-16">
      {sectors.map((sector, index) => (
        <div
          key={index}
          id={sector.id ? sector.id : ''}
          className={`flex flex-col md:flex-row items-center mb-16 ${
            index % 2 !== 0 ? 'md:flex-row-reverse' : ''
          }`}
        >
          {/* Text content */}
          <div className="md:w-1/2 p-4 text-white">
            <h2 className="text-3xl font-bold mb-4">{sector.heading}</h2>
            <p className="text-md text-gray-400 leading-relaxed text-justify">
              {sector.description}
            </p>
          </div>
          {/* Image */}
          <div className="md:w-1/2 p-4">
            <img
              src={sector.image}
              alt={sector.heading}
              className="w-full h-auto rounded-lg shadow-lg"
            />
          </div>
        </div>
      ))}
    </div>
  )
}

export default Details
