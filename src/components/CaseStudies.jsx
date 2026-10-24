import React from 'react';
import { 
  Trophy, 
  Quote, 
  Star, 
  CheckCircle2, 
  TrendingUp 
} from 'lucide-react';

export default function CaseStudies() {
  const highlights = [
    {
      metric: "₹42 Lakhs Saved",
      tag: "Startup India 80-IAC",
      client: "FinTech Platform (Series A)",
      summary: "Secured DPIIT Inter-Ministerial 3-year 100% tax exemption holiday and streamlined angel round share premium valuations."
    },
    {
      metric: "₹1.82 Cr Recovered",
      tag: "GST Input Credit (ITC)",
      client: "Automotive Manufacturer",
      summary: "Resolved 8 months of supplier non-compliance via automated GSTR-2B reconciliation and cleared DRC-01A summons with zero penalty."
    },
    {
      metric: "92% Leakage Cut",
      tag: "Forensic Audit & Controls",
      client: "Multi-Speciality Healthcare",
      summary: "Instituted centralized POS ERP integration and dual-authorization financial controls across 12 diagnostic clinics."
    }
  ];

  const testimonials = [
    {
      quote: "CA Divya Gupta transformed how our board views finance. Handled our Section 80-IAC exemption flawlessly and guided Series A due diligence without a hitch.",
      author: "Rohit Agarwal",
      role: "Founder & CEO, ZenoPay Technologies"
    },
    {
      quote: "His firm's grasp of corporate tax and proactive GST planning saved our manufacturing unit crores in penalties. A truly strategic advisor.",
      author: "Meenakshi Sundaram",
      role: "Managing Director, Apex Precision Castings"
    }
  ];

  return (
    <section 
      id="case-studies"
      style={{
        padding: '70px 0',
        position: 'relative'
      }}
    >
      <div className="container">
        {/* Header */}
        <div className="section-header" style={{ marginBottom: '40px' }}>
          <div className="section-tag">
            <Trophy size={14} />
            <span>Proven Results</span>
          </div>
          <h2 className="section-title">
            Measurable Client <span className="gradient-text">Impact & Trust</span>
          </h2>
          <p className="section-subtitle">
            Demonstrated financial optimization and zero-disallowance regulatory assurance.
          </p>
        </div>

        {/* 3 Metric Cards */}
        <div 
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))',
            gap: '20px',
            marginBottom: '36px'
          }}
        >
          {highlights.map((item, idx) => (
            <div 
              key={idx}
              className="glass-card glass-card-interactive"
              style={{ padding: '24px' }}
            >
              <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '12px' }}>
                <span 
                  style={{
                    fontSize: '0.72rem',
                    fontWeight: 700,
                    color: 'var(--accent-cyan)',
                    background: 'rgba(56, 189, 248, 0.12)',
                    padding: '3px 8px',
                    borderRadius: '6px'
                  }}
                >
                  {item.tag}
                </span>

                <div 
                  style={{
                    fontSize: '1.1rem',
                    fontWeight: 800,
                    color: 'var(--accent-emerald)'
                  }}
                >
                  {item.metric}
                </div>
              </div>

              <h4 style={{ fontSize: '1rem', color: 'var(--text-primary)', marginBottom: '8px' }}>
                {item.client}
              </h4>

              <p style={{ fontSize: '0.82rem', color: 'var(--text-secondary)', lineHeight: 1.55 }}>
                {item.summary}
              </p>
            </div>
          ))}
        </div>

        {/* 2 Testimonials */}
        <div 
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))',
            gap: '20px'
          }}
        >
          {testimonials.map((t, idx) => (
            <div 
              key={idx}
              className="glass-card"
              style={{ padding: '24px' }}
            >
              <div style={{ display: 'flex', gap: '3px', marginBottom: '12px' }}>
                {[...Array(5)].map((_, i) => (
                  <Star key={i} size={14} fill="#f59e0b" color="#f59e0b" />
                ))}
              </div>

              <p style={{ fontSize: '0.88rem', color: 'var(--text-secondary)', lineHeight: 1.6, fontStyle: 'italic', marginBottom: '16px' }}>
                "{t.quote}"
              </p>

              <div>
                <strong style={{ fontSize: '0.92rem', color: 'var(--text-primary)' }}>{t.author}</strong>
                <div style={{ fontSize: '0.76rem', color: 'var(--accent-cyan)' }}>{t.role}</div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
