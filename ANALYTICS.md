# PRAMAY.OS — Interaction Telemetry & Event Schema

PRAMAY.OS implements a lightweight, privacy-first telemetry architecture. It tracks user interaction events without collecting any Personally Identifiable Information (PII) or introducing external tracking cookies.

---

## Event Schema

Every telemetry event is dispatched as a non-blocking `CustomEvent('pramayos:telemetry')` on the browser `window` object:

```typescript
export interface AnalyticsEventPayload {
  event: AnalyticsEventType;
  timestamp: number;
  properties?: Record<string, string | number | boolean>;
}
```

---

## Tracked Interaction Events

| Event Name | Description | Properties | Trigger Location |
| :--- | :--- | :--- | :--- |
| `boot_completed` | Boot sequence logs finished | None | `BootScreen.astro` |
| `system_entered` | Visitor clicked `[ ENTER SYSTEM ]` | None | `BootScreen.astro` |
| `systems_opened` | Systems 2D Canvas page loaded | None | `systems.astro` |
| `project_opened` | Project mission dossier opened | `{ projectId: string }` | `projects/[id].astro` |
| `experiment_opened` | AI Lab experiment opened | `{ experimentId: string }` | `lab/[id].astro` |
| `failure_opened` | Failure post-mortem opened | `{ failureId: string }` | `failures/[id].astro` |
| `terminal_opened` | Terminal CLI island mounted | None | `OSTerminalIsland.tsx` |
| `terminal_command` | Command executed in CLI | `{ command: string }` | `OSTerminalIsland.tsx` |
| `ask_query` | Query submitted to Ask system | `{ queryLength: number }` | `askService.ts` |
| `ask_answered` | Grounded answer generated | `{ sourcesCount: number }` | `askService.ts` |
| `ask_abstained` | Query abstained (No evidence) | `{ query: string }` | `askService.ts` |
| `resume_opened` | Classified dossier / resume opened | None | `classified.astro` |
| `contact_clicked` | Communication link clicked | `{ channel: string }` | `ShutdownSequence.astro` |

---

## Privacy & Performance Commitments

1. **Zero PII Collection**: No IP addresses, user agents, location data, or cookie identifiers are gathered.
2. **Zero Runtime Blocking**: Events are dispatched asynchronously via standard browser event loops (`CustomEvent`).
3. **Decoupled Architecture**: Telemetry listeners can be attached or swapped cleanly without touching application business logic.
