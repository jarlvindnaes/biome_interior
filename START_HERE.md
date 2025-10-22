# 🚀 BIOME Landing Page — START HERE

## ✅ What's Been Built

A **focused, conversion-optimized landing page** for BIOME Interior Systems. Ready for your presentation next week.

**Built for:** QR code at end of presentations → Instant architect/developer sign-ups

---

## 🎯 Quick Facts

- **URL:** `/biome` (root `/` redirects here)
- **Sections:** 6 (Hero, What is BIOME, Library, Who It's For, Form, FAQ)
- **Form fields:** 7 (simplified from typical 11+)
- **Form destination:** jarl@stykka.com (via mailto)
- **Library link:** https://v2-lemon-chi.vercel.app/library
- **Build time:** ~2.5 hours
- **Deploy time:** ~5 minutes

---

## 🏃‍♂️ Quick Start (30 seconds)

### Run Development Server
```bash
cd "/Users/jarl_vindnaes/Documents/00_STYKKA/2025 BIOME Landing page/circular-alliance"
npm run dev
```

**Visit:** http://localhost:3000 (auto-redirects to `/biome`)

---

## 📚 Documentation

Read these in order:

1. **BIOME_README.md** — Complete overview, design system, customization
2. **BIOME_PAGE_FLOW.md** — Visual sitemap, user journeys, interaction points
3. **DEPLOYMENT_QUICK_GUIDE.md** — Deploy to Vercel, QR codes, pre-launch checklist

---

## 🎨 Design Highlights

### Colors (Darker Aesthetic)
- **Dark sections:** Black gradients with warm timber (#8b7355) and sage (#b5d4ba) blobs
- **Light sections:** Clean white with subtle dot patterns
- **Accent:** Forest green (#2d5f3f) for trust/validation sections

### Typography
- Clean, professional system fonts
- Headlines: Bold, direct
- Body: Scannable, action-oriented

### Animations
- Framer Motion scroll reveals
- Smooth hover states
- Glass-morphism cards

---

## 🎯 Key Sections

### 1. Hero
"Digital building blocks for adaptable living"
- 2 CTAs: Get Access + Explore Library
- Dark gradient background

### 2. What is BIOME
3 key points about the system
- Proven modular, Healthy principles, Digital workflow
- White background with gradient cards

### 3. Building Blocks Library 🌟
6 component categories
- Kitchen, Storage, Bathroom, Living, 3D Models, Materials
- Links to Stykka library: v2-lemon-chi.vercel.app/library
- Dark background

### 4. Who It's For
Target audiences: Architects, Developers, Designers
- Value props card with checkmarks
- Forest green background

### 5. Get Access Form 🎯 CONVERSION
7 fields → Opens mailto:jarl@stykka.com
- Name, Email, Company, Role, Country, Project Type, Newsletter
- Dark background with frosted glass form

### 6. FAQ
5 questions about access, formats, geography, BIOME vs Stykka, software
- Accordion interaction
- White background

---

## 🔗 External Integrations

### Stykka Library
- URL: https://v2-lemon-chi.vercel.app/library
- Linked from: Library section "Browse Full Library" button
- Opens in new tab

### Email Contact
- Email: jarl@stykka.com
- Form submissions use mailto (opens user's email client)
- Pre-fills subject and body with form data

---

## 🚀 Next Steps

### Today
1. ✅ Test locally: `npm run dev`
2. ✅ Review all sections
3. ✅ Test form submission (send test email)

### This Week
1. Deploy to Vercel (see DEPLOYMENT_QUICK_GUIDE.md)
2. Generate QR code
3. Add QR to presentation final slide
4. Test QR code with your phone

### Presentation Day
1. Show QR code on final slide
2. Attendees scan → Land on BIOME page
3. They explore library + submit form
4. You receive access requests via email

### After Launch
1. Monitor email (jarl@stykka.com) for submissions
2. Respond within 24h with access credentials
3. Track conversion rate
4. Update FAQ based on questions

---

## 📱 Mobile-First Design

All sections are fully responsive:
- Mobile: Single column, optimized tap targets
- Tablet: 2 columns where appropriate
- Desktop: 3 columns for grids

**Test on actual devices before presentation!**

---

## 🛠️ Common Customizations

### Change Email Destination
Edit: `components/sections/biome/BiomeAccessForm.tsx` (line ~27)
```tsx
window.location.href = `mailto:YOUR_EMAIL@domain.com?...`;
```

### Update Copy
All text is in component files:
- `BiomeHero.tsx` — Headlines
- `WhatIsBiome.tsx` — Feature points
- `BuildingBlocksLibrary.tsx` — Component descriptions
- `BiomeWhoItsFor.tsx` — Target audiences
- `BiomeFAQ.tsx` — Questions and answers

### Change Colors
Edit: `app/globals.css`
```css
--color-accent: #b5d4ba;  /* Sage green */
--color-earth: #8b7355;   /* Timber brown */
```

---

## 📊 File Structure

```
app/biome/
  ├── page.tsx         # Main landing page
  └── layout.tsx       # SEO metadata

components/sections/biome/
  ├── BiomeHero.tsx
  ├── WhatIsBiome.tsx
  ├── BuildingBlocksLibrary.tsx
  ├── BiomeWhoItsFor.tsx
  ├── BiomeAccessForm.tsx
  └── BiomeFAQ.tsx

components/ui/
  ├── Button.tsx       # Reusable buttons
  ├── Card.tsx         # Reusable cards
  └── SectionContainer.tsx
```

---

## ✅ Pre-Launch Checklist

Technical:
- [ ] `npm run build` succeeds locally
- [ ] Test on mobile (iPhone/Android)
- [ ] Form opens email client correctly
- [ ] Stykka library link works
- [ ] All animations smooth

Content:
- [ ] All copy reviewed for typos
- [ ] jarl@stykka.com is correct
- [ ] FAQ answers are accurate

Presentation:
- [ ] QR code generated
- [ ] QR code added to final slide
- [ ] QR code tested (scan with phone)
- [ ] Backup URL ready to type manually

---

## 🎬 Presentation Use Case

**Scenario:**
1. End of BIOME presentation
2. Show QR code on final slide
3. Say: "Scan this to get instant access to BIOME's digital building blocks"
4. Attendees scan → Land on landing page
5. They explore → Submit form
6. You receive emails → Send credentials within 24h

**Benefit:**
- Zero friction
- Professional first impression
- Instant engagement
- Clear value proposition
- Direct path to library access

---

## 📞 Support

**Questions?**
- Email: jarl@stykka.com
- Docs: See BIOME_README.md
- Deployment: See DEPLOYMENT_QUICK_GUIDE.md

---

## 🎯 Success Definition

**Good:**
- 50+ visitors in first week
- 5-10 form submissions
- 0 technical errors

**Great:**
- 100+ visitors
- 15-20 form submissions
- Positive user feedback
- 30%+ form completion rate

---

**Status:** ✅ Ready to deploy  
**Tech:** Next.js 15 + TypeScript + Tailwind + Framer Motion  
**Last updated:** October 2025

---

## 🚀 Deploy Now

```bash
# Push to GitHub
git init
git add .
git commit -m "BIOME landing page ready"
git push origin main

# Or deploy with Vercel CLI
vercel
```

**See DEPLOYMENT_QUICK_GUIDE.md for details.**

---

**Good luck with your presentation! 🎉**

