export interface KnowledgeDocument {
  id: string;
  title: string;
  category:
    | 'projects'
    | 'experience'
    | 'systems'
    | 'technologies'
    | 'research'
    | 'experiments'
    | 'failures'
    | 'achievements';
  summary: string;
  content: string;
  url: string;
  keywords: string[];
}

export const PORTFOLIO_KNOWLEDGE_BASE: KnowledgeDocument[] = [
  // PROFILE & SUMMARY
  {
    id: 'pramay-profile',
    title: 'Pramay Usdadiya — Profile & Education',
    category: 'achievements',
    summary: 'AI Software Engineer (full-stack AI engineer) with 5 years software engineering experience.',
    content:
      "Pramay Usdadiya is an AI Software Engineer with 5 years of software engineering experience building production AI applications, RAG pipelines, AI agents, full-stack web applications, and cloud-native backend systems. Holds a Bachelor's degree in Computer Applications (BCA) from Veer Narmad South Gujarat University (2019-2022). Contact: upramay@gmail.com, +919328474534, India.",
    url: '/experience',
    keywords: ['pramay', 'usdadiya', 'bio', 'profile', 'education', 'bca', 'university', 'vnsgu', 'contact', 'email', 'phone', '5 years'],
  },

  // PROJECTS
  {
    id: 'juno-health',
    title: 'Healthcare AI Assistant (Juno Health)',
    category: 'projects',
    summary: 'AI-powered healthcare assistant with RAG, LangGraph agents, symptom analysis, doctor recommendations, and appointment booking.',
    content:
      'Built with Python, FastAPI, LangGraph, LangChain, Ollama GLM-5.2, Redis, PostgreSQL, MongoDB, Qdrant, Docker, AWS EC2, Nginx, GitHub Actions, and S3. Features document ingestion, intelligent chunking, hybrid vector search (Qdrant), reranking, and LangGraph agent workflow for specialization detection, patient context, assessment generation, and appointment booking.',
    url: '/work/juno-health',
    keywords: ['juno', 'health', 'healthcare', 'rag', 'langgraph', 'fastapi', 'ollama', 'qdrant', 'doctor', 'symptom', 'booking', 'redis', 'aws'],
  },
  {
    id: 'trading-engine',
    title: 'Real-Time Trading Engine',
    category: 'projects',
    summary: 'High-throughput event-driven TCP trading engine built with Node.js, TCP sockets, and Redis Streams.',
    content:
      'Designed a high-throughput TCP server in Node.js to process real-time market data and execute trade instructions with minimal latency. Built an event-driven processing pipeline using Redis Pub/Sub, worker queues, asynchronous consumers, in-memory state management, and a concurrency-safe execution engine supporting STATIC, TRAILING, and REVERSAL strategies.',
    url: '/work/trading-engine',
    keywords: ['trading', 'engine', 'tcp', 'node.js', 'redis', 'streams', 'concurrency', 'latency', 'pubsub', 'mongodb', 'docker', 'pm2'],
  },
  {
    id: 'retail-pricing-saas',
    title: 'Enterprise Retail Pricing B2B SaaS',
    category: 'projects',
    summary: 'Agentic AI workflows and scalable backend pricing engine for global retailers with millions of SKUs.',
    content:
      'Contributed to an Enterprise B2B SaaS retail pricing platform for global retail chains (such as 7-Eleven, The Home Depot, and Patel Brothers) managing millions of SKUs across regions. Designed Agentic AI workflows with LLMs and pricing services to analyze competitor pricing, business constraints, and market trends. Implemented function calling, structured outputs, scalable Node.js/Python microservices, and DOM table virtualization for rendering millions of SKU pricing records at 60fps.',
    url: '/work/retail-pricing-saas',
    keywords: ['retail', 'pricing', 'saas', 'b2b', '7-eleven', 'home depot', 'patel brothers', 'sku', 'agentic ai', 'node.js', 'python', 'virtualization', 'function calling', 'competitor'],
  },

  // WORK EXPERIENCE
  {
    id: 'exp-my-juno-health',
    title: 'My Juno Health — AI Software Engineer (06/2026 – Present)',
    category: 'experience',
    summary: 'AI Software Engineer building AI healthcare assistants with RAG, Ollama, LangGraph, vector search, and microservices.',
    content:
      'Built AI-powered healthcare assistants using RAG and LLMs. Designed AI agent workflows integrating Ollama LLM APIs with backend services. Implemented vector search using embeddings for medical knowledge retrieval. Developed prompt engineering, function calling, structured outputs, scalable AI microservices with Docker and Redis, and optimized latency and token usage.',
    url: '/experience',
    keywords: ['my juno health', 'juno', 'ai software engineer', 'rag', 'ollama', 'vector search', 'embeddings', 'docker', 'redis'],
  },
  {
    id: 'exp-bacancy',
    title: 'Bacancy Technology — AI Software Engineer (01/2025 – 01/2026)',
    category: 'experience',
    summary: 'AI Software Engineer building Agentic AI workflows and backend microservices for B2B SaaS retail pricing applications.',
    content:
      'Contributed to a B2B SaaS application providing pricing solutions for retail businesses with millions of SKUs. Designed Agentic AI workflows with LLMs & pricing services to analyze competitor pricing, business rules, and historical trends. Implemented function calling, structured outputs, scalable Node.js/Python backends, CI/CD Docker pipelines, and frontend table virtualization.',
    url: '/experience',
    keywords: ['bacancy', 'bacancy technology', 'b2b', 'saas', 'pricing', 'sku', 'agentic ai', 'node.js', 'python', 'virtualization', 'docker'],
  },
  {
    id: 'exp-logwintech',
    title: 'LogWinTech — Software Development Engineer (07/2022 – 12/2024)',
    category: 'experience',
    summary: 'Software Development Engineer focusing on backend security, API query optimization, and Redis caching.',
    content:
      'Improved app security with input sanitization, rate limiting, injection defense, parameterized queries, secure cookies, and OAuth RBAC. Improved API performance by fixing large join queries, migrating offset pagination to cursor pagination, and utilizing Redis caching for hot reads.',
    url: '/experience',
    keywords: ['logwintech', 'security', 'oauth', 'rbac', 'parameterized queries', 'cursor pagination', 'redis', 'joins', 'api performance'],
  },
  {
    id: 'exp-websolex',
    title: 'Websolex Infotech — Software Development Engineer (07/2021 – 07/2022)',
    category: 'experience',
    summary: 'Software Development Engineer building reusable React architectures and optimizing REST APIs in an agile environment.',
    content:
      'Facilitated agile development practices collaborating among 10 software developers. Built reusable React components and optimized REST APIs for improved application performance and frontend maintainability.',
    url: '/experience',
    keywords: ['websolex', 'websolex infotech', 'react', 'agile', 'rest api', 'frontend', 'components'],
  },

  // RESEARCH
  {
    id: 'hybrid-rag-retrieval',
    title: 'Hybrid Sparse & Dense Retrieval for Domain RAG',
    category: 'research',
    summary: 'Whitepaper analyzing BM25 sparse + HNSW dense vector search fusion.',
    content:
      'Evaluated 1,000 domain queries comparing BM25 sparse keyword indexing with HNSW dense vector embeddings. Dense vectors alone missed 34% of exact technical code lookups. Hybrid RAG combining sparse and dense search achieved a 94.2% precision-recall on technical document queries.',
    url: '/research/hybrid-rag-retrieval',
    keywords: ['hybrid', 'sparse', 'dense', 'bm25', 'hnsw', 'vector', 'precision', 'recall', 'fusion', 'rrf'],
  },
  {
    id: 'llm-reasoning-bounds',
    title: 'Determinism & Boundary Bounds in Autonomous LLM Reasoning',
    category: 'research',
    summary: 'Whitepaper on runtime JSON schema validation in agent execution loops.',
    content:
      'Tested ReAct agent workflows against unconstrained system prompts vs runtime Zod/JSON-schema validation barriers across multi-step execution tasks. Unconstrained prompts yielded a 22% rate of malformed API arguments; schema enforcement barriers eliminated payload errors at the system boundary.',
    url: '/research/llm-reasoning-bounds',
    keywords: ['determinism', 'agent', 'schema', 'zod', 'validation', 'reasoning', 'bounds', 'react', 'loop'],
  },

  // FAILURES
  {
    id: 'context-window-overflow',
    title: 'Context Window Overflow in Multi-Turn Loops',
    category: 'failures',
    summary: 'Incident post-mortem on token saturation during recursive sub-agent execution.',
    content:
      'Unbounded conversational history aggregation during recursive sub-agent execution loops caused token limit saturation, API gateway timeouts, and degraded response latency. Corrective action: implemented sliding window session memory with automatic semantic summarization.',
    url: '/failures/context-window-overflow',
    keywords: ['failure', 'context', 'window', 'overflow', 'token', 'timeout', 'incident', 'memory', 'summarization'],
  },
  {
    id: 'page-transition-state-loss',
    title: 'Navigation State Loss During Page Transitions',
    category: 'failures',
    summary: 'Post-mortem on full-page reloads breaking client-side terminal state.',
    content:
      'Full-page browser reloads destroyed client-side terminal state and active layout context. Corrective action: integrated Astro View Transitions ClientRouter to maintain SPA-like layout persistence.',
    url: '/failures/page-transition-state-loss',
    keywords: ['failure', 'navigation', 'transition', 'router', 'state', 'astro', 'view-transitions', 'incident'],
  },
];
