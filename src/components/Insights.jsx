import React, { useState } from 'react';
import { 
  BookOpen, 
  ArrowRight, 
  Calendar, 
  Clock, 
  HelpCircle, 
  ChevronDown, 
  ChevronUp, 
  X,
  FileText 
} from 'lucide-react';
import { INSIGHTS, FAQS } from '../data/caData';

export default function Insights({ onOpenConsultation }) {
  const [selectedArticle, setSelectedArticle] = useState(null);
  const [openFaqIndex, setOpenFaqIndex] = useState(0);

  const articleFullContent = {
    1: {
      content: `The Finance Act 2025 introduced pivotal shifts intended to streamline direct tax compliance while tightening anti-avoidance measures.

Key Corporate Takeaways:
1. Rationalization of Capital Gains: Holding periods have been simplified into two distinct buckets: 12 months for listed securities and 24 months for all other capital assets (including unlisted startup shares and immovable real estate).
2. Angel Tax Repeal Impact: The historic complete abolition of Section 56(2)(viib) provides massive relief to Indian founders, allowing capital raises from foreign and domestic investors without valuation dispute threats.
3. Enhanced Presumptive Taxation: Section 44ADA thresholds have been harmonized, enabling eligible service professionals to declare 50% net profits seamlessly.
4. Withholding Tax Rationalization: Multiple TDS rate brackets of 5% and 2% have been unified to prevent cash lockups in working capital.`
    },
    2: {
      content: `Section 80-IAC of the Income Tax Act provides an extraordinary incentive: an eligible startup can claim a deduction of 100% of its profits for 3 consecutive assessment years out of 10 years from incorporation.

Crucial Criteria for IMB (Inter-Ministerial Board) Approval:
1. DPIIT Recognition: The entity must be incorporated as a Private Limited Company or LLP between April 1, 2016 and March 31, 2025/2026.
2. Innovation Requirement: The business model must show technological innovation, intellectual property development, or significant employment generation capability.
3. Common Rejection Pitfall: Merely aggregating services or using standard off-the-shelf software is not accepted as innovation. A proprietary tech stack or patent filing substantially bolsters approval odds.
4. Documentation Strategy: We prepare a 15-page comprehensive deck detailing unit economics, proprietary algorithms, and audited pitch data to pass board scrutiny.`
    },
    3: {
      content: `In the contemporary GST regime, Form GSTR-2B is a static, legally binding monthly statement that determines an assessee's absolute entitlement to Input Tax Credit (ITC).

Proactive ITC Safeguard Blueprint:
1. Vendor Triangulation: Reconcile purchase registers against GSTR-2B before every 20th of the month. Block payments to errant vendors whose invoices reflect as unpaid or omitted.
2. Rule 37A Compliance: If a supplier fails to pay tax by 30th September of the subsequent financial year, the buyer must reverse ITC along with interest.
3. Credit Note Adjustments: Ensure credit notes are recorded in the exact month of supplier issuance to prevent statutory mismatch penalties during departmental audits.`
    }
  };

  return (
    <section 
      id="insights"
      style={{
        padding: '90px 0',
        position: 'relative'
      }}
    >
      <div className="container">
        {/* Header */}
        <div className="section-header">
          <div className="section-tag">
            <BookOpen size={14} />
            <span>Knowledge & Tax Advisory</span>
          </div>
          <h2 className="section-title">
            Regulatory Insights <span className="gradient-text">& Frequently Asked Questions</span>
          </h2>
          <p className="section-subtitle">
            Authoritative breakdowns of evolving corporate laws, fiscal budgets, and statutory compliances.
          </p>
        </div>

        {/* Articles Grid */}
        <div 
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))',
            gap: '24px',
            marginBottom: '70px'
          }}
        >
          {INSIGHTS.map((article) => (
            <div 
              key={article.id}
              className="glass-card glass-card-interactive"
              style={{
                padding: '30px 26px',
                display: 'flex',
                flexDirection: 'column',
                justifyContent: 'space-between'
              }}
            >
              <div>
                <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: '14px' }}>
                  <span 
                    style={{
                      fontSize: '0.75rem',
                      fontWeight: 700,
                      color: 'var(--accent-cyan)',
                      background: 'rgba(56, 189, 248, 0.12)',
                      padding: '4px 10px',
                      borderRadius: '6px'
                    }}
                  >
                    {article.category}
                  </span>

                  <div style={{ display: 'flex', alignItems: 'center', gap: '6px', fontSize: '0.75rem', color: 'var(--text-muted)' }}>
                    <Clock size={13} />
                    <span>{article.readTime}</span>
                  </div>
                </div>

                <h3 style={{ fontSize: '1.15rem', marginBottom: '12px', color: 'var(--text-primary)', lineHeight: 1.4 }}>
                  {article.title}
                </h3>

                <p style={{ fontSize: '0.85rem', color: 'var(--text-secondary)', lineHeight: 1.6, marginBottom: '20px' }}>
                  {article.summary}
                </p>
              </div>

              <div style={{ borderTop: '1px solid var(--glass-border)', paddingTop: '16px', display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
                <span style={{ fontSize: '0.75rem', color: 'var(--text-muted)' }}>
                  {article.date}
                </span>

                <button
                  onClick={() => setSelectedArticle(article)}
                  style={{
                    background: 'none',
                    border: 'none',
                    color: 'var(--accent-cyan)',
                    fontSize: '0.85rem',
                    fontWeight: 700,
                    cursor: 'pointer',
                    display: 'inline-flex',
                    alignItems: 'center',
                    gap: '4px'
                  }}
                >
                  <span>Read Article</span>
                  <ArrowRight size={14} />
                </button>
              </div>
            </div>
          ))}
        </div>

        {/* Article Full View Glass Modal */}
        {selectedArticle && (
          <div 
            style={{
              position: 'fixed',
              inset: 0,
              zIndex: 200,
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              padding: '20px',
              background: 'rgba(0, 0, 0, 0.7)',
              backdropFilter: 'blur(8px)'
            }}
          >
            <div 
              className="glass-card animate-fade-in"
              style={{
                width: '100%',
                maxWidth: '680px',
                maxHeight: '85vh',
                overflowY: 'auto',
                padding: '36px',
                borderRadius: '24px',
                background: 'rgba(15, 23, 42, 0.95)',
                border: '1px solid var(--accent-cyan)'
              }}
            >
              <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: '16px' }}>
                <span 
                  style={{
                    fontSize: '0.78rem',
                    fontWeight: 700,
                    color: 'var(--accent-cyan)',
                    background: 'rgba(56, 189, 248, 0.15)',
                    padding: '4px 10px',
                    borderRadius: '6px'
                  }}
                >
                  {selectedArticle.category} • {selectedArticle.date}
                </span>

                <button
                  onClick={() => setSelectedArticle(null)}
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

              <h3 style={{ fontSize: '1.4rem', color: 'var(--text-primary)', marginBottom: '16px', lineHeight: 1.3 }}>
                {selectedArticle.title}
              </h3>

              <div style={{ fontSize: '0.92rem', color: 'var(--text-secondary)', lineHeight: 1.75, whiteSpace: 'pre-line', marginBottom: '28px' }}>
                {articleFullContent[selectedArticle.id]?.content || selectedArticle.summary}
              </div>

              <div style={{ display: 'flex', gap: '12px', justifyContent: 'flex-end', borderTop: '1px solid var(--glass-border)', paddingTop: '20px' }}>
                <button
                  onClick={() => setSelectedArticle(null)}
                  className="btn-glass"
                >
                  Close
                </button>
                <button
                  onClick={() => {
                    setSelectedArticle(null);
                    onOpenConsultation(selectedArticle.title);
                  }}
                  className="btn-primary"
                >
                  Consult on this Subject
                </button>
              </div>
            </div>
          </div>
        )}

        {/* FAQs Accordion */}
        <div style={{ maxWidth: '840px', margin: '0 auto' }}>
          <div style={{ textAlign: 'center', marginBottom: '32px' }}>
            <span style={{ fontSize: '0.8rem', fontWeight: 700, color: 'var(--accent-cyan)', textTransform: 'uppercase', letterSpacing: '0.1em' }}>
              Common Queries Answered
            </span>
            <h3 style={{ fontSize: '1.75rem', marginTop: '6px', color: 'var(--text-primary)' }}>
              Chartered Accountancy FAQs
            </h3>
          </div>

          <div style={{ display: 'flex', flexDirection: 'column', gap: '14px' }}>
            {FAQS.map((faq, idx) => {
              const isOpen = openFaqIndex === idx;

              return (
                <div 
                  key={idx}
                  className="glass-card"
                  style={{
                    borderRadius: '14px',
                    border: isOpen ? '1px solid var(--accent-cyan)' : '1px solid var(--glass-border)',
                    transition: 'all 0.25s ease'
                  }}
                >
                  <button
                    onClick={() => setOpenFaqIndex(isOpen ? -1 : idx)}
                    style={{
                      width: '100%',
                      padding: '20px 24px',
                      background: 'none',
                      border: 'none',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'space-between',
                      textAlign: 'left',
                      cursor: 'pointer',
                      color: 'var(--text-primary)',
                      fontSize: '1rem',
                      fontWeight: 700
                    }}
                  >
                    <span style={{ paddingRight: '12px' }}>{faq.question}</span>
                    {isOpen ? <ChevronUp size={18} color="var(--accent-cyan)" /> : <ChevronDown size={18} color="var(--text-muted)" />}
                  </button>

                  {isOpen && (
                    <div 
                      className="animate-fade-in"
                      style={{
                        padding: '0 24px 22px',
                        color: 'var(--text-secondary)',
                        fontSize: '0.88rem',
                        lineHeight: 1.65,
                        borderTop: '1px solid var(--glass-border)',
                        paddingTop: '14px'
                      }}
                    >
                      {faq.answer}
                    </div>
                  )}
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
