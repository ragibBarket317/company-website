'use client'

import React from 'react'
import { ShieldCheck } from 'lucide-react'

const sections = [
  { id: 'philosophy', label: '01. Compliance Philosophy' },
  { id: 'regulatory', label: '02. Regulatory Compliance Alignment' },
  { id: 'security', label: '03. Security Compliance Controls' },
  { id: 'contractual', label: '04. Contractual Compliance' },
  { id: 'data-protection', label: '05. Data Protection Compliance' },
  { id: 'operational', label: '06. Operational Compliance Controls' },
  { id: 'vendor', label: '07. Vendor & Subprocessor Compliance' },
  { id: 'audit', label: '08. Audit & Documentation Readiness' },
  { id: 'ethical', label: '09. Ethical & Legal Compliance' },
  { id: 'ai', label: '10. AI & Responsible Technology Compliance' },
  { id: 'incident', label: '11. Incident & Breach Compliance' },
  { id: 'monitoring', label: '12. Continuous Compliance Monitoring' },
  { id: 'reporting', label: '13. Reporting & Enforcement' },
]

export default function ComplianceFramework() {
  return (
    <div id="compliance-framework" className="text-white py-20 px-6">
      <div className="container mx-auto max-w-7xl">
        {/* Header */}
        <div className="flex items-center mb-16">
          {/* <div className="bg-cyan-500/10 p-3 rounded-xl mr-3">
            <ShieldCheck className="w-6 h-6 text-cyan-400" />
          </div> */}

          <div>
            <h2 className="text-5xl font-bold">INTEXA COMPLIANCE FRAMEWORK</h2>
            <p className="text-gray-400 mt-2">Headquartered in Canada</p>
            <p className="text-gray-500 text-sm mt-1">
              Effective Date: 01 March 2026 <br />
              Document Version: 1.0
            </p>
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-4 gap-16">
          {/* Sidebar */}
          <aside className="lg:col-span-1 hidden lg:block">
            <div className="sticky top-32 space-y-4">
              {sections.map((section, index) => (
                <a
                  key={index}
                  href={`#${section.id}`}
                  className="block text-sm text-gray-400 hover:text-cyan-400 transition"
                >
                  {section.label}
                </a>
              ))}
            </div>
          </aside>

          {/* Content */}
          <div className="lg:col-span-3 space-y-20">
            {/* 1 */}
            <section id="philosophy">
              <h3 className="text-3xl font-semibold mb-6 text-cyan-400">
                1. Compliance Philosophy
              </h3>

              <p className="text-gray-400 mb-6">
                Intexa maintains a proactive compliance posture designed to
                ensure:
              </p>

              <ul className="space-y-2 text-gray-400 mb-6">
                <li>• Regulatory alignment</li>
                <li>• Operational integrity</li>
                <li>• Risk mitigation</li>
                <li>• Audit readiness</li>
                <li>• Ethical accountability</li>
              </ul>

              <p className="text-gray-400">
                Compliance is embedded into engineering, operational,
                contractual, and corporate activities. Intexa does not treat
                compliance as a formality — it is integrated into execution.
              </p>
            </section>

            {/* 2 */}
            <section id="regulatory">
              <h3 className="text-3xl font-semibold mb-6 text-cyan-400">
                2. Regulatory Compliance Alignment
              </h3>

              <p className="text-gray-400 mb-6">
                Intexa aligns its operational controls with applicable legal and
                regulatory frameworks including:
              </p>

              <h4 className="text-xl font-semibold mb-4">
                2.1 Canadian Privacy Compliance
              </h4>
              <ul className="space-y-2 text-gray-400 mb-8">
                <li>
                  • Personal Information Protection and Electronic Documents Act
                  (PIPEDA)
                </li>
                <li>• Provincial Privacy Regulations Where Applicable</li>
              </ul>

              <h4 className="text-xl font-semibold mb-4">
                2.2 International Privacy Safeguards
              </h4>
              <ul className="space-y-2 text-gray-400 mb-8">
                <li>• GDPR-equivalent safeguards</li>
                <li>• Cross-border data protection controls</li>
                <li>• Contractual Data Processing Agreements (DPAs)</li>
              </ul>

              <h4 className="text-xl font-semibold mb-4">
                2.3 Industry-Specific Alignment
              </h4>
              <p className="text-gray-400 mb-4">
                Where contractually required, Intexa supports compliance
                expectations for:
              </p>
              <ul className="space-y-2 text-gray-400">
                <li>• Financial services</li>
                <li>• Healthcare systems</li>
                <li>• Public sector systems</li>
                <li>• Enterprise SaaS platforms</li>
              </ul>

              <p className="text-gray-400 mt-6">
                Compliance obligations are formalized within signed agreements.
              </p>
            </section>

            {/* 3 */}
            <section id="security">
              <h3 className="text-3xl font-semibold mb-6 text-cyan-400">
                3. Security Compliance Controls
              </h3>

              <p className="text-gray-400 mb-6">
                Intexa maintains operational controls aligned with leading
                security standards.
              </p>

              <h4 className="text-xl font-semibold mb-4">
                3.1 SOC 2 Alignment Posture
              </h4>

              <p className="text-gray-400 mb-4">
                Internal controls align with SOC 2 Trust Service Criteria:
              </p>

              <ul className="space-y-2 text-gray-400 mb-6">
                <li>• Security</li>
                <li>• Availability</li>
                <li>• Processing Integrity</li>
                <li>• Confidentiality</li>
                <li>• Privacy</li>
              </ul>

              <p className="text-gray-400 mb-8">
                Monitoring and documentation practices are maintained to support
                formal certification readiness.
              </p>

              <h4 className="text-xl font-semibold mb-4">
                3.2 NIST Framework Alignment
              </h4>

              <p className="text-gray-400 mb-4">
                Security program reflects principles consistent with:
              </p>

              <ul className="space-y-2 text-gray-400 mb-6">
                <li>• Identify</li>
                <li>• Protect</li>
                <li>• Detect</li>
                <li>• Respond</li>
                <li>• Recover</li>
              </ul>

              <p className="text-gray-400 mb-8">
                Risk assessments, monitoring, and response procedures follow
                structured documentation.
              </p>

              <h4 className="text-xl font-semibold mb-4">
                3.3 ISO 27001 Roadmap Alignment
              </h4>

              <p className="text-gray-400 mb-4">
                Intexa maintains structured information security management
                practices consistent with ISO 27001 principles:
              </p>

              <ul className="space-y-2 text-gray-400">
                <li>• Risk management procedures</li>
                <li>• Access governance controls</li>
                <li>• Incident response documentation</li>
                <li>• Continuous improvement processes</li>
              </ul>
            </section>

            {/* 4 */}
            <section id="contractual">
              <h3 className="text-3xl font-semibold mb-6 text-cyan-400">
                4. Contractual Compliance
              </h3>

              <p className="text-gray-400 mb-6">
                All engagements are governed by:
              </p>

              <ul className="space-y-2 text-gray-400 mb-6">
                <li>• Master Service Agreements (MSA)</li>
                <li>• Statements of Work (SOW)</li>
                <li>• Service Orders</li>
                <li>• Data Processing Agreements (DPA)</li>
              </ul>

              <p className="text-gray-400">
                Compliance obligations are contractually defined and enforced
                through documented processes.
              </p>
            </section>

            {/* 5 */}
            <section id="data-protection">
              <h3 className="text-3xl font-semibold mb-6 text-cyan-400">
                5. Data Protection Compliance
              </h3>

              <p className="text-gray-400 mb-6">Intexa ensures:</p>

              <ul className="space-y-2 text-gray-400 mb-6">
                <li>• Lawful basis for processing</li>
                <li>• Role-based access control</li>
                <li>• Encryption of data at rest and in transit</li>
                <li>• Controlled cross-border transfers</li>
                <li>• Secure deletion practices</li>
              </ul>

              <p className="text-gray-400">
                Data is processed strictly for legitimate contractual purposes.
              </p>
            </section>

            {/* 6 */}
            <section id="operational">
              <h3 className="text-3xl font-semibold mb-6 text-cyan-400">
                6. Operational Compliance Controls
              </h3>

              <p className="text-gray-400 mb-6">
                Operational controls include:
              </p>

              <ul className="space-y-2 text-gray-400 mb-6">
                <li>• Documented change management procedures</li>
                <li>• Access provisioning and de-provisioning workflows</li>
                <li>• Secure development lifecycle enforcement</li>
                <li>• Logging and monitoring mechanisms</li>
                <li>• Vendor compliance evaluation</li>
              </ul>

              <p className="text-gray-400">
                Internal processes are subject to periodic review.
              </p>
            </section>

            {/* 7 */}
            <section id="vendor">
              <h3 className="text-3xl font-semibold mb-6 text-cyan-400">
                7. Vendor & Subprocessor Compliance
              </h3>

              <p className="text-gray-400 mb-6">
                Third-party vendors are evaluated based on:
              </p>

              <ul className="space-y-2 text-gray-400 mb-6">
                <li>• Security certifications</li>
                <li>• Regulatory posture</li>
                <li>• Confidentiality agreements</li>
                <li>• Data protection commitments</li>
              </ul>

              <p className="text-gray-400">
                Intexa executes Data Processing Agreements where required.
              </p>
            </section>

            {/* 8 */}
            <section id="audit">
              <h3 className="text-3xl font-semibold mb-6 text-cyan-400">
                8. Audit & Documentation Readiness
              </h3>

              <p className="text-gray-400 mb-6">
                Intexa maintains documentation sufficient to support:
              </p>

              <ul className="space-y-2 text-gray-400 mb-8">
                <li>• Security questionnaires</li>
                <li>• Procurement assessments</li>
                <li>• Regulatory inquiries</li>
                <li>• Third-party compliance reviews</li>
              </ul>

              <p className="text-gray-400 mb-4">Documentation may include:</p>

              <ul className="space-y-2 text-gray-400 mb-6">
                <li>• Architecture records</li>
                <li>• Access logs</li>
                <li>• Change logs</li>
                <li>• Incident response summaries</li>
                <li>• Risk assessments</li>
              </ul>

              <p className="text-gray-400">
                Where contractually required, Intexa cooperates with client-led
                audits.
              </p>
            </section>

            {/* 9 */}
            <section id="ethical">
              <h3 className="text-3xl font-semibold mb-6 text-cyan-400">
                9. Ethical & Legal Compliance
              </h3>

              <p className="text-gray-400 mb-6">Intexa enforces:</p>

              <ul className="space-y-2 text-gray-400 mb-6">
                <li>• Anti-corruption & anti-bribery standards</li>
                <li>• Conflict of interest disclosures</li>
                <li>• Code of conduct enforcement</li>
                <li>• Whistleblower protections</li>
              </ul>

              <p className="text-gray-400">
                All employees and contractors are expected to adhere to ethical
                business practices.
              </p>
            </section>

            {/* 10 */}
            <section id="ai">
              <h3 className="text-3xl font-semibold mb-6 text-cyan-400">
                10. AI & Responsible Technology Compliance
              </h3>

              <p className="text-gray-400 mb-6">
                Intexa ensures that AI deployments:
              </p>

              <ul className="space-y-2 text-gray-400 mb-6">
                <li>• Use lawfully obtained data</li>
                <li>• Follow documented governance review</li>
                <li>• Maintain human oversight</li>
                <li>• Avoid unlawful surveillance applications</li>
                <li>• Comply with client contractual constraints</li>
              </ul>

              <p className="text-gray-400">
                Client proprietary data is not used for unrelated model
                training.
              </p>
            </section>

            {/* 11 */}
            <section id="incident">
              <h3 className="text-3xl font-semibold mb-6 text-cyan-400">
                11. Incident & Breach Compliance
              </h3>

              <p className="text-gray-400 mb-6">
                Intexa maintains structured breach notification procedures
                including:
              </p>

              <ul className="space-y-2 text-gray-400 mb-6">
                <li>• Containment</li>
                <li>• Investigation</li>
                <li>• Documentation</li>
                <li>• Client notification</li>
                <li>• Regulatory notification where required</li>
              </ul>

              <p className="text-gray-400">
                Response procedures follow documented escalation paths.
              </p>
            </section>

            {/* 12 */}
            <section id="monitoring">
              <h3 className="text-3xl font-semibold mb-6 text-cyan-400">
                12. Continuous Compliance Monitoring
              </h3>

              <p className="text-gray-400 mb-6">
                Compliance is monitored through:
              </p>

              <ul className="space-y-2 text-gray-400 mb-6">
                <li>• Periodic internal reviews</li>
                <li>• Risk register updates</li>
                <li>• Security posture assessments</li>
                <li>• Vendor reassessment</li>
                <li>• Policy updates</li>
              </ul>

              <p className="text-gray-400">
                Compliance frameworks are reviewed annually or upon material
                operational changes.
              </p>
            </section>

            {/* 13 */}
            <section id="reporting">
              <h3 className="text-3xl font-semibold mb-6 text-cyan-400">
                13. Reporting & Enforcement
              </h3>

              <p className="text-gray-400 mb-6">
                Violations of compliance policies may result in:
              </p>

              <ul className="space-y-2 text-gray-400 mb-6">
                <li>• Internal investigation</li>
                <li>• Corrective action</li>
                <li>• Contractual remedies</li>
                <li>• Escalation to executive oversight</li>
              </ul>

              <p className="text-gray-400">
                Whistleblower protections ensure safe reporting of misconduct.
              </p>
            </section>
          </div>
        </div>
      </div>
    </div>
  )
}
