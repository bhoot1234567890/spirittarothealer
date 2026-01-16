# Wrangler CLI Deployment Guide

This guide shows how to deploy the Spirit Tarot Healer website to Cloudflare Pages using the Wrangler CLI.

## 🚀 Quick Start

### Prerequisites

1. **Install Wrangler CLI**
   ```bash
   npm install -g wrangler
   ```

2. **Authenticate with Cloudflare**
   ```bash
   wrangler login
   ```
   This will open a browser for OAuth authentication.

### Deploy Your Site

Navigate to your project directory and run:

```bash
cd "/path/to/tarot reading service website"
wrangler pages deploy . --project-name=spirittarothealer
```

**Output:**
```
✨ Success! Uploaded 7 files
🌎 Deploying...
✨ Deployment complete! Take a peek over at https://bfc89f65.spirittarothealer.pages.dev
```

## 📁 Configuration File

The `wrangler.toml` file is already created in your project root:

```toml
name = "spirit-tarot-healer"
compatibility_date = "2024-01-01"
pages_build_output_dir = ""
```

## 🌐 Live URLs

- **Latest Deployment**: https://bfc89f65.spirittarothealer.pages.dev
- **Production URL**: https://spirittarothealer.pages.dev

## 🔄 Deploying Updates

### Method 1: Direct Deploy (Quick)

```bash
# Deploy current directory
wrangler pages deploy . --project-name=spirittarothealer

# Deploy with commit-dirty flag (if you have uncommitted changes)
wrangler pages deploy . --project-name=spirittarothealer --commit-dirty=true
```

### Method 2: Deploy via Git (Recommended for Production)

Cloudflare Pages is already connected to your GitHub repository:
- Push to `main` branch → Auto-deploys to production
- Create pull request → Creates preview deployment

## 🛠️ Advanced Commands

### List All Projects

```bash
wrangler pages project list
```

### View Deployment History

```bash
wrangler pages deployment list --project-name=spirittarothealer
```

### Rollback to Previous Deployment

```bash
# List deployments first
wrangler pages deployment list --project-name=spirittarothealer

# Rollback (use deployment ID from list)
wrangler pages deployment rollback <deployment-id> --project-name=spirittarothealer
```

### Create a New Project

```bash
wrangler pages project create spirit-tarot-healer
```

### Delete a Project

```bash
wrangler pages project delete spirittarothealer
```

## 🌍 Custom Domain Setup

### Add Custom Domain via Wrangler

```bash
# Add custom domain
wrangler pages domain add spirittarothealer.com --project-name=spirittarothealer

# Add www subdomain
wrangler pages domain add www.spirittarothealer.com --project-name=spirittarothealer
```

### List Custom Domains

```bash
wrangler pages domain list --project-name=spirittarothealer
```

### Delete Custom Domain

```bash
wrangler pages domain delete spirittarothealer.com --project-name=spirittarothealer
```

## 🔧 Environment Variables

### Set Environment Variables

```bash
# Via command line
wrangler pages secret put API_KEY --project-name=spirittarothealer
```

### List Environment Variables

```bash
wrangler pages secret list --project-name=spirittarothealer
```

### Delete Environment Variable

```bash
wrangler pages secret delete API_KEY --project-name=spirittarothealer
```

## 📊 Monitoring & Analytics

### View Real-Time Logs

```bash
wrangler pages deployment tail --project-name=spirittarothealer
```

### View Analytics

```bash
# Open Cloudflare dashboard
wrangler dashboard
```

## 🎯 Branch Deployments

### Deploy Specific Branch

```bash
# Checkout branch
git checkout feature-branch

# Deploy with branch name
wrangler pages deploy . --project-name=spirittarothealer --branch=feature-branch
```

### Preview Deployments

When you push to a non-main branch, Cloudflare automatically creates a preview URL:
- Format: `https://<branch-name>.<project-name>.pages.dev`

## 🔐 Security Headers

Create a `_headers` file in your project root:

```
/*
  X-Frame-Options: DENY
  X-Content-Type-Options: nosniff
  X-XSS-Protection: 1; mode=block
  Referrer-Policy: strict-origin-when-cross-origin
  Permissions-Policy: geolocation=(), microphone=(), camera=()
```

## 🔄 Auto-Deployment Setup

### Connect GitHub Repository (Already Done)

Your repository is already connected to Cloudflare Pages:
- **Repository**: https://github.com/bhoot1234567890/spirittarothealer
- **Project**: spirittarothealer
- **Auto-deploy**: Enabled on push to `main`

### Configure Auto-Deploy Settings

1. Go to: https://dash.cloudflare.com/
2. Navigate to: Workers & Pages → spirittarothealer
3. Click: "Build settings"
4. Configure:
   - Build command: (leave empty for static sites)
   - Build output directory: `/`
   - Root directory: `/`

## 🚦 CI/CD Integration

### GitHub Actions (Optional)

Create `.github/workflows/deploy.yml`:

```yaml
name: Deploy to Cloudflare Pages

on:
  push:
    branches:
      - main

jobs:
  deploy:
    runs-on: ubuntu-latest
    steps:
      - name: Checkout
        uses: actions/checkout@v3

      - name: Deploy to Cloudflare Pages
        uses: cloudflare/pages-action@v1
        with:
          apiToken: ${{ secrets.CLOUDFLARE_API_TOKEN }}
          accountId: ${{ secrets.CLOUDFLARE_ACCOUNT_ID }}
          projectName: spirittarothealer
          directory: /
```

## 📱 Deployment Best Practices

### Before Deploying

1. **Test Locally**
   ```bash
   # Simple HTTP server
   python -m http.server 8000
   # or
   npx serve
   ```

2. **Check Files**
   ```bash
   # Verify all files are present
   ls -la
   ```

3. **Run Linter**
   ```bash
   # Check HTML/CSS/JS for errors
   npx html-validate index.html
   ```

### After Deploying

1. **Test Live Site**
   - Navigate to deployment URL
   - Test all functionality
   - Check mobile responsiveness

2. **Monitor Performance**
   - Check Cloudflare Web Analytics
   - View Core Web Vitals
   - Monitor error rates

3. **Update DNS (if using custom domain)**
   - Point DNS to Cloudflare
   - Wait for propagation (up to 48 hours)
   - Verify SSL certificate

## 🛠️ Troubleshooting

### Common Issues

#### 1. Authentication Error

```bash
# Re-authenticate
wrangler logout
wrangler login
```

#### 2. Project Not Found

```bash
# List projects to verify
wrangler pages project list

# Create project if needed
wrangler pages project create spirittarothealer
```

#### 3. Build Failures

```bash
# Check file structure
ls -la

# Verify wrangler.toml
cat wrangler.toml

# Deploy with verbose output
wrangler pages deploy . --project-name=spirittarothealer --verbose
```

#### 4. DNS Issues

```bash
# Check DNS propagation
dig spirittarothealer.pages.dev

# Verify DNS records
wrangler pages domain list --project-name=spirittarothealer
```

## 📚 Additional Resources

- **Wrangler Documentation**: https://developers.cloudflare.com/workers/wrangler/
- **Cloudflare Pages**: https://developers.cloudflare.com/pages/
- **Wrangler Commands**: https://developers.cloudflare.com/workers/wrangler/reference/

## 🎯 Quick Reference

### Essential Commands

```bash
# Deploy
wrangler pages deploy . --project-name=spirittarothealer

# List projects
wrangler pages project list

# View deployments
wrangler pages deployment list --project-name=spirittarothealer

# Add custom domain
wrangler pages domain add yourdomain.com --project-name=spirittarothealer

# View logs
wrangler pages deployment tail --project-name=spirittarothealer
```

### Your Project Details

- **Project Name**: spirittarothealer
- **Production URL**: https://spirittarothealer.pages.dev
- **Latest Deployment**: https://bfc89f65.spirittarothealer.pages.dev
- **GitHub Repo**: https://github.com/bhoot1234567890/spirittarothealer
- **Account ID**: a33b46df956704c4bff3c55a0867b910

---

**✅ Your site is live and deployed! 🚀**

For questions or issues, refer to the [Cloudflare Pages Documentation](https://developers.cloudflare.com/pages/).
