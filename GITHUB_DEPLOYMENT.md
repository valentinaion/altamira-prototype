# Deploy to GitHub Pages

Your Altamira prototype is ready to deploy on GitHub Pages. Follow these steps:

## Step 1: Create a Repository on GitHub

1. Go to **https://github.com/new**
2. Create a new repository:
   - **Repository name:** `altamira-prototype` (or your choice)
   - **Description:** "Altamira Regenerative Finance Interactive Dashboard"
   - **Visibility:** Public (for GitHub Pages to work)
   - **Initialize:** No (we already have files)
3. Click **Create repository**

## Step 2: Push to GitHub

After creating the repository on GitHub, you'll see instructions. Copy the HTTPS URL and run:

```bash
cd /home/vaion/altamira-prototype

# Add remote (replace YOUR_USERNAME and REPO_NAME)
git remote add origin https://github.com/YOUR_USERNAME/REPO_NAME.git

# Rename branch to main (optional but recommended)
git branch -m master main

# Push to GitHub
git push -u origin main
```

**Example:**
```bash
git remote add origin https://github.com/vaion/altamira-prototype.git
git branch -m master main
git push -u origin main
```

## Step 3: Enable GitHub Pages

1. Go to your repository on GitHub
2. Click **Settings** (top right)
3. In left sidebar, click **Pages**
4. Under "Build and deployment":
   - **Source:** Select "Deploy from a branch"
   - **Branch:** Select `main` and `/root` folder
   - Click **Save**
5. Wait 1-2 minutes for GitHub to build and deploy

## Step 4: Access Your Prototype

Your prototype will be live at:
```
https://YOUR_USERNAME.github.io/REPO_NAME/standalone.html
```

**Example:**
```
https://vaion.github.io/altamira-prototype/standalone.html
```

---

## Alternative: Deploy from `/docs` Folder (Optional)

If you want to use the `/docs` folder instead of root:

1. Create `docs/` folder:
   ```bash
   mkdir -p docs
   cp standalone.html docs/index.html
   ```

2. In GitHub Settings > Pages:
   - **Branch:** Select `main` and `/docs` folder
   - Click **Save**

3. Access at:
   ```
   https://YOUR_USERNAME.github.io/REPO_NAME/
   ```

---

## Quick Reference Commands

```bash
# Navigate to project
cd /home/vaion/altamira-prototype

# Add remote repository
git remote add origin https://github.com/YOUR_USERNAME/REPO_NAME.git

# Change branch name to main
git branch -m master main

# Push to GitHub
git push -u origin main

# (Future updates)
git add .
git commit -m "Your commit message"
git push
```

---

## What Gets Deployed

✅ `standalone.html` - Your interactive prototype (main file)  
✅ All documentation files (README.md, etc.)  
✅ Source code (src/ folder - for reference)  

## Accessing Your Live Prototype

Once deployed, share this URL with Altamira:
```
https://YOUR_USERNAME.github.io/REPO_NAME/standalone.html
```

---

## Troubleshooting

### GitHub Pages not showing?
1. Check that repository is **Public** (not Private)
2. Go to Settings > Pages and verify:
   - Source is set to "Deploy from a branch"
   - Branch is `main` (or your branch)
   - Folder is `/root` or `/docs`
3. Wait 2-3 minutes - GitHub Pages takes time to build

### "404 Not Found"?
- Make sure you're accessing the correct URL with `/standalone.html` at the end
- Check that your repository is public

### Want custom domain?
1. Go to Settings > Pages
2. Under "Custom domain", enter your domain (e.g., `altamira-demo.com`)
3. Follow DNS configuration instructions

---

## After Deployment

Your prototype is now live and shareable! You can:

✅ Share the URL with Altamira team  
✅ Embed it in a presentation or proposal  
✅ Use it for demos without needing to host locally  
✅ Get feedback from stakeholders  

## Next Steps

1. **Share with Altamira:**
   ```
   https://YOUR_USERNAME.github.io/altamira-prototype/standalone.html
   ```

2. **Update content:** Any commits to `main` will auto-deploy

3. **Add live data:** Replace synthetic data in `standalone.html` with API calls

4. **Scale:** Migrate to full React app with backend when ready

---

**Your GitHub Pages deployment is now ready!** 🌿
