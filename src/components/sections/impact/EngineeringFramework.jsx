import React from 'react'

const EngineeringFramework = () => {
  return (
    <section className="bg-[#0B1120] text-white py-32">
      <div className="container mx-auto px-6 max-w-5xl">
        {/* Title Section */}
        <div className="text-center mb-20">
          <h1 className="text-4xl md:text-5xl font-extrabold mb-6">
            Intexa Digital Engineering Framework
          </h1>
          <p className="text-xl text-cyan-400">
            Engineering Intelligent, Secure, and Scalable Enterprise Systems
          </p>
        </div>

        {/* Section 1 */}
        <div className="mb-16 space-y-6">
          <h2 className="text-2xl font-bold">1. Executive Summary</h2>
          <p className="text-gray-300 leading-relaxed">
            Modern enterprises require more than software development — they
            require resilient digital infrastructure designed for scalability,
            compliance, and long-term operational sustainability.
          </p>
          <p className="text-gray-300 leading-relaxed">
            Intexa is a digital engineering firm specializing in secure
            enterprise platforms, AI-driven systems, cloud-native architectures,
            and distributed technologies. Our approach emphasizes production
            readiness, governance alignment, and measurable performance
            outcomes.
          </p>
          <p className="text-gray-300 leading-relaxed">
            This whitepaper outlines the Intexa Engineering Framework — a
            structured methodology for designing and delivering secure,
            scalable, and intelligent digital systems.
          </p>
        </div>

        {/* Section 2 */}
        <div className="mb-16 space-y-6">
          <h2 className="text-2xl font-bold">
            2. Enterprise Technology Challenge
          </h2>
          <p className="text-gray-300 leading-relaxed">
            Organizations today face increasing complexity across:
          </p>
          <ul className="list-disc pl-6 text-gray-300 space-y-2">
            <li>Distributed cloud environments</li>
            <li>Data governance and privacy regulations</li>
            <li>AI adoption and operational risk</li>
            <li>Cybersecurity threats</li>
            <li>Integration across legacy and modern systems</li>
            <li>Performance and uptime expectations</li>
          </ul>
          <p className="text-gray-300 mt-4">
            Many digital initiatives fail due to:
          </p>
          <ul className="list-disc pl-6 text-gray-300 space-y-2">
            <li>Weak architectural foundations</li>
            <li>Poor documentation and governance</li>
            <li>Security implemented as an afterthought</li>
            <li>AI systems deployed without production controls</li>
          </ul>
          <p className="text-gray-300">
            Intexa addresses these challenges through disciplined engineering
            principles.
          </p>
        </div>

        {/* Section 3 */}
        <div className="mb-16 space-y-10">
          <h2 className="text-2xl font-bold">
            3. Intexa Engineering Principles
          </h2>

          <div>
            <h3 className="text-xl font-semibold mb-3">
              3.1 Architecture-First Development
            </h3>
            <ul className="list-disc pl-6 text-gray-300 space-y-2">
              <li>Scalable system design</li>
              <li>Microservices-based architecture</li>
              <li>API-first frameworks</li>
              <li>Modular component systems</li>
              <li>Infrastructure as Code (IaC)</li>
            </ul>
            <p className="text-gray-300 mt-3">
              Every solution begins with a documented technical architecture
              blueprint.
            </p>
          </div>

          <div>
            <h3 className="text-xl font-semibold mb-3">
              3.2 Security by Design
            </h3>
            <ul className="list-disc pl-6 text-gray-300 space-y-2">
              <li>Role-based access control (RBAC)</li>
              <li>Encryption in transit and at rest</li>
              <li>Secure authentication frameworks</li>
              <li>Cloud security hardening</li>
              <li>Monitoring and threat detection</li>
            </ul>
            <p className="text-gray-300 mt-3">
              We align with modern compliance expectations including
              privacy-aware system design principles.
            </p>
          </div>

          <div>
            <h3 className="text-xl font-semibold mb-3">
              3.3 Production-Ready AI Systems
            </h3>
            <ul className="list-disc pl-6 text-gray-300 space-y-2">
              <li>Measurable and explainable</li>
              <li>Integrated into business workflows</li>
              <li>Governed by structured data pipelines</li>
              <li>Monitored for performance and drift</li>
            </ul>
            <p className="text-gray-300 mt-3">
              We emphasize MLOps practices to ensure AI systems remain reliable
              post-deployment.
            </p>
          </div>

          <div>
            <h3 className="text-xl font-semibold mb-3">
              3.4 Cloud-Native & Resilient Infrastructure
            </h3>
            <ul className="list-disc pl-6 text-gray-300 space-y-2">
              <li>Multi-environment deployment (Dev / Staging / Production)</li>
              <li>CI/CD automation</li>
              <li>Containerization (Docker / Kubernetes-ready systems)</li>
              <li>Monitoring & observability frameworks</li>
              <li>Disaster recovery planning</li>
            </ul>
            <p className="text-gray-300 mt-3">
              Systems are engineered for uptime reliability and operational
              continuity.
            </p>
          </div>
        </div>

        {/* Continue Same Structured Pattern For Sections 4, 5, 6, 7, 8 */}

        {/* Conclusion */}
        <div className="border-t border-white/10 pt-12">
          <h2 className="text-2xl font-bold mb-6">8. Conclusion</h2>
          <p className="text-gray-300 leading-relaxed mb-4">
            Enterprise digital systems must be built with discipline,
            governance, and long-term sustainability in mind.
          </p>
          <p className="text-gray-300 leading-relaxed mb-4">
            Intexa combines advanced software engineering, intelligent
            automation, and secure infrastructure practices to deliver
            production-ready digital platforms capable of supporting modern
            enterprise growth.
          </p>
          <p className="text-gray-300 leading-relaxed">
            We engineer systems designed not only to launch — but to scale,
            endure, and evolve.
          </p>
        </div>
      </div>
    </section>
  )
}

export default EngineeringFramework
