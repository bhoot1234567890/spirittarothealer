# Cloudflare Pages Deployment Guide

This guide will help you deploy the Spirit Tarot Healer website to Cloudflare Pages.

## 🚀 Quick Deploy (Automatic)

### Option 1: Connect GitHub Repository (Recommended)

1. **Go to Cloudflare Pages**
   - Visit: https://dash.cloudflare.com/
   - Navigate to **Workers & Pages** → **Pages**

2. **Create New Project**
   - Click **"Create a project"**
   - Click **"Connect to Git"**
   - Select **GitHub** and authorize Cloudflare

3. **Select Repository**
   - Find and select: `bhoot1234567890/spirittarothealer`
   - Click **"Begin setup"**

4. **Configure Build Settings**
   - Since this is a static HTML site, no build command is needed:
   ```
   Framework preset: None
   Build command: (leave empty)
   Build output directory: / (root directory)
   Root directory: / (root directory)
   ```

5. **Environment Variables** (Optional)
   - No environment variables needed for this static site

6. **Deploy**
   - Click **"Save and Deploy"**
   - Cloudflare will build and deploy your site
   - Your site will be live at: `https://your-project.pages.dev`

### Option 2: Direct Upload

1. **Go to Cloudflare Pages**
   - Visit: https://dash.cloudflare.com/
   - Navigate to **Workers & Pages** → **Pages**

2. **Create New Project**
   - Click **"Create a project"**
   - Click **"Upload assets"**

3. **Upload Files**
   - Project name: `spirit-tarot-healer`
   - Drag and drop all files from your project folder
   - Click **"Deploy site"**

## 🌐 Custom Domain Setup

### Add Custom Domain

1. **In Cloudflare Pages Dashboard**
   - Go to your project
   - Click **"Custom domains"**
   - Click **"Set up a custom domain"**

2. **Enter Domain**
   - Enter your domain (e.g., `spirittarothealer.com`)
   - Click **"Continue"**

3. **DNS Configuration**
   - Cloudflare will automatically configure DNS
   - If your domain is on Cloudflare, it will be instant
   - If not, add the DNS records provided

### Subdomain Option

If you don't have a domain, Cloudflare provides a free subdomain:
- `https://spirit-tarot-healer.pages.dev`

## ⚙️ Configuration Files (Optional)

### Create `_headers` file for custom headers

Create a file named `_headers` in the root directory:

```
# Security headers
/*
  X-Frame-Options: DENY
  X-Content-Type-Options: nosniff
  X-XSS-Protection: 1; mode=block
  Referrer-Policy: strict-origin-when-cross-origin

# Cache static assets
/*.css
  Cache-Control: public, max-age=31536000, immutable

/*.js
  Cache-Control: public, max-age=31536000, immutable

/*.png
  Cache-Control: public, max-age=31536000, immutable

/*.jpg
  Cache-Control: public, max-age=31536000, immutable

/*.svg
  Cache-Control: public, max-age=31536000, immutable
```

### Create `_redirects` file for URL redirects (Optional)

Create a file named `_redirects` in the root directory:

```
# Redirect all HTTP to HTTPS
http://* https://:splat 301!

# Redirect www to non-www
https://www.spirittarothealer.com/* https://spirittarothealer.com/:splat 301!
```

## 🔧 Cloudflare Pages Functions (Optional)

If you need server-side functionality later, you can add:

1. Create `functions/` directory
2. Add JavaScript files for API endpoints
3. Deploy automatically with your site

## 📊 Analytics

Cloudflare Pages includes built-in analytics:

1. **Web Analytics**
   - Go to your project dashboard
   - Click **"Analytics"**
   - View page views, visitors, and more

2. **Speed Analytics**
   - Core Web Vitals
   - Performance metrics
   - Recommendations

## 🔄 Automatic Deployments

Once connected to GitHub:

- **Auto-deploy on push** to main branch
- **Preview deployments** for pull requests
- **Rollback** to previous deployments if needed

## 🌍 CDN & Performance

Cloudflare Pages provides:

- **Global CDN** - 200+ locations worldwide
- **HTTP/3** support
- **Automatic HTTPS**
- **Brotli compression**
- **Image optimization**

## 📱 Preview Deployments

For every branch or PR:

1. Push to a new branch: `git checkout -b feature-branch`
2. Push changes: `git push origin feature-branch`
3. Cloudflare creates a preview URL
4. Share preview URL for testing

## 🚦 Deployment Status

Check deployment status:

1. Go to your project dashboard
2. View **"Deployments"** tab
3. See latest deployment status
4. View deployment logs if needed

## 🛠️ Troubleshooting

### Build Failures

1. Check **"Build logs"** in dashboard
2. Verify file structure
3. Check for syntax errors in HTML/CSS/JS

### DNS Issues

1. Use **"DNS Checker"** tools
2. Wait for DNS propagation (up to 48 hours)
3. Verify DNS records in Cloudflare DNS

### SSL Certificate Issues

1. Wait for automatic certificate provisioning
2. Check SSL/TLS settings in Cloudflare
3. Ensure DNS is correctly configured

## 📚 Additional Resources

- [Cloudflare Pages Documentation](https://developers.cloudflare.com/pages/)
- [Cloudflare Pages Functions](https://developers.cloudflare.com/pages/functions/)
- [Custom Domains Guide](https://developers.cloudflare.com/pages/platform/custom-domains/)

## ✅ Pre-Deployment Checklist

Before deploying, ensure:

- [ ] All files are committed to Git
- [ ] Repository is pushed to GitHub
- [ ] No sensitive data in files (API keys, passwords)
- [ ] Test site locally first
- [ ] Check all links work
- [ ] Verify mobile responsiveness
- [ ] Test contact forms/links
- [ ] Confirm schema markup is valid
- [ ] Check accessibility with a screen reader
- [ ] Validate HTML/CSS

## 🎯 Post-Deployment Tasks

After deployment:

1. **Test Live Site**
   - Navigate to your Cloudflare Pages URL
   - Test all functionality
   - Check mobile view

2. **Setup Custom Domain**
   - Add your custom domain
   - Configure DNS records
   - Wait for SSL certificate

3. **Monitor Analytics**
   - Set up Web Analytics
   - Check Core Web Vitals
   - Monitor performance

4. **SEO Verification**
   - Verify with Google Search Console
   - Submit sitemap (if applicable)
   - Check structured data with Rich Results Test

## 🔗 Useful Links

- **Cloudflare Dashboard**: https://dash.cloudflare.com/
- **Pages Console**: https://dash.cloudflare.com/?to=/:account/pages
- **Project Repository**: https://github.com/bhoot1234567890/spirittarothealer

## 📞 Support

If you encounter issues:

1. Check [Cloudflare Pages Documentation](https://developers.cloudflare.com/pages/)
2. Search [Cloudflare Community](https://community.cloudflare.com/)
3. Contact Cloudflare Support

---

**Your site is now ready to deploy! 🚀**

Once deployed, your Spirit Tarot Healer website will be:
- ✅ Globally distributed via Cloudflare CDN
- ✅ Automatically HTTPS secured
- ✅ Optimized for performance
- ✅ Auto-deployed on Git pushes
- ✅Accessible at your custom domain
