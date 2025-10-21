# Pre-Launch Checklist

Use this checklist to prepare your Circular Alliance landing page for launch.

## 🎨 Content & Design

### Images
- [ ] Replace placeholder images in Solutions Catalogue
  - Location: `components/sections/SolutionsCatalogue.tsx`
  - Add images to: `/public/images/`
  - Use Next.js `<Image>` component for optimization

- [ ] Add hero background image (optional)
  - Consider a clean product photo or exploded view
  - Location: `components/sections/Hero.tsx`

### Copy Review
- [ ] Review all headlines and copy for accuracy
- [ ] Verify external links work:
  - [ ] Reduction Roadmap links
  - [ ] Nordic Innovation link
  - [ ] DGNB link
- [ ] Update any placeholder text
- [ ] Check for typos and grammar

### Brand Alignment
- [ ] Verify color scheme matches Stykka brand
- [ ] Check font choices (currently using Inter)
- [ ] Ensure tone of voice is consistent
- [ ] Review "doers, not talkers" positioning

## 🔧 Technical Setup

### Form Integration
- [ ] Choose form submission method (see DEPLOYMENT.md):
  - [ ] Email API
  - [ ] Formspree
  - [ ] n8n/Zapier webhook
  - [ ] Direct to database
- [ ] Update `ApplicationForm.tsx` with chosen method
- [ ] Test form submission in dev environment
- [ ] Set up email notifications for new applications
- [ ] Create automated response email (optional)

### Analytics
- [ ] Set up Google Analytics or alternative
- [ ] Add tracking code to environment variables
- [ ] Test analytics tracking
- [ ] Set up conversion goals:
  - [ ] Form submissions
  - [ ] Catalogue clicks
  - [ ] Scroll depth

### SEO
- [ ] Review metadata in `app/circular-alliance/layout.tsx`
- [ ] Add Open Graph image (1200x630px)
- [ ] Test meta tags with https://metatags.io/
- [ ] Create/update sitemap.xml (optional)
- [ ] Set up Google Search Console

### Performance
- [ ] Run Lighthouse audit
- [ ] Optimize images (WebP format, proper sizing)
- [ ] Check mobile performance
- [ ] Test on slow 3G connection

## 🌐 Deployment

### Pre-Deploy
- [ ] Run build locally: `npm run build`
- [ ] Test production build: `npm start`
- [ ] Check for console errors
- [ ] Test all interactive elements

### Deploy to Vercel
- [ ] Push code to GitHub
- [ ] Connect repository to Vercel
- [ ] Configure environment variables
- [ ] Deploy to staging/preview first
- [ ] Review preview deployment

### Domain Setup
- [ ] Choose subdomain (e.g., circular-alliance.stykka.com)
- [ ] Configure DNS settings
- [ ] Enable HTTPS/SSL
- [ ] Test domain works

### Post-Deploy
- [ ] Test live site on multiple devices:
  - [ ] iPhone Safari
  - [ ] Android Chrome
  - [ ] Desktop Chrome
  - [ ] Desktop Safari
  - [ ] Desktop Firefox
- [ ] Verify all forms work
- [ ] Check all links
- [ ] Test loading speed
- [ ] Verify SEO metadata loads correctly

## 📧 Email & Notifications

- [ ] Set up email template for application confirmations
- [ ] Create internal notification system for new applications
- [ ] Test email deliverability
- [ ] Set up autoresponder (optional)
- [ ] Prepare case template PDF for download link

## 📱 Marketing Prep

### Assets to Prepare
- [ ] Social media announcement graphics
- [ ] LinkedIn post copy
- [ ] Email announcement to existing contacts
- [ ] Press release (if applicable)

### Launch Plan
- [ ] Set launch date
- [ ] Prepare announcement schedule:
  - [ ] LinkedIn
  - [ ] Email newsletter
  - [ ] Website banner
  - [ ] Partner communications
- [ ] Create UTM parameters for tracking campaigns

## 📊 Monitoring

### Set Up Monitoring
- [ ] Configure uptime monitoring (UptimeRobot, etc.)
- [ ] Set up error tracking (Sentry, etc.)
- [ ] Enable Vercel Analytics
- [ ] Create dashboard for key metrics

### KPIs to Track
- [ ] Application submissions per week
- [ ] Page views
- [ ] Bounce rate
- [ ] Average time on page
- [ ] Conversion rate (visits → applications)
- [ ] Mobile vs desktop traffic

## 🧪 Testing Scenarios

### User Journeys to Test
- [ ] **Journey 1: Quick browser**
  - Land on page → Scroll through catalogue → Leave
  
- [ ] **Journey 2: Info seeker**
  - Land on page → Read Why Now → Check FAQ → Leave
  
- [ ] **Journey 3: Serious applicant**
  - Land on page → Read through → Fill form → Submit
  
- [ ] **Journey 4: Mobile user**
  - All of the above on mobile device

### Cross-Browser Testing
- [ ] Chrome (latest)
- [ ] Firefox (latest)
- [ ] Safari (latest)
- [ ] Edge (latest)
- [ ] Mobile browsers

## 🔒 Legal & Compliance

- [ ] Add privacy policy link (if collecting data)
- [ ] GDPR compliance check (if applicable)
- [ ] Cookie consent banner (if needed)
- [ ] Terms of service (if applicable)
- [ ] Accessibility review (WCAG 2.1 AA)

## 📋 Final Checks

### Content
- [ ] All text is final and approved
- [ ] No "lorem ipsum" or placeholder text
- [ ] All links are working
- [ ] Contact information is correct

### Functionality
- [ ] All buttons work
- [ ] All forms validate correctly
- [ ] All animations play smoothly
- [ ] No console errors
- [ ] Mobile navigation works

### Performance
- [ ] Page loads in < 3 seconds
- [ ] Images are optimized
- [ ] No render-blocking resources
- [ ] First Contentful Paint < 1.8s

### Polish
- [ ] Favicon is set
- [ ] Page title is correct
- [ ] 404 page exists
- [ ] Loading states work
- [ ] Success messages are clear

## 🚀 Launch Day

- [ ] Final smoke test on production
- [ ] Monitor error logs
- [ ] Watch analytics for first visitors
- [ ] Be ready to respond to first applications
- [ ] Monitor social media mentions
- [ ] Have team ready for support

## 📈 Post-Launch (Week 1)

- [ ] Review analytics data
- [ ] Check application quality
- [ ] Gather user feedback
- [ ] Fix any reported bugs
- [ ] Plan first iteration based on data

---

## Quick Reference

**Test URLs:**
- Dev: http://localhost:3000/circular-alliance
- Staging: [your-staging-url]
- Production: [your-production-url]

**Key Contacts:**
- Applications: applications@stykka.com
- Support: info@stykka.com

**Resources:**
- [Vercel Dashboard](https://vercel.com/dashboard)
- [Analytics](link-to-analytics)
- [Form Submissions](link-to-form-backend)

---

**Last Updated:** October 2025

Good luck with the launch! 🎉


