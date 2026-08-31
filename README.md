# PRAMAY.OS — Antigravity Build Guide

## Purpose

This document is the master implementation guide for building the PRAMAY.OS personal portfolio in Google Antigravity IDE.

The goal is not to ask the IDE to "build my portfolio" in one prompt.

Instead, use Antigravity as an implementation agent while this document acts as the project's operating specification.

The portfolio concept is:

> **PRAMAY.OS — A classified AI engineering operating system.**

The visitor should feel like they are operating an engineered system rather than browsing a conventional developer portfolio.

The narrative is:

**Boot → Discover → Operate → Investigate → Experiment → Fail → Learn → Build**

The implementation should use:

- Astro
- TypeScript
- React only for interactive islands that genuinely need it
- GSAP for cinematic animation
- Astro View Transitions for page/navigation transitions
- Tailwind CSS and custom CSS where useful
- Astro content collections/content data for projects, experiments, failures, research and experience
- SVG for engineering diagrams where possible
- Three.js only if a later feature genuinely benefits from 3D
- Vercel for deployment
- A separate AI backend/API for "Ask PRAMAY.OS"
- Git/GitHub for version control

---

## Development

When starting the dev server, use background mode:

```
astro dev --background
```

Manage the background server with `astro dev stop`, `astro dev status`, and `astro dev logs`.

## Documentation

Full documentation: https://docs.astro.build

Consult these guides before working on related tasks:

- [Adding pages, dynamic routes, or middleware](https://docs.astro.build/en/guides/routing/)
- [Working with Astro components](https://docs.astro.build/en/basics/astro-components/)
- [Using React, Vue, Svelte, or other framework components](https://docs.astro.build/en/guides/framework-components/)
- [Adding or managing content](https://docs.astro.build/en/guides/content-collections/)
- [Adding styles or using Tailwind](https://docs.astro.build/en/guides/styling/)
- [Supporting multiple languages](https://docs.astro.build/en/guides/internationalization/)

---

# 1. Core Product Principles

Antigravity must follow these principles throughout the project.

## 1.1 This is not a conventional portfolio

Do not build:

- About / Work / Contact navbar
- generic hero section
- skill percentage bars
- generic project cards
- stock AI imagery
- floating 3D developer avatar
- generic AI robot
- excessive gradients
- glassmorphism
- decorative particles without purpose
- technology-logo walls
- meaningless scroll animations

Instead:

- Projects are missions.
- Engineering challenges are bosses.
- Systems are interactive architecture.
- Research is experimental.
- Failures are documented.
- Experience is a progression.
- The terminal is real.
- The portfolio eventually becomes queryable.
- Visual design communicates engineering thinking.

## 1.2 Engineering information must remain clear

The visual design may be brutalist, cinematic and experimental, but the actual engineering information must remain readable.

Do not sacrifice:

- readability
- accessibility
- navigation
- performance
- semantic HTML
- responsive behavior

for visual effects.

## 1.3 Use complexity only where it creates value

Prefer:

- Astro HTML over unnecessary React
- CSS over JavaScript for simple effects
- SVG over Three.js for 2D architecture diagrams
- GSAP for deliberate animation sequences
- static generation where possible
- React islands only where interaction requires it

---

# 2. High-Level Experience

The final user journey should approximately be:

```text
VISITOR
  ↓
BLACK SCREEN
  ↓
PRAMAY.OS BOOT
  ↓
ENTER SYSTEM
  ↓
OS DESKTOP
  ↓
SYSTEMS / PROJECTS / LEVELS
  ↓
AI LAB / RESEARCH / FAILURES
  ↓
NEWSPAPER
  ↓
CLASSIFIED ARCHIVE
  ↓
TERMINAL
  ↓
ASK PRAMAY.OS
  ↓
EXPERIENCE
  ↓
FINAL SHUTDOWN
  ↓
LET'S BUILD.
```

The major visual worlds are:

1. Boot terminal
2. Operating system
3. Engineering systems
4. Missions/projects
5. Game levels
6. AI laboratory
7. Failures archive
8. Newspaper/editorial world
9. Classified intelligence file
10. Terminal
11. AI query system
12. Final shutdown

---

# 3. Technical Architecture

Use Astro as the primary application shell.

Conceptually:

```text
                         PRAMAY.OS
                            │
                     ┌──────┴──────┐
                     │    ASTRO    │
                     │  EXPERIENCE │
                     └──────┬──────┘
                            │
          ┌─────────────────┼─────────────────┐
          │                 │                 │
       STATIC            INTERACTIVE       DYNAMIC
          │                 │                 │
     Astro .astro       React Islands       API
     components         GSAP                AI
     content            Terminal            RAG
     projects           Architecture
     research           transitions
     failures
```

The frontend should primarily be static and content-driven.

Interactive components should be isolated.

Examples:

```text
Astro:
- page layouts
- typography
- project content
- research content
- newspaper
- classified documents
- static navigation
- static architecture structure

React islands:
- terminal
- command palette
- complex interactive controls
- Ask PRAMAY.OS UI
- any state-heavy interaction

GSAP:
- boot sequence
- cinematic transitions
- architecture data flow
- typography choreography
- glitch effects
- level progression
- special visual sequences

SVG:
- system architecture
- AI pipeline
- engineering diagrams
- data flow

AI backend:
- query understanding
- retrieval
- reranking
- LLM
- grounded responses
```

---

# 4. Recommended Project Structure

Target a structure approximately like:

```text
pramay-os/
│
├── public/
│   ├── fonts/
│   ├── icons/
│   ├── resume.pdf
│   └── favicon.svg
│
├── src/
│   ├── assets/
│   │   ├── projects/
│   │   ├── research/
│   │   └── images/
│   │
│   ├── components/
│   │   ├── boot/
│   │   ├── os/
│   │   ├── systems/
│   │   ├── projects/
│   │   ├── levels/
│   │   ├── lab/
│   │   ├── failures/
│   │   ├── newspaper/
│   │   ├── classified/
│   │   ├── terminal/
│   │   └── ask/
│   │
│   ├── content/
│   │   ├── projects/
│   │   ├── experiments/
│   │   ├── failures/
│   │   ├── research/
│   │   └── experience/
│   │
│   ├── layouts/
│   │   ├── BaseLayout.astro
│   │   ├── OSLayout.astro
│   │   ├── EditorialLayout.astro
│   │   └── ClassifiedLayout.astro
│   │
│   ├── pages/
│   │   ├── index.astro
│   │   ├── system/
│   │   ├── systems/
│   │   ├── projects/
│   │   ├── levels/
│   │   ├── lab/
│   │   ├── research/
│   │   ├── failures/
│   │   ├── newspaper/
│   │   ├── classified/
│   │   └── ask/
│   │
│   ├── data/
│   │   ├── levels.ts
│   │   ├── systems.ts
│   │   └── commands.ts
│   │
│   ├── lib/
│   │   ├── gsap.ts
│   │   ├── navigation.ts
│   │   └── analytics.ts
│   │
│   └── styles/
│       ├── global.css
│       ├── tokens.css
│       ├── terminal.css
│       ├── newspaper.css
│       └── classified.css
│
├── astro.config.mjs
├── content.config.ts
├── tsconfig.json
├── package.json
└── README.md
```

Do not force this exact structure if Astro's conventions or a later architectural decision make a small change better. Preserve the architectural intent.

---

# 5. Design System

Establish the design system before building large features.

## Visual language

Combine:

- Brutalist web
- Hacker terminal
- Operating system
- Newspaper/editorial
- Classified intelligence archive
- Video-game progression
- Cinematic motion

## Typography

Use at most three primary font families:

1. Brutalist/grotesque sans for major interface typography
2. Monospace for terminal/system information
3. Serif/editorial font for the newspaper

## Color system

Base:

- black
- off-white

Accent:

- one aggressive signature accent

Semantic:

- red = warning/failure/classified
- green = success/online
- muted gray = secondary information

Do not create a rainbow palette.

## UI rules

Prefer:

- 1px borders
- hard shadows
- hard corners
- visible grids
- huge typography
- asymmetry
- oversized numbers
- text clipping
- intentional overlaps
- whitespace

Avoid:

- soft glass
- generic gradients
- excessive rounded cards
- decorative UI without semantic meaning

---

# 6. Development Rules for Antigravity

When giving prompts to Antigravity:

1. Ask it to inspect the existing repository before changing anything.
2. Never ask it to rebuild unrelated working features.
3. Keep each task focused.
4. Ask it to explain the implementation plan before making large architectural changes.
5. Ask it to implement only the current phase.
6. Ask it to run the relevant checks after implementation.
7. Ask it to report:
   - files created
   - files modified
   - dependencies added
   - tests/checks run
   - remaining issues
8. Do not allow it to silently introduce a new framework or animation library.
9. Do not allow it to replace Astro with Next.js.
10. Do not add Three.js unless explicitly requested.
11. Prefer reusable components over duplicated markup.
12. Preserve the established design system.
13. Keep content separate from presentation.
14. Keep secrets out of the frontend repository.
15. Never expose AI API keys in client-side code.

---

# 7. Prompt Protocol

Use this pattern when talking to Antigravity:

```text
Read the project specification in PRAMAY_OS_BUILD_GUIDE.md before doing anything.

First inspect the current repository and understand the existing architecture.

For this task:
[YOUR TASK]

Do not implement anything outside this task.

Before editing, briefly explain:
1. what you found
2. what you will change
3. which files you expect to touch

Then implement it.

After implementation:
1. run the relevant type/build/lint checks
2. fix errors caused by your changes
3. summarize changed files
4. summarize verification results
5. list any remaining concerns
```

Use this as the default prompt structure.

---

# 8. PHASE 00 — Project Initialization

## Objective

Create the Astro foundation.

## Antigravity Prompt

```text
Read PRAMAY_OS_BUILD_GUIDE.md completely before starting.

We are beginning a new project called PRAMAY.OS.

Create the project foundation using Astro + TypeScript.

Requirements:
- Astro
- TypeScript strict mode
- React integration because later we will use isolated React islands
- Tailwind CSS only if it integrates cleanly with Astro; do not make Tailwind mandatory for every component
- GSAP
- a clean base CSS/design-token structure
- Git-friendly project structure
- no Next.js
- no Three.js yet
- no AI backend yet

First inspect the repository.

Then create the foundation and configure the project.

Create only the infrastructure required for the project foundation.

Do not build the portfolio UI yet.

After implementation:
- run npm install if needed
- run the Astro type check/build
- verify the dev server can start
- report the final project structure
- report all dependencies added
- report any issues.
```

## Acceptance Criteria

```text
[ ] Astro project exists
[ ] TypeScript configured
[ ] React integration configured
[ ] GSAP installed
[ ] Base CSS exists
[ ] Design tokens have a home
[ ] No unnecessary frameworks
[ ] Build/type checks pass
```

---

# 9. PHASE 01 — Design System

## Objective

Create the visual foundation before creating pages.

## Prompt

```text
Read PRAMAY_OS_BUILD_GUIDE.md.

Inspect the current project.

Implement the PRAMAY.OS design system only.

Create:
- typography system
- color tokens
- spacing tokens
- border system
- grid utilities where appropriate
- base body styles
- selection styles
- scrollbar treatment
- focus styles
- terminal typography
- editorial typography
- classified visual tokens

The visual language must be:
brutalist + hacker terminal + operating system + editorial + classified archive.

Use black/off-white as the base and one primary accent.

Do not build the homepage yet.

Do not add decorative gradients, glassmorphism, 3D effects, particles, or generic portfolio UI.

Make the system reusable from Astro components.

After implementation run type/build checks and summarize the files changed.
```

---

# 10. PHASE 02 — Base Layout Architecture

## Objective

Create the layout system.

## Prompt

```text
Read PRAMAY_OS_BUILD_GUIDE.md.

Implement the base layout architecture.

Create:
- BaseLayout.astro
- OSLayout.astro
- EditorialLayout.astro
- ClassifiedLayout.astro

BaseLayout should contain:
- metadata structure
- global styles
- accessible HTML structure
- slot for page content

OSLayout should establish the PRAMAY.OS operating-system environment.

EditorialLayout should establish the newspaper/editorial visual world.

ClassifiedLayout should establish the classified-document visual world.

Do not build the actual pages yet.

Do not add unnecessary JavaScript.

Ensure layouts are composable and reusable.

Run type/build checks afterward.
```

---

# 11. PHASE 03 — Boot Screen

## Objective

Build the first 10 seconds.

The intended sequence is:

```text
PRAMAY INDUSTRIES
PRIVATE ENGINEERING SYSTEM

INITIALIZING PRAMAY.OS

> loading neural systems........ OK
> loading agents................ OK
> loading memory................ OK
> loading projects.............. OK
> loading experiments........... OK
> loading failures.............. OK

SYSTEM READY

PRAMAY.OS

AI SOFTWARE ENGINEER
SYSTEM BUILDER
RESEARCHER

[ ENTER SYSTEM ]
```

## Prompt

```text
Read PRAMAY_OS_BUILD_GUIDE.md.

Build the PRAMAY.OS boot experience.

Requirements:
- black initial screen
- terminal-style typography
- blinking cursor
- sequential loading lines
- deliberate timing
- final SYSTEM READY state
- PRAMAY.OS reveal
- role/title reveal
- ENTER SYSTEM interaction

Use Astro for the markup and GSAP for the animation sequence.

Do not use React for the boot screen unless there is a demonstrated need.

The animation must be deterministic and should not run endlessly.

Respect prefers-reduced-motion.

The ENTER SYSTEM control must be keyboard accessible.

Do not build the OS desktop yet.

After implementation:
- verify desktop and mobile behavior
- run checks
- report files changed.
```

---

# 12. PHASE 04 — OS Shell

## Objective

Build the central operating-system interface.

## Prompt

```text
Read PRAMAY_OS_BUILD_GUIDE.md.

Build the PRAMAY.OS desktop shell.

Create:
- OS header
- system status
- navigation modules
- status bar
- OS window primitives
- terminal launcher placeholder
- responsive layout

Primary navigation concepts:

SYSTEMS
PROJECTS
AI LAB
RESEARCH
FAILURES
EXPERIENCE
ARCHIVE
ASK
TERMINAL

Do not make it look like Windows 95 literally.

Use:
- huge typography
- asymmetry
- raw borders
- grids
- whitespace
- oversized numbers
- hard visual language

Do not implement the actual destination pages yet.

Make navigation reusable and accessible.

Do not add a full-screen React application.

Use Astro components wherever possible.
```

---

# 13. PHASE 05 — Boot → OS Transition

## Objective

Make entering the system feel like an actual transition.

## Prompt

```text
Read PRAMAY_OS_BUILD_GUIDE.md.

Implement the transition from the boot experience into the PRAMAY.OS interface.

Use Astro View Transitions where appropriate and GSAP for the cinematic transition itself.

The transition should feel like:
boot screen collapses/reconfigures → operating system appears.

Do not introduce another animation framework.

Ensure:
- navigation still works without animation
- reduced-motion users receive a simpler transition
- no broken state occurs on direct URL access
- browser back/forward behavior remains sensible

Test the transition and report any browser-specific concerns.
```

---

# 14. PHASE 06 — Systems Page

## Objective

Create the "HOW I THINK" engineering canvas.

The main architecture:

```text
USER
 ↓
API GATEWAY
 ↓
AI ORCHESTRATOR
 ↓
RAG / AGENTS / TOOLS
 ↓
DB / MEMORY / APIs
```

## Prompt

```text
Read PRAMAY_OS_BUILD_GUIDE.md.

Build the SYSTEMS section.

The purpose is to demonstrate how I think about systems rather than list skills.

Create an interactive architecture visualization using SVG.

Architecture concepts should include:
- user
- API gateway
- AI orchestrator
- RAG
- agents
- tools
- database
- memory
- external APIs

Requirements:
- SVG-based architecture
- nodes and edges
- clear labels
- animated data flow
- selectable nodes
- details panel explaining the selected concept
- responsive behavior

Use Astro for the static architecture structure.

Use GSAP for animation.

Use React only for the interaction state if needed.

Do not use Three.js.

The architecture information should be data-driven rather than hardcoded into multiple components.

Run build/type checks afterward.
```

---

# 15. PHASE 07 — Project Content Model

## Objective

Create the data model before building project UI.

## Prompt

```text
Read PRAMAY_OS_BUILD_GUIDE.md.

Create the project content architecture.

Projects must support:

- title
- slug
- classification
- level
- status
- problem
- objective
- architecture
- technologies
- challenges
- failures
- engineering decisions
- results
- lessons
- images
- diagrams
- optional links

Use Astro's content/content-collection approach appropriate for the current Astro version.

Create schemas/types that provide useful validation.

Do not build the final project UI yet.

Create one representative project entry for Juno Health using only information that already exists in the repository/project specification. Do not invent achievements, metrics, technologies, or claims.

The data model must eventually be reusable by:
- project pages
- newspaper
- terminal
- classified archive
- Ask PRAMAY.OS

Run validation/build checks.
```

---

# 16. PHASE 08 — Project Missions

## Objective

Turn projects into missions instead of cards.

## Prompt

```text
Read PRAMAY_OS_BUILD_GUIDE.md.

Build the PROJECTS/MISSIONS section using the existing project content model.

Do not create generic portfolio cards.

The UI should communicate:

MISSION 001

JUNO HEALTH

OBJECTIVE
...

STATUS
████████████ COMPLETE

SYSTEM CLASS
AI / AGENTS / RAG / HEALTHCARE

[ OPEN MISSION ]

Create:
- mission listing
- mission detail page
- dynamic project routing
- reusable mission components
- architecture section
- engineering decisions
- challenges/failures
- results
- lessons

The project detail page should feel like an engineering dossier.

Keep project data separate from presentation.

Use Astro for static content.

Use React only for genuinely interactive sections.

Use GSAP only for meaningful motion.
```

---

# 17. PHASE 09 — Levels / Bosses

## Objective

Turn engineering progression into the game narrative.

Levels:

```text
LEVEL 01 — BACKEND

SCALABILITY
DATABASE BOTTLENECK
DISTRIBUTED SYSTEMS
CONCURRENCY
API DESIGN

LEVEL 02 — AI

HALLUCINATION
CONTEXT WINDOW
TOOL SELECTION
RETRIEVAL
MEMORY
AGENT RELIABILITY

LEVEL 03 — PRODUCTION

LATENCY
COST
FAILURE
OBSERVABILITY
DEPLOYMENT
SECURITY
```

## Prompt

```text
Read PRAMAY_OS_BUILD_GUIDE.md.

Build the engineering LEVELS system.

Create a typed data model for levels and bosses.

Implement:
- level listing
- boss entries
- progression visuals
- mission/project unlock relationships
- level completion states

The game metaphor must support the engineering story.

Do not turn it into a literal arcade game.

The narrative should communicate progression:
backend foundation → AI engineering → production systems.

Use GSAP for deliberate progression animation.

Use data-driven relationships between levels, bosses and projects.

Do not invent unsupported career facts.
```

---

# 18. PHASE 10 — AI LAB

## Objective

Build experiments as research records.

## Prompt

```text
Read PRAMAY_OS_BUILD_GUIDE.md.

Build the AI LAB section.

Create an experiment content model supporting:

- experiment ID
- title
- hypothesis
- status
- method
- result
- what broke
- what I learned
- related projects
- date if available

Create:
- experiment listing
- experiment detail pages

Statuses can include:
RUNNING
TESTING
FAILED
COMPLETE

The design should feel like an engineering research laboratory.

Do not fabricate experiment results.

Use Astro content/data for the experiments.

Add meaningful motion but avoid excessive animation.
```

---

# 19. PHASE 11 — Failures

## Objective

Make failure a first-class engineering record.

## Prompt

```text
Read PRAMAY_OS_BUILD_GUIDE.md.

Build the FAILURES section.

Create a failure content model supporting:
- ID
- title
- result/status
- cause
- impact
- correction
- lesson
- related project/experiment

The visual identity should communicate:
FAILED
DIAGNOSTIC
ROOT CAUSE
LESSON

Use the phrase/concept:
"Failure is data."

Do not invent failures.

Create reusable failure components and dynamic pages.

The section should feel like an engineering incident archive rather than a blog.
```

---

# 20. PHASE 12 — Research + Experience

## Prompt

```text
Read PRAMAY_OS_BUILD_GUIDE.md.

Build:
1. RESEARCH
2. EXPERIENCE

Research should present engineering/research material as evidence of investigation.

Experience should be presented as:
THE ENGINEER'S TIMELINE

Possible progression:
LEVEL 01 — BACKEND
LEVEL 02 — FULL STACK
LEVEL 03 — SYSTEM DESIGN
LEVEL 04 — AI ENGINEERING
LEVEL 05 — AGENTIC SYSTEMS
CURRENT OBJECTIVE — BUILD SYSTEMS THAT CAN REASON.

Only use real information available in the project materials.

Do not invent companies, dates, responsibilities, metrics, or achievements.

Make experience expandable so actual evidence can be attached to each stage.
```

---

# 21. PHASE 13 — Newspaper

## Prompt

```text
Read PRAMAY_OS_BUILD_GUIDE.md.

Build THE PRAMAY TIMES as a separate editorial world.

Create an EditorialLayout.

The visual language should switch from OS/hacker to:
- newspaper
- paper
- ink
- editorial typography
- strong headlines
- columns
- rules
- oversized headlines

Sections may include:
- Breaking
- Investigation
- Research
- Failure Report
- Engineering
- Experience

Where appropriate, generate newspaper content from existing project/research/failure/experience data instead of duplicating content.

The newspaper should feel like a visual transformation, not just another page.

Do not use generic blog cards.
```

---

# 22. PHASE 14 — Classified Archive

## Prompt

```text
Read PRAMAY_OS_BUILD_GUIDE.md.

Build the hidden CLASSIFIED engineering record.

Create a ClassifiedLayout.

Visual language:
- black
- white
- red
- document/archive
- stamped classification
- scanned/revealed information

Create:
CLASSIFIED ENGINEERING RECORD

SUBJECT:
PRAMAY USDADIYA

CLASSIFICATION:
AI SYSTEMS ENGINEERING

STATUS:
ACTIVE

Include redacted sections that can be revealed through intentional interaction.

The archive should feel hidden and discovered rather than like a standard navigation page.

Use GSAP/CSS rather than adding a new animation framework.

Do not invent personal information.
```

---

# 23. PHASE 15 — Real Terminal

## Objective

Build an actual command interface.

## Prompt

```text
Read PRAMAY_OS_BUILD_GUIDE.md.

Build the PRAMAY.OS terminal as a real interactive React island.

Commands:

help
projects
systems
experience
research
failures
skills
resume
contact
ask
clear

Requirements:
- command input
- keyboard support
- command history
- cursor
- output rendering
- unknown-command handling
- navigation commands
- clear command
- accessible focus management

The terminal must use the same underlying portfolio data instead of duplicating project information.

For example:
projects → derive available projects from project data.

Do not make the terminal a fake animation.

It must actually execute commands.

Keep it isolated as a React island.
```

---

# 24. PHASE 16 — Ask PRAMAY.OS UI

## Prompt

```text
Read PRAMAY_OS_BUILD_GUIDE.md.

Build the frontend UI for ASK PRAMAY.OS.

Do not implement the AI backend yet.

The UI should include:

ASK THE SYSTEM

[ user question ]

[ RUN QUERY ]

Processing visualization:

QUERY RECEIVED
IDENTIFYING RELEVANT SYSTEMS...
SEARCHING PROJECT ARCHIVE...
MATCHING ENGINEERING EVIDENCE...
ANALYZING PROJECT DOCUMENTATION...
RESPONSE GENERATED

Then:
- answer
- sources
- related projects

The interface must clearly distinguish:
- processing state
- answer
- source evidence
- no-evidence/abstention state

Do not expose chain-of-thought.

Do not claim the system is intelligent until the backend exists.

Use mock data only for UI development and clearly isolate the mock layer so it can later be replaced by an API call.
```

---

# 25. PHASE 17 — AI Backend

This should be a separate project/service unless there is a strong reason to use Astro server endpoints.

## Prompt

```text
Read PRAMAY_OS_BUILD_GUIDE.md.

We are now implementing the backend for ASK PRAMAY.OS.

Before coding, inspect the existing frontend request contract.

Design a secure API that accepts a portfolio question and returns:
- answer
- supporting sources
- confidence/retrieval information appropriate for user display
- abstention state when evidence is insufficient

The conceptual pipeline is:

Visitor
↓
Ask PRAMAY.OS
↓
Intent detection
↓
Query rewrite
↓
Hybrid retrieval
↓
Reranking
↓
Portfolio knowledge
↓
LLM
↓
Grounded answer

Requirements:
- API keys must remain server-side
- no secrets in Astro client code
- structured request/response schema
- input validation
- rate limiting strategy
- error handling
- timeout handling
- source attribution
- explicit no-evidence behavior

Do not expose model chain-of-thought.

Do not invent portfolio information.

Start with a simple retrieval implementation if a full vector database is not yet available.

Document the API contract for the Astro frontend.
```

---

# 26. PHASE 18 — Portfolio Knowledge / RAG

Implement only after the content model is stable.

## Prompt

```text
Read PRAMAY_OS_BUILD_GUIDE.md.

Now connect the portfolio content to the AI retrieval system.

The source of truth must remain the portfolio content/data.

Knowledge categories:
- projects
- experience
- systems
- technologies
- research
- experiments
- failures
- achievements

Implement retrieval incrementally.

First:
- structured metadata filtering
- keyword/full-text retrieval

Then, if useful:
- embeddings/vector retrieval
- hybrid retrieval
- reranking

The AI must only answer from supported evidence.

If evidence is insufficient:
return an explicit abstention.

Test:
1. known project question
2. known technical question
3. unknown question
4. deliberately false question
5. ambiguous question

Do not optimize for complexity. Optimize for grounded answers.
```

---

# 27. PHASE 19 — Final Shutdown

## Prompt

```text
Read PRAMAY_OS_BUILD_GUIDE.md.

Build the final PRAMAY.OS shutdown sequence.

Sequence:

SAVING SESSION........ OK
SAVING SYSTEM STATE... OK
CLOSING ARCHIVES...... OK
DISCONNECTING AGENTS.. OK

PRAMAY.OS

SHUTDOWN?

[ YES ] [ NO ]

If NO:
GOOD.

WE HAVE WORK TO DO.

LET'S BUILD SOMETHING.

Then:
EMAIL
LINKEDIN
GITHUB
RESUME

Make NO the obvious intended interaction while keeping YES available.

The sequence must remain keyboard accessible and usable with reduced motion.

Do not add unrelated visual effects.
```

---

# 28. PHASE 20 — Mobile Adaptation

## Prompt

```text
Read PRAMAY_OS_BUILD_GUIDE.md.

Audit the entire PRAMAY.OS experience for mobile.

Do not simply shrink the desktop interface.

Create a mobile operating mode that preserves the same narrative but adapts:
- navigation
- OS modules
- architecture diagrams
- terminal
- typography
- newspaper
- classified archive
- animations
- touch interaction

Requirements:
- no horizontal overflow
- readable typography
- usable controls
- touch targets
- architecture remains understandable
- terminal remains usable
- reduced motion supported

Test at common mobile widths and desktop widths.

Fix only issues discovered by this audit.
```

---

# 29. PHASE 21 — Accessibility

## Prompt

```text
Read PRAMAY_OS_BUILD_GUIDE.md.

Perform an accessibility audit.

Check:
- semantic HTML
- keyboard navigation
- focus visibility
- focus trapping where appropriate
- buttons vs links
- form labels
- ARIA only where necessary
- color contrast
- reduced motion
- screen-reader meaning
- terminal accessibility
- architecture visualization accessibility
- mobile interaction

Do not redesign the visual system.

Fix accessibility issues found.

Run the project's available checks afterward.
```

---

# 30. PHASE 22 — Performance

## Prompt

```text
Read PRAMAY_OS_BUILD_GUIDE.md.

Perform a performance audit.

Focus on:
- JavaScript shipped
- unnecessary React hydration
- image sizes
- font loading
- SVG size
- GSAP usage
- animation performance
- layout shifts
- render-blocking resources
- page transitions
- mobile performance

Use Astro's island architecture properly.

Convert components to static Astro components where React is not actually required.

Do not remove important interactions.

Do not add a new framework.

Report:
- largest JS contributors
- largest assets
- unnecessary hydration
- recommended fixes

Then implement safe performance fixes.
```

---

# 31. PHASE 23 — SEO

## Prompt

```text
Read PRAMAY_OS_BUILD_GUIDE.md.

Implement SEO for PRAMAY.OS.

Every meaningful public page should have:
- title
- meta description
- canonical URL
- Open Graph metadata
- social preview metadata
- sensible headings
- semantic HTML

Use:
PRAMAY.OS — AI Software Engineer

for appropriate metadata rather than only using the fictional OS terminology.

Create a reusable SEO component/layout.

Do not change the visual UI unnecessarily.
```

---

# 32. PHASE 24 — Analytics

## Prompt

```text
Read PRAMAY_OS_BUILD_GUIDE.md.

Implement lightweight analytics events for meaningful portfolio interactions.

Track events such as:

boot_completed
system_entered
systems_opened
project_opened
experiment_opened
failure_opened
terminal_opened
terminal_command
ask_query
ask_answered
ask_abstained
resume_opened
contact_clicked

Do not collect unnecessary personal data.

Keep analytics isolated from application logic.

Document the event schema.

Do not add a heavy analytics system unless necessary.
```

---

# 33. PHASE 25 — Testing

## Prompt

```text
Read PRAMAY_OS_BUILD_GUIDE.md.

Perform a complete QA pass.

Test:

FUNCTIONAL
- boot
- enter system
- navigation
- project routes
- dynamic content
- terminal commands
- resume
- contact
- Ask PRAMAY.OS
- page transitions
- browser back/forward

RESPONSIVE
- mobile
- tablet
- desktop

ACCESSIBILITY
- keyboard
- focus
- reduced motion
- semantic structure

PERFORMANCE
- JS
- images
- fonts
- animation

AI
- known questions
- unknown questions
- false claims
- ambiguous questions
- abstention

Fix bugs caused by the current implementation.

Do not refactor unrelated code.

Report all remaining issues.
```

---

# 34. PHASE 26 — Production Build

## Prompt

```text
Read PRAMAY_OS_BUILD_GUIDE.md.

Prepare PRAMAY.OS for production.

Run:
- type checking
- linting if configured
- production build
- relevant tests

Inspect the generated output.

Verify:
- all routes build
- assets resolve
- no development-only code remains
- no secrets are committed
- environment variables are documented
- AI API URLs are configurable
- resume and static assets resolve

Do not deploy yet.

Report anything that must be fixed before Vercel deployment.
```

---

# 35. PHASE 27 — GitHub + Vercel

## Prompt

```text
Read PRAMAY_OS_BUILD_GUIDE.md.

Prepare the repository for Vercel deployment.

Requirements:
- production build works
- repository has a clean README
- .gitignore is correct
- no secrets committed
- environment variables documented
- Astro is configured correctly for the intended deployment mode

Prefer a static Astro deployment unless server-side Astro functionality is genuinely required.

If an Astro Vercel adapter is unnecessary, do not add it.

Provide:
1. deployment steps
2. required Vercel environment variables
3. build command
4. output configuration if needed
5. post-deployment verification checklist

Do not deploy automatically unless explicitly instructed.
```

---

# 36. Phase 28 — Final Creative Audit

## Prompt

```text
Read PRAMAY_OS_BUILD_GUIDE.md.

Now audit PRAMAY.OS as a creative product, not just as software.

Ask:

Does it feel like an engineered system?

Does the first 10 seconds feel memorable?

Does the visitor understand what I build?

Does the portfolio prove engineering ability rather than merely claim it?

Do projects feel like missions?

Do failures communicate learning?

Does the level system communicate progression?

Does the newspaper feel meaningfully different?

Does the classified archive feel discovered?

Does the terminal actually work?

Does Ask PRAMAY.OS demonstrate grounded AI behavior?

Are animations communicating something?

Are there any effects that exist only because they look cool?

Remove or simplify visual elements that do not contribute to the narrative.

Do not add features.

Return:
- strongest parts
- weakest parts
- unnecessary complexity
- confusing interactions
- recommended final polish.
```

---

# 37. Final Architecture Checklist

Before launch:

```text
FOUNDATION
[ ] Astro
[ ] TypeScript
[ ] React integration
[ ] GSAP
[ ] Design tokens

EXPERIENCE
[ ] Boot
[ ] Hero
[ ] OS
[ ] View transitions
[ ] Responsive behavior

ENGINEERING
[ ] Systems
[ ] Architecture diagrams
[ ] Projects
[ ] Levels
[ ] AI Lab
[ ] Research
[ ] Failures
[ ] Experience

SPECIAL WORLDS
[ ] Newspaper
[ ] Classified archive
[ ] Terminal

AI
[ ] Ask UI
[ ] API
[ ] Retrieval
[ ] Grounding
[ ] Sources
[ ] Abstention
[ ] Rate limiting
[ ] No exposed API keys

QUALITY
[ ] Accessibility
[ ] Reduced motion
[ ] SEO
[ ] Analytics
[ ] Performance
[ ] Mobile
[ ] Browser testing

DEPLOYMENT
[ ] Production build
[ ] Environment variables
[ ] GitHub
[ ] Vercel
[ ] Domain
[ ] Post-deployment QA
```

---

# 38. Important Working Rule

Do not ask Antigravity to implement all phases in one prompt.

Use one phase at a time.

After every phase:

```text
1. Inspect
2. Plan
3. Implement
4. Run checks
5. Review visually
6. Fix
7. Commit
8. Move to next phase
```

Suggested commit pattern:

```text
feat: initialize astro foundation
feat: add pramay design system
feat: build boot sequence
feat: build os shell
feat: add systems visualization
feat: add project content model
feat: build mission pages
feat: add engineering levels
feat: add ai lab
feat: add failures archive
feat: add newspaper
feat: add classified archive
feat: add terminal
feat: add ask system
feat: add portfolio retrieval
feat: add shutdown sequence
perf: optimize islands and assets
a11y: improve keyboard and motion support
chore: prepare vercel deployment
```

---

# 39. Definition of Done

PRAMAY.OS is done when a visitor can enter the site and experience:

```text
I arrived somewhere unusual.
        ↓
Something is booting.
        ↓
I entered an operating system.
        ↓
I can investigate how this engineer thinks.
        ↓
I can inspect actual systems.
        ↓
I can investigate projects as missions.
        ↓
I can see what failed.
        ↓
I can see what was learned.
        ↓
I can explore research.
        ↓
I discover hidden layers.
        ↓
I can actually interact with the terminal.
        ↓
I can ask the system about Pramay.
        ↓
The system gives evidence instead of hallucinating.
        ↓
I understand what this engineer builds.
        ↓
I want to contact him.
```

The final objective is not:

> "Build a cool developer portfolio."

It is:

> **Build a portfolio that demonstrates engineering thinking through the architecture of the portfolio itself.**

The portfolio should embody the positioning:

> **I build intelligent systems that survive contact with production.**
