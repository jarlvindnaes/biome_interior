# Deployment Guide

This guide will help you deploy your Stykka Circular Alliance landing page to production.

## Quick Deploy to Vercel (Recommended)

Vercel is the recommended platform for Next.js deployments. It's built by the creators of Next.js and offers the best performance.

### Steps:

1. **Push your code to GitHub**
   ```bash
   git add .
   git commit -m "Initial commit - Circular Alliance landing page"
   git push origin main
   ```

2. **Connect to Vercel**
   - Go to [vercel.com](https://vercel.com)
   - Click "Add New Project"
   - Import your GitHub repository
   - Vercel will auto-detect Next.js settings

3. **Configure (if needed)**
   - Most settings are auto-configured
   - Add environment variables if you have any (API keys, etc.)

4. **Deploy**
   - Click "Deploy"
   - Your site will be live in ~2 minutes at `your-project.vercel.app`

5. **Custom Domain (optional)**
   - In Vercel dashboard, go to Settings → Domains
   - Add your custom domain (e.g., `circular-alliance.stykka.com`)
   - Update DNS records as instructed

## Alternative: Deploy to Netlify

1. **Build command:** `npm run build`
2. **Publish directory:** `.next`
3. **Environment variables:** Add any needed variables in Netlify dashboard

## Alternative: Self-Hosted

### Prerequisites:
- Node.js 18+ installed on your server
- PM2 or similar process manager

### Steps:

1. **Clone and install**
   ```bash
   git clone your-repo.git
   cd circular-alliance
   npm install
   npm run build
   ```

2. **Start with PM2**
   ```bash
   pm2 start npm --name "circular-alliance" -- start
   pm2 save
   pm2 startup
   ```

3. **Configure reverse proxy (Nginx example)**
   ```nginx
   server {
       listen 80;
       server_name your-domain.com;

       location / {
           proxy_pass http://localhost:3000;
           proxy_http_version 1.1;
           proxy_set_header Upgrade $http_upgrade;
           proxy_set_header Connection 'upgrade';
           proxy_set_header Host $host;
           proxy_cache_bypass $http_upgrade;
       }
   }
   ```

## Post-Deployment Checklist

- [ ] Test the live site on mobile and desktop
- [ ] Verify all links work (Reduction Roadmap, Nordic Innovation, etc.)
- [ ] Test form submission
- [ ] Check SEO metadata with [metatags.io](https://metatags.io/)
- [ ] Test performance with [PageSpeed Insights](https://pagespeed.web.dev/)
- [ ] Set up analytics (Google Analytics, Plausible, etc.)
- [ ] Configure form backend (see Form Integration section)
- [ ] Add real images to replace placeholders

## Form Integration

The application form currently logs to console. To make it functional:

### Option 1: Email via API Route (Simple)

Create `/app/api/applications/route.ts`:

```typescript
import { NextResponse } from 'next/server';

export async function POST(request: Request) {
  const data = await request.json();
  
  // Send email using your preferred service
  // (SendGrid, Resend, Nodemailer, etc.)
  
  return NextResponse.json({ success: true });
}
```

Update `ApplicationForm.tsx`:
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

### Option 2: Third-Party Services

**Formspree:**
```typescript
const onSubmit = async (data: FormData) => {
  await fetch('https://formspree.io/f/YOUR_FORM_ID', {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(data),
  });
  setSubmitted(true);
};
```

**n8n/Zapier:**
- Create a webhook in your automation tool
- Update the fetch URL to your webhook endpoint

### Option 3: Direct to Database

If using Supabase, Airtable, or similar:
```typescript
import { createClient } from '@supabase/supabase-js';

const supabase = createClient(
  process.env.NEXT_PUBLIC_SUPABASE_URL!,
  process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY!
);

const onSubmit = async (data: FormData) => {
  const { error } = await supabase
    .from('applications')
    .insert([data]);
    
  if (!error) setSubmitted(true);
};
```

## Environment Variables

Create `.env.local` for local development:

```bash
# API Configuration
NEXT_PUBLIC_API_URL=https://your-api.com

# Email Service (example with SendGrid)
SENDGRID_API_KEY=your_key_here
FROM_EMAIL=noreply@stykka.com
TO_EMAIL=applications@stykka.com

# Analytics
NEXT_PUBLIC_GA_ID=G-XXXXXXXXXX
```

Add these same variables in your hosting platform's dashboard.

## Monitoring

Recommended tools:
- **Uptime:** Vercel Analytics, UptimeRobot
- **Performance:** Vercel Speed Insights, Google PageSpeed
- **Analytics:** Plausible, Google Analytics
- **Error tracking:** Sentry

## Troubleshooting

**Build fails:**
- Check Node.js version (should be 18+)
- Run `npm install` again
- Clear `.next` folder: `rm -rf .next && npm run build`

**Styles not loading:**
- Ensure Tailwind is properly configured
- Check `tailwind.config.ts` includes correct content paths

**Form not submitting:**
- Check browser console for errors
- Verify API endpoint is correct
- Check CORS settings if using external API

## Support

For issues specific to this project, contact your development team.
For Next.js issues, see [nextjs.org/docs](https://nextjs.org/docs)

---

**Last updated:** October 2025


