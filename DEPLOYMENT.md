# PRAMAY.OS — Vercel Deployment Guide

This guide details step-by-step instructions for deploying **PRAMAY.OS** to Vercel as a high-performance static frontend site connected to an optional external AI backend API.

---

## 1. Architecture Overview

* **Frontend**: Astro 5 (Static Generation / `output: 'static'`). Bundles 100% pre-rendered HTML, CSS, and isolated React islands for interactive client states.
* **Backend / AI API**: Decoupled external API (FastAPI, Flask, or Node.js) connected via `PUBLIC_ASK_API_ENDPOINT`. If unconfigured, PRAMAY.OS gracefully operates using its internal client-side portfolio retrieval index.

---

## 2. Vercel Configuration Settings

When importing the project into the [Vercel Dashboard](https://vercel.com/new), configure the following settings:

| Setting Key | Value | Notes |
| :--- | :--- | :--- |
| **Framework Preset** | `Astro` | Vercel auto-detects Astro |
| **Build Command** | `npm run build` | Runs Astro static site generator |
| **Output Directory** | `dist` | Default build output folder |
| **Install Command** | `npm install` | Standard package installer |
| **Node.js Version** | `18.x` or `20.x` | Required runtime version |

---

## 3. Environment Variables Setup

Configure the following environment variables in the Vercel Dashboard under **Project Settings &rarr; Environment Variables**:

```bash
# Public Canonical Site URL
PUBLIC_SITE_URL=https://pramay-os.com

# Grounded RAG AI Backend Endpoint (Optional)
# Example: https://api.pramay-os.com/v1/ask
PUBLIC_ASK_API_ENDPOINT=
```

---

## 4. Step-by-Step Vercel Deployment Instructions

### Option A: Via Vercel Dashboard (Recommended)

1. Push your code to GitHub / GitLab / Bitbucket.
2. Go to [Vercel Dashboard](https://vercel.com/new) and click **"Add New Project"**.
3. Select your `pramay-os` repository.
4. Verify the build settings:
   - **Framework**: `Astro`
   - **Root Directory**: `./`
   - **Build Command**: `npm run build`
   - **Output Directory**: `dist`
5. Add the Environment Variables (`PUBLIC_SITE_URL`, `PUBLIC_ASK_API_ENDPOINT`).
6. Click **"Deploy"**.

### Option B: Via Vercel CLI

```bash
# 1. Install Vercel CLI globally (if not already installed)
npm install -g vercel

# 2. Login to your Vercel account
vercel login

# 3. Preview deployment (Development / Staging)
vercel

# 4. Production deployment
vercel --prod
```

---

## 5. Post-Deployment Verification Checklist

Once Vercel completes deployment, verify the following URLs:

* [x] `https://<your-app>.vercel.app/` &rarr; Boot Screen
* [x] `https://<your-app>.vercel.app/desktop` &rarr; Desktop OS Shell
* [x] `https://<your-app>.vercel.app/systems` &rarr; 2D Architecture Canvas
* [x] `https://<your-app>.vercel.app/resume` &rarr; Redirects to `/classified`
* [x] `https://<your-app>.vercel.app/ask` &rarr; Grounded Ask RAG Interface
* [x] `https://<your-app>.vercel.app/sitemap.xml` &rarr; Dynamic XML Sitemap
* [x] `https://<your-app>.vercel.app/robots.txt` &rarr; Crawler Configuration
