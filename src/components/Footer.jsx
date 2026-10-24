import React from 'react';
import { 
  ShieldCheck, 
  ArrowUp, 
  Heart, 
  Mail, 
  Phone 
} from 'lucide-react';
import { CA_PROFILE } from '../data/caData';

export default function Footer() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer 
      style={{
        borderTop: '1px solid var(--glass-border)',
        background: 'rgba(6, 9, 19, 0.85)',
        backdropFilter: 'blur(16px)',
        padding: '60px 0 30px',
        position: 'relative',
        zIndex: 1
      }}
    >
      <div className="container">
        <div 
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(260px, 1fr))',
            gap: '40px',
            marginBottom: '48px'
          }}
        >
          {/* Col 1: Bio & ICAI */}
          <div>
            <div style={{ display: 'flex', alignItems: 'center', gap: '12px', marginBottom: '16px' }}>
              <div 
                style={{
                  width: '38px',
                  height: '38px',
                  borderRadius: '10px',
                  background: 'linear-gradient(135deg, #0284c7 0%, #0f172a 100%)',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  fontWeight: 800,
                  fontSize: '1rem',
                  color: '#38bdf8'
                }}
              >
                CA
              </div>
              <span style={{ fontWeight: 800, fontSize: '1.2rem', color: 'var(--text-primary)' }}>
                {CA_PROFILE.name}
              </span>
            </div>

            <p style={{ fontSize: '0.85rem', color: 'var(--text-secondary)', lineHeight: 1.6, marginBottom: '20px' }}>
              Fellow Chartered Accountant (FCA, DISA) delivering high-precision statutory audit, proactive corporate tax strategy, and fractional CFO advisory.
            </p>

            <div style={{ fontSize: '0.8rem', color: 'var(--text-muted)', display: 'flex', flexDirection: 'column', gap: '4px' }}>
              <div>ICAI Membership No: <strong style={{ color: 'var(--accent-cyan)' }}>542910</strong></div>
              <div>Firm Registration: <strong style={{ color: 'var(--accent-cyan)' }}>028491N</strong></div>
            </div>
          </div>

          {/* Col 2: Navigation Links */}
          <div>
            <h4 style={{ fontSize: '1rem', color: 'var(--text-primary)', marginBottom: '18px', fontWeight: 700 }}>
              Quick Navigation
            </h4>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '10px', fontSize: '0.88rem' }}>
              <a href="#about" style={{ color: 'var(--text-secondary)', textDecoration: 'none' }}>About CA Divya</a>
              <a href="#services" style={{ color: 'var(--text-secondary)', textDecoration: 'none' }}>Practice Areas</a>
              <a href="#tax-tools" style={{ color: 'var(--text-secondary)', textDecoration: 'none' }}>Interactive Tax & GST Tools</a>
              <a href="#case-studies" style={{ color: 'var(--text-secondary)', textDecoration: 'none' }}>Client Case Studies</a>
              <a href="#credentials" style={{ color: 'var(--text-secondary)', textDecoration: 'none' }}>ICAI Credentials & DISA</a>
              <a href="#insights" style={{ color: 'var(--text-secondary)', textDecoration: 'none' }}>Tax Circulars & Insights</a>
            </div>
          </div>

          {/* Col 3: Practice Domains */}
          <div>
            <h4 style={{ fontSize: '1rem', color: 'var(--text-primary)', marginBottom: '18px', fontWeight: 700 }}>
              Specializations
            </h4>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '10px', fontSize: '0.88rem', color: 'var(--text-secondary)' }}>
              <span>Corporate Direct Tax & MAT</span>
              <span>GSTR-2B vs 3B ITC Optimization</span>
              <span>Statutory & Tax Audit (Sec 44AB)</span>
              <span>Startup India 80-IAC Exemptions</span>
              <span>Virtual CFO & Rolling Cash Models</span>
              <span>Rule 11UA Valuation & M&A Diligence</span>
            </div>
          </div>

          {/* Col 4: Contact & Social */}
          <div>
            <h4 style={{ fontSize: '1rem', color: 'var(--text-primary)', marginBottom: '18px', fontWeight: 700 }}>
              Direct Office Lines
            </h4>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '10px', fontSize: '0.88rem', color: 'var(--text-secondary)', marginBottom: '20px' }}>
              <div>New Delhi: Statesman House, CP</div>
              <div>Mumbai: BKC Platina</div>
              <div>Email: {CA_PROFILE.email}</div>
              <div>Direct: {CA_PROFILE.phone}</div>
            </div>

            <button
              onClick={scrollToTop}
              className="btn-glass"
              style={{ padding: '8px 16px', fontSize: '0.82rem' }}
            >
              <ArrowUp size={14} />
              <span>Back to Top</span>
            </button>
          </div>
        </div>

        {/* ICAI Mandatory Statutory Disclaimer */}
        <div 
          style={{
            borderTop: '1px solid var(--glass-border)',
            paddingTop: '24px',
            marginBottom: '24px',
            fontSize: '0.74rem',
            color: 'var(--text-muted)',
            lineHeight: 1.6
          }}
        >
          <div style={{ display: 'flex', alignItems: 'center', gap: '6px', marginBottom: '6px', color: 'var(--accent-cyan)', fontWeight: 700 }}>
            <ShieldCheck size={14} />
            <span>ICAI Regulatory & Professional Ethics Disclosure</span>
          </div>
          <p>
            As per the Chartered Accountants Act, 1949 and guidelines issued by the Institute of Chartered Accountants of India (ICAI), chartered accountants are not permitted to solicit work or advertise. The contents of this website are purely for general informational and educational purposes upon specific request of the user. This site does not constitute an advertisement, personal communication, invitation, or solicitation of any sort.
          </p>
        </div>

        {/* Copyright */}
        <div 
          style={{
            display: 'flex',
            flexWrap: 'wrap',
            justifyContent: 'space-between',
            alignItems: 'center',
            fontSize: '0.78rem',
            color: 'var(--text-muted)',
            gap: '12px'
          }}
        >
          <div>
            © {new Date().getFullYear()} CA Divya Gupta, FCA, DISA. All Rights Reserved.
          </div>
          <div>
            Crafted with Glassmorphism Precision for Chartered Accountancy Excellence.
          </div>
        </div>
      </div>
    </footer>
  );
}
