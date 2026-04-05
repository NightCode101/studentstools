#!/bin/bash
# 🚀 AUTOMATED DEPLOYMENT SCRIPT - Students Tools
# This script handles: Git setup → GitHub push → Vercel deployment
# Usage: bash deploy.sh

set -e  # Exit on any error

echo "🚀 Students Tools - Automated Deployment Script"
echo "=============================================="
echo ""

# Color codes
GREEN='\033[0;32m'
BLUE='\033[0;34m'
YELLOW='\033[1;33m'
NC='\033[0m' # No Color

# Check prerequisites
echo -e "${BLUE}[1/5] Checking prerequisites...${NC}"
if ! command -v git &> /dev/null; then
    echo "❌ Git not installed. Please install git first."
    exit 1
fi
if ! command -v npm &> /dev/null; then
    echo "❌ npm not installed. Please install Node.js first."
    exit 1
fi
echo -e "${GREEN}✓ Git and npm found${NC}"

# Verify we're in the right directory
if [ ! -f "next.config.js" ]; then
    echo "❌ next.config.js not found. Please run this from project root."
    exit 1
fi
echo -e "${GREEN}✓ In correct directory${NC}"
echo ""

# Step 1: Initialize/Update Git
echo -e "${BLUE}[2/5] Setting up Git repository...${NC}"
if [ ! -d ".git" ]; then
    git init
    echo -e "${GREEN}✓ Git repository initialized${NC}"
else
    echo -e "${GREEN}✓ Git repository already exists${NC}"
fi

# Configure git (if not already configured)
if [ -z "$(git config --global user.name)" ]; then
    echo "   Git user.name not set. Enter your name:"
    read -p "   Name: " git_name
    git config --global user.name "$git_name"
fi

if [ -z "$(git config --global user.email)" ]; then
    echo "   Git user.email not set. Enter your email:"
    read -p "   Email: " git_email
    git config --global user.email "$git_email"
fi

# Step 2: Commit changes
echo -e "${BLUE}[3/5] Staging and committing files...${NC}"
git add .
if git diff-index --quiet HEAD --; then
    echo -e "${YELLOW}⚠ No changes to commit${NC}"
else
    git commit -m "Deploy: Students Tools - GPA, Loan & Grade Calculators

- 3 interactive financial tools
- 20 high-quality blog articles
- AdSense-optimized design
- Mobile responsive layout
- PHP grading system support
- Ready for production"
    echo -e "${GREEN}✓ Changes committed${NC}"
fi

# Step 3: Get/verify GitHub info
echo -e "${BLUE}[4/5] GitHub repository information...${NC}"
if [ -z "$(git config --get remote.origin.url)" ]; then
    echo ""
    echo "   No GitHub remote found. You need to:"
    echo "   1. Go to https://github.com/new"
    echo "   2. Create a new repository: 'studentstools'"
    echo "   3. Copy the HTTPS URL"
    echo ""
    read -p "   GitHub Repository HTTPS URL: " github_url
    git remote add origin "$github_url"
    echo -e "${GREEN}✓ Remote added${NC}"
else
    echo -e "${GREEN}✓ Remote already configured${NC}"
    echo "   URL: $(git config --get remote.origin.url)"
fi

# Step 4: Push to GitHub
echo -e "${BLUE}[5/5] Pushing to GitHub...${NC}"
git branch -M main 2>/dev/null || true
git push -u origin main
echo -e "${GREEN}✓ Pushed to GitHub${NC}"

echo ""
echo "=============================================="
echo -e "${GREEN}✅ DEPLOYMENT SETUP COMPLETE!${NC}"
echo "=============================================="
echo ""
echo "📋 Next Steps:"
echo "1. Go to https://vercel.com"
echo "2. Sign up with GitHub"
echo "3. Click 'Add New Project'"
echo "4. Select 'studentstools' repository"
echo "5. Click 'Deploy'"
echo ""
echo "🌐 After Vercel deployment:"
echo "1. Buy domain: studentstools.site ($2 from Namecheap)"
echo "2. Add domain to Vercel (Settings → Domains)"
echo "3. Update DNS at registrar to Vercel nameservers"
echo "4. Wait 24-48 hours for DNS propagation"
echo ""
echo "📊 Then track your progress:"
echo "- Google Search Console: https://search.google.com/search-console"
echo "- Google Analytics: https://analytics.google.com"
echo "- AdSense: https://www.google.com/adsense (after 30 days)"
echo ""
echo -e "${BLUE}Questions? Check DEPLOYMENT.md${NC}"
