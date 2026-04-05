@echo off
REM 🚀 AUTOMATED DEPLOYMENT SCRIPT FOR WINDOWS - Students Tools
REM This script handles: Git setup → GitHub push → Vercel deployment
REM Usage: deploy.bat

setlocal enabledelayedexpansion
set "GREEN=[92m"
set "BLUE=[94m"
set "YELLOW=[93m"
set "NC=[0m"

echo.
echo 🚀 Students Tools - Automated Deployment Script (Windows)
echo ============================================================
echo.

REM Check if next.config.js exists
if not exist "next.config.js" (
    echo ❌ next.config.js not found. Please run this from project root.
    pause
    exit /b 1
)

REM Step 1: Initialize Git
echo %BLUE%[1/5] Setting up Git repository...%NC%
if not exist ".git" (
    call git init
    echo %GREEN%✓ Git repository initialized%NC%
) else (
    echo %GREEN%✓ Git repository already exists%NC%
)
echo.

REM Step 2: Configure git user
echo %BLUE%[2/5] Configuring Git user...%NC%
for /f %%A in ('git config --global user.name') do set "git_name=%%A"
if "!git_name!"=="" (
    set /p git_name="Enter your Git name: "
    call git config --global user.name "!git_name!"
)
for /f %%A in ('git config --global user.email') do set "git_email=%%A"
if "!git_email!"=="" (
    set /p git_email="Enter your Git email: "
    call git config --global user.email "!git_email!"
)
echo %GREEN%✓ Git configured%NC%
echo.

REM Step 3: Commit changes
echo %BLUE%[3/5] Staging and committing files...%NC%
call git add .
call git commit -m "Deploy: Students Tools - GPA, Loan ^& Grade Calculators - AdSense optimized"
echo %GREEN%✓ Changes committed%NC%
echo.

REM Step 4: Get GitHub URL
echo %BLUE%[4/5] GitHub repository setup...%NC%
for /f %%A in ('git config --get remote.origin.url') do set "remote_url=%%A"
if "!remote_url!"=="" (
    echo.
    echo 📋 No GitHub remote found. Steps to create:
    echo    1. Go to https://github.com/new
    echo    2. Create new repository named "studentstools"
    echo    3. Copy the HTTPS URL
    echo.
    set /p github_url="Paste GitHub Repository HTTPS URL: "
    call git remote add origin !github_url!
    echo %GREEN%✓ Remote added%NC%
) else (
    echo %GREEN%✓ Remote configured: !remote_url!%NC%
)
echo.

REM Step 5: Push to GitHub
echo %BLUE%[5/5] Pushing to GitHub...%NC%
call git branch -M main
call git push -u origin main
echo %GREEN%✓ Pushed to GitHub%NC%
echo.

echo ============================================================
echo %GREEN%✅ DEPLOYMENT SETUP COMPLETE!%NC%
echo ============================================================
echo.
echo 📋 NEXT STEPS:
echo.
echo 1. Go to https://vercel.com
echo 2. Sign up with your GitHub account
echo 3. Click "Add New Project"
echo 4. Select "studentstools" repository
echo 5. Click "Deploy" button
echo.
echo 🌐 AFTER VERCEL DEPLOYMENT:
echo.
echo 1. Buy domain: studentstools.site ($2)
echo 2. In Vercel Dashboard: Settings → Domains
echo 3. Add studentstools.site
echo 4. Update DNS at registrar to Vercel nameservers
echo 5. Wait 24-48 hours for DNS propagation
echo.
echo 📊 AFTER DOMAIN IS LIVE:
echo.
echo 1. Google Search Console: https://search.google.com/search-console
echo 2. Add sitemap: sitemap.xml to Google
echo 3. Wait 30 days for organic traffic
echo 4. Apply to AdSense: https://www.google.com/adsense
echo.
echo 📖 For detailed help, check DEPLOYMENT.md
echo.
pause
