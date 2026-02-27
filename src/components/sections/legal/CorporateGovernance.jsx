'use client'

import React from 'react'
import { ShieldCheck } from 'lucide-react'

const sections = [
  { id: 'philosophy', label: '01. Governance Philosophy' },
  { id: 'structure', label: '02. Governance Structure' },
  { id: 'risk', label: '03. Risk Management Framework' },
  { id: 'compliance', label: '04. Compliance & Regulatory Alignment' },
  { id: 'audit', label: '05. Audit & Documentation Controls' },
  { id: 'ethics', label: '06. Ethical Governance' },
  { id: 'ai', label: '07. Responsible AI & Technology Oversight' },
  { id: 'security', label: '08. Information Security Governance' },
  { id: 'esg', label: '09. ESG Commitment' },
  { id: 'whistleblower', label: '10. Whistleblower & Reporting Mechanism' },
  { id: 'improvement', label: '11. Continuous Improvement' },
]

export default function CorporateGovernance() {
  return (
    <div id="corporate-governance" className="text-white py-20 px-6">
      <div className="container mx-auto max-w-7xl">
        {/* Header */}
        <div className="flex items-center mb-16">
          {/* <div className="bg-cyan-500/10 p-3 rounded-xl mr-3">
            <ShieldCheck className="w-6 h-6 text-cyan-400" />
          </div> */}
          <div>
            <h2 className="text-5xl font-bold">
              Intexa Corporate Governance Framework
            </h2>
            <p className="text-gray-400 mt-2">Headquartered in Canada</p>
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
                1. Governance Philosophy
              </h3>

              <p className="text-gray-400 leading-relaxed mb-4">
                Intexa operates under a governance model designed to ensure:
              </p>

              <ul className="space-y-2 text-gray-400">
                <li>• Accountability</li>
                <li>• Transparency</li>
                <li>• Regulatory compliance</li>
                <li>• Risk mitigation</li>
                <li>• Long-term sustainability</li>
              </ul>

              <p className="text-gray-400 mt-6 leading-relaxed">
                Our governance structure reflects international best practices
                while aligning with Canadian corporate standards. Intexa
                believes that responsible engineering begins with responsible
                governance.
              </p>
            </section>

            {/* 2 */}
            <section id="structure">
              <h3 className="text-3xl font-semibold mb-6 text-cyan-400">
                2. Governance Structure
              </h3>

              <h4 className="text-xl font-semibold mb-4">
                2.1 Executive Oversight
              </h4>
              <ul className="space-y-2 text-gray-400 mb-6">
                <li>• Strategic direction</li>
                <li>• Operational performance monitoring</li>
                <li>• Financial accountability</li>
                <li>• Risk management oversight</li>
                <li>• Regulatory compliance supervision</li>
              </ul>

              <p className="text-gray-400 mb-8">
                Executive leadership is responsible for ensuring alignment
                between corporate strategy and compliance obligations.
              </p>

              <h4 className="text-xl font-semibold mb-4">
                2.2 Operational Governance
              </h4>
              <ul className="space-y-2 text-gray-400">
                <li>• Documented engineering standards</li>
                <li>• Change management controls</li>
                <li>• Access management policies</li>
                <li>• Secure development lifecycle enforcement</li>
                <li>• Incident response oversight</li>
              </ul>

              <p className="text-gray-400 mt-6">
                All operational processes are subject to internal review and
                continuous improvement.
              </p>
            </section>

            {/* 3 */}
            <section id="risk">
              <h3 className="text-3xl font-semibold mb-6 text-cyan-400">
                3. Risk Management Framework
              </h3>

              <p className="text-gray-400 mb-6">
                Intexa maintains a structured risk identification and mitigation
                process.
              </p>

              <h4 className="text-xl font-semibold mb-4">
                3.1 Risk Categories
              </h4>
              <ul className="grid md:grid-cols-2 gap-3 text-gray-400 mb-8">
                <li>• Cybersecurity</li>
                <li>• Data protection</li>
                <li>• Regulatory exposure</li>
                <li>• Operational continuity</li>
                <li>• Vendor dependency</li>
                <li>• Financial performance</li>
              </ul>

              <h4 className="text-xl font-semibold mb-4">3.2 Risk Controls</h4>
              <ul className="space-y-2 text-gray-400">
                <li>• Role-based access controls</li>
                <li>• Encryption standards</li>
                <li>• Incident escalation procedures</li>
                <li>• Vendor due diligence</li>
                <li>• Legal contract review</li>
                <li>• Change approval processes</li>
              </ul>

              <p className="text-gray-400 mt-6">
                Risk registers are reviewed periodically to maintain oversight.
              </p>
            </section>

            {/* 4 */}
            <section id="compliance">
              <h3 className="text-3xl font-semibold mb-6 text-cyan-400">
                4. Compliance & Regulatory Alignment
              </h3>

              <p className="text-gray-400 mb-6">
                Intexa aligns operations with applicable frameworks, including:
              </p>

              <ul className="space-y-2 text-gray-400 mb-6">
                <li>• PIPEDA (Canada)</li>
                <li>• GDPR-equivalent safeguards</li>
                <li>• SOC 2 Trust Service Criteria (alignment posture)</li>
                <li>• NIST Cybersecurity Framework principles</li>
                <li>• ISO 27001 roadmap alignment</li>
              </ul>

              <p className="text-gray-400">
                Compliance obligations are embedded into contractual agreements
                and engineering processes.
              </p>
            </section>

            {/* 5 */}
            <section id="audit">
              <h3 className="text-3xl font-semibold mb-6 text-cyan-400">
                5. Audit & Documentation Controls
              </h3>

              <p className="text-gray-400 mb-6">
                To support audit readiness, Intexa maintains:
              </p>

              <ul className="space-y-2 text-gray-400 mb-6">
                <li>• Architecture documentation</li>
                <li>• System configuration records</li>
                <li>• Change logs</li>
                <li>• Security incident logs</li>
                <li>• Access control documentation</li>
                <li>• Vendor compliance documentation</li>
              </ul>

              <p className="text-gray-400">
                Where required by contract, Intexa supports third-party audits
                and compliance reviews.
              </p>
            </section>

            {/* 6 */}
            <section id="ethics">
              <h3 className="text-3xl font-semibold mb-6 text-cyan-400">
                6. Ethical Governance
              </h3>

              <h4 className="text-xl font-semibold mb-4">
                6.1 Anti-Corruption
              </h4>
              <p className="text-gray-400 mb-6">
                Zero tolerance for bribery or corrupt practices.
              </p>

              <h4 className="text-xl font-semibold mb-4">
                6.2 Conflict of Interest
              </h4>
              <p className="text-gray-400 mb-6">
                Mandatory disclosure of potential conflicts of interest.
              </p>

              <h4 className="text-xl font-semibold mb-4">
                6.3 Fair Business Practices
              </h4>
              <ul className="space-y-2 text-gray-400">
                <li>• Transparent pricing</li>
                <li>• Lawful procurement</li>
                <li>• Non-discriminatory practices</li>
              </ul>
            </section>

            {/* 7 */}
            <section id="ai">
              <h3 className="text-3xl font-semibold mb-6 text-cyan-400">
                7. Responsible AI & Technology Oversight
              </h3>

              <p className="text-gray-400 mb-6">
                Intexa applies governance to AI and advanced systems including:
              </p>

              <ul className="space-y-2 text-gray-400 mb-6">
                <li>• Data source validation</li>
                <li>• Model risk assessment</li>
                <li>• Transparency in AI use</li>
                <li>• Human oversight mechanisms</li>
                <li>• Security review of automation systems</li>
              </ul>

              <p className="text-gray-400">
                AI solutions are designed to comply with legal and ethical
                boundaries.
              </p>
            </section>

            {/* 8 */}
            <section id="security">
              <h3 className="text-3xl font-semibold mb-6 text-cyan-400">
                8. Information Security Governance
              </h3>

              <p className="text-gray-400 mb-6">
                Information security oversight includes:
              </p>

              <ul className="space-y-2 text-gray-400">
                <li>• Policy enforcement</li>
                <li>• Monitoring and logging</li>
                <li>• Incident response escalation</li>
                <li>• Access reviews</li>
                <li>• Secure development lifecycle compliance</li>
              </ul>

              <p className="text-gray-400 mt-6">
                Security governance is integrated across engineering and
                infrastructure functions.
              </p>
            </section>

            {/* 9 */}
            <section id="esg">
              <h3 className="text-3xl font-semibold mb-6 text-cyan-400">
                9. ESG Commitment
              </h3>

              <h4 className="text-xl font-semibold mb-4">9.1 Environmental</h4>
              <ul className="space-y-2 text-gray-400 mb-8">
                <li>• Energy-efficient infrastructure use</li>
                <li>• Remote-first collaboration to reduce footprint</li>
                <li>• Cloud optimization practices</li>
              </ul>

              <h4 className="text-xl font-semibold mb-4">9.2 Social</h4>
              <ul className="space-y-2 text-gray-400 mb-8">
                <li>• Equal opportunity workplace</li>
                <li>• Inclusive hiring practices</li>
                <li>• Skill development and training</li>
                <li>• Ethical engineering</li>
              </ul>

              <h4 className="text-xl font-semibold mb-4">9.3 Governance</h4>
              <ul className="space-y-2 text-gray-400">
                <li>• Documented decision-making processes</li>
                <li>• Risk oversight</li>
                <li>• Transparency in operations</li>
                <li>• Compliance integration</li>
              </ul>
            </section>

            {/* 10 */}
            <section id="whistleblower">
              <h3 className="text-3xl font-semibold mb-6 text-cyan-400">
                10. Whistleblower & Reporting Mechanism
              </h3>

              <p className="text-gray-400 mb-6">
                Intexa maintains a confidential reporting mechanism for:
              </p>

              <ul className="space-y-2 text-gray-400 mb-8">
                <li>• Ethical violations</li>
                <li>• Compliance concerns</li>
                <li>• Security risks</li>
                <li>• Governance misconduct</li>
              </ul>

              <p className="text-gray-400 mb-6">
                Retaliation against whistleblowers is strictly prohibited.
              </p>

              <p className="text-gray-400">
                Reports may be submitted to:
                <br />
                hello@intexa.com
                <br />
                Subject Line: Governance Report
              </p>
            </section>

            {/* 11 */}
            <section id="improvement">
              <h3 className="text-3xl font-semibold mb-6 text-cyan-400">
                11. Continuous Improvement
              </h3>

              <p className="text-gray-400 mb-6">
                Intexa views governance as an evolving discipline. We commit to:
              </p>

              <ul className="space-y-2 text-gray-400 mb-6">
                <li>• Periodic policy reviews</li>
                <li>• Security posture assessments</li>
                <li>• Risk evaluation updates</li>
                <li>• Process optimization</li>
                <li>• Regulatory monitoring</li>
              </ul>

              <p className="text-gray-400">
                Governance frameworks are reviewed annually or upon material
                organizational changes.
              </p>
            </section>
          </div>
        </div>
      </div>
    </div>
  )
}
