# 🚀 Deploy to GitHub Pages RIGHT NOW

Your prototype is ready. Follow these exact steps to go live in minutes.

## Prerequisites

You need:
- ✅ GitHub account (https://github.com)
- ✅ Git installed (already available)
- ✅ GitHub credentials (HTTPS token or SSH key)

## Step 1: Create Repository on GitHub (2 minutes)

1. Go to: **https://github.com/new**
2. Fill in:
   - **Repository name:** `altamira-prototype`
   - **Description:** "Altamira Regenerative Finance Interactive Dashboard"
   - **Visibility:** PUBLIC ⚠️ (required for GitHub Pages)
3. **Do NOT** initialize with README
4. Click **Create repository**

Wait for GitHub to show you the empty repository page.

## Step 2: Push Code (3 minutes)

Copy and paste these commands in your terminal:

```bash
cd /home/vaion/altamira-prototype

git remote add origin https://github.com/valentinaion/altamira-prototype.git

git branch -m master main

git push -u origin main
```

When prompted for authentication:
- **Username:** valentinaion
- **Password:** Use your GitHub personal access token (not your password)
  - Get token at: https://github.com/settings/tokens
  - Or use GitHub CLI: `gh auth login`

Wait for push to complete (should show 20+ files).

## Step 3: Enable GitHub Pages (2 minutes)

1. Go to your repository: **https://github.com/valentinaion/altamira-prototype**
2. Click **Settings** (top right)
3. Left sidebar → **Pages**
4. Under "Build and deployment":
   - **Source:** Select "Deploy from a branch"
   - **Branch:** Select `main`
   - **Folder:** Select `/(root)`
5. Click **Save**
6. Wait 1-2 minutes (GitHub builds your site)

## Step 4: Access Your Live Prototype (1 minute)

Your prototype is now live at:

```
https://valentinaion.github.io/altamira-prototype/standalone.html
```

✅ **DONE!** Share this URL with Altamira team.

---

## Troubleshooting

### "fatal: could not read Username"
- Generate GitHub token: https://github.com/settings/tokens
- Use token as password when prompted

### "fatal: remote origin already exists"
Already pushed? That's fine. Your site is live!

### "GitHub Pages site not found"
- Make sure repository is PUBLIC
- Wait 2-3 minutes (GitHub Pages takes time to build)
- Check: https://github.com/valentinaion/altamira-prototype/settings/pages

### "Can't push - permission denied"
- Make sure you have GitHub access token/SSH key configured
- Try: `gh auth login` (if GitHub CLI installed)
- Or generate token: https://github.com/settings/tokens

---

## What Gets Deployed

✅ `standalone.html` → Your interactive prototype  
✅ All documentation files  
✅ Source code (for reference)  

Everything is automatically deployed when you push.

---

## After Going Live

### Share with Altamira
Email link: `https://valentinaion.github.io/altamira-prototype/standalone.html`

### Make Updates
```bash
cd /home/vaion/altamira-prototype
# Edit files
git add .
git commit -m "Your changes"
git push
# Live in 1-2 minutes!
```

### Track Progress
- GitHub Issues: Report bugs
- GitHub Discussions: Q&A
- GitHub Projects: Roadmap

---

## Commands Reference

```bash
# Navigate to project
cd /home/vaion/altamira-prototype

# Add remote (one-time)
git remote add origin https://github.com/valentinaion/altamira-prototype.git

# Rename branch to main
git branch -m master main

# Push to GitHub
git push -u origin main

# For future updates
git add .
git commit -m "Your message"
git push
```

---

**Ready? Start with Step 1 at https://github.com/new** 🚀

