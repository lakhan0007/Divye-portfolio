import React, { useState } from 'react';
import { 
  Calculator, 
  Receipt, 
  Calendar as CalendarIcon, 
  TrendingUp, 
  CheckCircle, 
  AlertCircle, 
  ArrowRight,
  Sparkles,
  Percent,
  HelpCircle
} from 'lucide-react';
import { TAX_CALENDAR } from '../data/caData';

export default function TaxTools({ onOpenConsultation }) {
  const [activeTab, setActiveTab] = useState('tax-calculator');

  // Income Tax Calculator State
  const [grossIncome, setGrossIncome] = useState(1500000); // 15 Lakh default
  const [deduction80C, setDeduction80C] = useState(150000); // Max 1.5L
  const [deduction80D, setDeduction80D] = useState(25000);  // Health
  const [hraDeduction, setHraDeduction] = useState(120000); // HRA
  const [nps80CCD, setNps80CCD] = useState(50000);          // Additional NPS

  // GST Estimator State
  const [gstAmount, setGstAmount] = useState(100000);
  const [gstRate, setGstRate] = useState(18);
  const [isInterState, setIsInterState] = useState(false);
  const [isInclusive, setIsInclusive] = useState(false);

  // Calendar filter state
  const [calendarFilter, setCalendarFilter] = useState('All');

  // Calculate New Regime Tax (FY 2024-25 / FY 2025-26 Slabs)
  // Standard Deduction in New Regime = 75,000
  // Slabs:
  // 0 - 3L: Nil
  // 3L - 7L: 5%
  // 7L - 10L: 10%
  // 10L - 12L: 15%
  // 12L - 15L: 20%
  // Above 15L: 30%
  // Section 87A rebate up to taxable income 7L (effectively zero tax up to 7.75L with std deduction)
  const calculateNewRegimeTax = (income) => {
    const stdDeduction = 75000;
    const taxableIncome = Math.max(0, income - stdDeduction);
    
    if (taxableIncome <= 700000) return 0; // 87A rebate makes it 0

    let tax = 0;
    if (taxableIncome > 1500000) {
      tax += (taxableIncome - 1500000) * 0.30;
      tax += 300000 * 0.20; // 12-15L
      tax += 200000 * 0.15; // 10-12L
      tax += 300000 * 0.10; // 7-10L
      tax += 400000 * 0.05; // 3-7L
    } else if (taxableIncome > 1200000) {
      tax += (taxableIncome - 1200000) * 0.20;
      tax += 200000 * 0.15;
      tax += 300000 * 0.10;
      tax += 400000 * 0.05;
    } else if (taxableIncome > 1000000) {
      tax += (taxableIncome - 1000000) * 0.15;
      tax += 300000 * 0.10;
      tax += 400000 * 0.05;
    } else if (taxableIncome > 700000) {
      tax += (taxableIncome - 700000) * 0.10;
      tax += 400000 * 0.05;
    } else if (taxableIncome > 300000) {
      tax += (taxableIncome - 300000) * 0.05;
    }

    const cess = tax * 0.04;
    return Math.round(tax + cess);
  };

  // Calculate Old Regime Tax
  // Standard deduction = 50,000
  // Slabs:
  // 0 - 2.5L: Nil
  // 2.5L - 5L: 5%
  // 5L - 10L: 20%
  // Above 10L: 30%
  // 87A rebate if taxable income <= 5L
  const calculateOldRegimeTax = (income, d80C, d80D, hra, nps) => {
    const stdDeduction = 50000;
    const totalDeductions = stdDeduction + Math.min(150000, d80C) + d80D + hra + Math.min(50000, nps);
    const taxableIncome = Math.max(0, income - totalDeductions);

    if (taxableIncome <= 500000) return 0;

    let tax = 0;
    if (taxableIncome > 1000000) {
      tax += (taxableIncome - 1000000) * 0.30;
      tax += 500000 * 0.20; // 5L-10L
      tax += 250000 * 0.05; // 2.5L-5L
    } else if (taxableIncome > 500000) {
      tax += (taxableIncome - 500000) * 0.20;
      tax += 250000 * 0.05;
    } else if (taxableIncome > 250000) {
      tax += (taxableIncome - 250000) * 0.05;
    }

    const cess = tax * 0.04;
    return Math.round(tax + cess);
  };

  const newTax = calculateNewRegimeTax(grossIncome);
  const oldTax = calculateOldRegimeTax(grossIncome, deduction80C, deduction80D, hraDeduction, nps80CCD);
  const taxDifference = Math.abs(newTax - oldTax);
  const isNewRegimeBetter = newTax <= oldTax;

  // GST Calculation
  const calculateGST = () => {
    const rate = parseFloat(gstRate);
    let base = 0;
    let gstVal = 0;
    let total = 0;

    if (isInclusive) {
      total = gstAmount;
      base = total / (1 + rate / 100);
      gstVal = total - base;
    } else {
      base = gstAmount;
      gstVal = base * (rate / 100);
      total = base + gstVal;
    }

    return {
      baseValue: Math.round(base),
      totalGst: Math.round(gstVal),
      cgst: Math.round(gstVal / 2),
      sgst: Math.round(gstVal / 2),
      igst: Math.round(gstVal),
      finalAmount: Math.round(total)
    };
  };

  const gstCalculated = calculateGST();

  // Filter calendar
  const filteredCalendar = calendarFilter === 'All' 
    ? TAX_CALENDAR 
    : TAX_CALENDAR.filter(item => item.category === calendarFilter);

  return (
    <section 
      id="tax-tools"
      style={{
        padding: '90px 0',
        position: 'relative'
      }}
    >
      <div className="container">
        {/* Section Header */}
        <div className="section-header">
          <div className="section-tag">
            <Sparkles size={14} />
            <span>CA Diagnostic Suite</span>
          </div>
          <h2 className="section-title">
            Interactive Financial <span className="gradient-text">& Tax Calculators</span>
          </h2>
          <p className="section-subtitle">
            Simulate your tax exposure, compare Old vs New regimes, and track statutory deadlines with precision.
          </p>
        </div>

        {/* Glass Switcher Tabs */}
        <div 
          style={{
            display: 'flex',
            justifyContent: 'center',
            marginBottom: '40px'
          }}
        >
          <div 
            className="glass-card"
            style={{
              padding: '6px',
              display: 'inline-flex',
              gap: '6px',
              borderRadius: '16px'
            }}
          >
            <button
              onClick={() => setActiveTab('tax-calculator')}
              style={{
                padding: '10px 22px',
                borderRadius: '12px',
                border: 'none',
                background: activeTab === 'tax-calculator' ? 'var(--accent-blue)' : 'transparent',
                color: activeTab === 'tax-calculator' ? '#ffffff' : 'var(--text-secondary)',
                fontWeight: 600,
                fontSize: '0.9rem',
                cursor: 'pointer',
                display: 'inline-flex',
                alignItems: 'center',
                gap: '8px',
                transition: 'all 0.25s ease'
              }}
            >
              <Calculator size={16} />
              <span>Income Tax (New vs Old)</span>
            </button>

            <button
              onClick={() => setActiveTab('gst-calculator')}
              style={{
                padding: '10px 22px',
                borderRadius: '12px',
                border: 'none',
                background: activeTab === 'gst-calculator' ? 'var(--accent-blue)' : 'transparent',
                color: activeTab === 'gst-calculator' ? '#ffffff' : 'var(--text-secondary)',
                fontWeight: 600,
                fontSize: '0.9rem',
                cursor: 'pointer',
                display: 'inline-flex',
                alignItems: 'center',
                gap: '8px',
                transition: 'all 0.25s ease'
              }}
            >
              <Receipt size={16} />
              <span>GST & Invoice Estimator</span>
            </button>

            <button
              onClick={() => setActiveTab('compliance-calendar')}
              style={{
                padding: '10px 22px',
                borderRadius: '12px',
                border: 'none',
                background: activeTab === 'compliance-calendar' ? 'var(--accent-blue)' : 'transparent',
                color: activeTab === 'compliance-calendar' ? '#ffffff' : 'var(--text-secondary)',
                fontWeight: 600,
                fontSize: '0.9rem',
                cursor: 'pointer',
                display: 'inline-flex',
                alignItems: 'center',
                gap: '8px',
                transition: 'all 0.25s ease'
              }}
            >
              <CalendarIcon size={16} />
              <span>Statutory Tax Calendar</span>
            </button>
          </div>
        </div>

        {/* TAB 1: Income Tax Calculator */}
        {activeTab === 'tax-calculator' && (
          <div 
            className="glass-card animate-fade-in"
            style={{
              padding: '36px',
              maxWidth: '1050px',
              margin: '0 auto'
            }}
          >
            <div 
              style={{
                display: 'grid',
                gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))',
                gap: '36px'
              }}
            >
              {/* Inputs Column */}
              <div>
                <h3 style={{ fontSize: '1.25rem', marginBottom: '20px', color: 'var(--text-primary)', display: 'flex', alignItems: 'center', gap: '8px' }}>
                  <span>Income & Exemption Inputs</span>
                  <span style={{ fontSize: '0.75rem', fontWeight: 500, color: 'var(--accent-cyan)' }}>FY 2025-26</span>
                </h3>

                {/* Gross Income Input */}
                <div style={{ marginBottom: '20px' }}>
                  <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '8px' }}>
                    <label style={{ fontSize: '0.9rem', fontWeight: 600, color: 'var(--text-secondary)' }}>
                      Annual Gross Total Income
                    </label>
                    <span style={{ fontWeight: 700, color: 'var(--accent-cyan)' }}>
                      ₹{Number(grossIncome).toLocaleString('en-IN')}
                    </span>
                  </div>
                  <input 
                    type="range"
                    min="300000"
                    max="5000000"
                    step="50000"
                    value={grossIncome}
                    onChange={(e) => setGrossIncome(Number(e.target.value))}
                    style={{ width: '100%', accentColor: 'var(--accent-cyan)', cursor: 'pointer' }}
                  />
                  <div style={{ display: 'flex', justifyContent: 'space-between', fontSize: '0.75rem', color: 'var(--text-muted)', marginTop: '4px' }}>
                    <span>₹3 Lakhs</span>
                    <span>₹25 Lakhs</span>
                    <span>₹50 Lakhs</span>
                  </div>
                </div>

                {/* Deductions inputs */}
                <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '14px', marginBottom: '16px' }}>
                  <div>
                    <label style={{ display: 'block', fontSize: '0.8rem', fontWeight: 600, color: 'var(--text-secondary)', marginBottom: '6px' }}>
                      Section 80C (PPF/ELSS/LIC)
                    </label>
                    <input 
                      type="number" 
                      className="glass-input"
                      value={deduction80C}
                      onChange={(e) => setDeduction80C(Number(e.target.value))}
                      placeholder="Max 1,50,000"
                    />
                  </div>

                  <div>
                    <label style={{ display: 'block', fontSize: '0.8rem', fontWeight: 600, color: 'var(--text-secondary)', marginBottom: '6px' }}>
                      Section 80D (Health Ins.)
                    </label>
                    <input 
                      type="number" 
                      className="glass-input"
                      value={deduction80D}
                      onChange={(e) => setDeduction80D(Number(e.target.value))}
                      placeholder="e.g. 25,000"
                    />
                  </div>
                </div>

                <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '14px', marginBottom: '24px' }}>
                  <div>
                    <label style={{ display: 'block', fontSize: '0.8rem', fontWeight: 600, color: 'var(--text-secondary)', marginBottom: '6px' }}>
                      HRA Exemption Claim
                    </label>
                    <input 
                      type="number" 
                      className="glass-input"
                      value={hraDeduction}
                      onChange={(e) => setHraDeduction(Number(e.target.value))}
                      placeholder="e.g. 1,20,000"
                    />
                  </div>

                  <div>
                    <label style={{ display: 'block', fontSize: '0.8rem', fontWeight: 600, color: 'var(--text-secondary)', marginBottom: '6px' }}>
                      80CCD(1B) NPS (Extra 50k)
                    </label>
                    <input 
                      type="number" 
                      className="glass-input"
                      value={nps80CCD}
                      onChange={(e) => setNps80CCD(Number(e.target.value))}
                      placeholder="Max 50,000"
                    />
                  </div>
                </div>

                <div style={{ fontSize: '0.78rem', color: 'var(--text-muted)', lineHeight: 1.5, background: 'var(--glass-bg-subtle)', padding: '10px 14px', borderRadius: '10px', border: '1px solid var(--glass-border)' }}>
                  💡 <strong>CA Note:</strong> New Tax Regime automatically grants a flat Standard Deduction of ₹75,000 and 0 tax up to ₹7,75,000 without requiring investments. Old Regime allows 80C, 80D, HRA & Housing Loan interest.
                </div>
              </div>

              {/* Comparative Results Column */}
              <div style={{ display: 'flex', flexDirection: 'column', justifyContent: 'space-between' }}>
                <div>
                  <h3 style={{ fontSize: '1.25rem', marginBottom: '20px', color: 'var(--text-primary)' }}>
                    Tax Liability Comparison
                  </h3>

                  <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '16px', marginBottom: '20px' }}>
                    {/* New Regime Card */}
                    <div 
                      className="glass-card"
                      style={{
                        padding: '20px',
                        borderColor: isNewRegimeBetter ? 'var(--accent-emerald)' : 'var(--glass-border)',
                        background: isNewRegimeBetter ? 'rgba(16, 185, 129, 0.08)' : 'var(--glass-bg-subtle)',
                        textAlign: 'center',
                        position: 'relative'
                      }}
                    >
                      {isNewRegimeBetter && (
                        <span 
                          style={{
                            position: 'absolute',
                            top: '-10px',
                            right: '12px',
                            background: 'var(--accent-emerald)',
                            color: '#ffffff',
                            fontSize: '0.68rem',
                            fontWeight: 800,
                            padding: '2px 8px',
                            borderRadius: '10px'
                          }}
                        >
                          RECOMMENDED
                        </span>
                      )}
                      <div style={{ fontSize: '0.85rem', fontWeight: 700, color: 'var(--text-secondary)', marginBottom: '8px' }}>
                        NEW REGIME
                      </div>
                      <div style={{ fontSize: '1.75rem', fontWeight: 800, color: isNewRegimeBetter ? 'var(--accent-emerald)' : 'var(--text-primary)', marginBottom: '4px' }}>
                        ₹{newTax.toLocaleString('en-IN')}
                      </div>
                      <div style={{ fontSize: '0.72rem', color: 'var(--text-muted)' }}>
                        Includes 4% Health & Education Cess
                      </div>
                    </div>

                    {/* Old Regime Card */}
                    <div 
                      className="glass-card"
                      style={{
                        padding: '20px',
                        borderColor: !isNewRegimeBetter ? 'var(--accent-emerald)' : 'var(--glass-border)',
                        background: !isNewRegimeBetter ? 'rgba(16, 185, 129, 0.08)' : 'var(--glass-bg-subtle)',
                        textAlign: 'center',
                        position: 'relative'
                      }}
                    >
                      {!isNewRegimeBetter && (
                        <span 
                          style={{
                            position: 'absolute',
                            top: '-10px',
                            right: '12px',
                            background: 'var(--accent-emerald)',
                            color: '#ffffff',
                            fontSize: '0.68rem',
                            fontWeight: 800,
                            padding: '2px 8px',
                            borderRadius: '10px'
                          }}
                        >
                          RECOMMENDED
                        </span>
                      )}
                      <div style={{ fontSize: '0.85rem', fontWeight: 700, color: 'var(--text-secondary)', marginBottom: '8px' }}>
                        OLD REGIME
                      </div>
                      <div style={{ fontSize: '1.75rem', fontWeight: 800, color: !isNewRegimeBetter ? 'var(--accent-emerald)' : 'var(--text-primary)', marginBottom: '4px' }}>
                        ₹{oldTax.toLocaleString('en-IN')}
                      </div>
                      <div style={{ fontSize: '0.72rem', color: 'var(--text-muted)' }}>
                        Includes Deductions & 4% Cess
                      </div>
                    </div>
                  </div>

                  {/* Recommendation Banner */}
                  <div 
                    className="glass-card"
                    style={{
                      padding: '16px 20px',
                      borderRadius: '14px',
                      background: 'linear-gradient(135deg, rgba(2, 132, 199, 0.15) 0%, rgba(16, 185, 129, 0.15) 100%)',
                      borderColor: 'rgba(56, 189, 248, 0.4)',
                      display: 'flex',
                      alignItems: 'center',
                      gap: '14px',
                      marginBottom: '24px'
                    }}
                  >
                    <CheckCircle size={24} color="var(--accent-emerald)" style={{ flexShrink: 0 }} />
                    <div>
                      <div style={{ fontWeight: 800, fontSize: '0.98rem', color: 'var(--text-primary)' }}>
                        {isNewRegimeBetter 
                          ? `New Regime saves ₹${taxDifference.toLocaleString('en-IN')} in tax!`
                          : `Old Regime saves ₹${taxDifference.toLocaleString('en-IN')} through your deductions!`}
                      </div>
                      <div style={{ fontSize: '0.8rem', color: 'var(--text-secondary)', marginTop: '2px' }}>
                        Based on current Finance Act tax slabs for Assessment Year 2025-26.
                      </div>
                    </div>
                  </div>
                </div>

                {/* Call to action */}
                <button
                  onClick={() => onOpenConsultation('Income Tax Planning')}
                  className="btn-primary"
                  style={{ width: '100%', justifyContent: 'center' }}
                >
                  <span>Book Professional Tax Optimization with CA Divya</span>
                  <ArrowRight size={16} />
                </button>
              </div>
            </div>
          </div>
        )}

        {/* TAB 2: GST & Invoice Estimator */}
        {activeTab === 'gst-calculator' && (
          <div 
            className="glass-card animate-fade-in"
            style={{
              padding: '36px',
              maxWidth: '900px',
              margin: '0 auto'
            }}
          >
            <div 
              style={{
                display: 'grid',
                gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))',
                gap: '36px',
                alignItems: 'center'
              }}
            >
              {/* Inputs */}
              <div>
                <h3 style={{ fontSize: '1.25rem', marginBottom: '20px', color: 'var(--text-primary)' }}>
                  Invoice & GST Parameters
                </h3>

                <div style={{ marginBottom: '20px' }}>
                  <label style={{ display: 'block', fontSize: '0.88rem', fontWeight: 600, color: 'var(--text-secondary)', marginBottom: '8px' }}>
                    {isInclusive ? 'Total Invoice Amount (GST Inclusive)' : 'Taxable Supply Amount (Base Value)'}
                  </label>
                  <input 
                    type="number"
                    className="glass-input"
                    value={gstAmount}
                    onChange={(e) => setGstAmount(Math.max(0, Number(e.target.value)))}
                    placeholder="Enter amount in ₹"
                  />
                </div>

                {/* GST Rate Selector */}
                <div style={{ marginBottom: '20px' }}>
                  <label style={{ display: 'block', fontSize: '0.88rem', fontWeight: 600, color: 'var(--text-secondary)', marginBottom: '8px' }}>
                    Applicable GST Slab
                  </label>
                  <div style={{ display: 'grid', gridTemplateColumns: 'repeat(4, 1fr)', gap: '8px' }}>
                    {[5, 12, 18, 28].map(rate => (
                      <button
                        key={rate}
                        type="button"
                        onClick={() => setGstRate(rate)}
                        style={{
                          padding: '10px 0',
                          borderRadius: '10px',
                          border: gstRate === rate ? '1px solid var(--accent-cyan)' : '1px solid var(--glass-border)',
                          background: gstRate === rate ? 'rgba(56, 189, 248, 0.2)' : 'var(--glass-bg-subtle)',
                          color: gstRate === rate ? 'var(--accent-cyan)' : 'var(--text-secondary)',
                          fontWeight: 700,
                          cursor: 'pointer',
                          transition: 'all 0.2s ease'
                        }}
                      >
                        {rate}%
                      </button>
                    ))}
                  </div>
                </div>

                {/* Toggles */}
                <div style={{ display: 'flex', flexDirection: 'column', gap: '12px' }}>
                  <label style={{ display: 'flex', alignItems: 'center', gap: '10px', cursor: 'pointer', fontSize: '0.88rem', color: 'var(--text-secondary)' }}>
                    <input 
                      type="checkbox"
                      checked={isInterState}
                      onChange={(e) => setIsInterState(e.target.checked)}
                      style={{ width: '18px', height: '18px', accentColor: 'var(--accent-cyan)' }}
                    />
                    <span>Inter-State Supply (Levy IGST instead of CGST+SGST)</span>
                  </label>

                  <label style={{ display: 'flex', alignItems: 'center', gap: '10px', cursor: 'pointer', fontSize: '0.88rem', color: 'var(--text-secondary)' }}>
                    <input 
                      type="checkbox"
                      checked={isInclusive}
                      onChange={(e) => setIsInclusive(e.target.checked)}
                      style={{ width: '18px', height: '18px', accentColor: 'var(--accent-cyan)' }}
                    />
                    <span>Reverse Calculate (Amount entered is already GST Inclusive)</span>
                  </label>
                </div>
              </div>

              {/* Glass Breakdown Receipt */}
              <div 
                className="glass-card"
                style={{
                  padding: '24px',
                  borderRadius: '18px',
                  background: 'rgba(15, 23, 42, 0.75)',
                  border: '1px solid var(--glass-border-hover)'
                }}
              >
                <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', borderBottom: '1px solid var(--glass-border)', paddingBottom: '14px', marginBottom: '16px' }}>
                  <span style={{ fontWeight: 800, fontSize: '1rem', color: 'var(--text-primary)' }}>GST Tax Invoice Summary</span>
                  <span style={{ fontSize: '0.75rem', color: 'var(--accent-cyan)', fontWeight: 700 }}>HSN/SAC Compliant</span>
                </div>

                <div style={{ display: 'flex', flexDirection: 'column', gap: '12px', fontSize: '0.9rem' }}>
                  <div style={{ display: 'flex', justifyContent: 'space-between', color: 'var(--text-secondary)' }}>
                    <span>Taxable Base Value:</span>
                    <strong style={{ color: 'var(--text-primary)' }}>₹{gstCalculated.baseValue.toLocaleString('en-IN')}</strong>
                  </div>

                  {!isInterState ? (
                    <>
                      <div style={{ display: 'flex', justifyContent: 'space-between', color: 'var(--text-secondary)' }}>
                        <span>CGST ({gstRate / 2}%):</span>
                        <span style={{ color: 'var(--accent-cyan)' }}>₹{gstCalculated.cgst.toLocaleString('en-IN')}</span>
                      </div>
                      <div style={{ display: 'flex', justifyContent: 'space-between', color: 'var(--text-secondary)' }}>
                        <span>SGST / UTGST ({gstRate / 2}%):</span>
                        <span style={{ color: 'var(--accent-cyan)' }}>₹{gstCalculated.sgst.toLocaleString('en-IN')}</span>
                      </div>
                    </>
                  ) : (
                    <div style={{ display: 'flex', justifyContent: 'space-between', color: 'var(--text-secondary)' }}>
                      <span>Integrated GST ({gstRate}%):</span>
                      <span style={{ color: 'var(--accent-cyan)' }}>₹{gstCalculated.igst.toLocaleString('en-IN')}</span>
                    </div>
                  )}

                  <div style={{ display: 'flex', justifyContent: 'space-between', color: 'var(--text-secondary)', borderTop: '1px dashed var(--glass-border)', paddingTop: '10px' }}>
                    <span>Total GST Amount:</span>
                    <strong style={{ color: 'var(--accent-emerald)' }}>₹{gstCalculated.totalGst.toLocaleString('en-IN')}</strong>
                  </div>

                  <div 
                    style={{ 
                      display: 'flex', 
                      justifyContent: 'space-between', 
                      borderTop: '2px solid var(--glass-border)', 
                      paddingTop: '14px', 
                      marginTop: '6px',
                      fontSize: '1.2rem',
                      fontWeight: 800,
                      color: 'var(--text-primary)'
                    }}
                  >
                    <span>Total Invoice Value:</span>
                    <span style={{ color: 'var(--accent-cyan)' }}>₹{gstCalculated.finalAmount.toLocaleString('en-IN')}</span>
                  </div>
                </div>

                <button
                  onClick={() => onOpenConsultation('GST Audit & ITC Optimization')}
                  className="btn-glass"
                  style={{ width: '100%', justifyContent: 'center', marginTop: '20px' }}
                >
                  <span>Resolve Blocked ITC with Divya</span>
                  <ArrowRight size={15} />
                </button>
              </div>
            </div>
          </div>
        )}

        {/* TAB 3: Compliance Calendar */}
        {activeTab === 'compliance-calendar' && (
          <div 
            className="animate-fade-in"
            style={{ maxWidth: '980px', margin: '0 auto' }}
          >
            {/* Filter buttons */}
            <div style={{ display: 'flex', gap: '10px', justifyContent: 'center', marginBottom: '24px' }}>
              {['All', 'Income Tax', 'GST', 'Audit'].map(cat => (
                <button
                  key={cat}
                  onClick={() => setCalendarFilter(cat)}
                  style={{
                    padding: '8px 18px',
                    borderRadius: '20px',
                    border: '1px solid var(--glass-border)',
                    background: calendarFilter === cat ? 'var(--accent-blue)' : 'var(--glass-bg-subtle)',
                    color: calendarFilter === cat ? '#ffffff' : 'var(--text-secondary)',
                    fontSize: '0.85rem',
                    fontWeight: 600,
                    cursor: 'pointer'
                  }}
                >
                  {cat}
                </button>
              ))}
            </div>

            {/* Calendar Grid */}
            <div 
              style={{
                display: 'grid',
                gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))',
                gap: '18px'
              }}
            >
              {filteredCalendar.map((item, idx) => (
                <div 
                  key={idx}
                  className="glass-card glass-card-interactive"
                  style={{ padding: '22px' }}
                >
                  <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: '12px' }}>
                    <span 
                      style={{
                        fontSize: '0.8rem',
                        fontWeight: 800,
                        color: 'var(--accent-cyan)',
                        background: 'rgba(56, 189, 248, 0.15)',
                        padding: '4px 10px',
                        borderRadius: '6px'
                      }}
                    >
                      {item.date}
                    </span>

                    <span 
                      style={{
                        fontSize: '0.7rem',
                        fontWeight: 700,
                        color: item.priority === 'Crucial' ? 'var(--accent-rose)' : 'var(--accent-gold)',
                        background: item.priority === 'Crucial' ? 'rgba(244, 63, 94, 0.15)' : 'rgba(245, 158, 11, 0.15)',
                        padding: '2px 8px',
                        borderRadius: '4px'
                      }}
                    >
                      {item.priority} Priority
                    </span>
                  </div>

                  <h4 style={{ fontSize: '1rem', marginBottom: '8px', color: 'var(--text-primary)' }}>
                    {item.event}
                  </h4>

                  <p style={{ fontSize: '0.82rem', color: 'var(--text-secondary)', lineHeight: 1.5, marginBottom: '14px' }}>
                    {item.description}
                  </p>

                  <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', fontSize: '0.75rem', color: 'var(--text-muted)' }}>
                    <span>Category: {item.category}</span>
                    <span style={{ color: 'var(--accent-emerald)', fontWeight: 600 }}>• Reminders Active</span>
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}
      </div>
    </section>
  );
}
