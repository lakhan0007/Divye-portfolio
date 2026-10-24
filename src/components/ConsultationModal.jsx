import React, { useState, useEffect } from 'react';
import { 
  X, 
  CheckCircle, 
  Calendar, 
  Clock, 
  MessageSquare, 
  Building, 
  Mail, 
  Phone, 
  User,
  ShieldCheck,
  Send,
  MessageCircle
} from 'lucide-react';
import { CA_PROFILE, SERVICES_DATA } from '../data/caData';

export default function ConsultationModal({ isOpen, onClose, initialService = '' }) {
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    email: '',
    entityType: 'Private Limited Company',
    service: '',
    date: '',
    timeSlot: 'Morning (10:00 AM - 1:00 PM)',
    message: ''
  });

  const [isSubmitted, setIsSubmitted] = useState(false);
  const [referenceId, setReferenceId] = useState('');

  useEffect(() => {
    if (initialService) {
      setFormData(prev => ({ ...prev, service: initialService }));
    } else {
      setFormData(prev => ({ ...prev, service: SERVICES_DATA[0].title }));
    }
    setIsSubmitted(false);
  }, [initialService, isOpen]);

  if (!isOpen) return null;

  const handleSubmit = (e) => {
    e.preventDefault();
    const randomRef = 'CA-' + Math.floor(100000 + Math.random() * 900000);
    setReferenceId(randomRef);
    setIsSubmitted(true);
  };

  const handleWhatsAppShare = () => {
    const text = encodeURIComponent(
      `Hello CA Divya Gupta, I have scheduled a consultation.\nRef ID: ${referenceId}\nName: ${formData.name}\nService: ${formData.service}\nPreferred Slot: ${formData.date} (${formData.timeSlot})\nEntity: ${formData.entityType}`
    );
    window.open(`https://wa.me/${CA_PROFILE.whatsapp.replace('+', '')}?text=${text}`, '_blank');
  };

  return (
    <div 
      style={{
        position: 'fixed',
        inset: 0,
        zIndex: 300,
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        padding: '20px',
        background: 'rgba(0, 0, 0, 0.75)',
        backdropFilter: 'blur(10px)'
      }}
    >
      <div 
        className="glass-card animate-fade-in"
        style={{
          width: '100%',
          maxWidth: '580px',
          maxHeight: '92vh',
          overflowY: 'auto',
          padding: '36px 30px',
          borderRadius: '24px',
          background: 'rgba(15, 23, 42, 0.96)',
          border: '1px solid var(--glass-border-hover)'
        }}
      >
        {/* Header */}
        <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: '22px' }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
            <div 
              style={{
                width: '36px',
                height: '36px',
                borderRadius: '10px',
                background: 'rgba(56, 189, 248, 0.2)',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center'
              }}
            >
              <Calendar size={18} color="var(--accent-cyan)" />
            </div>
            <div>
              <h3 style={{ fontSize: '1.25rem', color: 'var(--text-primary)', fontWeight: 800 }}>
                {isSubmitted ? 'Consultation Confirmed' : 'Book Strategic CA Consultation'}
              </h3>
              <div style={{ fontSize: '0.75rem', color: 'var(--text-muted)' }}>
                Direct session with CA Divya Gupta (FCA, DISA)
              </div>
            </div>
          </div>

          <button
            onClick={onClose}
            style={{
              background: 'var(--glass-bg-subtle)',
              border: '1px solid var(--glass-border)',
              borderRadius: '8px',
              color: 'var(--text-primary)',
              cursor: 'pointer',
              padding: '6px',
              display: 'flex'
            }}
          >
            <X size={18} />
          </button>
        </div>

        {/* Form or Confirmation */}
        {!isSubmitted ? (
          <form onSubmit={handleSubmit} style={{ display: 'flex', flexDirection: 'column', gap: '16px' }}>
            {/* Service Selection */}
            <div>
              <label style={{ display: 'block', fontSize: '0.82rem', fontWeight: 600, color: 'var(--text-secondary)', marginBottom: '6px' }}>
                Advisory Service Required *
              </label>
              <select
                className="glass-select"
                value={formData.service}
                onChange={(e) => setFormData({ ...formData, service: e.target.value })}
                required
              >
                {SERVICES_DATA.map((s) => (
                  <option key={s.id} value={s.title} style={{ background: '#0f172a', color: '#ffffff' }}>
                    {s.title}
                  </option>
                ))}
                <option value="General Tax Scrutiny & Notice Defense" style={{ background: '#0f172a', color: '#ffffff' }}>
                  General Tax Scrutiny & Notice Defense
                </option>
                <option value="HNI Wealth & Estate Planning" style={{ background: '#0f172a', color: '#ffffff' }}>
                  HNI Wealth & Estate Planning
                </option>
              </select>
            </div>

            {/* Name & Phone */}
            <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '14px' }}>
              <div>
                <label style={{ display: 'block', fontSize: '0.82rem', fontWeight: 600, color: 'var(--text-secondary)', marginBottom: '6px' }}>
                  Full Name *
                </label>
                <div style={{ position: 'relative' }}>
                  <input
                    type="text"
                    required
                    className="glass-input"
                    placeholder="e.g. Rahul Verma"
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                  />
                </div>
              </div>

              <div>
                <label style={{ display: 'block', fontSize: '0.82rem', fontWeight: 600, color: 'var(--text-secondary)', marginBottom: '6px' }}>
                  Phone / WhatsApp *
                </label>
                <input
                  type="tel"
                  required
                  className="glass-input"
                  placeholder="+91 98765 43210"
                  value={formData.phone}
                  onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                />
              </div>
            </div>

            {/* Email & Entity */}
            <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '14px' }}>
              <div>
                <label style={{ display: 'block', fontSize: '0.82rem', fontWeight: 600, color: 'var(--text-secondary)', marginBottom: '6px' }}>
                  Email Address *
                </label>
                <input
                  type="email"
                  required
                  className="glass-input"
                  placeholder="rahul@company.com"
                  value={formData.email}
                  onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                />
              </div>

              <div>
                <label style={{ display: 'block', fontSize: '0.82rem', fontWeight: 600, color: 'var(--text-secondary)', marginBottom: '6px' }}>
                  Entity Type
                </label>
                <select
                  className="glass-select"
                  value={formData.entityType}
                  onChange={(e) => setFormData({ ...formData, entityType: e.target.value })}
                >
                  <option value="Private Limited Company" style={{ background: '#0f172a', color: '#ffffff' }}>Private Limited Company</option>
                  <option value="LLP / Partnership Firm" style={{ background: '#0f172a', color: '#ffffff' }}>LLP / Partnership Firm</option>
                  <option value="Sole Proprietor / Individual" style={{ background: '#0f172a', color: '#ffffff' }}>Sole Proprietor / Individual</option>
                  <option value="Venture-Funded Startup" style={{ background: '#0f172a', color: '#ffffff' }}>Venture-Funded Startup</option>
                  <option value="HNI / Family Office" style={{ background: '#0f172a', color: '#ffffff' }}>HNI / Family Office</option>
                </select>
              </div>
            </div>

            {/* Date & Time Slot */}
            <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '14px' }}>
              <div>
                <label style={{ display: 'block', fontSize: '0.82rem', fontWeight: 600, color: 'var(--text-secondary)', marginBottom: '6px' }}>
                  Preferred Date
                </label>
                <input
                  type="date"
                  className="glass-input"
                  value={formData.date}
                  onChange={(e) => setFormData({ ...formData, date: e.target.value })}
                />
              </div>

              <div>
                <label style={{ display: 'block', fontSize: '0.82rem', fontWeight: 600, color: 'var(--text-secondary)', marginBottom: '6px' }}>
                  Time Slot
                </label>
                <select
                  className="glass-select"
                  value={formData.timeSlot}
                  onChange={(e) => setFormData({ ...formData, timeSlot: e.target.value })}
                >
                  <option value="Morning (10:00 AM - 1:00 PM)" style={{ background: '#0f172a', color: '#ffffff' }}>Morning (10:00 AM - 1:00 PM)</option>
                  <option value="Afternoon (2:00 PM - 5:00 PM)" style={{ background: '#0f172a', color: '#ffffff' }}>Afternoon (2:00 PM - 5:00 PM)</option>
                  <option value="Evening (5:30 PM - 7:30 PM)" style={{ background: '#0f172a', color: '#ffffff' }}>Evening (5:30 PM - 7:30 PM)</option>
                </select>
              </div>
            </div>

            {/* Note / Query */}
            <div>
              <label style={{ display: 'block', fontSize: '0.82rem', fontWeight: 600, color: 'var(--text-secondary)', marginBottom: '6px' }}>
                Key Questions / Context for CA Divya
              </label>
              <textarea
                className="glass-textarea"
                rows="3"
                placeholder="Mention key details (e.g. received IT notice u/s 148, planning Series A valuation, or seeking 80-IAC tax exemption)..."
                value={formData.message}
                onChange={(e) => setFormData({ ...formData, message: e.target.value })}
              />
            </div>

            {/* Privacy & ICAI Note */}
            <div style={{ display: 'flex', alignItems: 'center', gap: '8px', fontSize: '0.74rem', color: 'var(--text-muted)' }}>
              <ShieldCheck size={14} color="var(--accent-emerald)" />
              <span>Strictly confidential under the ICAI Chartered Accountants Act 1949.</span>
            </div>

            {/* Submit Button */}
            <button
              type="submit"
              className="btn-primary"
              style={{ width: '100%', justifyContent: 'center', padding: '14px 0', marginTop: '6px' }}
            >
              <Send size={16} />
              <span>Confirm & Lock Consultation Slot</span>
            </button>
          </form>
        ) : (
          /* Confirmation Screen */
          <div className="animate-fade-in" style={{ textAlign: 'center', padding: '10px 0' }}>
            <div 
              style={{
                width: '64px',
                height: '64px',
                borderRadius: '50%',
                background: 'rgba(16, 185, 129, 0.2)',
                border: '1px solid var(--accent-emerald)',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                margin: '0 auto 20px'
              }}
            >
              <CheckCircle size={36} color="var(--accent-emerald)" />
            </div>

            <h4 style={{ fontSize: '1.4rem', color: 'var(--text-primary)', marginBottom: '8px' }}>
              Slot Reserved Successfully!
            </h4>
            <p style={{ fontSize: '0.88rem', color: 'var(--text-secondary)', marginBottom: '20px', lineHeight: 1.6 }}>
              Thank you, <strong>{formData.name}</strong>. Your consultation request has been queued with CA Divya Gupta's executive calendar.
            </p>

            <div 
              className="glass-card"
              style={{
                padding: '20px',
                borderRadius: '16px',
                background: 'rgba(15, 23, 42, 0.8)',
                border: '1px solid var(--accent-cyan)',
                textAlign: 'left',
                marginBottom: '24px'
              }}
            >
              <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '10px', fontSize: '0.85rem' }}>
                <span style={{ color: 'var(--text-muted)' }}>Reference ID:</span>
                <strong style={{ color: 'var(--accent-cyan)' }}>{referenceId}</strong>
              </div>
              <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '10px', fontSize: '0.85rem' }}>
                <span style={{ color: 'var(--text-muted)' }}>Service:</span>
                <span style={{ color: 'var(--text-primary)', fontWeight: 600 }}>{formData.service}</span>
              </div>
              <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '10px', fontSize: '0.85rem' }}>
                <span style={{ color: 'var(--text-muted)' }}>Slot:</span>
                <span style={{ color: 'var(--text-primary)' }}>{formData.timeSlot}</span>
              </div>
              <div style={{ display: 'flex', justifyContent: 'space-between', fontSize: '0.85rem' }}>
                <span style={{ color: 'var(--text-muted)' }}>Entity:</span>
                <span style={{ color: 'var(--text-primary)' }}>{formData.entityType}</span>
              </div>
            </div>

            <div style={{ display: 'flex', flexDirection: 'column', gap: '12px' }}>
              <button
                onClick={handleWhatsAppShare}
                className="btn-primary"
                style={{
                  width: '100%',
                  justifyContent: 'center',
                  background: 'linear-gradient(135deg, #25D366 0%, #128C7E 100%)',
                  boxShadow: '0 8px 20px -6px rgba(37, 211, 102, 0.5)'
                }}
              >
                <MessageCircle size={18} />
                <span>Instant WhatsApp Connect with Divya</span>
              </button>

              <button
                onClick={onClose}
                className="btn-glass"
                style={{ width: '100%', justifyContent: 'center' }}
              >
                Done / Return to Portfolio
              </button>
            </div>
          </div>
        )}
      </div>
    </div >
  );
}
