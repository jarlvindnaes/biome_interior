# Stykka Circular Alliance Landing Page

A polished Next.js landing page for Stykka's Circular Alliance program—a Nordic club for doers in circular construction.

## Features

- **Modern Tech Stack:** Next.js 15, TypeScript, Tailwind CSS 4, Framer Motion
- **8 Core Sections:**
  - Hero with dual CTAs and video background
  - Why Now (context with Reduction Roadmap targets)
  - Who It's For (eligibility criteria) - **Dark green background with glass-morphism**
  - What You Get (6 benefit cards)
  - Solutions Catalogue (6 deployable solutions) - **Light gradient with geometric pattern**
  - Join Flow (4-step process)
  - Application Form (React Hook Form with validation) - **Dark dramatic background**
  - FAQ (accordion)
- **SEO Optimized:** Comprehensive metadata and Open Graph tags
- **Smooth Animations:** Scroll-triggered reveals with Framer Motion
- **Responsive Design:** Mobile-first, 12-col grid system
- **Nordic Minimalism:** Clean aesthetics, no greenwashing
- **Strategic Contrast:** Alternating light/dark sections with non-descript background patterns
- **Glass-Morphism:** Frosted white cards with backdrop-blur on dark backgrounds

## Getting Started

### Prerequisites

- Node.js 18+ 
- npm or yarn

### Installation

```bash
# Install dependencies
npm install

# Run development server
npm run dev
```

Open [http://localhost:3000/circular-alliance](http://localhost:3000/circular-alliance) in your browser.

## Project Structure

```
/app
  /circular-alliance
    page.tsx           # Main landing page
    layout.tsx         # SEO metadata
  layout.tsx           # Root layout with Inter font
  page.tsx             # Redirects to /circular-alliance
  
/components
  /sections
    Hero.tsx
    WhyNow.tsx
    WhoItsFor.tsx
    WhatYouGet.tsx
    SolutionsCatalogue.tsx
    JoinFlow.tsx
    ApplicationForm.tsx
    FAQ.tsx
  /ui
    Button.tsx
    Card.tsx
    SectionContainer.tsx
```

## Customization

### Update Form Submission

The application form currently logs data to the console. To connect it to your backend:

1. Open `components/sections/ApplicationForm.tsx`
2. Update the `onSubmit` function:

```typescript
const onSubmit = async (data: FormData) => {
  // Replace with your API endpoint
  const response = await fetch('/api/applications', {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(data),
  });
  
  if (response.ok) {
    setSubmitted(true);
  }
};
```

### Add Real Images

Replace placeholder images in `SolutionsCatalogue.tsx`:

1. Add images to `/public/images/`
2. Update the `image` property in each solution object
3. Replace the placeholder div with an `<Image>` component from `next/image`

### Customize Colors

Edit `app/globals.css` to adjust the brand color palette:

```css
:root {
  --color-primary: #000000;        /* Black - main text */
  --color-primary-hover: #1a1a1a;  /* Dark gray - hover states */
  --color-secondary: #2d5f3f;      /* Forest green - dark sections */
  --color-accent: #a8d5ba;         /* Soft green - highlights */
  --color-earth: #8b7355;          /* Warm brown - accents */
  --color-success: #2d5f3f;        /* Forest green - checkmarks */
}
```

## Deployment

### Vercel (Recommended)

1. Push your code to GitHub
2. Connect your repository to [Vercel](https://vercel.com)
3. Deploy with one click

### Other Platforms

```bash
# Build for production
npm run build

# Start production server
npm start
```

## Content Updates

Key copy is in the individual section components. Update as needed:

- Hero headlines: `components/sections/Hero.tsx`
- Benefits: `components/sections/WhatYouGet.tsx`
- Solutions catalogue: `components/sections/SolutionsCatalogue.tsx`
- FAQ: `components/sections/FAQ.tsx`

## References

- [Reduction Roadmap 2.0](https://reductionroadmap.dk/reduction-roadmap-2)
- [Nordic Circular Construction](https://www.nordicinnovation.org/programs/nordic-circular-construction)
- [DGNB Building Resource Passport](https://www.dgnb.de/en/sustainable-building/circular-building/building-resource-passport)

## License

© 2025 Stykka. All rights reserved.

---

Built with Next.js, Tailwind CSS, and Framer Motion.
