import {
  PORTFOLIO_KNOWLEDGE_BASE,
  type KnowledgeDocument,
} from './knowledgeIndex';

export interface RetrievalQuery {
  query: string;
  categoryFilter?: string[];
  topK?: number;
}

export interface RetrievalResult {
  document: KnowledgeDocument;
  score: number;
  matchedTerms: string[];
}

export interface RetrievalEngine {
  search(query: RetrievalQuery): Promise<RetrievalResult[]>;
}

const STOPWORDS = new Set([
  'how',
  'what',
  'does',
  'is',
  'the',
  'a',
  'an',
  'in',
  'on',
  'for',
  'of',
  'to',
  'and',
  'or',
  'it',
  'with',
  'by',
  'about',
  'work',
  'show',
  'me',
  'tell',
]);

export class KeywordRetrievalEngine implements RetrievalEngine {
  private documents: KnowledgeDocument[];

  constructor(documents: KnowledgeDocument[] = PORTFOLIO_KNOWLEDGE_BASE) {
    this.documents = documents;
  }

  public async search(queryParams: RetrievalQuery): Promise<RetrievalResult[]> {
    const { query, categoryFilter, topK = 3 } = queryParams;

    // 1. Tokenize query
    const rawTokens = query
      .toLowerCase()
      .replace(/[^a-z0-9\s-]/g, ' ')
      .split(/\s+/)
      .filter((t) => t.length > 1 && !STOPWORDS.has(t));

    if (rawTokens.length === 0) {
      return [];
    }

    const results: RetrievalResult[] = [];

    // 2. Score documents
    for (const doc of this.documents) {
      if (categoryFilter && categoryFilter.length > 0) {
        if (!categoryFilter.includes(doc.category)) {
          continue;
        }
      }

      let docScore = 0;
      const matchedTerms = new Set<string>();

      const titleLower = doc.title.toLowerCase();
      const summaryLower = doc.summary.toLowerCase();
      const contentLower = doc.content.toLowerCase();
      const keywordsLower = doc.keywords.map((k) => k.toLowerCase());

      for (const token of rawTokens) {
        let matchedInDoc = false;

        // Title match (Weight: 4.0)
        if (titleLower.includes(token)) {
          docScore += 4.0;
          matchedInDoc = true;
        }

        // Keywords match (Weight: 3.0)
        if (keywordsLower.some((kw) => kw.includes(token) || token.includes(kw))) {
          docScore += 3.0;
          matchedInDoc = true;
        }

        // Summary match (Weight: 2.0)
        if (summaryLower.includes(token)) {
          docScore += 2.0;
          matchedInDoc = true;
        }

        // Content match (Weight: 1.0)
        if (contentLower.includes(token)) {
          docScore += 1.0;
          matchedInDoc = true;
        }

        if (matchedInDoc) {
          matchedTerms.add(token);
        }
      }

      // Bonus for multiple matched tokens
      if (matchedTerms.size > 1) {
        docScore *= 1.3;
      }

      // Minimum score threshold for relevance
      if (docScore >= 2.0 && matchedTerms.size > 0) {
        results.push({
          document: doc,
          score: Math.round(docScore * 10) / 10,
          matchedTerms: Array.from(matchedTerms),
        });
      }
    }

    // 3. Sort by score descending and return topK
    results.sort((a, b) => b.score - a.score);

    return results.slice(0, topK);
  }
}

// Global engine instance
export const defaultRetrievalEngine = new KeywordRetrievalEngine();
