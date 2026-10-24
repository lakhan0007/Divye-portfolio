import React, { useState, useEffect } from 'react';
import { 
  ShieldCheck, 
  Sun, 
  Moon, 
  Menu, 
  X, 
  PhoneCall, 
  Calendar,
  Sparkles
} from 'lucide-react';
import { CA_PROFILE } from '../data/caData';

export default function Navbar({ theme, toggleTheme, onOpenConsultation }) {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'About', href: '#about' },
    { name: 'Services', href: '#services' },
    { name: 'Tax Calculator', href: '#tax-tools', badge: 'Live Tool' },
    { name: 'Track Record', href: '#case-studies' },
    { name: 'Credentials', href: '#credentials' },
    { name: 'Contact', href: '#contact' },
  ];

  return (
    <header 
      style={{
        position: 'fixed',
        top: 0,
        left: 0,
        right: 0,
        zIndex: 100,
        padding: isScrolled ? '12px 0' : '20px 0',
        transition: 'all 0.3s ease',
        background: isScrolled ? 'var(--glass-bg)' : 'transparent',
        backdropFilter: isScrolled ? 'blur(16px)' : 'none',
        WebkitBackdropFilter: isScrolled ? 'blur(16px)' : 'none',
        borderBottom: isScrolled ? '1px solid var(--glass-border)' : '1px solid transparent',
        boxShadow: isScrolled ? 'var(--glass-shadow)' : 'none'
      }}
    >
      <div className="container" style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
        {/* Logo / Brand */}
        <a 
          href="#" 
          style={{ 
            textDecoration: 'none', 
            display: 'flex', 
            alignItems: 'center', 
            gap: '12px' 
          }}
        >
          <div 
            style={{
              width: '42px',
              height: '42px',
              borderRadius: '12px',
              background: 'linear-gradient(135deg, #0284c7 0%, #0f172a 100%)',
              border: '1px solid rgba(56, 189, 248, 0.4)',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              fontWeight: 800,
              fontSize: '1.1rem',
              color: '#38bdf8',
              boxShadow: '0 4px 14px rgba(2, 132, 199, 0.3)'
            }}
          >
            CA
          </div>
          <div>
            <div style={{ display: 'flex', alignItems: 'center', gap: '6px' }}>
              <span style={{ fontWeight: 800, fontSize: '1.15rem', color: 'var(--text-primary)', letterSpacing: '-0.02em' }}>
                Divya Gupta
              </span>
              <span 
                style={{ 
                  fontSize: '0.65rem', 
                  fontWeight: 700, 
                  background: 'rgba(56, 189, 248, 0.15)', 
                  color: 'var(--accent-cyan)', 
                  padding: '2px 6px', 
                  borderRadius: '4px',
                  border: '1px solid rgba(56, 189, 248, 0.3)'
                }}
              >
                FCA
              </span>
            </div>
            <div style={{ fontSize: '0.72rem', color: 'var(--text-muted)', fontWeight: 500 }}>
              Chartered Accountant • M.No. 542910
            </div>
          </div>
        </a>

        {/* Desktop Nav Links */}
        <nav 
          style={{ 
            display: 'none', 
            alignItems: 'center', 
            gap: '28px',
            '@media (minWidth: 992px)': { display: 'flex' }
          }}
          className="desktop-nav"
        >
          {navLinks.map((link) => (
            <a
              key={link.name}
              href={link.href}
              style={{
                textDecoration: 'none',
                color: 'var(--text-secondary)',
                fontSize: '0.9rem',
                fontWeight: 500,
                transition: 'color 0.2s ease',
                display: 'inline-flex',
                alignItems: 'center',
                gap: '6px'
              }}
              onMouseEnter={(e) => (e.target.style.color = 'var(--accent-cyan)')}
              onMouseLeave={(e) => (e.target.style.color = 'var(--text-secondary)')}
            >
              {link.name}
              {link.badge && (
                <span 
                  style={{
                    fontSize: '0.65rem',
                    background: 'linear-gradient(135deg, rgba(56,189,248,0.2), rgba(16,185,129,0.2))',
                    border: '1px solid rgba(56, 189, 248, 0.4)',
                    color: 'var(--accent-cyan)',
                    padding: '1px 6px',
                    borderRadius: '8px',
                    fontWeight: 700
                  }}
                >
                  {link.badge}
                </span>
              )}
            </a>
          ))}
        </nav>

        {/* Actions (Theme toggle + Consultation CTA) */}
        <div style={{ display: 'flex', alignItems: 'center', gap: '12px' }}>
          {/* Theme Switcher */}
          <button
            onClick={toggleTheme}
            aria-label="Toggle Theme"
            style={{
              width: '40px',
              height: '40px',
              borderRadius: '10px',
              background: 'var(--glass-bg-subtle)',
              border: '1px solid var(--glass-border)',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              cursor: 'pointer',
              color: 'var(--text-primary)',
              transition: 'all 0.2s ease'
            }}
            title={theme === 'dark' ? 'Switch to Light Mode' : 'Switch to Dark Mode'}
          >
            {theme === 'dark' ? <Sun size={18} color="#f59e0b" /> : <Moon size={18} color="#2563eb" />}
          </button>

          {/* Quick Book Button */}
          <button
            onClick={() => onOpenConsultation()}
            className="btn-primary"
            style={{ 
              display: 'none', 
              padding: '9px 18px', 
              fontSize: '0.88rem',
              borderRadius: '10px' 
            }}
            id="nav-consult-btn"
          >
            <Calendar size={15} />
            <span>Book Consultation</span>
          </button>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            aria-label="Toggle Navigation Menu"
            style={{
              width: '40px',
              height: '40px',
              borderRadius: '10px',
              background: 'var(--glass-bg-subtle)',
              border: '1px solid var(--glass-border)',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              cursor: 'pointer',
              color: 'var(--text-primary)'
            }}
            className="mobile-menu-trigger"
          >
            {mobileMenuOpen ? <X size={20} /> : <Menu size={20} />}
          </button>
        </div>
      </div>

      {/* Mobile Drawer */}
      {mobileMenuOpen && (
        <div 
          className="glass-card animate-fade-in"
          style={{
            margin: '12px 16px 0',
            padding: '20px',
            display: 'flex',
            flexDirection: 'column',
            gap: '16px',
            border: '1px solid var(--glass-border)'
          }}
        >
          {navLinks.map((link) => (
            <a
              key={link.name}
              href={link.href}
              onClick={() => setMobileMenuOpen(false)}
              style={{
                textDecoration: 'none',
                color: 'var(--text-primary)',
                fontSize: '1rem',
                fontWeight: 600,
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'space-between',
                padding: '8px 0',
                borderBottom: '1px solid var(--glass-border)'
              }}
            >
              <span>{link.name}</span>
              {link.badge && (
                <span 
                  style={{
                    fontSize: '0.7rem',
                    background: 'rgba(56, 189, 248, 0.2)',
                    color: 'var(--accent-cyan)',
                    padding: '2px 8px',
                    borderRadius: '8px'
                  }}
                >
                  {link.badge}
                </span>
              )}
            </a>
          ))}

          <button
            onClick={() => {
              setMobileMenuOpen(false);
              onOpenConsultation();
            }}
            className="btn-primary"
            style={{ width: '100%', justifyContent: 'center', marginTop: '8px' }}
          >
            <Calendar size={16} />
            <span>Book Strategy Consultation</span>
          </button>
        </div>
      )}

      <style>{`
        @media (min-width: 900px) {
          .desktop-nav {
            display: flex !important;
          }
          #nav-consult-btn {
            display: inline-flex !important;
          }
          .mobile-menu-trigger {
            display: none !important;
          }
        }
      `}</style>
    </header>
  );
}
