// Data model and content for CA Divya Gupta Portfolio

export const CA_PROFILE = {
  name: "CA Divya Gupta",
  title: "Fellow Chartered Accountant & Financial Strategist",
  qualifications: "FCA, DISA (ICAI), FAFD, B.Com (Hons.)",
  icaiNumber: "M.No. 542910",
  firmName: "Divya Gupta & Associates, Chartered Accountants",
  firmRegNo: "FRN: 028491N",
  experienceYears: 8,
  image: "/ca_divya.jpg",
  email: "contact@cadivyagupta.in",
  phone: "+91 98712 34567",
  whatsapp: "+919871234567",
  location: "Barakhamba Road, Connaught Place, New Delhi & Bandra Kurla Complex (BKC), Mumbai",
  bio: "Fellow Chartered Accountant (FCA) with 8+ years of extensive experience delivering strategic tax planning, high-stakes statutory audit assurance, and fractional CFO leadership for funded startups, manufacturing enterprises, and high-net-worth families.",
  stats: [
    { label: "Assets & Turnover Audited", value: "₹650+", unit: "Cr", description: "Across FMCG, Tech & Healthcare" },
    { label: "Corporate & HNI Clients", value: "480+", unit: "", description: "Retained advisory relationships" },
    { label: "Tax & Penalties Saved", value: "₹24.8", unit: "Cr+", description: "Through strategic appeals & planning" },
    { label: "On-Time Compliance", value: "99.8", unit: "%", description: "Zero delay track record" }
  ]
};

export const SERVICES_DATA = [
  {
    id: "taxation",
    category: "Taxation",
    title: "Direct & International Taxation",
    tagline: "Proactive structuring to minimize legal exposure & maximize post-tax yields",
    icon: "ReceiptIndianRupee",
    description: "Holistic income tax planning for corporate entities, LLP/firms, and high net-worth individuals. We handle corporate tax filings, transfer pricing documentation, withholding tax certifications (15CA/CB), and aggressive defense in departmental scrutiny & CIT(A) appeals.",
    deliverables: [
      "Corporate Income Tax & MAT Optimization",
      "Scrutiny Assessments, Faceless Appeals & Dispute Resolution",
      "Transfer Pricing Reports (Form 3CEB) & Cross-border remittance",
      "HNI & Family Office Global Wealth Tax Structuring"
    ],
    popular: true
  },
  {
    id: "gst",
    category: "Taxation",
    title: "GST Advisory & ITC Optimization",
    tagline: "End-to-end indirect tax compliance with zero input loss",
    icon: "BadgePercent",
    description: "From seamless monthly return filings (GSTR-1, 3B, 9/9C) to advanced Input Tax Credit reconciliation against GSTR-2B. We represent clients before GST Appellate Authorities and resolve departmental summons, DRC-01 notices, and refund delays.",
    deliverables: [
      "Automated GSTR-2B vs 2A Reconciliation & ITC Maximization",
      "Export of Services (LUT & Refund processing)",
      "Departmental Audit Defense & Show Cause Notice (SCN) replies",
      "GST Health Check & Historical Risk Audit"
    ],
    popular: false
  },
  {
    id: "audit",
    category: "Audit & Assurance",
    title: "Statutory, Tax & Forensic Audit",
    tagline: "Rigorous assurance establishing unwavering credibility with lenders & investors",
    icon: "ShieldCheck",
    description: "Comprehensive statutory audits adhering strictly to Standards on Auditing (SAs) issued by ICAI and Companies Act, 2013. We perform specialized Tax Audits u/s 44AB, Internal Financial Controls (IFC) testing, and Forensic Investigation to detect fraudulent leakages.",
    deliverables: [
      "Statutory Audit Reports for Private & Public Limited Companies",
      "Tax Audit under Section 44AB of the Income Tax Act",
      "Internal Audit & SOP / Internal Financial Control design",
      "Forensic Accounting & Fraud Detection (FAFD certified)"
    ],
    popular: true
  },
  {
    id: "vcfo",
    category: "Virtual CFO",
    title: "Fractional CFO & Financial Advisory",
    tagline: "Executive-level financial leadership for scaling startups & growth companies",
    icon: "TrendingUp",
    description: "Get senior financial strategy without the overhead of an in-house full-time CFO. We construct 3-way financial models, manage monthly board MIS, streamline working capital cycles, and support founders in fundraising investor due-diligence.",
    deliverables: [
      "Rolling 13-Week Cash Flow & Runway Projections",
      "Budget vs Actual Variance Analysis & Unit Economics",
      "Cap Table & Waterfall Analysis for VC / Angel rounds",
      "Bank Consortium & Working Capital limit renewal"
    ],
    popular: true
  },
  {
    id: "corporate",
    category: "Corporate & Startups",
    title: "Startup Incubation & MCA Compliance",
    tagline: "From day-zero incorporation to DPIIT 80-IAC tax exemption certificates",
    icon: "Building2",
    description: "Complete hand-holding for modern entrepreneurs. Company incorporation (Pvt Ltd, LLP, Section 8), DPIIT Startup India registration, Section 80-IAC 3-year tax exemption application, ESOP scheme formulation, and annual ROC filings (AOC-4, MGT-7).",
    deliverables: [
      "Incorporation within 5 working days with PAN/TAN/GST",
      "DPIIT Recognition & Section 80-IAC Tax Exemption Filing",
      "ESOP Plan Structuring & Valuation Certification (Rule 11UA)",
      "Secretarial Compliance, Share Transfers & Director KYC"
    ],
    popular: false
  },
  {
    id: "valuation",
    category: "Corporate & Startups",
    title: "Business Valuation & M&A Due Diligence",
    tagline: "Independent, defensible valuation reports for fundraising & restructuring",
    icon: "BarChart3",
    description: "Certified business valuations under Discounted Cash Flow (DCF), Net Asset Value (NAV), and Market Multiples methods for FEMA/RBI compliance, Income Tax Rule 11UA, and investor term sheets.",
    deliverables: [
      "DCF Valuation Reports for Angel/VC equity issuance",
      "Financial Due Diligence for Acquisitions & Joint Ventures",
      "FEMA / Form FC-GPR filing for Foreign Inward Remittance",
      "Corporate Restructuring (Merger / De-merger tax impact)"
    ],
    popular: false
  }
];

export const TAX_CALENDAR = [
  {
    date: "15 June",
    event: "1st Advance Tax Installment (15%)",
    category: "Income Tax",
    priority: "High",
    description: "Mandatory for all corporate and non-corporate tax assessees whose net tax liability exceeds ₹10,000."
  },
  {
    date: "31 July",
    event: "ITR Filing for Non-Audit Individuals & HUF",
    category: "Income Tax",
    priority: "Crucial",
    description: "Annual ITR-1, 2, 4 filing deadline for salaried individuals, professionals and non-audit business entities."
  },
  {
    date: "15 September",
    event: "2nd Advance Tax Installment (45%)",
    category: "Income Tax",
    priority: "High",
    description: "Cumulative payment of 45% of total estimated income tax liability for current assessment year."
  },
  {
    date: "30 September",
    event: "Tax Audit Report Submission (Form 3CA/3CD)",
    category: "Audit",
    priority: "Crucial",
    description: "Filing deadline for assessees liable to Tax Audit u/s 44AB of the Income Tax Act."
  },
  {
    date: "31 October",
    event: "Corporate & Audited Assessee ITR Filing",
    category: "Income Tax",
    priority: "Crucial",
    description: "Filing of return of income for corporate assesses and entities covered under statutory/tax audit."
  },
  {
    date: "20th of Every Month",
    event: "GSTR-3B Monthly Return & Tax Payment",
    category: "GST",
    priority: "Regular",
    description: "Summary return for outward supplies, input tax credit availed, and net cash GST liability settlement."
  },
  {
    date: "31 December",
    event: "Annual GST Return (GSTR-9 & 9C)",
    category: "GST",
    priority: "High",
    description: "Filing of annual GST return and self-certified reconciliation statement for turnover exceeding threshold."
  }
];

export const CREDENTIALS_DATA = [
  {
    year: "2016",
    title: "Chartered Accountant (ICAI)",
    subtitle: "Qualified with All India Rank merit in taxation & advanced accounting",
    type: "ICAI"
  },
  {
    year: "2018",
    title: "DISA - Information System Audit",
    subtitle: "ICAI post-qualification diploma for IT risk evaluation & ERP audits",
    type: "ICAI Diploma"
  },
  {
    year: "2020",
    title: "FAFD - Forensic Accounting & Fraud Detection",
    subtitle: "Specialized certification for corporate investigative & vigilance audits",
    type: "ICAI Specialization"
  },
  {
    year: "2021",
    title: "Conferred FCA (Fellow Member)",
    subtitle: "Recognized as Senior Fellow of the Institute of Chartered Accountants of India",
    type: "Fellowship"
  },
  {
    year: "2023 - Present",
    title: "Advisor to 40+ Tech & D2C Startups",
    subtitle: "Empowering next-gen founders on capital structuring, ESOPs and 80-IAC",
    type: "Industry Recognition"
  }
];

export const CASE_STUDIES = [
  {
    clientType: "FinTech Platform (Series A)",
    title: "Startup India 80-IAC Tax Exemption & ₹42L Capital Gain Shield",
    challenge: "The startup secured institutional funding and faced angel tax inquiries along with looming tax burdens on rapid operating profits.",
    solution: "Structured intellectual property documentation, secured formal DPIIT Inter-Ministerial Board approval for Section 80-IAC 3-year 100% tax holiday, and sanitized share premium valuations under Rule 11UA.",
    result: "₹42 Lakhs direct tax saved; secured zero-disallowance assessment order from the Income Tax department.",
    metric: "₹42L Tax Saved"
  },
  {
    clientType: "Automotive Parts Manufacturer",
    title: "GSTR-2B Input Tax Credit Recovery of ₹1.82 Crore",
    challenge: "Over 8 months of supplier non-compliance caused GST input credits to get blocked, crippling operating cash flows and triggering DRC-01A summons.",
    solution: "Initiated automated vendor triangulation, matched 3,400+ invoices against e-Way bills and GSTR-1 filings, and represented before the Deputy Commissioner.",
    result: "100% blocked ITC unlatched and recovered ₹1.82 Cr with zero penalty levied by the department.",
    metric: "₹1.82 Cr Unlocked"
  },
  {
    clientType: "Multi-Speciality Healthcare Group",
    title: "Internal Controls Framework & Fraud Mitigation",
    challenge: "Dispersed 12 diagnostic clinics suffered continuous cash collection variances and billing discrepancies.",
    solution: "Conducted forensic audit, instituted centralized POS ERP integrations, and established dual-authorization internal financial controls (IFC).",
    result: "Cash leakages reduced by 92% in the first quarter; enabled clean statutory audit certification.",
    metric: "92% Leakage Cut"
  }
];

export const TESTIMONIALS = [
  {
    name: "Rohit Agarwal",
    designation: "Founder & CEO, ZenoPay Technologies",
    feedback: "CA Divya Gupta transformed how our board views finance. From day-1 he handled our Section 80-IAC tax exemption flawlessly and guided our Series A due diligence without a hitch. He operates like a true strategic partner, not just a compliance consultant.",
    rating: 5,
    location: "Bengaluru"
  },
  {
    name: "Meenakshi Sundaram",
    designation: "Managing Director, Apex Precision Castings Ltd",
    feedback: "For 5 years, Divya's firm has been handling our corporate tax assessments and complex multi-state GST reconciliations. Her grasp of the law and proactive planning saved our manufacturing unit crores in penalties.",
    rating: 5,
    location: "Pune / Mumbai"
  },
  {
    name: "Ananya Singhal",
    designation: "Director, Solace Lifestyle Private Ltd",
    feedback: "Her Virtual CFO services brought absolute clarity to our inventory cash cycles and investor decks. The precision and integrity she brings to financial reporting gives our board immense confidence.",
    rating: 5,
    location: "New Delhi"
  }
];

export const INSIGHTS = [
  {
    id: 1,
    title: "Finance Act 2025: Key Corporate & Capital Gains Tax Shifts Explained",
    category: "Direct Tax",
    readTime: "5 min read",
    date: "March 2025",
    summary: "A practical breakdown of the rationalized capital gains holding periods, revised surcharge thresholds, and corporate tax implications for MSMEs."
  },
  {
    id: 2,
    title: "How Indian Startups Can Successfully Claim the Section 80-IAC 3-Year Tax Holiday",
    category: "Startup Law",
    readTime: "7 min read",
    date: "February 2025",
    summary: "Step-by-step blueprint on how to present your product innovation to the Inter-Ministerial Board (IMB) and avoid common rejection pitfalls."
  },
  {
    id: 3,
    title: "Mastering GSTR-2B vs Books Reconciliation in 2025",
    category: "GST Compliance",
    readTime: "4 min read",
    date: "January 2025",
    summary: "Actionable strategies for finance controllers to curb vendor default risk, handle timing differences, and shield ITC under Rule 37A."
  }
];

export const FAQS = [
  {
    question: "Should our company or employees opt for the New or Old Tax Regime?",
    answer: "Under the latest tax regulations, the New Tax Regime is the default regime with rationalized tax slabs and a higher basic exemption limit. However, for individuals with heavy home loan interest (Sec 24b), 80C, 80D medical insurance, and HRA exemptions, the Old Regime may still yield greater tax savings. We run simulated comparisons across both regimes to compute the optimal post-tax choice."
  },
  {
    question: "When is a Tax Audit mandatory under Section 44AB?",
    answer: "For businesses, tax audit is generally mandatory if total sales/turnover exceeds ₹1 Crore (or ₹10 Crores if cash receipts & cash payments do not exceed 5% of total transactions). For professionals, the limit is gross receipts exceeding ₹50 Lakhs (or ₹75 Lakhs under presumptive taxation conditions). Failure to audit attracts penalties up to ₹1.5 Lakhs under Section 271B."
  },
  {
    question: "What is included in your Virtual CFO service package?",
    answer: "Our Virtual CFO offering covers 13-week cash flow forecasting, monthly budget vs. actual variance reporting, investor board pack preparations, working capital management, KPI dashboards, and direct representation before bankers and venture capital auditors."
  },
  {
    question: "How do you handle faceless Income Tax & GST department notices?",
    answer: "All notices under Section 148, 143(1)(a), 142(1), or GST DRC-01 are scrutinized against statutory provisions and case law precedents. We draft point-by-point digital submissions, prepare reconciled annexures, and appear for video conferences before the Faceless Assessment Officers and Appellate Tribunals."
  }
];
