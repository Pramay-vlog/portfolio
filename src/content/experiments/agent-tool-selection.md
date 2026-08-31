---
title: "Agent Tool Selection Reliability"
hypothesis: "Dynamic tool schema constraint validation reduces invalid API parameter hallucinations by over 80%."
status: "COMPLETE"
method: "Benchmarked agent execution loops with strict JSON schema validation vs unconstrained system prompts."
result: "Schema-constrained tool dispatch eliminated malformed API payload errors."
whatBroke: "Unconstrained LLMs generated non-existent keyword flags on CLI endpoints."
whatILearned: "Determinism must be enforced at the API schema boundary rather than relying on prompt engineering alone."
relatedProjects:
  - "juno-health"
---

Experiment record investigating autonomous agent tool dispatch reliability.
