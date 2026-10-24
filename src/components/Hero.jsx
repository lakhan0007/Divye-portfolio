import React from 'react';
import { 
  ShieldCheck, 
  ArrowRight, 
  Calculator, 
  Download, 
  Award, 
  CheckCircle2, 
  TrendingUp, 
  Briefcase,
  Sparkles
} from 'lucide-react';
import { CA_PROFILE } from '../data/caData';

export default function Hero({ onOpenConsultation }) {
  const handleDownloadProfile = () => {
    // Generate simple printable CA profile summary
    const content = `CA DIVYA GUPTA, FCA, DISA (ICAI)
Chartered Accountant - M.No. 542910 | FRN: 028491N
Practice Areas: Direct & Indirect Tax, Statutory Audit, Virtual CFO, Startup Structuring
Email: ${CA_PROFILE.email} | Phone: ${CA_PROFILE.phone}
Offices: Connaught Place, New Delhi & BKC, Mumbai`;
    
    const blob = new Blob([content], { type: 'text/plain;charset=utf-8' });
    const url = URL.createObjectURL(blob);
    const link = document.createElement('a');
    link.href = url;
    link.download = `CA_Divya_Gupta_Profile.txt`;
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  return (
    <section 
      id="about"
      style={{
        paddingTop: '140px',
        paddingBottom: '80px',
        position: 'relative'
      }}
    >
      <div className="container">
        <div 
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))',
            gap: '48px',
            alignItems: 'center'
          }}
        >
          {/* Left Column - Intro & Value Proposition */}
          <div>
            {/* ICAI Verified Status Pill */}
            <div 
              className="glass-pill"
              style={{
                marginBottom: '20px',
                borderColor: 'rgba(56, 189, 248, 0.3)',
                background: 'rgba(56, 189, 248, 0.08)'
              }}
            >
              <span className="pulse-dot" />
              <span style={{ color: 'var(--accent-cyan)', fontWeight: 700 }}>ICAI Fellow Member</span>
              <span style={{ color: 'var(--text-muted)' }}>•</span>
              <span style={{ color: 'var(--text-secondary)' }}>8+ Years In Practice</span>
            </div>

            {/* Main Headline */}
            <h1 
              style={{
                fontSize: 'clamp(2.3rem, 4.5vw, 3.4rem)',
                lineHeight: 1.15,
                marginBottom: '20px',
                fontWeight: 800
              }}
            >
              Strategic Financial Advisory & <br />
              <span className="gradient-text">Proactive Taxation</span> for Modern Business.
            </h1>

            {/* Subtitle / Bio */}
            <p 
              style={{
                fontSize: '1.08rem',
                lineHeight: 1.6,
                color: 'var(--text-secondary)',
                marginBottom: '32px',
                maxWidth: '520px'
              }}
            >
              Hi, I am <strong style={{ color: 'var(--text-primary)' }}>CA Divya Gupta</strong> (FCA, DISA). 
              Helping startups, MSMEs, and HNIs optimize taxes, maintain zero-disallowance audits, and scale with financial confidence.
            </p>

            {/* Action Buttons */}
            <div 
              style={{
                display: 'flex',
                flexWrap: 'wrap',
                gap: '14px',
                marginBottom: '36px'
              }}
            >
              <button 
                onClick={() => onOpenConsultation()}
                className="btn-primary"
                id="hero-book-call"
              >
                <span>Book Consultation</span>
                <ArrowRight size={17} />
              </button>

              <a 
                href="#tax-tools"
                className="btn-glass"
              >
                <Calculator size={17} color="var(--accent-cyan)" />
                <span>Live Tax Calculator</span>
              </a>
            </div>

            {/* Key Trust Checkmarks */}
            <div 
              style={{
                display: 'flex',
                flexWrap: 'wrap',
                gap: '20px',
                fontSize: '0.85rem',
                color: 'var(--text-muted)'
              }}
            >
              <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
                <CheckCircle2 size={16} color="var(--accent-emerald)" />
                <span>Faceless Scrutiny Defense</span>
              </div>
              <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
                <CheckCircle2 size={16} color="var(--accent-emerald)" />
                <span>Startup India 80-IAC Exemptions</span>
              </div>
              <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
                <CheckCircle2 size={16} color="var(--accent-emerald)" />
                <span>Zero Penalty Guarantee</span>
              </div>
            </div>
          </div>

          {/* Right Column - Glass Portrait Card with Floating Interactive Badges */}
          <div style={{ position: 'relative', display: 'flex', justifyContent: 'center' }}>
            <div 
              className="glass-card"
              style={{
                width: '100%',
                maxWidth: '430px',
                padding: '16px',
                borderRadius: '28px',
                background: 'linear-gradient(145deg, rgba(255,255,255,0.08) 0%, rgba(255,255,255,0.02) 100%)',
                position: 'relative'
              }}
            >
              {/* Profile Image with subtle framing */}
              <div 
                style={{
                  position: 'relative',
                  width: '100%',
                  aspectRatio: '1/1',
                  borderRadius: '20px',
                  overflow: 'hidden',
                  boxShadow: '0 15px 35px -10px rgba(0,0,0,0.6)'
                }}
              >
                <img 
                  src={CA_PROFILE.image} 
                  alt="CA Divya Gupta - Chartered Accountant"
                  style={{
                    width: '100%',
                    height: '100%',
                    objectFit: 'cover',
                    display: 'block'
                  }}
                  loading="eager"
                />

                {/* Glass Gradient Overlay at base */}
                <div 
                  style={{
                    position: 'absolute',
                    bottom: 0,
                    left: 0,
                    right: 0,
                    padding: '24px 18px 16px',
                    background: 'linear-gradient(to top, rgba(6, 9, 19, 0.95) 0%, rgba(6, 9, 19, 0.5) 60%, transparent 100%)',
                    display: 'flex',
                    flexDirection: 'column',
                    gap: '4px'
                  }}
                >
                  <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
                    <span style={{ color: '#ffffff', fontWeight: 800, fontSize: '1.25rem' }}>
                      CA Divya Gupta
                    </span>
                    <span 
                      style={{
                        background: 'rgba(56, 189, 248, 0.25)',
                        border: '1px solid rgba(56, 189, 248, 0.5)',
                        color: '#38bdf8',
                        fontSize: '0.75rem',
                        fontWeight: 700,
                        padding: '3px 8px',
                        borderRadius: '6px'
                      }}
                    >
                      ICAI FCA
                    </span>
                  </div>
                  <span style={{ color: '#94a3b8', fontSize: '0.85rem' }}>
                    FCA, DISA (ICAI), FAFD • M.No. 542910
                  </span>
                </div>
              </div>

              {/* Floating Glass Pill: Tax Saved */}
              <div 
                className="glass-card"
                style={{
                  position: 'absolute',
                  top: '-18px',
                  right: '-12px',
                  padding: '10px 16px',
                  borderRadius: '16px',
                  display: 'flex',
                  alignItems: 'center',
                  gap: '10px',
                  background: 'rgba(15, 23, 42, 0.85)',
                  boxShadow: '0 12px 30px rgba(0,0,0,0.4)',
                  border: '1px solid rgba(56, 189, 248, 0.4)'
                }}
              >
                <div 
                  style={{
                    width: '32px',
                    height: '32px',
                    borderRadius: '8px',
                    background: 'rgba(16, 185, 129, 0.2)',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center'
                  }}
                >
                  <TrendingUp size={18} color="var(--accent-emerald)" />
                </div>
                <div>
                  <div style={{ fontSize: '0.7rem', color: 'var(--text-muted)', fontWeight: 600 }}>TAX SAVED</div>
                  <div style={{ fontSize: '0.95rem', fontWeight: 800, color: 'var(--accent-emerald)' }}>₹24.8 Cr+</div>
                </div>
              </div>

              {/* Floating Glass Pill: Audit Accuracy */}
              <div 
                className="glass-card"
                style={{
                  position: 'absolute',
                  bottom: '40px',
                  left: '-22px',
                  padding: '10px 16px',
                  borderRadius: '16px',
                  display: 'flex',
                  alignItems: 'center',
                  gap: '10px',
                  background: 'rgba(15, 23, 42, 0.85)',
                  boxShadow: '0 12px 30px rgba(0,0,0,0.4)',
                  border: '1px solid rgba(16, 185, 129, 0.4)'
                }}
              >
                <div 
                  style={{
                    width: '32px',
                    height: '32px',
                    borderRadius: '8px',
                    background: 'rgba(56, 189, 248, 0.2)',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center'
                  }}
                >
                  <ShieldCheck size={18} color="var(--accent-cyan)" />
                </div>
                <div>
                  <div style={{ fontSize: '0.7rem', color: 'var(--text-muted)', fontWeight: 600 }}>STATUTORY AUDIT</div>
                  <div style={{ fontSize: '0.95rem', fontWeight: 800, color: 'var(--text-primary)' }}>100% Assurance</div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Dynamic Glass Stats Counter Bar */}
        <div 
          className="glass-card"
          style={{
            marginTop: '70px',
            padding: '32px 28px',
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))',
            gap: '24px',
            border: '1px solid var(--glass-border)'
          }}
        >
          {CA_PROFILE.stats.map((stat, idx) => (
            <div 
              key={idx}
              style={{
                borderRight: idx < CA_PROFILE.stats.length - 1 ? '1px solid var(--glass-border)' : 'none',
                paddingRight: '16px'
              }}
            >
              <div 
                style={{
                  fontSize: 'clamp(1.8rem, 3vw, 2.5rem)',
                  fontWeight: 800,
                  fontFamily: 'var(--font-heading)',
                  color: 'var(--accent-cyan)',
                  marginBottom: '4px',
                  display: 'flex',
                  alignItems: 'baseline',
                  gap: '2px'
                }}
              >
                <span>{stat.value}</span>
                {stat.unit && <span style={{ fontSize: '1.2rem', color: 'var(--text-secondary)' }}>{stat.unit}</span>}
              </div>
              <div style={{ fontWeight: 700, fontSize: '0.95rem', color: 'var(--text-primary)', marginBottom: '4px' }}>
                {stat.label}
              </div>
              <div style={{ fontSize: '0.78rem', color: 'var(--text-muted)' }}>
                {stat.description}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
