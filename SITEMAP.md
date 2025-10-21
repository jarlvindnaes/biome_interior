# Circular Alliance - Page Sitemap

## URL Structure

```
https://your-domain.com/
└── circular-alliance/                    [Main Landing Page]
```

---

## Page Flow (Single-Page Layout)

```
┌─────────────────────────────────────────────────┐
│                                                 │
│  1. HERO SECTION                                │
│  ─────────────────────────────────────────────  │
│  • Headline: "Build once. Keep forever."        │
│  • Subhead with Reduction Roadmap context       │
│  • CTA: "Apply to join" → #apply                │
│  • CTA: "Explore catalogue" → #catalogue        │
│  • Trust bar: "600+ firms"                      │
│                                                 │
└─────────────────────────────────────────────────┘
                      ↓
┌─────────────────────────────────────────────────┐
│                                                 │
│  2. WHY NOW                                     │
│  ─────────────────────────────────────────────  │
│  • Context: "The window for excuses is closed"  │
│  • 3 bullets with Reduction Roadmap targets     │
│  • Pull quote                                   │
│  • Link: Reduction Roadmap 2.0 ↗                │
│                                                 │
└─────────────────────────────────────────────────┘
                      ↓
┌─────────────────────────────────────────────────┐
│                                                 │
│  3. WHO IT'S FOR                                │
│  ─────────────────────────────────────────────  │
│  • Target: Change-makers                        │
│  • Audience: Developers, architects, etc.       │
│  • 3 eligibility criteria                       │
│                                                 │
└─────────────────────────────────────────────────┘
                      ↓
┌─────────────────────────────────────────────────┐
│                                                 │
│  4. WHAT YOU GET                                │
│  ─────────────────────────────────────────────  │
│  • Benefits: "Doers get unfair advantages"      │
│  • 6 value cards:                               │
│    1. Solutions catalogue                       │
│    2. Digital twins & parts                     │
│    3. Design library                            │
│    4. Compliance help                           │
│    5. Peer templates                            │
│    6. Early access                              │
│                                                 │
└─────────────────────────────────────────────────┘
                      ↓
┌─────────────────────────────────────────────────┐
│                                                 │
│  5. SOLUTIONS CATALOGUE         [id="catalogue"]│
│  ─────────────────────────────────────────────  │
│  • Title: "Deployable circular solutions"       │
│  • 6 solution cards with badges:                │
│    • Modular kitchens (–38% CO₂e)              │
│    • Service cores (DPP: Yes)                   │
│    • Fit-out modules (Repair <48h)             │
│    • Workstations (72% reused)                  │
│    • Wet-area components (DPP: Yes)            │
│    • Custom pilot option                        │
│  • Each card: "Add to project" CTA              │
│                                                 │
└─────────────────────────────────────────────────┘
                      ↓
┌─────────────────────────────────────────────────┐
│                                                 │
│  6. JOIN FLOW                                   │
│  ─────────────────────────────────────────────  │
│  • Process: "From intent to install"            │
│  • 4 steps:                                     │
│    1. Apply                                     │
│    2. Match                                     │
│    3. Deploy                                    │
│    4. Share                                     │
│  • Download: Case template PDF                  │
│                                                 │
└─────────────────────────────────────────────────┘
                      ↓
┌─────────────────────────────────────────────────┐
│                                                 │
│  7. APPLICATION FORM            [id="apply"]    │
│  ─────────────────────────────────────────────  │
│  • Full application form with validation        │
│  • Fields:                                      │
│    - Company/Org, Name, Role                    │
│    - Email, Phone, Country                      │
│    - Project (name + timeline)                  │
│    - Improvement goal (dropdown)                │
│    - Decision date                              │
│    - Consent checkbox                           │
│  • Submit → Success message                     │
│  • Alternative CTAs:                            │
│    - Browse catalogue                           │
│    - Get template                               │
│    - Quarterly updates                          │
│                                                 │
└─────────────────────────────────────────────────┘
                      ↓
┌─────────────────────────────────────────────────┐
│                                                 │
│  8. FAQ                                         │
│  ─────────────────────────────────────────────  │
│  • Accordion format                             │
│  • 5 questions:                                 │
│    - Only for Denmark?                          │
│    - Must buy Stykka products?                  │
│    - What KPIs?                                 │
│    - Who reviews?                               │
│    - Costs?                                     │
│                                                 │
└─────────────────────────────────────────────────┘
```

---

## Navigation Flow

### Primary CTAs
1. **Hero → Apply Form**
   - `#apply` anchor link
   - Smooth scroll to application form

2. **Hero → Solutions Catalogue**
   - `#catalogue` anchor link
   - Smooth scroll to catalogue section

### Secondary CTAs
- **All sections → External links**
  - Reduction Roadmap 2.0
  - Nordic Circular Construction
  - DGNB Building Resource Passport

### Form Alternative Actions
- Browse catalogue → `#catalogue`
- Get template → External PDF (to be added)
- Quarterly updates → Email signup (to be configured)

---

## Interaction Points

### Scroll-Triggered Animations
- All section titles fade in on scroll
- Cards stagger in with delay
- FAQ items animate sequentially

### Hover States
- All buttons scale slightly (1.02x)
- Solution cards lift with shadow
- Benefit cards lift with shadow

### Click Actions
1. **Apply buttons** → Scroll to form
2. **Catalogue buttons** → Scroll to catalogue
3. **Add to project** → (placeholder, to be configured)
4. **Form submit** → Validation → Success state
5. **FAQ items** → Expand/collapse accordion

---

## Mobile Responsiveness

### Breakpoints
- **Mobile:** < 768px (1 column)
- **Tablet:** 768px - 1024px (2 columns)
- **Desktop:** > 1024px (3 columns for grids)

### Mobile Optimizations
- Hero text scales down (7xl → 5xl)
- Card grids stack to 1 column
- Form becomes single column
- Padding reduces on small screens

---

## SEO Structure

### Meta Information
- **Title:** "Stykka Circular Alliance — A Nordic club for doers in circular construction"
- **Description:** "Join a forward group of Nordic builders..."
- **Keywords:** circular construction, Nordic, sustainable building
- **OG Image:** (to be added)

### Schema Markup
- Could add Organization schema
- Could add Event schema for application deadlines

---

## Technical Notes

### Performance
- All images lazy-load
- CSS optimized with Tailwind
- JS code-split by route
- First Load: ~167 kB

### Accessibility
- Semantic HTML (section, article, nav)
- ARIA labels on interactive elements
- Keyboard navigation supported
- Color contrast WCAG AA compliant

---

**Page Type:** Single-page application (SPA) with anchor navigation  
**Total Sections:** 8  
**Total CTAs:** 12+  
**Forms:** 1 (application form)  
**External Links:** 3 (authoritative sources)


