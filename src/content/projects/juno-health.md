---
title: "Healthcare AI Assistant (Juno Health)"
classification: "AI / AGENTS / RAG / HEALTHCARE"
level: "LEVEL 02 — AI"
status: "COMPLETE"
problem: "Healthcare information processing requires grounded retrieval, multi-step agent reasoning, and symptom-based doctor recommendations without clinical hallucinations."
objective: "Build an end-to-end RAG and LangGraph agent workflow for symptom analysis, doctor recommendations, and appointment booking."
architecture: "User Query -> FastAPI Gateway -> LangGraph Agent Loop -> Vector Search (Qdrant) -> Redis Cache -> Grounded LLM Response"
technologies:
  - "Python"
  - "FastAPI"
  - "LangGraph"
  - "LangChain"
  - "Ollama GLM-5.2"
  - "Redis"
  - "PostgreSQL"
  - "MongoDB"
  - "Qdrant"
  - "Docker"
  - "AWS EC2"
  - "Nginx"
  - "GitHub Actions"
  - "CloudWatch"
  - "S3"
challenges:
  - "Ensuring strict evidence grounding to avoid hallucinated recommendations in symptom analysis."
  - "Managing stateful conversation memory across long-running patient interactions while controlling token usage."
decisions:
  - "Implemented a hybrid retrieval pipeline combining vector similarity search with metadata filtering."
  - "Built an AI agent workflow using LangGraph for Specialization Detection, Medical Knowledge Retrieval, and Assessment Generation."
  - "Added Redis-based caching for embeddings, frequently retrieved contexts, and AI responses to reduce latency."
  - "Containerized services with Docker and deployed on AWS EC2 behind Nginx with zero-downtime GitHub Actions CI/CD."
results: "Successfully delivered a production-ready AI healthcare assistant with predictable JSON-schema validated outputs and sub-second response caching."
lessons:
  - "Strict schema validation and confidence bounds outperform aggressive model guesswork in clinical domain systems."
images: []
diagrams: []
links:
  live: "https://myjunohealth.com"
---

Mission dossier for Healthcare AI Assistant (Juno Health) system architecture.
