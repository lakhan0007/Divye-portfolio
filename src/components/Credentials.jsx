import React from 'react';
import { 
  Award, 
  ShieldCheck, 
  Binary, 
  FileCheck2, 
  CheckCircle2 
} from 'lucide-react';

export default function Credentials() {
  const credentials = [
    {
      title: "ICAI Fellow Member",
      badge: "FCA • M.No. 542910",
      description: "Conferred Fellowship by ICAI for exemplary public practice and senior corporate tax expertise.",
      icon: ShieldCheck,
      color: "var(--accent-cyan)"
    },
    {
      title: "DISA Certified",
      badge: "System Audit (ICAI)",
      description: "Post-qualification specialization for ERP audits, IT risk assessment, and financial systems integrity.",
      icon: Binary,
      color: "var(--accent-emerald)"
    },
    {
      title: "FAFD Certified",
      badge: "Forensics & Fraud",
      description: "Specialized in corporate fraud investigations, fund trail tracking, and vigilance audit support.",
      icon: FileCheck2,
      color: "var(--accent-gold)"
    }
  ];

  const competencies = [
    "Corporate Income Tax & MAT",
    "GSTR-2B ITC Optimization",
    "Startup 80-IAC Tax Exemption",
    "Statutory & Tax Audit (Sec 44AB)",
    "Ind-AS Accounting Standards",
    "Rule 11UA / DCF Valuations"
  ];

  return (
    <section 
      id="credentials"
      style={{
        padding: '70px 0',
        position: 'relative'
      }}
    >
      <div className="container">
        {/* Header */}
        <div className="section-header" style={{ marginBottom: '40px' }}>
          <div className="section-tag">
            <Award size={14} />
            <span>ICAI Certified</span>
          </div>
          <h2 className="section-title">
            Credentials & <span className="gradient-text">Qualifications</span>
          </h2>
          <p className="section-subtitle">
            Governed by the highest ethical standards of the Institute of Chartered Accountants of India.
          </p>
        </div>

        {/* 3 Core Credential Badges */}
        <div 
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(260px, 1fr))',
            gap: '20px',
            marginBottom: '32px'
          }}
        >
          {credentials.map((cred, idx) => {
            const IconComponent = cred.icon;

            return (
              <div 
                key={idx}
                className="glass-card"
                style={{ padding: '24px' }}
              >
                <div style={{ display: 'flex', alignItems: 'center', gap: '12px', marginBottom: '14px' }}>
                  <div 
                    style={{
                      width: '42px',
                      height: '42px',
                      borderRadius: '10px',
                      background: 'rgba(255, 255, 255, 0.05)',
                      border: '1px solid var(--glass-border)',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center'
                    }}
                  >
                    <IconComponent size={22} color={cred.color} />
                  </div>
                  <div>
                    <h3 style={{ fontSize: '1.05rem', color: 'var(--text-primary)' }}>{cred.title}</h3>
                    <span style={{ fontSize: '0.74rem', color: cred.color, fontWeight: 700 }}>{cred.badge}</span>
                  </div>
                </div>

                <p style={{ fontSize: '0.82rem', color: 'var(--text-secondary)', lineHeight: 1.55 }}>
                  {cred.description}
                </p>
              </div>
            );
          })}
        </div>

        {/* Competencies Pills */}
        <div 
          className="glass-card"
          style={{
            padding: '20px 24px',
            display: 'flex',
            flexWrap: 'wrap',
            alignItems: 'center',
            justifyContent: 'center',
            gap: '12px'
          }}
        >
          <span style={{ fontSize: '0.82rem', fontWeight: 700, color: 'var(--text-primary)', marginRight: '8px' }}>
            Core Focus Areas:
          </span>
          {competencies.map((comp, idx) => (
            <span 
              key={idx}
              className="glass-pill"
              style={{ fontSize: '0.78rem', padding: '5px 12px' }}
            >
              <CheckCircle2 size={13} color="var(--accent-emerald)" />
              <span>{comp}</span>
            </span>
          ))}
        </div>
      </div>
    </section>
  );
}
