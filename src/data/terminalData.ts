export interface TerminalProjectData {
  id: string;
  title: string;
  classification: string;
  status: string;
  objective: string;
}

export interface TerminalResearchData {
  id: string;
  title: string;
  hypothesis: string;
}

export interface TerminalFailureData {
  id: string;
  title: string;
  status: string;
  cause: string;
}

export interface TerminalExperienceData {
  level: string;
  title: string;
  summary: string;
}

export const SYSTEM_SKILLS_DATA = [
  {
    category: 'LANGUAGES & FRAMEWORKS',
    items: ['Python', 'TypeScript', 'JavaScript', 'SQL', 'Node.js', 'Express.js', 'FastAPI', 'Next.js', 'React.js'],
  },
  {
    category: 'AI, LLMs & AGENTS',
    items: ['OpenAI API', 'Anthropic Claude', 'Gemini', 'LangChain', 'LlamaIndex', 'LangGraph', 'MCP', 'AI Agents', 'Function Calling', 'Structured Outputs'],
  },
  {
    category: 'RAG & VECTOR SEARCH',
    items: ['Embeddings', 'Pinecone', 'Qdrant', 'Chroma', 'FAISS', 'Hybrid Search (BM25 + Vector)', 'Cross-Encoder Reranking'],
  },
  {
    category: 'BACKEND, CLOUD & DEVOPS',
    items: ['PostgreSQL', 'MongoDB', 'Redis (Streams / PubSub)', 'Docker', 'AWS (EC2, S3, CloudWatch)', 'Nginx', 'GitHub Actions CI/CD', 'LLMOps'],
  },
];

export const SYSTEM_CONTACT_DATA = {
  subject: 'PRAMAY USADADIYA',
  role: 'AI SOFTWARE ENGINEER (5 YEARS EXPERTISE)',
  status: 'ACTIVE',
  github: 'https://github.com/upramay',
  email: 'upramay@gmail.com',
  phone: '+919328474534',
  location: 'Surat, India',
  education: "Bachelor's in Computer Applications, VNSGU (2019 - 2022)",
};

export const TERMINAL_PROJECTS: TerminalProjectData[] = [
  {
    id: 'juno-health',
    title: 'Healthcare AI Assistant (Juno Health)',
    classification: 'AI / AGENTS / RAG / HEALTHCARE',
    status: 'COMPLETE',
    objective: 'End-to-end RAG and LangGraph agent workflow for symptom analysis, doctor recommendations, and appointment booking.',
  },
  {
    id: 'retail-pricing-saas',
    title: 'Enterprise Retail Pricing B2B SaaS',
    classification: 'AI / AGENTS / B2B SAAS / RETAIL',
    status: 'COMPLETE',
    objective: 'Agentic AI-powered pricing platform for global retailers managing millions of SKUs with competitor analysis & table virtualization.',
  },
  {
    id: 'trading-engine',
    title: 'Real-Time Trading Engine',
    classification: 'SYSTEMS / TCP / NODE.JS / REDIS',
    status: 'COMPLETE',
    objective: 'High-throughput event-driven TCP trading engine with sub-millisecond execution and concurrency safety.',
  },
];

export const TERMINAL_RESEARCH: TerminalResearchData[] = [
  {
    id: 'hybrid-rag-retrieval',
    title: 'Hybrid BM25 + Vector Retrieval for High-Precision RAG',
    hypothesis: 'Combining sparse keyword matching (BM25) with dense vector embeddings improves retrieval recall in domain-specific technical documentation.',
  },
  {
    id: 'llm-reasoning-bounds',
    title: 'Bounded Reasoning Loops in Autonomous Code Agents',
    hypothesis: 'Strict iteration limits and structured schema validation prevent infinite execution loops in autonomous tool-calling pipelines.',
  },
];

export const TERMINAL_FAILURES: TerminalFailureData[] = [
  {
    id: 'context-window-overflow',
    title: 'Context Window Exhaustion in Multi-Step Agent Tasks',
    status: 'RESOLVED',
    cause: 'Unpruned tool responses inflated token context beyond capacity.',
  },
  {
    id: 'page-transition-state-loss',
    title: 'View Transition State Disconnect in React Islands',
    status: 'RESOLVED',
    cause: 'Client-side router replaced DOM node before state hydration completed.',
  },
];

export const TERMINAL_EXPERIENCE: TerminalExperienceData[] = [
  {
    level: '06/2026 – PRESENT',
    title: 'My Juno Health — AI Software Engineer',
    summary: 'Building AI-powered healthcare assistants using RAG, LLMs, LangGraph agent workflows, and vector search.',
  },
  {
    level: '01/2025 – 01/2026',
    title: 'Bacancy Technology — AI Software Engineer',
    summary: 'Designed Agentic AI workflows for B2B SaaS pricing solutions with Node.js/Python microservices & virtualization.',
  },
  {
    level: '07/2022 – 12/2024',
    title: 'LogWinTech — Software Development Engineer',
    summary: 'Backend security mechanisms (OAuth, RBAC, injection defense) and API performance optimization with cursor pagination & Redis.',
  },
  {
    level: '07/2021 – 07/2022',
    title: 'Websolex Infotech — Software Development Engineer',
    summary: 'Facilitated agile development across 10 developers, built reusable React architecture, and optimized REST APIs.',
  },
];
