# 🎬 AI Movie Insights

An end-to-end AI-powered application that generates **accurate, structured movie insights** (plot hooks, themes, and trivia) for short-form content creators using curated data and LLM reasoning.

---
## 🎯 Problem Statement

Short-form video creators (YouTube Shorts, TikTok) spend **5–10 minutes researching** movie content manually.

This application reduces that time to **< 30 seconds** by generating:
- Engaging **plot hooks**
- Structured **themes**
- Verified **trivia**

---

## 👤 Target User

**Content Creators** (YouTube Shorts, TikTok)

### Job to be Done
> Generate engaging, accurate, and structured movie content ideas instantly.

---

## ✅ Key Features

- 🔍 Search movies by title  
- 📊 View structured movie summary  
- 🤖 Generate AI insights:
  - Plot Hook (grounded in data)
  - Theme Angles (with speculation control)
  - Trivia Cards (verified facts)
- 📋 Copy-ready content for creators  
- 📡 Fully automated ETL pipeline  
- ☁️ Cloud storage with GCP  

---
## 🏗️ System Architecture
User (UI - Next.js)
↓
API Layer (/api/insights)
↓
GCS Bucket (Gold Data)
↓
ETL Pipeline (GitHub Actions)
↓
TMDB API (Raw Data Source)
↓
OpenAI (LLM Reasoning Layer)

---

## 🔄 Data Pipeline (ETL)

### Flow:
1. Fetch data from TMDB API  
2. Normalize and structure data  
3. Store as curated dataset (`movies.json`)  
4. Upload to GCS bucket  
5. App reads from curated data  

---

## 🗂️ Data Layers
Bronze → Raw API data
Silver → Cleaned data
Gold → Curated dataset used by app
---

---

## ⚙️ Tech Stack

| Layer | Technology |
|------|----------|
| Frontend | Next.js |
| Backend | Next.js API Routes |
| AI Layer | OpenAI API |
| Data Source | TMDB API |
| Storage | GCP Cloud Storage |
| ETL | GitHub Actions |
| Deployment | Vercel |

---
## 🧪 Workflow (Required Skills Used)

### 1. 🧠 grill-me
- Validated idea and narrowed scope
- Focused on **content creators use case**

### 2. 📝 write-a-prd
- Defined:
  - Scope
  - Architecture
  - Output contract
  - Evidence policy

### 3. 📌 prd-to-issues
Created structured development slices:

- Slice 1: Search + Summary  
- Slice 2: TMDB
- Slice 3: Insights API + validation  
- Slice 4: Trivia cards  
- Slice 5: Themes + speculation labeling  
- Slice 6: Creator notes  
- Slice 7: Export/copy pack  
- Slice 8: ETL pipeline + GCS  

### 4. 🧪 tdd
- Tests implemented for:
  - API behavior
  - Data validation
  - Output structure

### 5. 🏗️ improve-codebase-architecture
- Refactored:
  - API logic separation  
  - Service layer abstraction  
  - Data access via GCS  

---

## 🔁 GitHub Actions ETL Pipeline

### Trigger:
- On push to `main`
- Manual run (workflow_dispatch)

### Steps:
1. Fetch movie data from TMDB  
2. Transform and normalize  
3. Save to `data/gold/movies.json`  
4. Upload to GCS  

---
## ☁️ Deployment

- Frontend + API → **Vercel**
- Data → **GCP Cloud Storage**
- ETL → **GitHub Actions**

---
## 🏁 Final Summary

This project demonstrates a **complete AI application lifecycle**:

- From raw data ingestion  
- Through transformation and storage  
- Into a structured AI-powered user interface  

All while enforcing **strict data grounding and reliability constraints**.

