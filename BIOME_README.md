# BIOME Landing Page

## Overview
A modern, premium landing page for BIOME Interior Systems - showcasing modular, space-efficient interior building blocks for architects and developers across Europe.

## 🎯 Purpose
This landing page is designed to be linked via QR code at the end of BIOME presentations. It allows architects and developers to:
- Sign up for instant access to BIOME digital building blocks
- Explore the modular interior system
- Download BIM-ready 3D models
- Learn about space-efficient design principles

## 🚀 Live URL
- Production: `/biome`
- Root (`/`) redirects to `/biome`

## 📱 Features

### 1. **Hero Section**
- Animated GIF background (`banner.gif`)
- Dark gradient overlay for readability
- Responsive typography (mobile-first)
- Smooth scroll indicator with fade-out effect
- CTAs: "Get Instant Access" and "Explore the Library"

### 2. **What is BIOME**
- 3 key value propositions:
  1. More from every cubic meter
  2. Flexible before and after move-in
  3. Ready-to-deploy configurations
- Subtle background image (`interior-view.png`)

### 3. **Example Applications Showcase**
- Auto-rotating image carousel (7 images)
- Smooth crossfade transitions
- Progress indicators
- Can be controlled by Evolution timeline slider
- **Images**:
  - 1.jpg, 2.jpg, 3.jpg, 4.jpg
  - duplex-side-2.jpg
  - osterbrogade-interior-a1.jpg
  - osterbrogade-interior-a2.jpg

### 4. **Building Blocks Library**
- 6 component categories:
  - Complete Configurations (15+ layouts)
  - Kitchen Modules (8+ variants)
  - Bathroom Modules (6+ variants)
  - Storage Systems (20+ components)
  - Furniture & Fixtures (25+ items)
  - Materials & Specs (40+ resources)
- Links to Stykka library
- Background image (`courtyard-view.jpg`)

### 5. **Evolution Timeline**
- Interactive Apple-style slider
- 4 stages showing interior evolution over time:
  1. Move-in (layer-1.jpg)
  2. Year 1-2 (layer-2.jpg)
  3. Year 3-5 (layer-3.jpg)
  4. Year 5+ (layer-4.jpg)
- **Interactive feature**: Clicking stages scrolls to and controls the Showcase section
- Smooth crossfade between images (no white flash)

### 6. **Who It's For**
- Target audiences:
  - Architects
  - Developers
  - Housing Operators
- 4 key benefits with detailed explanations

### 7. **Access Form**
- 7 fields: Name, Email, Company, Role, Country, Project Type, Newsletter
- Sends form data to `jarl@stykka.com` via mailto
- Success state with library link

### 8. **FAQ Section**
- 5 questions focused on:
  - Volumetric efficiency
  - What's included
  - Customization
  - Cost savings
  - Getting started

## 🎨 Design System

### Colors
- **Primary (BIOME Brown)**: `#8b7355`
- **Secondary (Sage Green)**: `#b5d4ba`
- **Dark Background**: `#1a1a1a`, `#2d5f3f`
- **Text**: Gray scale with proper hierarchy

### Typography
- **Headings**: Bold, tracking-tight
- **Body**: Relaxed leading, proper contrast
- **Mobile-first sizing**: Responsive text scales

### Animations
- Framer Motion for all animations
- Premium bezier easing: `[0.43, 0.13, 0.23, 0.96]`
- Smooth scrolls and transitions

### Components
- Reusable `Button` component with variants
- `Card` component for content sections
- `SectionContainer` for consistent layouts

## 📂 File Structure
```
app/
├── biome/
│   ├── layout.tsx          # SEO metadata
│   └── page.tsx            # Main page with state management
├── page.tsx                # Root redirect to /biome
components/
└── sections/
    └── biome/
        ├── BiomeHero.tsx              # Hero with GIF background
        ├── WhatIsBiome.tsx            # Value propositions
        ├── BiomeShowcase.tsx          # Image carousel
        ├── BuildingBlocksLibrary.tsx  # Component library
        ├── BiomeEvolution.tsx         # Timeline slider
        ├── BiomeWhoItsFor.tsx         # Target audience
        ├── BiomeAccessForm.tsx        # Sign-up form
        └── BiomeFAQ.tsx               # FAQ accordion
public/
└── images/
    ├── banner.gif
    ├── interior-view.png
    ├── courtyard-view.jpg
    ├── layer-1.jpg ... layer-4.jpg
    ├── 1.jpg ... 4.jpg
    ├── duplex-side-2.jpg
    ├── osterbrogade-interior-a1.jpg
    └── osterbrogade-interior-a2.jpg
```

## 📱 Mobile Responsiveness

### Breakpoints
- **Mobile**: < 640px (sm)
- **Tablet**: 640px - 768px (md)
- **Desktop**: 768px+ (lg, xl)

### Mobile Optimizations
- Smaller text sizes with proper scaling
- Stacked layouts on mobile (flex-col)
- Smaller spacing and padding
- Touch-friendly buttons (larger tap targets)
- Optimized image aspect ratios (4:3 on mobile, 21:9 on desktop)
- Shorter text on small screens

## 🔧 Technical Details

### Framework
- **Next.js 15.5.5** (App Router)
- **React 18+**
- **TypeScript**

### Styling
- **Tailwind CSS** for utility-first styling
- Custom color variables in `globals.css`
- Responsive design with mobile-first approach

### Animations
- **Framer Motion** for smooth transitions
- **AnimatePresence** for enter/exit animations
- Scroll-triggered animations with `whileInView`

### State Management
- React `useState` for local state
- Props drilling for cross-component communication
- Evolution slider → Showcase connection

### Form Handling
- **React Hook Form** for form management
- Client-side validation
- `mailto:` link for form submission

### Image Optimization
- All images optimized for web
- Responsive image sizing
- Lazy loading with Next.js Image (where applicable)

## 🎯 Key Messages

1. **Space Efficiency**: Get more from your m³s to save on expensive m²s
2. **Modularity**: Interchangeable components before and after move-in
3. **Ready-to-Deploy**: Pre-made configurations available now
4. **BIM-Ready**: 3D models ready for immediate integration
5. **Europe-wide**: Designed for architects and developers across Europe

## 📊 Performance

### Image Sizes (Optimized)
- `banner.gif`: ~5-10MB (acceptable for hero)
- `osterbrogade-*`: ~500KB (optimized from 58-68MB)
- Other JPGs: < 5MB each

### Best Practices
- Mobile-first responsive design
- Smooth 60fps animations
- Optimized image loading
- Clean, semantic HTML
- Accessible components

## 🚀 Deployment

### Build Command
```bash
npm run build
```

### Development
```bash
npm run dev
```

### Production
- Optimized for Vercel deployment
- Static generation where possible
- Client components for interactivity

## 📝 Content Guidelines

### Messaging Tone
- **Professional** but approachable
- **Technical** but clear
- **Aspirational** without being unrealistic
- Emphasis on **practical benefits** over features

### Key Terms
- "Interior building blocks" not "products"
- "Space-efficient" not just "modular"
- "Example applications" not "real projects" (renders)
- "m³" and "m²" for space metrics
- "BIM-ready" for technical credibility

## 🔗 External Links
- Stykka Library: `https://v2-lemon-chi.vercel.app/library?category=3d-models`
- Form submissions: `jarl@stykka.com`

## 📧 Contact
- Form data sent to: `jarl@stykka.com`
- Questions about BIOME: `jarl@stykka.com`

## ✅ Pre-Launch Checklist
- [x] Mobile responsiveness tested
- [x] All images optimized
- [x] Form submission working
- [x] Cross-browser compatibility
- [x] Accessibility features
- [x] SEO metadata configured
- [x] Interactive features tested
- [x] Smooth animations verified
- [ ] Analytics tracking (if needed)
- [ ] Final content review

---

**Last Updated**: January 2025
**Version**: 1.0
