export interface Boss {
  id: string;
  code: string;
  name: string;
  category: string;
  description: string;
  whyItMatters: string;
  solutionStrategy: string;
  evidenceText?: string;
  relatedProjectId?: string;
  relatedProjectName?: string;
  status: 'DEFEATED' | 'ENGAGED' | 'LOCKED';
}

export interface Level {
  id: string;
  levelNumber: string;
  title: string;
  subtitle: string;
  description: string;
  status: 'COMPLETED' | 'ACTIVE' | 'UPCOMING';
  bosses: Boss[];
}

export const ENGINEERING_LEVELS: Level[] = [
  {
    id: 'level-01-backend',
    levelNumber: '01',
    title: 'BACKEND',
    subtitle: 'SYSTEM FOUNDATION & HIGH-THROUGHPUT PIPELINES',
    description: 'Mastering backend engineering fundamentals: API gateway design, distributed data stores, concurrency control, and bottleneck elimination.',
    status: 'COMPLETED',
    bosses: [
      {
        id: 'b-01-scalability',
        code: 'BOSS 01-A',
        name: 'SCALABILITY',
        category: 'SYSTEM DESIGN',
        description: 'Handling horizontal scale requirements and high request throughput across distributed nodes.',
        whyItMatters: 'System bottlenecks under peak traffic cause request timeouts and service degradation.',
        solutionStrategy: 'Stateless service layers, load balancing, and async message queue buffering.',
        status: 'DEFEATED',
      },
      {
        id: 'b-01-db-bottleneck',
        code: 'BOSS 01-B',
        name: 'DATABASE BOTTLENECK',
        category: 'DATA ENGINE',
        description: 'Eliminating N+1 queries, unindexed lookups, and connection pool exhaustion.',
        whyItMatters: 'Unoptimized queries saturate database CPU and block concurrent application threads.',
        solutionStrategy: 'Read-replicas, index optimization, query batching, and redis caching.',
        status: 'DEFEATED',
      },
      {
        id: 'b-01-distributed-systems',
        code: 'BOSS 01-C',
        name: 'DISTRIBUTED SYSTEMS',
        category: 'INFRASTRUCTURE',
        description: 'Managing network partitions, eventual consistency, and distributed lock contention.',
        whyItMatters: 'Distributed data synchronization failures lead to split-brain states and data corruption.',
        solutionStrategy: 'Idempotent request keys, distributed locks, and retry fallback circuits.',
        status: 'DEFEATED',
      },
      {
        id: 'b-01-concurrency',
        code: 'BOSS 01-D',
        name: 'CONCURRENCY',
        category: 'RUNTIME',
        description: 'Preventing race conditions, shared memory corruption, and deadlocks under concurrent load.',
        whyItMatters: 'Unprotected shared state leads to silent data corruption during concurrent write operations.',
        solutionStrategy: 'Atomic operations, row-level pessimistic locking, and thread isolation.',
        status: 'DEFEATED',
      },
      {
        id: 'b-01-api-design',
        code: 'BOSS 01-E',
        name: 'API DESIGN',
        category: 'INTERFACE',
        description: 'Designing clean, typed, backward-compatible schemas and rate-limited endpoints.',
        whyItMatters: 'Poor API contracts increase integration friction and allow malformed inputs to reach core logic.',
        solutionStrategy: 'Strict OpenAPI/Zod validation schemas and token-bucket rate limiters.',
        status: 'DEFEATED',
      },
    ],
  },
  {
    id: 'level-02-ai',
    levelNumber: '02',
    title: 'AI',
    subtitle: 'REASONING SYSTEMS, AGENTS & HYBRID RAG',
    description: 'Transitioning from deterministic backends to stochastic AI systems: combating hallucinations, managing context limits, and building autonomous agent loops.',
    status: 'ACTIVE',
    bosses: [
      {
        id: 'b-02-hallucination',
        code: 'BOSS 02-A',
        name: 'HALLUCINATION',
        category: 'GROUNDING',
        description: 'Preventing non-deterministic LLMs from fabricating false medical or technical facts.',
        whyItMatters: 'Unverifiable AI generations cause medical misinformation and loss of user trust.',
        solutionStrategy: 'Strict RAG grounding, confidence score thresholds, and explicit abstention triggers.',
        evidenceText: 'Enforced explicit abstention when retrieval evidence falls below confidence thresholds in clinical queries.',
        relatedProjectId: 'juno-health',
        relatedProjectName: 'JUNO HEALTH',
        status: 'DEFEATED',
      },
      {
        id: 'b-02-context-window',
        code: 'BOSS 02-B',
        name: 'CONTEXT WINDOW',
        category: 'PROMPT ENGINE',
        description: 'Overcoming finite token limits and context window degradation in multi-turn sessions.',
        whyItMatters: 'Conversational history bloat degrades LLM reasoning quality and causes token budget saturation.',
        solutionStrategy: 'Sliding window session memory, dense vector retrieval, and automated context summarization.',
        evidenceText: 'Implemented sliding window session memory with automatic semantic summarization during execution loops.',
        relatedProjectId: 'juno-health',
        relatedProjectName: 'JUNO HEALTH',
        status: 'DEFEATED',
      },
      {
        id: 'b-02-tool-selection',
        code: 'BOSS 02-C',
        name: 'TOOL SELECTION',
        category: 'AGENTS',
        description: 'Ensuring autonomous agents pick valid API tools with correct parameter schemas.',
        whyItMatters: 'Malformed tool parameter dispatch causes execution runtime crashes.',
        solutionStrategy: 'ReAct agent loops, JSON schema constraint validation, and retry parsers.',
        status: 'DEFEATED',
      },
      {
        id: 'b-02-retrieval',
        code: 'BOSS 02-D',
        name: 'RETRIEVAL',
        category: 'VECTOR SEARCH',
        description: 'Maximizing precision and recall when searching high-dimensional vector spaces.',
        whyItMatters: 'Dense vectors alone miss technical identifiers; pure keyword search misses semantic intent.',
        solutionStrategy: 'Hybrid BM25 sparse + HNSW dense vector search with cross-encoder re-ranking.',
        evidenceText: 'Adopted hybrid sparse/dense vector search with re-ranking for domain medical documents.',
        relatedProjectId: 'juno-health',
        relatedProjectName: 'JUNO HEALTH',
        status: 'DEFEATED',
      },
      {
        id: 'b-02-memory',
        code: 'BOSS 02-E',
        name: 'MEMORY',
        category: 'STATE MANAGEMENT',
        description: 'Maintaining long-term episodic memory across stateless HTTP client requests.',
        whyItMatters: 'Stateless REST endpoints lose agent reasoning context between user interaction steps.',
        solutionStrategy: 'Vector-backed long-term memory index paired with Redis session state.',
        status: 'DEFEATED',
      },
      {
        id: 'b-02-agent-reliability',
        code: 'BOSS 02-F',
        name: 'AGENT RELIABILITY',
        category: 'AUTONOMY',
        description: 'Preventing infinite recursive agent execution loops and unhandled tool errors.',
        whyItMatters: 'Uncontrolled agent loops consume infinite API credits and hang user browser requests.',
        solutionStrategy: 'Strict max-step execution budgets, cycle detection, and fallback handlers.',
        status: 'ENGAGED',
      },
    ],
  },
  {
    id: 'level-03-production',
    levelNumber: '03',
    title: 'PRODUCTION',
    subtitle: 'RELIABILITY, LATENCY & PRODUCTION SURVIVAL',
    description: 'Deploying AI systems to real production traffic: minimizing latency, controlling API costs, ensuring observability, and enforcing security.',
    status: 'ACTIVE',
    bosses: [
      {
        id: 'b-03-latency',
        code: 'BOSS 03-A',
        name: 'LATENCY',
        category: 'PERFORMANCE',
        description: 'Reducing multi-stage RAG inference pipeline delays for real-time user experiences.',
        whyItMatters: 'Long generation delays ruin user engagement and cause client HTTP timeouts.',
        solutionStrategy: 'Streaming LLM tokens, parallel vector queries, and aggressive response caching.',
        status: 'ENGAGED',
      },
      {
        id: 'b-03-cost',
        code: 'BOSS 03-B',
        name: 'COST',
        category: 'FINOPS',
        description: 'Controlling foundation model token costs under spike production traffic.',
        whyItMatters: 'Unoptimized LLM calls quickly exhaust production infrastructure budgets.',
        solutionStrategy: 'Small model query classifiers, prompt compression, and local embedding models.',
        status: 'ENGAGED',
      },
      {
        id: 'b-03-failure',
        code: 'BOSS 03-C',
        name: 'FAILURE',
        category: 'RESILIENCE',
        description: 'Surviving upstream LLM provider outages, rate limits, and network timeouts.',
        whyItMatters: 'Third-party API downtime directly breaks dependent web application services.',
        solutionStrategy: 'Multi-provider failover routing, circuit breakers, and graceful degradation.',
        evidenceText: 'Implemented multi-provider failover routing and circuit breakers for LLM API reliability.',
        relatedProjectId: 'retail-pricing-saas',
        relatedProjectName: 'RETAIL PRICING SAAS',
        status: 'DEFEATED',
      },
      {
        id: 'b-03-observability',
        code: 'BOSS 03-D',
        name: 'OBSERVABILITY',
        category: 'MONITORING',
        description: 'Tracing multi-step agent reasoning paths, latency attribution, and token usage.',
        whyItMatters: 'Black-box model inference makes debugging production failures nearly impossible.',
        solutionStrategy: 'Structured event telemetry, step spans, and confidence logging.',
        status: 'ENGAGED',
      },
      {
        id: 'b-03-deployment',
        code: 'BOSS 03-E',
        name: 'DEPLOYMENT',
        category: 'DEVOPS',
        description: 'Automating microservice containerization, edge deployment, and CI/CD validation pipelines.',
        whyItMatters: 'Manual deployment steps introduce human error and slow down feature iteration.',
        solutionStrategy: 'Docker containerization, Nginx reverse proxy, and zero-downtime CI/CD rollout strategies.',
        evidenceText: 'Automated containerized microservice deployments with zero-downtime GitHub Actions pipelines.',
        relatedProjectId: 'trading-engine',
        relatedProjectName: 'TRADING ENGINE',
        status: 'DEFEATED',
      },
      {
        id: 'b-03-security',
        code: 'BOSS 03-F',
        name: 'SECURITY',
        category: 'HARDENING',
        description: 'Preventing prompt injection attacks, API key exposure, and data leakage.',
        whyItMatters: 'Exposed API keys or unconstrained prompts expose systems to data exfiltration.',
        solutionStrategy: 'Server-side API key isolation, input sanitization, and response filtering.',
        status: 'DEFEATED',
      },
    ],
  },
];
