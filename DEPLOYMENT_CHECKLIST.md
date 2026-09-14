# ✅ GitHub Deployment Checklist

## Pre-Deployment (Do These First)

- [ ] You have a GitHub account (free at https://github.com)
- [ ] Your username is: **valentinaion**
- [ ] You're ready to get a personal access token

## Step 1: Create Repository (Do This First)

- [ ] Go to https://github.com/new
- [ ] Repository name: `altamira-prototype`
- [ ] Set to PUBLIC ⚠️
- [ ] Do NOT initialize with README
- [ ] Click "Create repository"
- [ ] GitHub shows you empty repo page

## Step 2: Push Code (Copy & Paste These Commands)

In your terminal, run:

```bash
cd /home/vaion/altamira-prototype
git remote add origin https://github.com/valentinaion/altamira-prototype.git
git branch -m master main
git push -u origin main
```

When prompted for password:
- [ ] Generate GitHub token: https://github.com/settings/tokens
- [ ] Use token as password (NOT your GitHub password)
- [ ] Or use: `gh auth login` if GitHub CLI installed

- [ ] Push completes successfully (shows 20+ files)

## Step 3: Enable GitHub Pages

- [ ] Go to: https://github.com/valentinaion/altamira-prototype
- [ ] Click Settings (top right)
- [ ] Left sidebar → Pages
- [ ] Source: Select "Deploy from a branch"
- [ ] Branch: Select "main"
- [ ] Folder: Select "/(root)"
- [ ] Click Save
- [ ] Wait 1-2 minutes for GitHub to build

## Step 4: Verify & Share

- [ ] Check: https://valentinaion.github.io/altamira-prototype/standalone.html
- [ ] Prototype loads and is interactive
- [ ] All 3 tabs work (Discover, Dashboard, Tracking)
- [ ] Share URL with Altamira team! 🌿

## After Deployment

- [ ] Email Altamira: https://valentinaion.github.io/altamira-prototype/standalone.html
- [ ] Get feedback from team
- [ ] Make updates locally
- [ ] Push changes: `git push`
- [ ] Changes live in 1-2 minutes

## Troubleshooting

### "Authentication failed"
- [ ] Generate token: https://github.com/settings/tokens
- [ ] Make sure to use token as password, not your GitHub password

### "Repository doesn't exist"
- [ ] Make sure you created repo at step 1
- [ ] Make sure repo is PUBLIC
- [ ] Wait a few seconds for GitHub to show repo

### "GitHub Pages site not found"
- [ ] Make sure repo is PUBLIC
- [ ] Make sure Pages settings are correct (main, /(root))
- [ ] Wait 2-3 minutes (Pages sometimes takes time)
- [ ] Check: https://github.com/valentinaion/altamira-prototype/settings/pages

### "Can't push - permission denied"
- [ ] Check your GitHub token has "repo" permission
- [ ] Regenerate token if needed: https://github.com/settings/tokens
- [ ] Try: `gh auth login` to re-authenticate

## Success Indicators

✅ You'll see:
- Repository at: https://github.com/valentinaion/altamira-prototype
- Live site at: https://valentinaion.github.io/altamira-prototype/standalone.html
- Dashboard with 3 tabs (Discover, Dashboard, Tracking)
- 10 Colombian regenerative projects
- "DEMO DATA" warning on all tabs
- Professional Fluent UI styling

## Next Steps (After Live)

1. Share URL with Altamira
2. Get feedback on UX/features
3. Make updates locally
4. Push changes: `git add . && git commit -m "message" && git push`
5. Site updates in 1-2 minutes

---

**Questions?** See GO_LIVE_NOW.md or GITHUB_DEPLOYMENT.md
