# Deployment Guide - Students Tools

## Option 1: Deploy via Vercel Dashboard (Recommended)

### Step 1: Connect GitHub Repository
1. Go to https://vercel.com
2. Click **"Add New"** → **"Project"**
3. Select **"Import Git Repository"**
4. Find and select: `https://github.com/NightCode101/studentstools`
5. Click **"Import"**

### Step 2: Configure Project Settings
1. Skip "Create Team" (unless you want one)
2. Under **Build and Output Settings**, click **"Edit"**
3. Set:
   - **Framework**: `Next.js`
   - **Build Command**: `npm run build`
   - **Output Directory**: `out`
4. Click **"Save"**

### Step 3: Deploy
1. Click **"Deploy"**
2. Wait 2-3 minutes for build to complete
3. You should see a green checkmark ✅

### Step 4: Get Your URL
After deployment completes, you'll get a URL like:
```
https://studentstools-xxxxx.vercel.app
```

---

## Option 2: Deploy via Vercel CLI (If Dashboard Fails)

```bash
# Delete old project config
rm -rf .vercel

# Fresh deploy
vercel deploy --prod --confirm
```

---

## Step 5: Add Custom Domain to Vercel

1. Go to your Vercel project dashboard
2. Click **"Settings"** → **"Domains"**
3. Click **"Add Domain"**
4. Enter: `studentstools.site`
5. Vercel will show **Nameservers** to add at your registrar

### Update Domain Registrar (Namecheap)

1. Go to https://www.namecheap.com (your registrar)
2. Login → **"Dashboard"** → **"Domain List"**
3. Find `studentstools.site` → Click **"Manage"**
4. Go to **"Nameservers"** section
5. Select **"Custom Nameservers"**
6. Copy Vercel's nameservers from step above
7. Paste them into Namecheap
8. Click **"Save Changes"**

**Wait 24-48 hours for DNS propagation**
Check status at: https://mxtoolbox.com (search your domain)

---

## Step 6: Verify Deployment

Once DNS propagates, test:
- `https://studentstools.site` (main site)
- `https://studentstools.site/tools/gpa-calculator` (tool page)
- `https://studentstools.site/blog` (blog)

---

## Troubleshooting

### Build Still Fails?

The issue is Vercel auto-detecting Next.js settings. Try this:

1. Go to Vercel Dashboard → Project Settings
2. Under "Build & Development Settings":
   - **Build Command**: `npm run build`
   - **Output Directory**: `out`
3. Click "Save & Deploy"

### Domain Not Resolving?

1. Check DNS propagation: https://mxtoolbox.com
2. Verify Nameservers match Vercel's in Namecheap
3. Wait 24-48 hours if recently changed

---

## Next Steps After Deployment

1. **Set up Google Search Console**
   - Go to: https://search.google.com/search-console
   - Add your domain
   - Submit sitemap: `studentstools.site/sitemap.xml`

2. **Apply for Google AdSense**
   - Go to: https://www.google.com/adsense
   - Click "Sign Up Now"
   - Connect your domain
   - Wait for approval (24-48 hours typically)

3. **Set up Google Analytics**
   - Go to: https://analytics.google.com
   - Create new property for your domain
   - Copy tracking ID and add to site

---

**Questions?** Check build logs in Vercel dashboard under "Deployments"
