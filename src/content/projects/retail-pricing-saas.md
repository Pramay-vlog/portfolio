---
title: "Enterprise Retail Pricing B2B SaaS"
classification: "AI / AGENTS / B2B SAAS / RETAIL"
level: "LEVEL 03 — PRODUCTION"
status: "COMPLETE"
problem: "Global retail enterprises (such as 7-Eleven, The Home Depot, and Patel Brothers) manage millions of SKUs across multiple geographic regions. Manual pricing updates and competitor tracking lead to margin erosion, slow market response times, and pricing discrepancies."
objective: "Build an Agentic AI-powered B2B SaaS pricing engine that automates competitor price analysis, enforces regional business rules, and enables instant pricing optimization across millions of SKUs."
architecture: "Competitor Market Data -> Node.js / Python Microservices -> Agentic AI Pricing Workflows -> Function Calling Tool Dispatch -> Virtualized Frontend UI"
technologies:
  - "Node.js"
  - "Python"
  - "React"
  - "Agentic AI Loops"
  - "Function Calling"
  - "Structured Outputs"
  - "PostgreSQL"
  - "Redis"
  - "Docker"
  - "GitHub Actions CI/CD"
  - "Virtualization"
challenges:
  - "Rendering and updating millions of SKU pricing records dynamically in the frontend without browser layout blocking or performance degradation."
  - "Keeping high-stakes retail pricing calculations deterministic while delegating competitive market analysis and strategy recommendations to LLMs."
decisions:
  - "Designed Agentic AI workflows integrating LLMs with backend pricing services to analyze competitor pricing, business constraints, and historical trends."
  - "Implemented strict function calling and JSON schema structured outputs to keep core pricing calculation logic outside the LLM."
  - "Optimized frontend performance using DOM list virtualization to enable smooth 60fps rendering of millions of pricing records."
  - "Set up CI/CD pipelines with containerized Docker deployments for rapid, zero-downtime microservice releases."
results: "Delivered a high-performance retail pricing platform capable of processing millions of SKUs with automated competitor alignment and instant pricing updates."
lessons:
  - "Decoupling stochastic AI reasoning from deterministic pricing calculations via schema-bounded function calling guarantees 100% calculation accuracy."
images: []
diagrams: []
links:
  github: "https://github.com/upramay"
---

Mission dossier for Enterprise Retail Pricing B2B SaaS platform.
