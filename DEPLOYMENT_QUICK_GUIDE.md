# BIOME Landing Page — Quick Deployment Guide

## 🚀 Deploy to Vercel (5 minutes)

### Option 1: GitHub → Vercel (Recommended)

1. **Push to GitHub**
   ```bash
   cd "/Users/jarl_vindnaes/Documents/00_STYKKA/2025 BIOME Landing page/circular-alliance"
   git init
   git add .
   git commit -m "BIOME Interior Systems landing page"
   git branch -M main
   git remote add origin YOUR_GITHUB_REPO_URL
   git push -u origin main
   ```

2. **Connect to Vercel**
   - Go to https://vercel.com
   - Click "Add New Project"
   - Import your GitHub repository
   - Click "Deploy"
   - Done! ✅

3. **Your live URLs**
   - `your-project.vercel.app` (default)
   - `your-project.vercel.app/biome` (main landing page)

---

### Option 2: Vercel CLI (Alternative)

1. **Install Vercel CLI**
   ```bash
   npm install -g vercel
   ```

2. **Deploy**
   ```bash
   cd "/Users/jarl_vindnaes/Documents/00_STYKKA/2025 BIOME Landing page/circular-alliance"
   vercel
   ```

3. **Follow prompts**
   - Link to existing project? → No
   - Project name? → `biome-landing`
   - Framework? → Next.js (auto-detected)
   - Deploy? → Yes

4. **Done!** ✅
   Your URL: `https://biome-landing.vercel.app`

---

## 🔗 Custom Domain (Optional)

### If you have a domain (e.g., biome.stykka.com)

1. **In Vercel Dashboard:**
   - Go to your project
   - Settings → Domains
   - Add domain: `biome.stykka.com`

2. **In your DNS provider:**
   - Add CNAME record:
     - Name: `biome`
     - Value: `cname.vercel-dns.com`

3. **Wait 5-10 minutes** for DNS propagation

4. **Done!** ✅
   Your URL: `https://biome.stykka.com`

---

## 📱 Generate QR Code for Presentation

### Method 1: Online Generator
1. Go to https://www.qr-code-generator.com/
2. Enter your Vercel URL: `https://your-project.vercel.app/biome`
3. Download as PNG or SVG
4. Add to your presentation final slide

### Method 2: Command Line (macOS)
```bash
# Install qrencode
brew install qrencode

# Generate QR code
qrencode -o biome-qr.png "https://your-project.vercel.app/biome"
```

---

## ✅ Pre-Launch Checklist

### Technical
- [ ] Run `npm run build` locally (verify no errors)
- [ ] Test on mobile device (iPhone, Android)
- [ ] Test form submission (send test email)
- [ ] Verify Stykka library link opens correctly
- [ ] Check all sections load smoothly

### Content
- [ ] Verify jarl@stykka.com is correct email
- [ ] Check all copy for typos
- [ ] Test QR code (scan with phone camera)
- [ ] Share URL with team for feedback

### Presentation
- [ ] Add QR code to final slide
- [ ] Test scanning QR code from projected slide
- [ ] Prepare 30-second description of landing page
- [ ] Have URL ready to type manually (backup)

---

## 📊 Post-Launch Monitoring

### Week 1
- Check email inbox (jarl@stykka.com) for form submissions
- Monitor Vercel analytics (free tier)
- Ask first users for feedback

### Week 2+
- Track conversion rate (visitors → form submissions)
- Update FAQ based on common questions
- Add real imagery if needed
- Consider adding Google Analytics

---

## 🛠️ Common Issues & Fixes

### "Page not found" after deployment
**Fix:** Make sure you're visiting `/biome` not just `/`
- Root `/` should auto-redirect to `/biome`
- If not, check `app/page.tsx` redirect code

### Form submission doesn't open email
**Fix:** Some browsers block mailto links
- Test in Safari, Chrome, Firefox
- Ensure user has default email app set
- Consider adding alternative: "Copy email and send manually"

### Mobile layout looks broken
**Fix:** Clear browser cache or use incognito
- Tailwind responsive classes should work
- Test on actual device, not just browser resize

### Dark mode shows wrong colors
**Fix:** The design is light/dark mixed
- Some sections are intentionally dark background
- This is by design, not a bug

---

## 📞 Need Help?

**Technical Issues:**
- Next.js Docs: https://nextjs.org/docs
- Vercel Support: https://vercel.com/support

**Content/Design Questions:**
- Email: jarl@stykka.com

---

## 🎯 Success Metrics

### Good Launch
- 50+ visitors in first week
- 5-10 form submissions
- 0 technical errors
- 20%+ library click-through rate

### Great Launch
- 100+ visitors in first week
- 15-20 form submissions
- Positive user feedback
- 30%+ form completion rate

---

**Deployment time:** ~5 minutes  
**QR code generation:** ~2 minutes  
**Total time to live:** ~10 minutes

**Good luck with your presentation next week! 🚀**

