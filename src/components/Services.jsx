import React from 'react';
import { 
  ReceiptIndianRupee, 
  ShieldCheck, 
  TrendingUp, 
  Rocket, 
  ArrowRight,
  Briefcase
} from 'lucide-react';

export default function Services({ onSelectService }) {
  const coreServices = [
    {
      title: "Direct & Corporate Taxation",
      tagline: "Tax Structuring & Scrutiny Defense",
      icon: ReceiptIndianRupee,
      description: "Proactive income tax planning, MAT optimization, and robust representation in departmental appeals.",
      deliverables: ["Corporate Tax & MAT", "Scrutiny Assessment Defense", "HNI Wealth Structuring"],
      badge: "Popular"
    },
    {
      title: "GST Advisory & ITC Recovery",
      tagline: "Zero-Disallowance Compliance",
      icon: ShieldCheck,
      description: "Seamless monthly filings, GSTR-2B credit reconciliation, and dispute resolution for stuck refunds.",
      deliverables: ["Input Credit (ITC) Recovery", "GST Audit & DRC Notice Defense", "Export LUT & Refunds"]
    },
    {
      title: "Startup Advisory & 80-IAC",
      tagline: "3-Year 100% Tax Holiday",
      icon: Rocket,
      description: "From day-zero incorporation to securing DPIIT recognition and Section 80-IAC tax exemption certificates.",
      deliverables: ["DPIIT 80-IAC Tax Holiday", "Company & LLP Incorporation", "ESOPs & Rule 11UA Valuation"],
      badge: "Fast Track"
    },
    {
      title: "Virtual CFO & MIS",
      tagline: "Fractional Financial Leadership",
      icon: TrendingUp,
      description: "Executive-level financial strategy, 13-week cash runway modeling, and investor-ready board reporting.",
      deliverables: ["Cash Runway Modeling", "Budget vs Actual MIS", "Due Diligence & Term Sheets"]
    }
  ];

  return (
    <section 
      id="services"
      style={{
        padding: '70px 0',
        position: 'relative'
      }}
    >
      <div className="container">
        {/* Header */}
        <div className="section-header" style={{ marginBottom: '40px' }}>
          <div className="section-tag">
            <Briefcase size={14} />
            <span>Core Practice Areas</span>
          </div>
          <h2 className="section-title">
            Tailored Financial & <span className="gradient-text">Tax Advisory</span>
          </h2>
          <p className="section-subtitle">
            Strategic chartered accountancy services engineered to protect capital and accelerate business growth.
          </p>
        </div>

        {/* 4 Crisp Pillars Grid */}
        <div 
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(260px, 1fr))',
            gap: '20px'
          }}
        >
          {coreServices.map((service, idx) => {
            const IconComponent = service.icon;

            return (
              <div 
                key={idx}
                className="glass-card glass-card-interactive"
                style={{
                  padding: '28px 24px',
                  display: 'flex',
                  flexDirection: 'column',
                  justifyContent: 'space-between',
                  position: 'relative'
                }}
              >
                <div>
                  <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '16px' }}>
                    <div 
                      style={{
                        width: '44px',
                        height: '44px',
                        borderRadius: '12px',
                        background: 'linear-gradient(135deg, rgba(56, 189, 248, 0.2), rgba(16, 185, 129, 0.15))',
                        border: '1px solid var(--glass-border)',
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center'
                      }}
                    >
                      <IconComponent size={22} color="var(--accent-cyan)" />
                    </div>

                    {service.badge && (
                      <span 
                        style={{
                          background: 'rgba(56, 189, 248, 0.15)',
                          border: '1px solid rgba(56, 189, 248, 0.4)',
                          color: 'var(--accent-cyan)',
                          fontSize: '0.7rem',
                          fontWeight: 700,
                          padding: '3px 8px',
                          borderRadius: '8px'
                        }}
                      >
                        {service.badge}
                      </span>
                    )}
                  </div>

                  <h3 style={{ fontSize: '1.15rem', marginBottom: '6px', color: 'var(--text-primary)' }}>
                    {service.title}
                  </h3>
                  <div style={{ fontSize: '0.8rem', color: 'var(--accent-cyan)', fontWeight: 600, marginBottom: '12px' }}>
                    {service.tagline}
                  </div>

                  <p style={{ fontSize: '0.84rem', color: 'var(--text-secondary)', lineHeight: 1.55, marginBottom: '18px' }}>
                    {service.description}
                  </p>

                  <div style={{ display: 'flex', flexDirection: 'column', gap: '6px', marginBottom: '22px' }}>
                    {service.deliverables.map((item, dIdx) => (
                      <div key={dIdx} style={{ fontSize: '0.78rem', color: 'var(--text-muted)', display: 'flex', alignItems: 'center', gap: '6px' }}>
                        <span style={{ color: 'var(--accent-emerald)', fontWeight: 700 }}>✓</span>
                        <span>{item}</span>
                      </div>
                    ))}
                  </div>
                </div>

                <button
                  onClick={() => onSelectService(service.title)}
                  className="btn-glass"
                  style={{
                    width: '100%',
                    justifyContent: 'center',
                    padding: '10px 0',
                    fontSize: '0.84rem'
                  }}
                >
                  <span>Inquire Now</span>
                  <ArrowRight size={14} />
                </button>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
