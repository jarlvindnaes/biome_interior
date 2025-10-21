# Quick Start Guide

Get your Circular Alliance landing page running in 5 minutes.

## 1. Install Dependencies

```bash
cd "/Users/jarl_vindnaes/Documents/00_STYKKA/2025 Circular Alliance/circular-alliance"
npm install
```

## 2. Start Development Server

```bash
npm run dev
```

Open [http://localhost:3000/circular-alliance](http://localhost:3000/circular-alliance)

## 3. Make Your First Edit

Try editing `components/sections/Hero.tsx`:

```typescript
<h1 className="text-5xl md:text-7xl font-bold tracking-tight mb-6">
  Build once. Keep forever.<br />
  <span className="text-gray-600">Join the Circular Alliance.</span>
</h1>
```

The page will auto-reload with your changes!

## 4. Key Files to Customize

### Content
- **Hero headline:** `components/sections/Hero.tsx`
- **Benefits cards:** `components/sections/WhatYouGet.tsx`
- **Solutions:** `components/sections/SolutionsCatalogue.tsx`
- **FAQ items:** `components/sections/FAQ.tsx`

### Styling
- **Colors & theme:** `tailwind.config.ts`
- **Global styles:** `app/globals.css`
- **Component styles:** Individual component files

### SEO
- **Page metadata:** `app/circular-alliance/layout.tsx`

## 5. Add Real Images

1. Add images to `/public/images/`
2. Update `SolutionsCatalogue.tsx`:

```typescript
import Image from 'next/image';

// Replace the placeholder div with:
<Image 
  src="/images/your-image.jpg" 
  alt="Solution name"
  width={400}
  height={300}
  className="w-full h-48 object-cover rounded-lg"
/>
```

## 6. Connect the Form

Update `components/sections/ApplicationForm.tsx`:

```typescript
const onSubmit = async (data: FormData) => {
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

See `DEPLOYMENT.md` for detailed form integration options.

## 7. Build for Production

```bash
npm run build
npm start
```

## 8. Deploy

Push to GitHub and deploy to Vercel:

```bash
git init
git add .
git commit -m "Initial commit"
git push origin main
```

Then connect your repo at [vercel.com](https://vercel.com)

## Common Commands

```bash
# Development
npm run dev          # Start dev server

# Production
npm run build        # Build for production
npm start            # Start production server

# Code quality
npm run lint         # Run ESLint
```

## Need Help?

- **README.md** - Full project documentation
- **DEPLOYMENT.md** - Deployment guide
- [Next.js Docs](https://nextjs.org/docs)
- [Tailwind Docs](https://tailwindcss.com/docs)
- [Framer Motion Docs](https://www.framer.com/motion/)

---

Happy building! 🚀

