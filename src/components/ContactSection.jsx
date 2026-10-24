import React, { useState } from 'react';
import { 
  Mail, 
  Phone, 
  MapPin, 
  MessageCircle, 
  Send, 
  CheckCircle,
  ShieldCheck 
} from 'lucide-react';
import { CA_PROFILE } from '../data/caData';

export default function ContactSection() {
  const [form, setForm] = useState({ name: '', phone: '', message: '' });
  const [sent, setSent] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    setSent(true);
    setTimeout(() => {
      setSent(false);
      setForm({ name: '', phone: '', message: '' });
    }, 4000);
  };

  const handleWhatsApp = () => {
    const text = encodeURIComponent(`Hello CA Divya Gupta, I would like to consult with you regarding financial and tax advisory.`);
    window.open(`https://wa.me/${CA_PROFILE.whatsapp.replace('+', '')}?text=${text}`, '_blank');
  };

  return (
    <section 
      id="contact"
      style={{
        padding: '70px 0 50px',
        position: 'relative'
      }}
    >
      <div className="container">
        {/* Header */}
        <div className="section-header" style={{ marginBottom: '40px' }}>
          <div className="section-tag">
            <Mail size={14} />
            <span>Get In Touch</span>
          </div>
          <h2 className="section-title">
            Connect for a <span className="gradient-text">Confidential Advisory</span>
          </h2>
          <p className="section-subtitle">
            Whether for statutory audit, tax scrutiny defense, or virtual CFO, reach out directly.
          </p>
        </div>

        <div 
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))',
            gap: '24px',
            maxWidth: '960px',
            margin: '0 auto'
          }}
        >
          {/* Left: Quick Connect Card */}
          <div 
            className="glass-card"
            style={{
              padding: '30px 26px',
              display: 'flex',
              flexDirection: 'column',
              justifyContent: 'space-between'
            }}
          >
            <div>
              <div 
                style={{
                  padding: '16px 20px',
                  borderRadius: '16px',
                  background: 'linear-gradient(135deg, rgba(37, 211, 102, 0.15) 0%, rgba(15, 23, 42, 0.8) 100%)',
                  border: '1px solid rgba(37, 211, 102, 0.35)',
                  marginBottom: '22px'
                }}
              >
                <div style={{ display: 'flex', alignItems: 'center', gap: '10px', marginBottom: '8px' }}>
                  <MessageCircle size={22} color="#25D366" />
                  <span style={{ fontWeight: 800, fontSize: '1rem', color: 'var(--text-primary)' }}>
                    Direct WhatsApp
                  </span>
                </div>
                <p style={{ fontSize: '0.82rem', color: 'var(--text-secondary)', marginBottom: '14px' }}>
                  Immediate advisory channel for quick responses directly with CA Divya Gupta.
                </p>
                <button
                  onClick={handleWhatsApp}
                  className="btn-primary"
                  style={{
                    background: 'linear-gradient(135deg, #25D366 0%, #128C7E 100%)',
                    width: '100%',
                    justifyContent: 'center',
                    padding: '10px 0',
                    fontSize: '0.88rem'
                  }}
                >
                  <MessageCircle size={16} />
                  <span>Chat on WhatsApp</span>
                </button>
              </div>

              <div style={{ display: 'flex', flexDirection: 'column', gap: '14px', fontSize: '0.88rem' }}>
                <div style={{ display: 'flex', alignItems: 'center', gap: '10px', color: 'var(--text-secondary)' }}>
                  <Phone size={16} color="var(--accent-cyan)" />
                  <span>{CA_PROFILE.phone}</span>
                </div>
                <div style={{ display: 'flex', alignItems: 'center', gap: '10px', color: 'var(--text-secondary)' }}>
                  <Mail size={16} color="var(--accent-cyan)" />
                  <span>{CA_PROFILE.email}</span>
                </div>
                <div style={{ display: 'flex', alignItems: 'center', gap: '10px', color: 'var(--text-secondary)' }}>
                  <MapPin size={16} color="var(--accent-emerald)" />
                  <span>Connaught Place, New Delhi & BKC, Mumbai</span>
                </div>
              </div>
            </div>

            <div style={{ display: 'flex', alignItems: 'center', gap: '6px', fontSize: '0.74rem', color: 'var(--text-muted)', marginTop: '20px' }}>
              <ShieldCheck size={14} color="var(--accent-emerald)" />
              <span>Strict client confidentiality guaranteed under ICAI Act.</span>
            </div>
          </div>

          {/* Right: Quick Query Form */}
          <div 
            className="glass-card"
            style={{
              padding: '30px 26px',
              border: '1px solid var(--glass-border)'
            }}
          >
            <h4 style={{ fontSize: '1.15rem', color: 'var(--text-primary)', marginBottom: '6px', fontWeight: 800 }}>
              Quick Message
            </h4>
            <p style={{ fontSize: '0.82rem', color: 'var(--text-secondary)', marginBottom: '20px' }}>
              Leave your query and we'll connect back with you.
            </p>

            {sent ? (
              <div 
                className="animate-fade-in"
                style={{
                  padding: '24px',
                  borderRadius: '14px',
                  background: 'rgba(16, 185, 129, 0.15)',
                  border: '1px solid var(--accent-emerald)',
                  textAlign: 'center'
                }}
              >
                <CheckCircle size={32} color="var(--accent-emerald)" style={{ margin: '0 auto 10px' }} />
                <h5 style={{ fontSize: '1rem', color: 'var(--text-primary)', marginBottom: '4px' }}>
                  Message Transmitted!
                </h5>
                <p style={{ fontSize: '0.82rem', color: 'var(--text-secondary)' }}>
                  Thank you. CA Divya Gupta will review and get in touch shortly.
                </p>
              </div>
            ) : (
              <form onSubmit={handleSubmit} style={{ display: 'flex', flexDirection: 'column', gap: '14px' }}>
                <div>
                  <label style={{ display: 'block', fontSize: '0.8rem', fontWeight: 600, color: 'var(--text-secondary)', marginBottom: '5px' }}>
                    Your Name
                  </label>
                  <input
                    type="text"
                    required
                    className="glass-input"
                    placeholder="e.g. Rahul Verma"
                    value={form.name}
                    onChange={(e) => setForm({ ...form, name: e.target.value })}
                  />
                </div>

                <div>
                  <label style={{ display: 'block', fontSize: '0.8rem', fontWeight: 600, color: 'var(--text-secondary)', marginBottom: '5px' }}>
                    Contact Phone / WhatsApp
                  </label>
                  <input
                    type="tel"
                    required
                    className="glass-input"
                    placeholder="+91 98765 43210"
                    value={form.phone}
                    onChange={(e) => setForm({ ...form, phone: e.target.value })}
                  />
                </div>

                <div>
                  <label style={{ display: 'block', fontSize: '0.8rem', fontWeight: 600, color: 'var(--text-secondary)', marginBottom: '5px' }}>
                    Brief Requirement
                  </label>
                  <textarea
                    rows="3"
                    required
                    className="glass-textarea"
                    placeholder="e.g. Need GST notice consultation or startup 80-IAC exemption..."
                    value={form.message}
                    onChange={(e) => setForm({ ...form, message: e.target.value })}
                  />
                </div>

                <button
                  type="submit"
                  className="btn-primary"
                  style={{ width: '100%', justifyContent: 'center', padding: '12px 0' }}
                >
                  <Send size={15} />
                  <span>Send Message</span>
                </button>
              </form>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}
