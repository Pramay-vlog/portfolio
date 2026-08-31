import { defineCollection, z } from 'astro:content';
import { glob } from 'astro/loaders';

const projects = defineCollection({
  loader: glob({ pattern: '**/*.{md,mdx}', base: './src/content/projects' }),
  schema: z.object({
    title: z.string(),
    classification: z.string(),
    level: z.string(),
    status: z.enum(['COMPLETE', 'IN_PROGRESS', 'CLASSIFIED', 'MAINTENANCE']),
    problem: z.string(),
    objective: z.string(),
    architecture: z.string(),
    architectureNodes: z
      .array(
        z.object({
          id: z.string(),
          label: z.string(),
          type: z.string().optional(),
          targets: z.array(z.string()).optional(),
        })
      )
      .optional(),
    technologies: z.array(z.string()),
    challenges: z.array(z.string()),
    failures: z.array(z.string()).optional(),
    decisions: z.array(z.string()),
    results: z.string(),
    lessons: z.array(z.string()),
    images: z.array(z.string()).optional(),
    diagrams: z.array(z.string()).optional(),
    links: z
      .object({
        github: z.string().optional(),
        live: z.string().optional(),
        docs: z.string().optional(),
      })
      .optional(),
  }),
});

const experiments = defineCollection({
  loader: glob({ pattern: '**/*.{md,mdx}', base: './src/content/experiments' }),
  schema: z.object({
    title: z.string(),
    hypothesis: z.string(),
    status: z.enum(['RUNNING', 'TESTING', 'FAILED', 'COMPLETE']),
    method: z.string(),
    result: z.string(),
    whatBroke: z.string().optional(),
    whatILearned: z.string(),
    relatedProjects: z.array(z.string()).optional(),
  }),
});

const failures = defineCollection({
  loader: glob({ pattern: '**/*.{md,mdx}', base: './src/content/failures' }),
  schema: z.object({
    title: z.string(),
    status: z.string(),
    cause: z.string(),
    impact: z.string(),
    correction: z.string(),
    lesson: z.string(),
    relatedProject: z.string().optional(),
  }),
});

const experience = defineCollection({
  loader: glob({ pattern: '**/*.{md,mdx}', base: './src/content/experience' }),
  schema: z.object({
    level: z.string(),
    title: z.string(),
    summary: z.string(),
    capabilities: z.array(z.string()),
    evidenceProject: z.string().optional(),
    evidenceProjectName: z.string().optional(),
  }),
});

export const collections = {
  projects,
  experiments,
  failures,
  experience,
};
