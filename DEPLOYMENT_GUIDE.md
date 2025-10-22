# BIOME Landing Page - Deployment Guide

## Quick Deployment to Git

### 1. Check Git Status
```bash
git status
```

### 2. Add All Changes
```bash
git add .
```

### 3. Commit with Descriptive Message
```bash
git commit -m "feat: Complete BIOME landing page with mobile responsiveness

- Hero section with animated GIF background and luxury scroll indicator
- What is BIOME section with 3 key value propositions
- Example Applications showcase with 7 rotating images
- Building Blocks Library with 6 component categories
- Interactive Evolution timeline with Apple-style slider
- Timeline controls Showcase section images (click stages to scroll)
- Who It's For section with target audiences and benefits
- Access form with mailto submission to jarl@stykka.com
- FAQ section with 5 key questions
- Full mobile responsiveness (tested on all screen sizes)
- Smooth animations and premium UX throughout
- All images optimized for web performance"
```

### 4. Push to Remote
```bash
git push origin main
```
(or `git push origin master` depending on your branch name)

---

## If This is a New Repository

### 1. Initialize Git (if not already done)
```bash
git init
```

### 2. Add Remote Origin
```bash
git remote add origin YOUR_GITHUB_URL
```

### 3. Create Initial Commit
```bash
git add .
git commit -m "feat: Initial BIOME landing page"
```

### 4. Push to Remote
```bash
git branch -M main
git push -u origin main
```

---

## Deploy to Vercel

### Option A: Via Vercel CLI

1. Install Vercel CLI (if not installed)
```bash
npm i -g vercel
```

2. Login to Vercel
```bash
vercel login
```

3. Deploy
```bash
cd "/Users/jarl_vindnaes/Documents/00_STYKKA/2025 BIOME Landing page/circular-alliance"
vercel
```

4. For production deployment
```bash
vercel --prod
```

### Option B: Via Vercel Dashboard

1. Push code to GitHub (see above)
2. Go to [vercel.com](https://vercel.com)
3. Click "New Project"
4. Import your GitHub repository
5. Configure:
   - **Framework Preset**: Next.js
   - **Root Directory**: `./` (or `circular-alliance` if needed)
   - **Build Command**: `npm run build`
   - **Output Directory**: `.next`
6. Click "Deploy"

---

## Environment Variables

Currently no environment variables are needed. If adding features like:
- Analytics (Google Analytics, Plausible)
- Email service (SendGrid, etc.)
- CMS integration

Add them in Vercel:
1. Go to Project Settings
2. Navigate to "Environment Variables"
3. Add your variables

---

## Custom Domain Setup

### 1. Add Domain in Vercel
1. Go to Project Settings → Domains
2. Add your domain (e.g., `biome.stykka.com`)

### 2. Configure DNS
Add these records to your DNS provider:

**For subdomain** (e.g., `biome.stykka.com`):
```
Type: CNAME
Name: biome
Value: cname.vercel-dns.com
```

**For root domain** (e.g., `biome.com`):
```
Type: A
Name: @
Value: 76.76.21.21
```

### 3. Verify Domain
Vercel will automatically verify and issue SSL certificate

---

## Post-Deployment Checklist

### Testing
- [ ] Test all pages load correctly
- [ ] Test mobile responsiveness
- [ ] Test form submission
- [ ] Test image loading
- [ ] Test animations and transitions
- [ ] Test interactive timeline slider
- [ ] Test cross-browser (Chrome, Safari, Firefox)

### Performance
- [ ] Run Lighthouse audit (aim for 90+ on all metrics)
- [ ] Check image loading times
- [ ] Verify lazy loading works
- [ ] Test on 3G/slow connection

### SEO & Meta
- [ ] Verify meta tags are correct
- [ ] Check Open Graph images
- [ ] Test social media sharing
- [ ] Submit sitemap to Google Search Console

### Analytics (Optional)
- [ ] Add Google Analytics / Plausible
- [ ] Set up conversion tracking for form submissions
- [ ] Monitor page performance

---

## Troubleshooting

### Build Fails
```bash
# Clear cache and rebuild
rm -rf .next
npm run build
```

### Images Not Loading
- Ensure images are in `public/images/`
- Check file names match exactly (case-sensitive)
- Verify file extensions (.jpg vs .JPG)

### Animations Not Smooth
- Check browser console for errors
- Ensure Framer Motion is installed
- Test on different browsers

### Mobile Issues
- Test on actual devices, not just dev tools
- Check viewport meta tag
- Verify touch targets are large enough (44x44px minimum)

---

## Monitoring

### Vercel Analytics
Enable in Vercel dashboard for:
- Page views
- Performance metrics
- Web Vitals
- User demographics

### Error Tracking
Consider adding:
- Sentry for error tracking
- LogRocket for session replay

---

## Maintenance

### Regular Updates
- Keep dependencies updated: `npm update`
- Review and update content quarterly
- Monitor form submissions
- Check for broken links

### Performance Optimization
- Compress new images before adding
- Use WebP format where possible
- Lazy load images below the fold
- Minimize JavaScript bundles

---

## Rollback

### If deployment fails:
```bash
# Revert to previous commit
git revert HEAD
git push origin main

# Or rollback in Vercel dashboard
# Project → Deployments → Select previous → Promote to Production
```

---

## Support

### Issues or Questions
- Email: jarl@stykka.com
- Check `BIOME_README.md` for detailed documentation
- Review Next.js docs: [nextjs.org/docs](https://nextjs.org/docs)

---

**Last Updated**: January 2025

