#!/bin/bash
# Altamira Regenerative Finance Prototype - GitHub Pages Deployment Script

set -e

GITHUB_USERNAME="valentinaion"
REPO_NAME="altamira-prototype"
REPO_URL="https://github.com/${GITHUB_USERNAME}/${REPO_NAME}.git"

echo "═══════════════════════════════════════════════════════════════════════════"
echo "  Altamira Prototype - GitHub Pages Deployment"
echo "═══════════════════════════════════════════════════════════════════════════"
echo ""
echo "This script will:"
echo "  1. Configure git with your GitHub credentials"
echo "  2. Rename master branch to main"
echo "  3. Push to: $REPO_URL"
echo "  4. Provide live URL"
echo ""
echo "⚠️  BEFORE RUNNING:"
echo "  • Create repository at: https://github.com/new"
echo "  • Name: $REPO_NAME"
echo "  • Visibility: PUBLIC"
echo "  • Do NOT initialize with README"
echo ""

# Check if repository already exists
if [ -d "/home/vaion/altamira-prototype/.git" ]; then
    echo "✅ Git repository found"
else
    echo "❌ Git repository not found!"
    exit 1
fi

echo ""
echo "Step 1: Adding remote repository..."
cd /home/vaion/altamira-prototype
git remote add origin "$REPO_URL" 2>/dev/null || git remote set-url origin "$REPO_URL"
echo "✅ Remote added: $REPO_URL"

echo ""
echo "Step 2: Renaming master to main..."
git branch -m master main 2>/dev/null || echo "   (Branch might already be main)"
echo "✅ Branch: main"

echo ""
echo "Step 3: Pushing to GitHub..."
echo "   (You may be prompted for GitHub credentials)"
git push -u origin main
echo "✅ Code pushed to GitHub"

echo ""
echo "═══════════════════════════════════════════════════════════════════════════"
echo ""
echo "✅ CODE PUSHED SUCCESSFULLY!"
echo ""
echo "Now enable GitHub Pages:"
echo ""
echo "  1. Go to: https://github.com/${GITHUB_USERNAME}/${REPO_NAME}/settings/pages"
echo "  2. Source: 'Deploy from a branch'"
echo "  3. Branch: main"
echo "  4. Folder: / (root)"
echo "  5. Click Save"
echo "  6. Wait 1-2 minutes for GitHub to build"
echo ""
echo "Your live prototype:"
echo "  https://${GITHUB_USERNAME}.github.io/${REPO_NAME}/standalone.html"
echo ""
echo "═══════════════════════════════════════════════════════════════════════════"
