import {
  defaultRetrievalEngine,
  type RetrievalResult,
} from './retrieval/retrievalEngine';
import { trackEvent } from './analytics';

export interface SourceCitation {
  id: string;
  title: string;
  type: 'PROJECT' | 'RESEARCH' | 'FAILURE' | 'EXPERIENCE';
  url: string;
}

export interface AskResponse {
  status: 'SUPPORTED' | 'INSUFFICIENT_EVIDENCE';
  answer: string;
  failureHeader?: string;
  failureSubtext?: string;
  failureMotto?: string;
  sources: SourceCitation[];
  relatedProjects: Array<{ id: string; title: string }>;
}

export const PROCESSING_STEPS = [
  'QUERY RECEIVED',
  'IDENTIFYING RELEVANT SYSTEMS...',
  'SEARCHING PROJECT ARCHIVE...',
  'MATCHING ENGINEERING EVIDENCE...',
  'ANALYZING PROJECT DOCUMENTATION...',
  'RESPONSE GENERATED',
];

const INSUFFICIENT_EVIDENCE_RESPONSE: AskResponse = {
  status: 'INSUFFICIENT_EVIDENCE',
  failureHeader: 'QUERY FAILED',
  failureSubtext: 'No evidence found in portfolio archives.',
  failureMotto: "I won't fabricate an answer.",
  answer:
    'No verified evidence was found in the declassified engineering archives to support or answer this query. System policy prohibits outputting unverified claims.',
  sources: [],
  relatedProjects: [],
};

// Known false claims or invalid query triggers
const FALSE_CLAIM_PATTERNS = [
  'quantum',
  'supercomputer',
  'blockchain',
  'crypto',
  'alien',
  'secret project',
  'secret',
  'capital of',
  'president of',
  'weather in',
];

/**
 * Query the Ask system with strict grounding & abstention enforcement.
 */
export async function queryAskSystem(
  query: string,
  onStepChange?: (stepIndex: number) => void
): Promise<AskResponse> {
  const lowerQuery = query.toLowerCase();

  trackEvent('ask_query', { queryLength: query.length });

  // Simulate high-level processing steps without exposing chain-of-thought
  for (let i = 0; i < PROCESSING_STEPS.length - 1; i++) {
    if (onStepChange) onStepChange(i);
    await new Promise((res) => setTimeout(res, 160));
  }

  if (onStepChange) onStepChange(PROCESSING_STEPS.length - 1);

  // 1. Detect false claims or completely unrelated out-of-domain queries
  if (FALSE_CLAIM_PATTERNS.some((pattern) => lowerQuery.includes(pattern))) {
    trackEvent('ask_abstained', { query: lowerQuery.slice(0, 50) });
    return INSUFFICIENT_EVIDENCE_RESPONSE;
  }

  // 2. Perform modular keyword search against portfolio knowledge base
  const searchResults: RetrievalResult[] = await defaultRetrievalEngine.search({
    query,
    topK: 3,
  });

  // 3. Check for insufficient evidence / relevance score threshold
  if (!searchResults || searchResults.length === 0 || searchResults[0].score < 2.0) {
    trackEvent('ask_abstained', { query: lowerQuery.slice(0, 50) });
    return INSUFFICIENT_EVIDENCE_RESPONSE;
  }

  // 4. Construct SUPPORTED response with mandatory supporting sources
  const topResult = searchResults[0];
  const sources: SourceCitation[] = searchResults.map((res) => {
    let typeTag: 'PROJECT' | 'RESEARCH' | 'FAILURE' | 'EXPERIENCE' = 'PROJECT';
    if (res.document.category === 'research') typeTag = 'RESEARCH';
    if (res.document.category === 'failures') typeTag = 'FAILURE';
    if (res.document.category === 'experience') typeTag = 'EXPERIENCE';

    return {
      id: res.document.id,
      title: res.document.title,
      type: typeTag,
      url: res.document.url,
    };
  });

  // Deduplicate related projects
  const relatedProjectsSet = new Set<string>();
  searchResults.forEach((r) => {
    if (r.document.category === 'projects' || r.document.url.startsWith('/projects/')) {
      relatedProjectsSet.add(
        JSON.stringify({ id: r.document.id, title: r.document.title.toUpperCase() })
      );
    }
  });

  const relatedProjects = Array.from(relatedProjectsSet).map((str) => JSON.parse(str));

  trackEvent('ask_answered', { sourcesCount: sources.length });

  return {
    status: 'SUPPORTED',
    answer: topResult.document.content,
    sources,
    relatedProjects,
  };
}
