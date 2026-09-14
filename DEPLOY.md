# 🚀 Deploy to GitHub in 3 Steps

Your Altamira Regenerative Finance prototype is ready to deploy on GitHub Pages.

## Step 1️⃣ Create a GitHub Repository

1. Go to **https://github.com/new**
2. Repository name: `altamira-prototype`
3. Set to **PUBLIC** ⚠️ (required for GitHub Pages)
4. Click **Create repository**

## Step 2️⃣ Push to GitHub

Copy and run these commands (replace YOUR_USERNAME):

```bash
cd /home/vaion/altamira-prototype

git remote add origin https://github.com/YOUR_USERNAME/altamira-prototype.git
git branch -m master main
git push -u origin main
```

## Step 3️⃣ Enable GitHub Pages

1. Go to your repository on GitHub
2. Click **Settings** → **Pages** (left sidebar)
3. Under "Build and deployment":
   - Source: **"Deploy from a branch"**
   - Branch: **main** 
   - Folder: **/(root)**
4. Click **Save**
5. Wait 1-2 minutes ⏳

## ✅ Done! Your Live URL:

```
https://YOUR_USERNAME.github.io/altamira-prototype/standalone.html
```

**Share this URL with Altamira team!** 🌿

---

## Full Details

See `GITHUB_DEPLOYMENT.md` for detailed instructions, troubleshooting, and additional options.
